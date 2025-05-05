type WorkerData = {
  task: string
}

self.onmessage = (event: MessageEvent<WorkerData>) => {
  const task = event.data.task

  // This will cause .onerror call
  // try {
  //   blabla()
  // } catch (e) {
  //   throw new Error('New error in thread')
  // }

  // This will not cause .onerror call
  try {
    throw new Error('yeah booooy error')
  } catch (error) {
    self.postMessage({ error: (error as Error).message, descriptor: 'haha' })
  }

  if (task === 'makeBigCalculation') {
    let i = 0

    while (i < 1e10) {
      i++
    }

    self.postMessage(i)
  }
}

self.onerror = (event: Event | string) => {
  if (typeof event === 'string') {
    console.error('Worker thread error:\n', event)

    return true
  }

  event.preventDefault()

  console.error('Worker thread error:', event)

  // We can post message if we want
  self.postMessage({ error: (event as ErrorEvent).message })

  // If returns true .onerror of worker instance will not be called
  return true
}
