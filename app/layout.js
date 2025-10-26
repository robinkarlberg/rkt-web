import "./globals.css";

// import { Bricolage_Grotesque } from "next/font/google";
import { Playfair_Display } from "next/font/google";

// const font = Bricolage_Grotesque({
//   weight: ['400', '500', '600', '700', '800'],
//   subsets: ["latin"]
// })

const font = Playfair_Display({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ["latin"]
})

export const metadata = {
  title: `RKT AB | Building Useful Websites`,
  description: "RKT (Robin Karlberg Technologies), builds useful websites.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased text-primary-700 bg-primary-100 dark:bg-primary-800 dark:text-primary-100`}>
        <header className="px-4 sm:px-6 py-4 ">
          <div className="page mx-auto">
            <p className="text-lg font-medium">🚀</p>
          </div>
        </header>
        <div className="min-h-[84vh]">
          {children}
        </div>
        <footer className="px-4 sm:px-6 mt-2">
          <div className="page mx-auto border-t pt-2 mt-2 border-stone-200 dark:border-stone-600">
            &copy; 2025 Robin Karlberg Technologies AB &middot; 559549-4146
          </div>
        </footer>
      </body>
    </html>
  );
}
