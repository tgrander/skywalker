import "@/styles/globals.css";

import { Inter } from "next/font/google";

import { Providers } from "@/app/providers";
import { cn } from "@/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "flex min-h-screen w-full flex-col bg-slate-950",
        "dark", // dark mode
      )}
    >
      <body
        className={cn(
          "bg-slate-950 font-sans antialiased",
          "flex min-h-screen w-full flex-col",
          inter.variable,
        )}
      >
        <Providers>
          {/* <SidebarLayout>{children}</SidebarLayout> */}
          <div className="flex min-h-screen flex-col">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
