export const metadata = {
  title: 'LMAG',
  description: "Let's make a game studio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
