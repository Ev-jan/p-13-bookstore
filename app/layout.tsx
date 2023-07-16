import Header from './components/header/header'
import { Montserrat } from 'next/font/google';
import { Providers } from './redux/provider';
import "./global.css"

const font = Montserrat({
  weight: ["400"],
  subsets: ["latin", "cyrillic"],
})


export const metadata = {
  title: {
    template: 'Bookstore',
    default: "Bookstore"
  },
  description: 'Course project web application for browsing books',
  generator: 'Next.js',
  applicationName: 'Bookstore',
  keywords: ['Next.js', 'React', 'TypeScript', 'REST Api', 'RTK'],
  authors: [{ name: 'Evgeny', url: 'https://github.com/Ev-jan' }],
  creator: 'Evgeny Mazyar',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  languages: {
    'en-US': '/en-US',
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (

    <html lang="en">
      <body className={font.className}>
        <Providers>
        <Header />
          <div id="promo-container"></div>
          {children}
        </Providers>
      </body>
    </html>

  )
}
