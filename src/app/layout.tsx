import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import FloatingInstagram from "@/components/FloatingInstagram";
import "./globals.css";
import Footer from "@/components/Home/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kadir Mayel - Filmmaker & Cinematographer",
  description: "Kadir Mayel is a filmmaker, cinematographer, and founder of Twelve Tablets Productions. With a background in engineering and a deep passion for storytelling, he brings a bold visual style and emotional depth to his work. His films often explore themes of identity, memory, and transformation, blending grounded realism with high-concept ideas. Kadir has written and directed several acclaimed short films and is currently developing his first feature. He studied at the New York Film Academy and continues to push creative boundaries through both narrative and commercial projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${poppins.className} min-h-full flex flex-col`}>
        <div id="main-content" className="flex-1 flex flex-col">
          {children}
        </div>
        <div id="persistent-elements">
          <FloatingInstagram />
          <Footer />
        </div>
      </body>
    </html>
  );
}
