'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'Programs', link: 'programs' },
  { name: 'Trainers', link: 'trainers' },
  { name: 'Membership', link: 'membership' },
  { name: 'Contact', link: 'contact' },
];


export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-transparent px-6 py-6 shadow-sm dark:bg-neutral-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href='/'>
        
        <div className="text-2xl md:text-3xl font-extrabold text-red-600">SMN GYM</div>
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="text-lg text-white hover:text-amber-200 relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
          <button className="relative rounded-full px-6 py-3 bg-red-800 text-white text-xl cursor-pointer font-medium tracking-wide overflow-hidden group hover:bg-white hover:text-black">
            <Link href="account">
    <span className="relative z-10 block bg-transparent  transition-transform duration-300 group-hover:-translate-y-10">
      Account
    </span>
    <span className="absolute inset-0 flex  items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
   Account
    </span>
    </Link>
  </button>
  <button className="relative rounded-full px-6 py-3 bg-red-800 text-white text-xl cursor-pointer  font-medium tracking-wide overflow-hidden group hover:bg-white hover:text-black">
   <Link href="/contact">
    <span className="relative z-10 block bg-transparent  transition-transform duration-300 group-hover:-translate-y-10">
    Enroll Now
    </span>
    <span className="absolute inset-0 flex  items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
    Enroll Now
    </span>
    </Link>
  </button>
        </nav>

        {/* Mobile Nav */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button className=" text-white text-xl" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col justify-center items-center gap-4 pt-16">
              <div className="text-xl font-semibold mb-2">Menu</div>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="text-xl text-neutral-700 dark:text-neutral-200"
                >
                  {item.name}
                </a>
              ))}
              <button className="relative rounded-full px-6 py-3 bg-red-800 text-white text-lg font-medium tracking-wide overflow-hidden group hover:bg-white hover:text-black">

              <Link href="/account">
    <span className="relative z-10 block bg-transparent  transition-transform duration-300 group-hover:-translate-y-10">
      Account
    </span>
    <span className="absolute inset-0 flex  items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
   Account
    </span>
    </Link>
  </button>
  <button className="relative rounded-full px-6 py-3 bg-red-800 text-white text-lg font-medium tracking-wide overflow-hidden group hover:bg-white hover:text-black">
    <Link href="/contact">
    <span className="relative z-10 block bg-transparent  transition-transform duration-300 group-hover:-translate-y-10">
    Book a Call
    </span>
    <span className="absolute inset-0 flex  items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
    Book a Call
    </span>
    </Link>
  </button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
