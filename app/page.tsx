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

      {/* BUSINESS UNITS SECTION */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image with Parallax-like Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg_bisnis.png"
            alt="Business Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Judul Section */}
          <div className="text-center text-white mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black capitalize italic tracking-tighter">
              Bisnis <span className="text-white-600">WIFA</span>
            </h2>
            <div className="w-20 h-1.5 bg-red-600 mx-auto"></div>
            <p className="text-gray-300 max-w-lg mx-auto font-medium">
              Mewujudkan keunggulan di berbagai sektor usaha untuk masa depan yang lebih baik.
            </p>
          </div>

          {/* Grid Business Units */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Konstruksi",
                desc: "Berkomitmen menghadirkan hasil terbaik di bidang konstruksi dan infrastruktur modern.",
                img: "/konstruksi.png",
                link: "/business#konstruksi"
              },
              {
                title: "Agrobisnis",
                desc: "Menyediakan solusi terpadu untuk kebutuhan pertanian dan hasil bumi yang berkelanjutan.",
                img: "/agrobisnis.jpg",
                link: "/business#agrobisnis"
              },
              {
                title: "Perdagangan Umum",
                desc: "Menyediakan berbagai produk berkualitas untuk memenuhi kebutuhan pasar secara luas.",
                img: "/investmen.png",
                link: "/business#perdagangan"
              },
              {
                title: "Kesehatan",
                desc: "Pelayanan kesehatan terpercaya dengan fasilitas modern dan tenaga ahli profesional.",
                img: "/rumah_sakit.png",
                link: "/business#kesehatan"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-md rounded-[2.5rem] p-8 border border-white/10 hover:border-red-600/50 transition-all duration-500 hover:-translate-y-4 overflow-hidden flex flex-col items-center text-center"
              >
                {/* Circle Image Wrapper */}
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white/10 group-hover:border-red-600 transition-colors duration-500 mb-8">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Container Konten yang Slide Up */}
                <div className="transition-all duration-500 md:translate-y-12 group-hover:translate-y-0 flex flex-col items-center w-full px-4 pb-8">

                  <h3 className="text-xl font-black text-white capitalize italic tracking-tighter mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center">
                    {item.desc}
                  </p>

                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                    <Link href={item.link}>
                      <button className="flex items-center justify-center gap-2 bg-transparent border border-white/40 text-white text-[10px] font-bold px-6 py-2.5 rounded-full hover:bg-red-600 hover:border-red-600 transition-all duration-300 uppercase tracking-widest whitespace-nowrap">
                        See More
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEGACY WIFA / PORTFOLIO SECTION */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading Portfolio */}
          <div className="mb-20 border-l-8 border-red-600 pl-6">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter capitalize italic leading-none">
              Legacy <span className="text-red-600">WIFA</span>
            </h2>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Pembangunan Karantina",
                location: "Pangkalbalam, Bangka Belitung",
                img: "https://images.unsplash.com/photo-1636808458964-c34aef9273ff?q=80&w=800&auto=format&fit=crop"
              },
              {
                title: "Kebut Sawit",
                location: "Munggu, Bangka Tengah",
                img: "https://plus.unsplash.com/premium_photo-1697729435258-b7d20023c843?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              },
              {
                title: "Pelabuhan Peti Kemas",
                location: "Operasional Logistik PT",
                img: "https://images.unsplash.com/photo-1769752803898-e7e9a843a120?q=80&w=800&auto=format&fit=crop"
              }
            ].map((project, index) => (
              <div key={index} className="group cursor-pointer">
                {/* Image Container with Aspect Ratio */}
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-gray-100 shadow-2xl">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Subtle Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Project Info */}
                <div className="mt-8 text-center px-4">
                  <h3 className="font-black text-gray-900 text-lg md:text-xl leading-tight group-hover:text-red-600 transition-colors capitalize italic tracking-tighter">
                    {project.title}
                  </h3>
                  <div className="w-10 h-1 bg-gray-200 mx-auto my-4 group-hover:w-20 group-hover:bg-red-600 transition-all duration-500"></div>
                  <p className="text-[10px] md:text-[11px] text-gray-400 capitalize tracking-[0.2em] font-bold">
                    {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section id="partner" className="relative bg-white py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading Partner */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter capitalize italic leading-none mb-6">
              Partner <span className="text-white-600">Kami</span>
            </h2>
            <div className="h-1.5 bg-red-600 w-24 mx-auto mb-10"></div>
            <p className="text-gray-500 font-medium max-w-2xl mx-auto text-lg leading-relaxed">
              Kami bangga bekerja sama dengan berbagai perusahaan dan organisasi ternama yang turut mendukung kami dalam memberikan layanan terbaik dan berkelanjutan bagi pelanggan kami.            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-12 items-center justify-center max-w-6xl mx-auto mb-20">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div
                key={num}
                className="flex justify-center transition-all duration-500 transform hover:scale-110 group"
              >
                <div className="relative h-12 md:h-16 w-full">
                  <Image
                    src={`/partner-${num}.png`}
                    alt={`Partner ${num}`}
                    fill
                    className="object-contain transition-all duration-500 opacity-80 group-hover:opacity-100"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Button See All Partners */}
          <div className="flex justify-center">
            <Link href="/partners">
              <button className="group relative inline-flex items-center gap-3 bg-gray-900 text-white font-black px-10 py-4 rounded-xl overflow-hidden transition-all duration-300 hover:bg-red-600 uppercase tracking-[0.2em] text-xs">
                <span className="relative z-10">Lihat Selengkapnya</span>
                <span className="relative z-10 group-hover:translate-x-2 transition-transform duration-300">→</span>
              </button>
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}