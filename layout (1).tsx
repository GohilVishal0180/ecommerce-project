import { Inter } from "next/font/google"
import "./globals.css"
import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { MainNav } from "@/components/main-nav"
import { FeaturesBar } from "@/components/features-bar"
import { Footer } from "@/components/footer"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopBar />
        <Header />
        <MainNav />
        <main>{children}</main>
        <FeaturesBar />
        <Footer />
      </body>
    </html>
  )
}

