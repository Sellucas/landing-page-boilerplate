import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

import { Logo } from '@/components/logo'

export const Footer = () => {
  return (
    <footer className="py-4">
      <div className="container">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Logo className="text-5xl" />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 sm:gap-6">
            <div>
              <h2 className="mb-6 text-xs font-bold uppercase">Navigation</h2>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                <li>
                  <Link
                    href="/"
                    className="hover:text-foreground hover:underline"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="hover:text-foreground hover:underline"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-foreground hover:underline"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-xs font-bold uppercase">Legal</h2>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                <li>
                  <Link
                    href="/"
                    className="hover:text-foreground hover:underline"
                  >
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <a href="/" className="hover:text-foreground hover:underline">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 sm:mx-auto lg:my-8" />
        <div className="flex flex-col-reverse justify-between gap-12 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-sm sm:text-center">
            All rights reserved. © Copyright Brand 2024
          </p>
          <div className="mt-4 flex gap-4 sm:mt-0 sm:justify-center">
            <Link
              className="text-muted-foreground hover:text-foreground"
              href="/"
            >
              <Linkedin />
              <span className="sr-only">Linkedin page</span>
            </Link>
            <Link
              className="text-muted-foreground hover:text-foreground"
              href="/"
            >
              <Github />
              <span className="sr-only">Github page</span>
            </Link>
            <Link
              className="text-muted-foreground hover:text-foreground"
              href="/"
            >
              <Mail />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
