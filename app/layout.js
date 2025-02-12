import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Squares from "@/src/Squares/Squares";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import SessionWrapper from "./Components/SessionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Get me a Biriyani",
  description: "This is a prototype website to receive payments",
  keywords: "biriyani, payments, food delivery, prototype",
  author: "Wizard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative bg-black`}
      >
        <div className="absolute inset-0 -z-10">
          <Squares
            speed={0.35}
            squareSize={50}
            direction="down"
            borderColor="rgb(34,34,34)"
            hoverFillColor="#222"
            aria-hidden="true"
          />
        </div>

        <SessionWrapper>
          <main className="relative min-h-screen flex flex-col text-white">
            <Navbar className="min-h-[15vh]" />
            <div className="flex-grow">{children}</div>
            <Footer className="min-h-[10vh]" />
          </main>
        </SessionWrapper>
      </body>
    </html>
  );
}
