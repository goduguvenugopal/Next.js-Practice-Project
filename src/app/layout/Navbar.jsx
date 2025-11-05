"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaHome,
  FaPhone,
  FaShoppingCart,
  FaBoxOpen,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useCart } from "../context/CartProvider";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const { cart } = useCart();

  return (
    <nav className="bg-blue-600 text-white shadow-lg sticky w-full top-0 left-0 z-50 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          Fashion Store
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-gray-200"
            >
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link
              href="/pages/products"
              className="flex items-center gap-1 hover:text-gray-200"
            >
              <FaBoxOpen /> Products
            </Link>
          </li>
          <li>
            <Link
              href="/pages/contact"
              className="flex items-center gap-1 hover:text-gray-200"
            >
              <FaPhone /> Contact
            </Link>
          </li>
          <li>
            <Link
              href="/pages/cart"
              className="flex relative items-center gap-1 hover:text-gray-200"
            >
              <FaShoppingCart /> Cart
              <div className="absolute flex justify-center text-base items-center -top-3 h-5 w-5 text-white bg-neutral-900 p-1 rounded-full ">
                {cart.length}
              </div>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-blue-700 px-4 pb-4 space-y-3 transition-all duration-300">
          <li>
            <Link
              href="/"
              className="flex items-center gap-2 hover:text-gray-200"
            >
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link
              href="/pages/products"
              className="flex items-center gap-2 hover:text-gray-200"
            >
              <FaBoxOpen /> Products
            </Link>
          </li>
          <li>
            <Link
              href="/pages/contact"
              className="flex items-center gap-2 hover:text-gray-200"
            >
              <FaPhone /> Contact
            </Link>
          </li>
          <li>
            <Link
              href="/pages/cart"
              className="flex relative items-center gap-2 hover:text-gray-200"
            >
              <FaShoppingCart /> Cart
              <div className="absolute flex justify-center text-base items-center -top-3 h-5 w-5 text-white bg-neutral-900 p-1 rounded-full ">
                {cart.length}
              </div>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
