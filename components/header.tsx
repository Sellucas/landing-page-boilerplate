import { MobileHeader } from '@/components/mobile-header'
import { Logo } from '@/components/logo'
import { NavbarLink } from '@/components/navbar-link'

export const Header = () => {
  return (
    <header className="fixed w-full bg-inherit py-4">
      <nav className="container flex items-center justify-between">
        <Logo />
        <ul className="hidden gap-6 lg:flex">
          <NavbarLink />
        </ul>
        <div className="block lg:hidden">
          <MobileHeader />
        </div>
      </nav>
    </header>
  )
}
