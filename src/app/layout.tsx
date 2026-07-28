import Footer from "@/components/Common/Footer";
import Header from "@/components/Common/Header";
import ScrollToTop from "@/components/Common/ScrollToTop";
import { Inter } from "next/font/google";
import "../styles/index.css";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`bg-[#FCFCFC] ${inter.className}`}>
        <div className="isolate">
          <Header />
          {children}
          <Footer />
        </div>
        <ScrollToTop />
      </body>
    </html>
  );
}

