import "./globals.css"

export const metadata = {
  title: "Storelytics",
  description: "Your dashboard description here",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

