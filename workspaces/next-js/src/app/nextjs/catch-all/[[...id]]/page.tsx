const NewPage = async ({ params }: { params: Promise<{ id?: [string] }> }) => {
  const idList = (await params).id

  return (
    <>
      <h1>New Page</h1>

      <div>Id is: {idList && idList.join(' ')}</div>
    </>
  )
}

export default NewPage
