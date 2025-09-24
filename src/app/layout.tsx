import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OopsIQ",
  description:
    "Generate quizzes from your notes using the AI-powered quiz generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alan+Sans:wght@300..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans bg-sunny pattern text-zinc-800">
        {children}
      </body>
    </html>
  );
}
