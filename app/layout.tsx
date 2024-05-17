import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import './globals.css'

const inter = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://your-site.com'),
  keywords: [
    'Landing Page Boilerplate',
    'High-Converting Landing Page',
    'Landing Page Template',
    'SaaS Landing Page',
    'MVP Landing Page',
    'User-Friendly Interface',
  ],
  title: {
    default: 'LandingPage Boilerplate',
    template: `%s | LandingPage Boilerplate`,
  },
  openGraph: {
    title: 'LandingPage Boilerplate',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates inventore fugit laborum voluptas qui porro architecto incidunt dignissimos eos voluptate amet, mollitia atque totam eum assumenda placeat vel fugiat aspernatur!',
    images: ['/share-image.webp'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth antialiased"
      suppressHydrationWarning
    >
      <body className={`flex min-h-screen flex-col ${inter.className}`}>
        <Header />
        <main className="min-h-screen grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
