import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "./navigation";

export const metadata: Metadata = {
  title: "Jarrett Cura",
  description: "Jarrett Cura's Website",
  icons: {
    icon: '/images/jc-icon.webp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
