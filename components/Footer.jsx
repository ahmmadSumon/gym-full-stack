'use client';

import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black mt-96 md:mt-0 text-white px-6 py-12 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div>
          <h1 className="text-3xl font-extrabold text-red-600">SMN GYM</h1>
          <p className="mt-4 text-gray-400">
            Push your limits. Elevate your fitness. Join the movement with world-class trainers and community.
          </p>
          <div className="flex mt-6 space-x-4">
            <Link href="#" className="hover:text-red-500 transition"><FaFacebookF size={20} /></Link>
            <Link href="#" className="hover:text-red-500 transition"><FaInstagram size={20} /></Link>
            <Link href="#" className="hover:text-red-500 transition"><FaTwitter size={20} /></Link>
            <Link href="#" className="hover:text-red-500 transition"><FaYoutube size={20} /></Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/trainers" className="hover:text-white">Trainers</Link></li>
            <li><Link href="/courses" className="hover:text-white">Courses</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="text-xl font-bold mb-4">Programs</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/programs" className="hover:text-white">Weight Loss</Link></li>
            <li><Link href="/programs" className="hover:text-white">Bodybuilding</Link></li>
            <li><Link href="/programs" className="hover:text-white">Yoga</Link></li>
            <li><Link href="/programs" className="hover:text-white">Cardio</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-bold mb-4">Subscribe</h3>
          <p className="text-gray-400 mb-4">Join our newsletter for fitness tips & updates.</p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
            />
            <button type="submit" className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SMN GYM. All rights reserved.
      </div>
    </footer>
  );
}
