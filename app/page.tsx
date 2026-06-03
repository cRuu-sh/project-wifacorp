'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { useTranslations } from 'next-intl';

export default function Home() {
  const [experience, setExperience] = useState(0)
  const targetYear = 34
  const t = useTranslations('Navbar');

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
        {/* Static Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e] via-[#0d1b3e] to-[#0a1628]" />
        {/* Subtle overlay texture */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(30,80,160,0.25)_0%,_transparent_60%)]" />

        {/* Teks Utama */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-xl sm:text-4xl md:text-6xl lg:text-7xl font-black capitalize tracking-tighter leading-tight text-white drop-shadow-2xl">
            PT WIFACORP Tbk
          </h1>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left: Image with Counter */}
            <div className="relative group">
              <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
                  alt="Wifacorp Team"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="absolute -bottom-4 -righ  t-2 md:-bottom-6 md:-right-6 bg-red-600 text-white px-8 py-4 rounded-2xl shadow-xl">
                <div className="flex items-center gap-2">
                  <span className="text-3xl md:text-5xl font-black italic">{experience}</span>
                  <div className="flex flex-col leading-none">
                    <span className="text-xl font-bold">+</span>
                    <span className="text-[10px] capitalize font-black tracking-widest text-white/90">Tahun<br />Pengalaman</span>
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
        {/* Static Background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0a1128] via-[#0d1a3a] to-[#0a1128]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(227,30,36,0.12)_0%,_transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(227,30,36,0.08)_0%,_transparent_55%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Judul Section */}
          <div className="text-center text-white mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black capitalize italic tracking-tighter">
              Bisnis <span className="text-white-600">WIFACORP</span>
            </h2>
            <div className="w-20 h-1.5 bg-red-600 mx-auto"></div>
            <p className="text-gray-300 max-w-lg mx-auto font-medium">
              Mewujudkan keunggulan di berbagai sektor usaha untuk masa depan yang lebih baik.
            </p>
          </div>

          {/* Grid Business Units */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                title: "Konstruksi",
                desc: "Berkomitmen menghadirkan hasil terbaik di bidang konstruksi dan infrastruktur modern.",
                img: "/konstruksi.png",
                link: "/business?type=konstruksi"
              },
              {
                title: "Agrobisnis",
                desc: "Menyediakan solusi terpadu untuk kebutuhan pertanian dan hasil bumi yang berkelanjutan.",
                img: "/agrobisnis.jpg",
                link: "/business?type=agrobisnis"
              },
              {
                title: "Perdagangan Umum",
                desc: "Menyediakan berbagai produk berkualitas untuk memenuhi kebutuhan pasar secara luas.",
                img: "/investmen.png",
                link: "/business?type=perdagangan"
              },
              {
                title: "Kesehatan",
                desc: "Pelayanan kesehatan terpercaya dengan fasilitas modern dan tenaga ahli profesional.",
                img: "/rumah_sakit.png",
                link: "/business?type=kesehatan"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-md rounded-[2.5rem] p-8 border border-white/10 hover:border-red-600/60 hover:shadow-[0_0_30px_rgba(227,30,36,0.15)] transition-all duration-500 hover:-translate-y-3 overflow-hidden flex flex-col items-center text-center"
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

                {/* Konten selalu tampil */}
                <div className="flex flex-col items-center w-full px-4 pb-4">
                  <div className="min-h-[3.5rem] flex items-center justify-center mb-3">
                    <h3 className="text-xl font-black text-white capitalize italic tracking-tighter leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed text-center">
                    {item.desc}
                  </p>

                  <div className="mt-6">
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
              Legacy <span className="text-red-600">WIFACORP</span>
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

      {/* PARTNERS SECTION - WRAPPED FOR MAINTENANCE */}
      <div className="relative">

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

        {/* Maintenance Overlay */}
        <div className="absolute inset-0 z-20 backdrop-blur-[3px] bg-white/75 flex flex-col items-center justify-center gap-4 pointer-events-none select-none">
          <div className="flex flex-col items-center text-center px-6">
            <span className="text-4xl mb-4">🔧</span>
            <span className="text-xs font-black uppercase tracking-[0.25em] text-red-600 mb-2">
              Maintenance
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 italic tracking-tighter mb-2">
              Coming Soon
            </h3>
            <p className="text-gray-500 text-sm font-medium">
              To Be Announced — Informasi partner akan segera hadir.
            </p>
          </div>
        </div>

      </div>

      {/* CONTACT SECTION */}
      <section id="contact" className="relative bg-gradient-to-br from-red-800 via-red-600 to-red-700 py-20 md:py-32 px-6 overflow-hidden">      
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-black/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter capitalize italic leading-none mb-6">
              Hubungi <span className="text-white-900/30">Kami</span>
            </h2>
            <div className="h-2 bg-white w-24 mx-auto mb-8"></div>
            <p className="text-white/90 font-bold text-lg max-w-2xl mx-auto leading-relaxed">
              Kami siap membantu Anda! Silakan hubungi kami melalui formulir di bawah ini atau melalui kontak langsung yang tersedia.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Formulir Kontak */}
            <div className="bg-white rounded-[2.5rem] shadow-2xl p-10 md:p-12 transform hover:-translate-y-2 transition-all duration-500 border border-white/20">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-gray-900 font-black capitalize text-xs tracking-widest ml-2">Nama Lengkap</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Masukkan Nama Anda"
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-red-600 focus:bg-white focus:outline-none transition-all font-medium text-gray-900"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-gray-900 font-black capitalize text-xs tracking-widest ml-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Masukkan Email Anda"
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-red-600 focus:bg-white focus:outline-none transition-all font-medium text-gray-900"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-gray-900 font-black capitalize text-xs tracking-widest ml-2">Pesan Anda</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tulis pesan Anda..."
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-red-600 focus:bg-white focus:outline-none transition-all font-medium text-gray-900 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white font-black py-5 rounded-2xl hover:bg-gray-900 transition-all duration-300 shadow-xl capitalize tracking-[0.3em] text-sm group"
                >
                  Kirim Pesan
                  <span className="inline-block ml-3 group-hover:translate-x-2 transition-transform">→</span>
                </button>
              </form>
            </div>

            {/* Info Kontak */}
            <div className="text-white lg:pt-8 space-y-12">
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-black capitalize italic tracking-tighter leading-tight">
                  Koneksi Langsung
                </h3>
                <p className="text-white/80 font-medium text-lg max-w-md">
                  Anda juga bisa langsung menghubungi kami melalui detail di bawah ini.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />,
                    text: "Jl. Fatmawati, No. 60A, Kota Pangkalpinang, Prov. Kep. Bangka Belitung"
                  },
                  {
                    icon: <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />,
                    text: "nusantara@wifacorp.com"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-6 group cursor-pointer">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-white group-hover:fill-red-600 transition-colors" viewBox="0 0 24 24">
                        {item.icon}
                      </svg>
                    </div>
                    <span className="font-bold text-lg tracking-tight group-hover:text-gray-900/60 transition-colors">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main >
  )
}