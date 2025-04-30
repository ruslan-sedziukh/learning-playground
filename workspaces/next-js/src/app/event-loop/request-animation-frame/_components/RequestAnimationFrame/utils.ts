const getIsInsideOfParentBox = (el: HTMLDivElement) =>
  (parseInt(el.style.left) || 0) < 1024 - parseInt(getComputedStyle(el).width)

export const runWithTimeout = (el: HTMLDivElement) => {
  setTimeout(() => {
    const isInsideOfParentBox = getIsInsideOfParentBox(el)

    if (isInsideOfParentBox) {
      el.style.left = (parseInt(el.style.left) || 0) + 1 + 'px'

      runWithTimeout(el)
    }
  }, 4.7)
}

export const runWithAnimationFrame = (el: HTMLDivElement) => {
  const isInsideOfParentBox = getIsInsideOfParentBox(el)

  if (isInsideOfParentBox) {
    requestAnimationFrame(() => {
      el.style.left = (parseInt(el.style.left) || 0) + 1 + 'px'

      runWithAnimationFrame(el)
    })
  }
}
