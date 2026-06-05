import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { aj } from "@/lib/arcjet";
import { request } from "@arcjet/next";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Finance-Tracker",
  description: "One stop Finance Platform",
};

export default async function RootLayout({ children }) {
  // Arcjet protection
  const req = await request();
  const decision = await aj.protect(req);

  if (decision.isDenied()) {
    return (
      <html lang="en">
        <body>
          <div style={{ padding: "2rem", textAlign: "center" }}>
            <h1>Access Denied</h1>
            <p>Your request was blocked by our security policies.</p>
          </div>
        </body>
      </html>
    );
  }

  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo-sm.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Built with 💗, powered by code</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
