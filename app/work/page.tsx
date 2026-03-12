'use client'

import { useState, useMemo, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import { allProjectsData } from '@/data/projectsData'

export default function WorkHistory() {
    const t = useTranslations('Work');

    // --- 1. DEKLARASI STATE DULU (Ini fondasi) ---
    const [showAll, setShowAll] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedYear, setSelectedYear] = useState("All");
    const itemsPerPage = 10;

    // --- 2. LOGIC FILTER (Supaya filteredProjects tercipta) ---
    const availableYears = useMemo(() => {
        const years = allProjectsData.map(p => p.year);
        return ["All", ...Array.from(new Set(years))].sort((a, b) => b.localeCompare(a));
    }, []);

    const filteredProjects = useMemo(() => {
        return allProjectsData.filter(project => {
            const matchesSearch =
                project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.company.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesYear = selectedYear === "All" || project.year === selectedYear;

            return matchesSearch && matchesYear;
        });
    }, [searchTerm, selectedYear]);

    // --- 3. LOGIC PAGINATION (Bisa jalan karena filteredProjects sudah ada) ---
    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProjects.slice(indexOfFirstItem, indexOfLastItem);

    // --- 4. EFFECT & DATA LAIN ---
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, selectedYear]);

    const featuredProjects = [
        {
            year: "2026",
            title: "Revitalisasi Atap Terminal Lanjutan Bandara Depati Amir Pangkalpinang",
            company: "PT. Angkasa Pura II",
            location: "Bangka Belitung, Kab. Bangka Tengah"
        },
        {
            year: "2025",
            title: "Pengadaan AED (Automatedd External Defibrillator",
            company: "PT. Timah, Tbk",
            location: "Bangka Belitung, Kota Pangkalpinang"
        },
        {
            year: "2024",
            title: "Pengadaan Jasa Penggantian Asbes Rumah Sakit Bakti Timah Pangkalpinang",
            company: "PT. Bakti Timah Medika",
            location: "Bangka Belitung, Kota Pangkalpinang"
        },
        {
            year: "2023",
            title: "Jasa Pekerjaan Perbaikan Asrama / Mess 1 UPLB di Belinyu",
            company: "PT. Timah, Tbk",
            location: "Bangka Belitung, Kab. Bangka"
        },
        {
            year: "2022",
            title: "Material Pembangunan Workshop",
            company: "PT. DAK",
            location: "Bangka Belitung, Kota Pangkalpinang"
        },
        {
            year: "2021",
            title: "Jasa Sewa 6 Unit Kapal Pompong Kebutuhan Biang Pengamanan Wilayah Laut Bangka",
            company: "PT. Timah, Tbk",
            location: "Bangka Belitung"
        },
        {
            year: "2020",
            title: "Jasa Pekerjaan Perbaikan Stasiun Pengumpul Tempilang & Gemuruh Bidang Pengawasan Tambang & Pengangkutan",
            company: "PT. Timah, Tbk",
            location: "Bangka Belitung, Kab. Bangka Barat"
        },
        {
            year: "2019",
            title: "Jasa Pekerjaan Pembuatan Bangunan Geddung Arsip Corebox Eksplorasi di Merawang",
            company: "PT. Timah, Tbk",
            location: "Bangka Belitung, Kab. Bangka"
        },
        {
            year: "2018",
            title: "Jasa Pekerjaan Renovasi Rumah Dinas Kopel di Unit Metalurgi Mentok",
            company: "PT. Timah, Tbk",
            location: "Bangka Belitung, Kab. Bangka Barat"
        },
        {
            year: "2017",
            title: "Pekerjaan Tambah Gedung Rawat Inap Kelas I Rg. Anggrek RSMS Sungailiat",
            company: "PT. Timah, Tbk",
            location: "Bangka Belitung, Kab. Bangka"
        },
        {
            year: "2016",
            title: "Lanjutan Jasa Pekerjaan Pembangunan Gedung Rumah Sakit Medika Stania di Sungailiat",
            company: "PT. Timah, Tbk",
            location: "Bangka Belitung, Kab. Bangka"
        },
        {
            year: "2015",
            title: "Jasa pembangunan Fasilitas Pendukung untuk Proyek Tanur 3 di PT. Timah, Tbk di kepulauan Riau dan Wilayah Riau",
            company: "PT. Timah, Tbk",
            location: "Riau"
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
                    <div className="max-w-7xl mx-auto"> {/* Lebarin container biar tabel leluasa */}

                        {/* Header Riwayat - Tetap Center */}
                        <div className="text-center mb-20">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 capitalize inline-block relative">
                                Riwayat Pekerjaan
                                <div className="mt-2 h-1.5 bg-red-600 w-full"></div>
                            </h2>
                        </div>

                        {/* 1. FEATURED PROJECTS - 6 MINI TABLES */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 text-left">
                            {featuredProjects.map((project, idx) => (
                                <div key={idx} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-red-600 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                                    {/* Badge Tahun */}
                                    <div className="flex justify-between items-center mb-6">
                                        <span className="bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full capitalize tracking-widest">
                                            Project {project.year}
                                        </span>
                                        <span className="text-slate-200 font-black text-2xl italic group-hover:text-red-100 transition-colors">0{idx + 1}</span>
                                    </div>

                                    {/* Judul Project (Capitalize) */}
                                    <h3 className="text-lg font-black text-slate-900 leading-tight mb-6 min-h-[4rem] group-hover:text-red-600 transition-colors">
                                        {project.title}
                                    </h3>

                                    {/* Detail Table-Style */}
                                    <div className="space-y-4 border-t border-slate-200 pt-6">
                                        <div className="flex justify-between items-start gap-4">
                                            <span className="text-[10px] capitalize font-black text-slate-400 tracking-wider mt-1">Perusahaan</span>
                                            <span className="text-sm font-bold text-slate-700 text-right leading-tight">{project.company}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-[10px] capitalize font-black text-slate-400 tracking-wider">Lokasi</span>
                                            <span className="text-sm font-bold text-slate-700">{project.location}</span>
                                        </div>
                                    </div>

                                    {/* Hover Decor */}
                                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-red-600 group-hover:w-full transition-all duration-500"></div>
                                </div>
                            ))}
                        </div>

                        {/* SECTION DATABASE PROYEK LENGKAP */}
                        <div className="mt-20 pt-20 border-t border-slate-100 text-center">
                            {!showAll && (
                                <button
                                    onClick={() => setShowAll(true)}
                                    className="group relative inline-flex items-center justify-center px-12 py-5 font-black text-white bg-red-600 rounded-full overflow-hidden transition-all hover:bg-black shadow-xl shadow-red-600/20"
                                >
                                    <span className="relative capitalize tracking-widest text-sm">View Full Project Database</span>
                                </button>
                            )}

                            {showAll && (
                                <div className="animate-in fade-in slide-in-from-top-10 duration-700 text-left">
                                    {/* HEADER & CONTROLS */}
                                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 gap-6">
                                        <div>
                                            <h2 className="text-3xl font-black text-slate-900 capitalize italic tracking-tighter">
                                                Complete Project <span className="text-red-600">Database</span>
                                            </h2>
                                            <p className="text-slate-500 mt-2 text-sm font-medium">Ditemukan {filteredProjects.length} data proyek.</p>
                                        </div>

                                        {/* SEARCH & FILTER BOX */}
                                        <div className="flex flex-col md:flex-row gap-4 w-full lg:w-auto">
                                            {/* Search Input */}
                                            <div className="relative group">
                                                <input
                                                    type="text"
                                                    placeholder="Cari proyek atau klien..."
                                                    value={searchTerm}
                                                    onChange={(e) => setSearchTerm(e.target.value)}
                                                    className="w-full md:w-80 px-6 py-3 bg-white border-2 border-slate-200 rounded-2xl focus:border-red-600 outline-none transition-all font-bold text-sm"
                                                />
                                                <div className="absolute right-4 top-3.5 text-slate-300 group-focus-within:text-red-600">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                                </div>
                                            </div>

                                            {/* Year Filter */}
                                            <select
                                                value={selectedYear}
                                                onChange={(e) => setSelectedYear(e.target.value)}
                                                className="px-6 py-3 bg-white border-2 border-slate-200 rounded-2xl focus:border-red-600 outline-none transition-all font-black text-xs capitalize tracking-widest cursor-pointer"
                                            >
                                                {availableYears.map(year => (
                                                    <option key={year} value={year}>{year === "All" ? "Semua Tahun" : `Tahun ${year}`}</option>
                                                ))}
                                            </select>

                                            <button onClick={() => setShowAll(false)} className="px-6 py-3 text-slate-400 hover:text-red-600 font-bold capitalize text-[10px] tracking-widest border-2 border-transparent hover:border-red-600 rounded-2xl transition-all">
                                                Close
                                            </button>
                                        </div>
                                    </div>

                                    {/* TABEL (Pake data filteredProjects) */}
                                    <div className="overflow-x-auto rounded-[2.5rem] border border-slate-200 bg-slate-50 shadow-2xl shadow-slate-200/50">
                                        <table className="w-full text-left border-collapse min-w-[1000px]">
                                            {/* ... existing thread ... */}
                                            <tbody className="text-sm">
                                                {currentItems.length > 0 ? (
                                                    currentItems.map((project, idx) => (
                                                        <tr key={idx} className="border-b border-slate-200/60 hover:bg-white transition-all group">
                                                            <td className="p-6 font-bold text-slate-300 group-hover:text-red-600">
                                                                {indexOfFirstItem + idx + 1}
                                                            </td>
                                                            <td className="p-6 font-black text-slate-900 uppercase text-[11px] leading-relaxed max-w-md">
                                                                {project.title}
                                                            </td>
                                                            <td className="p-6 text-slate-600 font-bold">{project.company}</td>
                                                            <td className="p-6 text-slate-500 font-medium italic text-center">{project.location}</td>
                                                            <td className="p-6 text-right font-black text-red-600 tracking-tighter text-base">{project.year}</td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan={5} className="p-20 text-center text-slate-400 capitalize font-black">
                                                            Data Tidak Ditemukan..
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* PAGINATION CONTROLS */}
                                    {filteredProjects.length > itemsPerPage && (
                                        <div className="mt-8 flex items-center justify-center gap-2">
                                            <button
                                                disabled={currentPage === 1}
                                                onClick={() => setCurrentPage(prev => prev - 1)}
                                                className="p-3 rounded-xl border border-slate-200 hover:bg-red-600 hover:text-white disabled:opacity-30 transition-all"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                                            </button>

                                            <div className="flex gap-2">
                                                {[...Array(totalPages)].map((_, i) => (
                                                    <button
                                                        key={i}
                                                        onClick={() => setCurrentPage(i + 1)}
                                                        className={`w-10 h-10 rounded-xl font-bold text-xs transition-all ${currentPage === i + 1
                                                            ? 'bg-red-600 text-white shadow-lg shadow-red-600/20'
                                                            : 'bg-white border border-slate-200 text-slate-400 hover:border-red-600'
                                                            }`}
                                                    >
                                                        {i + 1}
                                                    </button>
                                                ))}
                                            </div>

                                            <button
                                                disabled={currentPage === totalPages}
                                                onClick={() => setCurrentPage(prev => prev + 1)}
                                                className="p-3 rounded-xl border border-slate-200 hover:bg-red-600 hover:text-white disabled:opacity-30 transition-all"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
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