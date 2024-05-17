'use client'

import { useState } from 'react'
import { Menu } from 'lucide-react'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { NavbarLink } from '@/components/navbar-link'

export const MobileHeader = () => {
  const [sheetOpen, setSheetOpen] = useState(false)

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <ul className="flex flex-col gap-6">
          <NavbarLink setOpen={setSheetOpen} />
        </ul>
      </SheetContent>
    </Sheet>
  )
}
