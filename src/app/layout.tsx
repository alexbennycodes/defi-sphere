import Navbar from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Web3Modal } from "@/context/web3modal";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Defi Sphere",
  description:
    "Defi Sphere is a decentralized finance application. Connect your wallet to start using Defi Sphere. Token swaps, lending, borrowing, and more. Real-time market data, analytics, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Web3Modal>
            <Providers>
              <Navbar />
              {children}
              <Toaster />
            </Providers>
          </Web3Modal>
        </ThemeProvider>
      </body>
    </html>
  );
}
