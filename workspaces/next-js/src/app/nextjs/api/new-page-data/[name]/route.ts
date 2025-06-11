export const GET = async (
  request: Request,
  { params }: { params: Promise<{ name: string }> }
) => {
  const name = (await params).name

  return Response.json({ message: `Hello ${name}` })
}
