'use client'

import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Navbar lo aman di sini */}
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

        {/* Teks Utama: Pake font default Arial/Sans sesuai globals.css lo */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter leading-none text-white">
            PT WIFACORP <br /> TBK.
          </h1>
          <p className="mt-6 text-xs md:text-sm font-bold tracking-[0.5em] text-red-600 uppercase">
            Beyond Construction
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}