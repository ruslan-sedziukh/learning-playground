const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id

  return (
    <div>
      <p>Settings page</p>
      <p>Id: {id}</p>
    </div>
  )
}

export default Page
