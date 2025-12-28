import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const siteAvatarUrl =
  'https://q2.qlogo.cn/headimg_dl?dst_uin=2726730791&spec=0'

export const metadata: Metadata = {
  title: 'AcoFork PicGallery',
  description: 'Created with v0',
  generator: 'v0.app',
  icons: {
    icon: siteAvatarUrl,
    shortcut: siteAvatarUrl,
    apple: siteAvatarUrl,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
