'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { navbarLink } from '@/data'
import { NavbarLinkProps } from '@/lib/types'

export const NavbarLink = ({ setOpen }: NavbarLinkProps) => {
  return (
    <>
      {navbarLink.map(({ path, name, variant }, index) => (
        <li key={name}>
          <Link href={path}>
            <Button
              variant={
                variant as
                  | 'link'
                  | 'default'
                  | 'destructive'
                  | 'outline'
                  | 'secondary'
                  | 'ghost'
              }
              className={
                index === navbarLink.length - 1
                  ? 'transition duration-150 ease-in-out hover:scale-105 hover:bg-primary hover:drop-shadow-lg'
                  : undefined
              }
              onClick={() => setOpen && setOpen(false)}
            >
              <span className="text-xl lg:text-base">{name}</span>
            </Button>
          </Link>
        </li>
      ))}
    </>
  )
}
