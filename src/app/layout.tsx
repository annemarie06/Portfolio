import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/sections/Navbar';
import AmbientBackground from '@/components/ui/AmbientBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Anne Marie Factor | Professional Portfolio',
  description: 'IT Professional, Executive Assistant, Graphic Designer, and Web Developer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased text-white selection:bg-indigo-500/30 selection:text-indigo-200`}>
        <AmbientBackground />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar activeSection="" />
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
