import type { Metadata } from "next";
import "./globals.css";
import "@/lib/fontawesome";

export const metadata: Metadata = {
  title: "Healthcare",
  description:
    "Take care of your health and book an appointement with our doctors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
