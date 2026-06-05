'use client'

import { useState, useMemo, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import { allProjectsData } from '@/data/projectsData'
import { sendContact } from '@/lib/contact'


export default function WorkHistory() {
    const t = useTranslations('Work');
    const tPartners = useTranslations('Partners')
    const tContact = useTranslations('Contact')
    const tMaintenance = useTranslations('Maintenance')

    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')
        try {
            await sendContact(formData)
            setStatus('success')
            setFormData({ name: '', email: '', message: '' })
        } catch {
            setStatus('error')
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }

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
        })
            .sort((a, b) => Number(b.year) - Number(a.year));
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
    ]

    return (
        <main className="bg-[#1a1a1a] min-h-screen text-slate-900">
            <Navbar />

            {/* HERO SECTION - Background */}
            <section className="relative h-[70vh] w-full overflow-hidden">

                {/* Static Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a1128] via-[#0d1a3a] to-[#0a1128]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(227,30,36,0.12)_0%,_transparent_55%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(227,30,36,0.08)_0%,_transparent_55%)]" />

                {/* Teks Hero Center */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                    <h1 className="text-white text-6xl md:text-8xl font-black italic tracking-tighter capitalize">
                        {t('heroTitle')}
                    </h1>
                </div>
            </section>

            {/* CONTENT SECTION - Efek Card Putih Melengkung */}
            <section className="relative z-20 -mt-20">
                <div className="bg-white rounded-t-[60px] pt-20 pb-32 px-6 md:px-12 min-h-screen">
                    <div className="max-w-7xl mx-auto"> {/* Lebarin container biar tabel leluasa */}

                        {/* Header Riwayat - Tetap Center */}
                        <div className="text-center mb-20">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 capitalize inline-block relative">
                                {t('historyTitle')}
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
                                            {t('projectLabel')} {project.year}
                                        </span>
                                        <span className="text-slate-200 font-black text-2xl italic group-hover:text-red-100 transition-colors">0{idx + 1}</span>
                                    </div>

                                    {/* Judul Project (Capitalize) */}
                                    <h3 className="text-lg font-black text-slate-900 leading-tight mb-6 min-h-[4rem] group-hover:text-red-600 transition-colors">
                                        {project.title}
                                    </h3>

                                    {/* Hover Decor */}
                                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-red-600 group-hover:w-full transition-all duration-500"></div>
                                </div>
                            ))}
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
                                {tPartners('title')} <span>{tPartners('titleHighlight')}</span>
                            </h2>
                            <div className="h-1.5 bg-red-600 w-24 mx-auto mb-10"></div>
                            <p className="text-gray-500 font-medium max-w-2xl mx-auto text-lg leading-relaxed">
                                {tPartners('description')}</p>
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
                                    <span className="relative z-10">{tPartners('cta')}</span>
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
                            {tMaintenance('label')}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-black text-gray-900 italic tracking-tighter mb-2">
                            {tMaintenance('title')}
                        </h3>
                        <p className="text-gray-500 text-sm font-medium">
                            {tMaintenance('desc')}
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
                            {tContact('title')} <span className="text-white-900/30">{tContact('titleHighlight')}</span>
                        </h2>
                        <div className="h-2 bg-white w-24 mx-auto mb-8"></div>
                        <p className="text-white/90 font-bold text-lg max-w-2xl mx-auto leading-relaxed">
                            {tContact('description')}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Formulir Kontak */}
                        <div className="bg-white rounded-[2.5rem] shadow-2xl p-10 md:p-12 transform hover:-translate-y-2 transition-all duration-500 border border-white/20">
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="block text-gray-900 font-black capitalize text-xs tracking-widest ml-2">{tContact('nameLabel')}</label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder={tContact('namePlaceholder')}
                                            className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-red-600 focus:bg-white focus:outline-none transition-all font-medium text-gray-900"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="block text-gray-900 font-black capitalize text-xs tracking-widest ml-2">{tContact('emailLabel')}</label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder={tContact('emailPlaceholder')}
                                            className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-red-600 focus:bg-white focus:outline-none transition-all font-medium text-gray-900"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="block text-gray-900 font-black capitalize text-xs tracking-widest ml-2">{tContact('messageLabel')}</label>
                                    <textarea
                                        id="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        placeholder={tContact('messagePlaceholder')}
                                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-red-600 focus:bg-white focus:outline-none transition-all font-medium text-gray-900 resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full bg-red-600 text-white font-black py-5 rounded-2xl hover:bg-gray-900 transition-all duration-300 shadow-xl capitalize tracking-[0.3em] text-sm group disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {status === 'loading' ? 'Mengirim...' : tContact('submit')}
                                    <span className="inline-block ml-3 group-hover:translate-x-2 transition-transform">→</span>
                                </button>

                                {status === 'success' && (
                                    <p className="text-green-600 text-sm font-bold text-center pt-2">
                                        ✓ Pesan terkirim! Kami akan segera menghubungi Anda.
                                    </p>
                                )}
                                {status === 'error' && (
                                    <p className="text-red-500 text-sm font-bold text-center pt-2">
                                        ✗ Gagal mengirim. Silakan coba lagi.
                                    </p>
                                )}
                            </form>
                        </div>

                        {/* Info Kontak */}
                        <div className="text-white lg:pt-8 space-y-12">
                            <div className="space-y-6">
                                <h3 className="text-3xl md:text-4xl font-black capitalize italic tracking-tighter leading-tight">
                                    {tContact('directTitle')}
                                </h3>
                                <p className="text-white/80 font-medium text-lg max-w-md">
                                    {tContact('directDesc')}
                                </p>
                            </div>

                            <div className="space-y-6">
                                {[
                                    {
                                        icon: <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />,
                                        text: tContact('address')
                                    },
                                    {
                                        icon: <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />,
                                        text: tContact('email')
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