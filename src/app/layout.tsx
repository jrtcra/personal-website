import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Jarrett Cura",
  description: "Jarrett Cura's Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
