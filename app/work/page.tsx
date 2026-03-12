'use client'

import { useTranslations } from 'next-intl'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'

export default function WorkHistory() {
    const t = useTranslations('Work');

    const careers = [
        {
            year: "2024 - Present",
            title: "Infrastructure Mega Project",
            company: "PT Wifacorp Tbk",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            year: "2020 - 2023",
            title: "Urban Development Strategy",
            company: "Subsidiary WIFA",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            year: "2015 - 2019",
            title: "Maritime Logistic Hub",
            company: "WIFA Engineering",
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
    ]

    return (
        <main className="bg-[#1a1a1a] min-h-screen text-slate-900">
            <Navbar />

            {/* HERO SECTION - Background */}
            <section className="relative h-[70vh] w-full overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
                    alt="Work History Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Teks Hero Center */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                    <h1 className="text-white text-6xl md:text-8xl font-black italic tracking-tighter capitalize">
                        Work History
                    </h1>
                    <p className="text-white/80 text-xl md:text-2xl mt-4 font-light tracking-widest italic capitalize">
                        Beyond Construction
                    </p>
                </div>
            </section>

            {/* CONTENT SECTION - Efek Card Putih Melengkung */}
            <section className="relative z-20 -mt-20">
                <div className="bg-white rounded-t-[60px] pt-20 pb-32 px-6 md:px-12 min-h-screen">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Judul dengan Garis Merah kayak "Perjalanan Kami" */}
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 capitalize inline-block relative mb-16">
                            Riwayat Pekerjaan
                            <div className="mt-2 h-1.5 bg-red-600 w-full"></div>
                        </h2>

                        {/* Career List */}
                        <div className="space-y-16 text-left">
                            {careers.map((item, index) => (
                                <div key={index} className="group border-b border-slate-100 pb-12 transition-all hover:pl-4 duration-300">
                                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                                        <span className="bg-red-600 text-white px-4 py-1 text-sm font-bold rounded-full w-fit">
                                            {item.year}
                                        </span>
                                        <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <h4 className="text-red-600 font-bold mb-4 capitalize text-sm tracking-widest">{item.company}</h4>
                                    <p className="text-slate-500 text-lg leading-relaxed max-w-3xl">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
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

            {/* CONTACT SECTION */}
            <section id="contact" className="relative bg-gradient-to-br from-red-800 via-red-600 to-red-700 py-20 md:py-32 px-6 overflow-hidden">        {/* Aksesoris Background biar gak sepi */}
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
                                            placeholder="John Doe"
                                            className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-red-600 focus:bg-white focus:outline-none transition-all font-medium text-gray-900"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="block text-gray-900 font-black capitalize text-xs tracking-widest ml-2">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="john@wifacorp.com"
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
                                        text: "Jl. Fatmawati No. 60A, Pangkal Pinang"
                                    },
                                    {
                                        icon: <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />,
                                        text: "nusantara@wifacorp.com"
                                    },
                                    {
                                        icon: <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24c1.12.37 2.33.57 3.54.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 22 2 13.93 2 3.5a1 1 0 011-1H6.5a1 1 0 011 1c0 1.21.2 2.42.57 3.54a1 1 0 01-.25 1.05l-2.2 2.2z" />,
                                        text: "(0274) 123456"
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
        </main>
    )
}