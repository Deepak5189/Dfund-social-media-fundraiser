import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/landingNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DFund",
  description: "A fundraising app",
  // icons: '/vercel.svg'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // const {isAuthActive}=para
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* {<header className=" bg-transparent backdrop-blur-md drop-shadow-lg">
          <Navbar/>
        </header>} */}
        <main>{children}</main>
      </body>
    </html>
  );
}
