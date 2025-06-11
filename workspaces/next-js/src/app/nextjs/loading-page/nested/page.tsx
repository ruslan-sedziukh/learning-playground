const LoadingComponent = async () => {
  const a: string = await new Promise((resolve) => {
    setTimeout(() => resolve('Hey'), 3000)
  })

  return (
    <>
      <div>{a}</div>
    </>
  )
}

export default function Nested() {
  return (
    <div>
      Nested
      <LoadingComponent />
    </div>
  )
}
