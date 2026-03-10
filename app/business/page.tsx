'use client'

import { useState } from 'react'
import Image from 'next/image'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function BusinessPage() {
    const [activeTab, setActiveTab] = useState('konstruksi')

    const businessTabs = [
        { id: 'konstruksi', label: 'Konstruksi' },
        { id: 'agrobisnis', label: 'Agrobisnis' },
        { id: 'perdagangan', label: 'Perdagangan Umum' },
        { id: 'kesehatan', label: 'Kesehatan' },
    ]

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
                <div className="relative z-20 -mt-24 md:-mt-32 p-4 md:p-8 flex justify-center">
                    <div className="bg-white border border-gray-100 rounded-[2.5rem] shadow-2xl w-full md:w-[85%] max-w-6xl p-8 md:p-12 relative overflow-hidden">
                        {/* Divider merah mengikuti lebar box putih */}
                        <div className="absolute top-0 left-0 w-full h-2.5 bg-red-600"></div>

                        {/* TAB NAVIGATION */}
                        <div className="flex flex-wrap justify-center gap-3 mb-12">
                            {businessTabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest transition-all duration-300 ${activeTab === tab.id
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
                                    <div className="grid md:grid-cols-2 gap-12 items-center">
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
                                                        <span className="font-black text-gray-800 italic text-sm uppercase tracking-tighter">{item}</span>
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
                                    <div className="grid md:grid-cols-2 gap-12 items-center">
                                        <div className="relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl order-last md:order-first">
                                            <Image
                                                src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=1000"
                                                alt="Agrobisnis Wifa"
                                                fill
                                                className="object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                                <p className="text-white font-black italic text-xl uppercase tracking-widest">Ketahanan Pangan Berkelanjutan</p>
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
                                                <h4 className="text-red-600 font-black italic mb-2 uppercase tracking-widest">Core Focus:</h4>
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
                                                <span key={i} className="px-6 py-2 bg-white shadow-md rounded-full text-gray-900 font-black italic text-xs uppercase tracking-tighter border border-gray-100">
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
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                            {[
                                                { title: 'Alkes', desc: 'Pengadaan Alat Kesehatan Rumah Sakit' },
                                                { title: 'Pharma', desc: 'Distribusi Farmasi & Obat-obatan' },
                                                { title: 'Layanan', desc: 'Konsultasi & Manajemen Fasilitas Medis' }
                                            ].map((box, i) => (
                                                <div key={i} className="p-8 bg-white border-b-4 border-red-600 shadow-xl rounded-2xl hover:-translate-y-2 transition-transform duration-300">
                                                    <h4 className="text-2xl font-black text-gray-900 italic mb-2 uppercase tracking-tighter">{box.title}</h4>
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

            <Footer />
        </main>
    )
}