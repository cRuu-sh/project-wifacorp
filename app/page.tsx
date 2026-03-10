'use client'

import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Navbar */}
      <Navbar />

      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Teks Utama */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black capitalize tracking-tighter leading-none text-white drop-shadow-2xl">
            PT Wifacorp Tbk
          </h1>
          <p className="mt-3 text-xs md:text-sm font-bold italic tracking-[0.2em] text-white capitalize opacity-90">
            Beyond Construction
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}