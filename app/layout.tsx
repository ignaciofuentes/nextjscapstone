import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Import ConfigureAmplifyClientSide function. 
import ConfigureAmplifyClientSide from "@/components/ConfigureAmplify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ToDo App",
  description: "Get stuff done!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ConfigureAmplifyClientSide />
        {children}
      </body>
    </html>
  );
}
