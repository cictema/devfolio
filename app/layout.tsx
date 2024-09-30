"use client"; // Ensure this is a client-side component

import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import Script from 'next/script';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {

  }, []);

  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="N9qgWOkcCaQcpyhmdrltYtnPyQY82WyOyOWyviUCAkw" />
      </head>
      <body className="bg-gradient-to-tr from-blue-950 via-slate-950 to-neutral-950">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
