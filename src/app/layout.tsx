import { cn } from "@/lib/utils";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter, Ubuntu_Mono } from "next/font/google";
import "./../assets/css/globals.css";
import "./../assets/css/reset.css";
import { NoScript } from "./no-script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const ubuntuMono = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ubuntu",
});

export const metadata: Metadata = {
  title: "Ask Sql",
  description: "Generate SQL queries from natural language",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(inter.variable, ubuntuMono.variable)}>
      <body className="bg-custom-blue-berry-900">
        <NoScript />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
