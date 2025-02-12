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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <SessionWrapper>
          <div className="fixed top-0 left-0 w-full h-full -z-10 bg-black">
            <Squares
              speed={0.35}
              squareSize={50}
              direction="down"
              borderColor="rgb(34,34,34)"
              hoverFillColor="#222"
            />
          </div>

          <main className="relative">
            <div className="max-h-[15vh]">
              <Navbar />
            </div>
            <div className="min-h-[75vh] text-white">{children}</div>
            <div className="min-h-[10vh] bottom-0">
              <Footer />
            </div>
          </main>
        </SessionWrapper>
      </body>
    </html>
  );
}
