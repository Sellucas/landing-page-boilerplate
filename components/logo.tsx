import { Image as ImageIcon } from 'lucide-react'
import Link from 'next/link'

import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link
      href="/"
      className={cn(
        'flex items-center gap-1 text-xl font-extrabold',
        className
      )}
    >
      <ImageIcon className="h-10 w-10" />
      <span>Brand</span>
    </Link>
  )
}
