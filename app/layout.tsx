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
        
      </head>
      <body className="bg-gradient-to-tr from-blue-950 via-slate-950 to-neutral-950">
        <Navbar />
        {children}
        <Footer />

        {/* Dialogflow widget */}
        <df-messenger
          location="us-central1"
          project-id="movieassistant-436221"
          agent-id="71df484e-6e15-4587-8d4c-07bd70af50ef"
          language-code="en"
          max-query-length="-1">
          <df-messenger-chat-bubble
          chat-title="MovieAssistant">
          </df-messenger-chat-bubble>
        </df-messenger>
        <Script
        src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, df-messenger has been populated`)
        }
        />
      </body>
    </html>
  );
}
