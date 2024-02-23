"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/settings/providers/Provider";
import { Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className} style={{ background: "#ffffff" }}>
                <Providers>
                    <Navbar />
                    <div className={"mt-5"}>{children}</div>
                </Providers>
            </body>
        </html>
    );
}
