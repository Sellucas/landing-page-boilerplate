export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="py-24">
      <div className="container min-h-screen">{children}</div>
    </section>
  )
}
