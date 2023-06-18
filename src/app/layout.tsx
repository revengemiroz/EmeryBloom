import "./globals.css";
import { Inter } from "next/font/google";

import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EmeryBloom | Online clothing store",
  description: "A clothing store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen">
        {/* <Header /> */}
        {/* <Footer /> */}
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
