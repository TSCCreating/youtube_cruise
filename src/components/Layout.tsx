import Header from './Header'

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div>
    <Header />
    <div className="px-10">{children}</div>
  </div>
)

export default Layout
