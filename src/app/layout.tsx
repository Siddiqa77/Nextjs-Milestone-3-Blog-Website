import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Blogging Website",
  description: "Dynamically Website of Blog given by GIAIC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#ffffff]">
        <Navbar />
        <main>
          {children}
<Footer/>
        </main>
      </body>
    </html>
  );
}
