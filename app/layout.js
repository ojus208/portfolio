import './globals.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
export const metadata = {
  title: 'Ojus Soni | Portfolio ',
  description: 'Hello I am Ojus Soni a Developer',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <Nav/>
        {children}
        <Footer />
        </body>
    </html>
  )
}
