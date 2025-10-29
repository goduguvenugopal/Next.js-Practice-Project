"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function HeroSection() {
 

  return (
    <div className="relative isolate bg-gray-900 text-white min-h-screen">
    
      {/* Hero Section */}
      <div className="relative z-10 px-6 pt-32 text-center lg:px-8">
        <h1 className="text-5xl font-bold sm:text-7xl">
          Data to enrich your online business
        </h1>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. 
          Elit sunt amet fugiat veniam occaecat.
        </p>
        <div className="mt-10 flex justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-indigo-500   duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 px-4 py-2 text-sm font-semibold hover:bg-indigo-400"
          >
            Get started
          </a>
          <a href="#" className="text-sm font-semibold">
            Learn more →
          </a>
        </div>
      </div>

      {/* Background gradient blur */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          className="relative left-1/2 -translate-x-1/2 aspect-[1155/678] w-[72rem] rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
