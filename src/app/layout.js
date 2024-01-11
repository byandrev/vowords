// import { Inter } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers";

import Header from "@/components/Header";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VoWords",
  description: "Learning words is funny",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body>
        <Header />

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
