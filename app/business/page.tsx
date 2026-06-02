'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'


export default function BusinessPage() {
    const [activeTab, setActiveTab] = useState('konstruksi')
    const searchParams = useSearchParams()

    const businessTabs = [
        { id: 'konstruksi', label: 'Konstruksi' },
        { id: 'agrobisnis', label: 'Agrobisnis' },
        { id: 'perdagangan', label: 'Perdagangan Umum' },
        { id: 'kesehatan', label: 'Kesehatan' },
    ]

    useEffect(() => {
        const type = searchParams.get('type')
        if (type) {
            setActiveTab(type) // Ini bakal otomatis ganti tab sesuai parameter URL
        }
    }, [searchParams])

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* BACKGROUND HERO WITH FIXED EFFECT */}
            <section className="relative w-full overflow-hidden bg-white">
                <div
                    className="relative w-full min-h-[450px] md:h-[80vh] bg-cover bg-center bg-fixed flex items-center justify-center text-center"
                    style={{
                        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.3) 30%, rgba(255, 255, 255, 0) 100%), url('https://adhi.co.id/wp-content/uploads/2024/06/ADHI-Tower.png')`
                    }}
                >
                    {/* Overlay Hitam Transparan */}
                    <div className="absolute inset-0 bg-black/30 z-0"></div>

                    {/* Teks di Atas Gambar */}
                    <div className="relative z-10 px-6">
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white drop-shadow-2xl capitalize italic">
                            Bisnis Wifa
                        </h1>
                        <p className="text-lg md:text-2xl mt-4 font-bold italic tracking-[0.3em] text-gray-200 capitalize">
                            Beyond Construction
                        </p>
                    </div>
                </div>

                {/* KONTEN PUTIH (OVERLAP) */}
                <div className="relative z-20 -mt-16 md:-mt-32 p-4 md:p-8 flex justify-center">
                    <div className="bg-white border border-gray-100 rounded-[2.5rem] shadow-2xl w-full md:w-[85%] max-w-6xl p-6 md:p-12 relative overflow-hidden">
                        {/* Divider merah mengikuti lebar box putih */}
                        <div className="absolute top-0 left-0 w-full h-2.5 bg-red-600"></div>

                        {/* TAB NAVIGATION */}
                        <div className="flex flex-wrap justify-center gap-3 mb-12">
                            {businessTabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-4 py-2.5 md:px-8 md:py-3 rounded-full font-black text-[10px] md:text-xs capitalize tracking-widest transition-all duration-300 ${activeTab === tab.id
                                        ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 scale-105'
                                        : 'bg-gray-700 text-white hover:bg-red-600'
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* TAB CONTENT AREA */}
                        <div className="min-h-[450px] transition-all duration-500">

                            {/* 1. KONSTRUKSI */}
                            {activeTab === 'konstruksi' && (
                                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                                        <div className="space-y-6">
                                            <h2 className="text-3xl md:text-4xl font-black text-gray-900 capitalize italic border-l-8 border-red-600 pl-6 leading-tight">
                                                Solusi <span className="text-red-600">Infrastruktur</span> & Konstruksi Terpadu
                                            </h2>
                                            <p className="text-gray-600 leading-relaxed text-lg font-medium text-justify">
                                                Divisi konstruksi <span className="text-red-600 font-bold">Wifa Corp</span> memiliki spesialisasi dalam pengadaan barang dan jasa konstruksi berkualitas tinggi. Kami mengintegrasikan teknologi terkini dengan manajemen proyek yang disiplin untuk menghasilkan bangunan yang kokoh dan estetis.
                                            </p>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                                {['Pembangunan Gedung', 'Fasilitas Publik', 'Renovasi Skala Besar', 'Manajemen Material'].map((item, idx) => (
                                                    <div key={idx} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border-b-2 border-gray-200">
                                                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                                                        <span className="font-black text-gray-800 italic text-sm capitalize tracking-tighter">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="relative group">
                                            <div className="absolute -inset-4 bg-red-600/5 rounded-[3rem] blur-xl group-hover:bg-red-600/10 transition-all"></div>
                                            <div className="relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                                                <Image
                                                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000"
                                                    alt="Konstruksi Wifa"
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* 2. AGROBISNIS */}
                            {activeTab === 'agrobisnis' && (
                                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                                        <div className="relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl order-last md:order-first">
                                            <Image
                                                src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=1000"
                                                alt="Agrobisnis Wifa"
                                                fill
                                                className="object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                                <p className="text-white font-black italic text-xl capitalize tracking-widest">Ketahanan Pangan Berkelanjutan</p>
                                            </div>
                                        </div>
                                        <div className="space-y-6">
                                            <h2 className="text-3xl md:text-4xl font-black text-gray-900 capitalize italic border-l-8 border-red-600 pl-6">
                                                Optimalisasi <span className="text-red-600">Sektor</span> Agrobisnis
                                            </h2>
                                            <p className="text-gray-600 leading-relaxed text-lg font-medium text-justify">
                                                Melalui pendekatan agrikultur modern, kami mengelola komoditas unggulan yang mendukung ekonomi lokal dan nasional. Fokus kami adalah pada efisiensi rantai pasok dan kualitas hasil bumi yang kompetitif untuk pasar domestik maupun industri.
                                            </p>
                                            <div className="bg-gray-900 p-8 rounded-[2rem] text-white">
                                                <h4 className="text-red-600 font-black italic mb-2 capitalize tracking-widest">Core Focus:</h4>
                                                <p className="font-medium italic text-gray-300">Pengelolaan Lahan Produktif, Distribusi Komoditas Utama, dan Implementasi Teknologi Tani Modern.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* 3. PERDAGANGAN UMUM */}
                            {activeTab === 'perdagangan' && (
                                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 text-center">
                                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 capitalize italic">
                                        General <span className="text-red-600">Trading</span> & Supply
                                    </h2>
                                    <div className="max-w-4xl mx-auto bg-gray-50 p-12 rounded-[3rem] border-2 border-dashed border-gray-200">
                                        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-bold italic mb-8">
                                            "Menyediakan akses material berkualitas tinggi dan solusi pengadaan barang yang efisien untuk mendukung skala bisnis nasional."
                                        </p>
                                        <div className="flex flex-wrap justify-center gap-6">
                                            {['Material Alam', 'Alat Teknik', 'Suku Cadang', 'Logistik'].map((tag, i) => (
                                                <span key={i} className="px-6 py-2 bg-white shadow-md rounded-full text-gray-900 font-black italic text-xs capitalize tracking-tighter border border-gray-100">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* 4. KESEHATAN */}
                            {activeTab === 'kesehatan' && (
                                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                                    <div className="max-w-4xl mx-auto text-center space-y-8">
                                        <h2 className="text-4xl font-black text-gray-900 capitalize italic tracking-tighter">
                                            Wifa <span className="text-red-600">Medistra</span> Nusantara
                                        </h2>
                                        <p className="text-gray-600 leading-relaxed text-lg font-medium">
                                            Divisi kesehatan kami berfokus pada penyediaan alat kesehatan dan layanan medis yang kredibel. Kami berkomitmen untuk meningkatkan kualitas hidup masyarakat melalui distribusi produk medis yang standar internasional.
                                        </p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                            {[
                                                { title: 'Alkes', desc: 'Pengadaan Alat Kesehatan Rumah Sakit' },
                                                { title: 'Pharma', desc: 'Distribusi Farmasi & Obat-obatan' },
                                                { title: 'Layanan', desc: 'Konsultasi & Manajemen Fasilitas Medis' }
                                            ].map((box, i) => (
                                                <div key={i} className="p-8 bg-white border-b-4 border-red-600 shadow-xl rounded-2xl hover:-translate-y-2 transition-transform duration-300">
                                                    <h4 className="text-2xl font-black text-gray-900 italic mb-2 capitalize tracking-tighter">{box.title}</h4>
                                                    <p className="text-sm text-gray-500 font-bold capitalize">{box.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
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
        </main>
    )
}