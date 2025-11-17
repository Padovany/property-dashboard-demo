import Providers from "./providers";
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Dashboard",
  description: "Utility consumption dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-neutral-950 text-neutral-100 flex h-screen overflow-hidden">

        {/* Sidebar */}
        <aside className="w-64 bg-neutral-900 border-r border-neutral-800 flex flex-col">
          <div className="p-6 text-xl font-semibold tracking-wide">
            Utility Dashboard
          </div>

          <nav className="flex-1 p-3 space-y-2">
            <Link
              href="/"
              className="block px-3 py-2 rounded-lg hover:bg-neutral-800 transition"
            >
              Dashboard
            </Link>

            <Link
              href="/readings"
              className="block px-3 py-2 rounded-lg hover:bg-neutral-800 transition"
            >
              Readings
            </Link>

            <Link
              href="/settings"
              className="block px-3 py-2 rounded-lg hover:bg-neutral-800 transition"
            >
              Settings
            </Link>
          </nav>

          <footer className="p-4 text-xs text-neutral-500 border-t border-neutral-800">
            Built with ❤️ using Next.js
          </footer>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-8">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}