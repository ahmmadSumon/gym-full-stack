'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navItems = [
  { name: 'Home', link: '#home' },
  { name: 'Programs', link: '#programs' },
  { name: 'Trainers', link: '#trainers' },
  { name: 'Membership', link: '#membership' },
  { name: 'Contact', link: '#contact' },
];


export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-transparent px-6 py-6 shadow-sm dark:bg-neutral-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="text-xl font-bold text-white">SMN GYM</div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-lg text-white hover:text-amber-200 dark:text-neutral-300 dark:hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
          <button className="relative rounded-full px-6 py-3 bg-red-800 text-white text-xl cursor-pointer font-medium tracking-wide overflow-hidden group hover:bg-white hover:text-black">
    <span className="relative z-10 block bg-transparent  transition-transform duration-300 group-hover:-translate-y-10">
      Account
    </span>
    <span className="absolute inset-0 flex  items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
   Account
    </span>
  </button>
  <button className="relative rounded-full px-6 py-3 bg-red-800 text-white text-xl cursor-pointer  font-medium tracking-wide overflow-hidden group hover:bg-white hover:text-black">
    <span className="relative z-10 block bg-transparent  transition-transform duration-300 group-hover:-translate-y-10">
    Book a Call
    </span>
    <span className="absolute inset-0 flex  items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
    Book a Call
    </span>
  </button>
        </nav>

        {/* Mobile Nav */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col gap-4 pt-16">
              <div className="text-lg font-semibold mb-2">Menu</div>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="text-sm text-neutral-700 dark:text-neutral-200"
                >
                  {item.name}
                </a>
              ))}
              <button className="relative rounded-full px-6 py-3 bg-red-800 text-white text-xl font-medium tracking-wide overflow-hidden group hover:bg-white hover:text-black">
    <span className="relative z-10 block bg-transparent  transition-transform duration-300 group-hover:-translate-y-10">
      Account
    </span>
    <span className="absolute inset-0 flex  items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
   Account
    </span>
  </button>
  <button className="relative rounded-full px-6 py-3 bg-red-800 text-white text-xl font-medium tracking-wide overflow-hidden group hover:bg-white hover:text-black">
    <span className="relative z-10 block bg-transparent  transition-transform duration-300 group-hover:-translate-y-10">
    Book a Call
    </span>
    <span className="absolute inset-0 flex  items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
    Book a Call
    </span>
  </button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
