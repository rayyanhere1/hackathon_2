import "./globals.css"; // If you have global styles, include them here.
import Link from "next/link";

export const metadata = {
  title: "My Website",
  description: "A sample website using Next.js App Router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Navbar */}
        <header className="bg-gray-100 p-4">
          <nav className="flex justify-between items-center">
            <div>
              <Link href="/" className="text-lg font-bold">
                Home
              </Link>
            </div>
            <div className="space-x-4">
              <Link href="/contact" className="hover:underline">
                Contact Us
              </Link>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </div>
          </nav>
        </header>

        {/* Main Page Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-gray-100 p-4 text-center mt-10">
          <p>© 2024 My Website. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
