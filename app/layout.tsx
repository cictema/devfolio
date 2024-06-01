"use client"
import "../styles/globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ThemeProvider } from "next-themes"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      {/* <body className="bg-gradient-to-r from-blue-950 via-amber-950 to-blue-950">       */}
      <body className="bg-gradient-to-tr from-blue-950 via-slate-950 to-blue-950 background-animate">    
          <ThemeProvider enableSystem={true} attribute="dark">          
            <Navbar />
            {children}
            <Footer />            
          </ThemeProvider>
        
      </body>
    </html>
  )
}
