export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="bg-slate-300 p-4 w-full h-full">
      <h3>layout nested</h3>
      {children}
    </div>
  )
}
