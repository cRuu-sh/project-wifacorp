'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function Home() {
  const [experience, setExperience] = useState(0)
  const targetYear = 34

  // Efek counter buat angka tahun
  useEffect(() => {
    let start = 0
    const duration = 2000
    const increment = targetYear / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= targetYear) {
        setExperience(targetYear)
        clearInterval(timer)
      } else {
        setExperience(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [])

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
          <source src="https://adhi.co.id/wp-content/uploads/2024/08/Website-Home.mp4" type="video/mp4" />
          Your browser does not support the video tag.
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

      {/* ABOUT SECTION */}
      <section id="about" className="relative bg-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about_bg.png"
            alt="About background"
            fill
            className="object-cover opacity-10"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Left: Image with Counter */}
            <div className="relative group">
              <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <Image
                  src="/team.png"
                  alt="Wifacorp Team"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white px-8 py-4 rounded-2xl shadow-xl">
                <div className="flex items-center gap-2">
                  <span className="text-5xl font-black italic">{experience}</span>
                  <div className="flex flex-col leading-none">
                    <span className="text-xl font-bold">+</span>
                    <span className="text-[10px] uppercase font-black tracking-widest text-white/90">Tahun<br />Pengalaman</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tighter capitalize italic border-l-8 border-red-600 pl-6 leading-none">
                Tentang <span className="text-red-600">Kami</span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                Kami adalah perusahaan yang berkomitmen untuk memberikan layanan terbaik dalam bidang kami. Dengan pengalaman lebih dari satu dekade, kami terus berinovasi dan beradaptasi dengan perkembangan teknologi untuk memenuhi kebutuhan klien secara profesional dan berkelanjutan.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                Nilai utama kami adalah <span className="text-gray-900 font-bold">integritas, kualitas, dan kepuasan pelanggan</span>. Kami percaya bahwa kolaborasi dan kepercayaan adalah fondasi utama untuk membangun hubungan jangka panjang yang sukses.
              </p>

              <Link
                href="/about"
                className="group inline-flex items-center gap-4 bg-gray-900 text-white font-bold px-8 py-4 rounded-xl hover:bg-red-600 transition-all uppercase tracking-widest text-xs"
              >
                Baca Selengkapnya
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}