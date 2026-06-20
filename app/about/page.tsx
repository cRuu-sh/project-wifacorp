'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { sendContact } from '@/lib/contact'
import { Suspense } from 'react'

function AboutContent() {
    const searchParams = useSearchParams()
    const [activeTab, setActiveTab] = useState('our-story')
    const tAbout = useTranslations('About')
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

    const tabs = [
        { id: 'our-story', label: tAbout('tabs.story') },
        { id: 'visi-misi', label: tAbout('tabs.visionMission') },
        { id: 'value', label: tAbout('tabs.value') },
        { id: 'team', label: tAbout('tabs.team') },
        { id: 'lisensi', label: tAbout('tabs.license') },
    ]

    useEffect(() => {
        const tab = searchParams.get('tab')
        if (tab) {
            setActiveTab(tab)
        }
    }, [searchParams])

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* BACKGROUND HERO WITH FIXED EFFECT */}
            <section className="relative w-full overflow-hidden">
                <div className="relative w-full min-h-[450px] md:h-[80vh] flex items-center justify-center text-center">

                    {/* Static Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0a1128] via-[#0d1a3a] to-[#0a1128]" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(227,30,36,0.12)_0%,_transparent_55%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(227,30,36,0.08)_0%,_transparent_55%)]" />

                    <div className="relative z-10 px-6 pt-20 md:pt-0">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter text-white drop-shadow-2xl capitalize italic">
                            {tAbout('title')}
                        </h1>
                    </div>
                </div>

                {/* WHITE CONTENT BOX (OVERLAP) */}
                <div className="relative z-20 -mt-24 md:-mt-32 p-4 md:p-8 flex justify-center">
                    <div className="bg-white border border-gray-100 rounded-[2.5rem] shadow-2xl w-full md:w-[85%] max-w-6xl p-8 md:p-12 relative overflow-hidden">
                        {/* Top Red Border Accent */}
                        <div className="absolute top-0 left-0 w-full h-2.5 bg-red-600"></div>

                        {/* TAB NAVIGATION */}
                        <div className="flex flex-wrap md:flex-nowrap justify-center gap-2 md:gap-3 mb-12">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-4 py-2 md:px-8 md:py-3 rounded-full font-black text-xs capitalize tracking-widest transition-all duration-300 ${activeTab === tab.id
                                        ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 scale-105'
                                        : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* TAB CONTENT AREA */}
                        <div className="min-h-[500px] transition-all duration-500">

                            {/* 1. OUR STORY (PROFILE) */}
                            {activeTab === 'our-story' && (
                                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl mx-auto">
                                    <div className="text-center mb-16">
                                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 capitalize italic border-b-4 border-red-600 inline-block pb-2">
                                            {tAbout('story.title')}
                                        </h2>
                                        <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-medium text-justify md:text-center mt-6">
                                            <p>
                                                <span className="text-red-600 font-black">WIFACORP</span> telah berdiri sejak tahun 1992. Perusahaan kami beroperasi di beberapa sektor bisnis, termasuk pengadaan barang dan jasa konstruksi, serta aktif terlibat dalam sektor kesehatan. Dengan pengalaman lebih dari tiga dekade, kami berkomitmen untuk memberikan solusi terbaik bagi mitra kami.
                                            </p>
                                            <p className="bg-gray-50 p-6 rounded-2xl border-l-4 border-gray-900 italic text-sm md:text-base">
                                                Beberapa mitra bisnis WIFACORP antara lain PT. Timah Tbk, PT. DAK, PT. Angkasa Pura II, PT. Bakti Timah Medika, Pemerintah Daerah Kota Pangkalpinang, Kantor Pelayanan Pajak Bangka dan Pangkalpinang, Badan Karantina Pertanian Pangkalpinang, Kantor Pelayanan Bea dan Cukai Kota Pangkalpinang, serta Pemerintah Provinsi Kepulauan Bangka Belitung.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-20">
                                        <h2 className="text-3xl font-black text-gray-900 mb-16 capitalize italic text-center">
                                            {tAbout('story.historyTitle')} <span className="text-red-600">{tAbout('story.historyHighlight')}</span>
                                        </h2>

                                        <div className="relative max-w-5xl mx-auto">
                                            {/* Garis Tengah (Hanya muncul di Desktop) */}
                                            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 hidden md:block"></div>

                                            <div className="space-y-12 md:space-y-0 pb-10">
                                                {[
                                                    { year: '1992', desc: 'PT. Andika Karya Sejahtera telah berdiri sejak tahun 1992 dengan nama CV. Andika. Perusahaan ini bergerak di bidang pengadaan barang dan jasa konstruksi.' },
                                                    { year: '1999', desc: 'CV. Ilham Nusantara didirikan pada tahun 1999. Perusahaan ini bergerak di bidang pengadaan barang dan jasa konstruksi.' },
                                                    { year: '2008', desc: 'CV. Andika berganti nama menjadi PT. Andika Karya Sejahtera dengan Akta Notaris yang dikeluarkan oleh Amorawati, S.H., Nomor 14, tertanggal 19 Januari 2008.' },
                                                    { year: '2024', desc: 'PT. WIFA Medistra Nusantara didirikan pada tahun 2024 dan beroperasi di sektor kesehatan.' }
                                                ].map((item, idx) => (
                                                    <div key={idx} className={`relative flex items-center justify-between md:mb-16 w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                                        {/* Sisi Kosong untuk Spacer di Desktop */}
                                                        <div className="hidden md:block md:w-[45%]"></div>

                                                        {/* Dot di Tengah */}
                                                        <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-red-600 z-10 hidden md:block group-hover:scale-150 transition-transform shadow-sm"></div>

                                                        {/* Konten Card */}
                                                        <div className={`w-full md:w-[45%] pl-8 md:pl-0 group`}>
                                                            {/* Garis Vertikal Mobile */}
                                                            <div className="absolute left-[7px] top-0 h-full w-0.5 bg-gray-200 md:hidden"></div>
                                                            {/* Dot Mobile */}
                                                            <div className="absolute left-0 w-4 h-4 rounded-full bg-white border-4 border-red-600 z-10 md:hidden mt-2"></div>

                                                            <div className={`p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                                                <h3 className="text-3xl font-black text-red-600 italic tracking-tighter mb-3">
                                                                    {item.year}
                                                                </h3>
                                                                <p className="text-gray-600 font-medium leading-relaxed text-sm md:text-base">
                                                                    {item.desc}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* 2. VISI & MISI */}
                            {activeTab === 'visi-misi' && (
                                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-5xl mx-auto space-y-16">
                                    <div className="text-center">
                                        <h2 className="text-3xl font-black text-gray-900 mb-12 capitalize italic border-b-4 border-red-600 inline-block pb-2">{tAbout('visionMission.visionTitle')} & {tAbout('visionMission.missionTitle')}
                                        </h2>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
                                        <div className="flex gap-6 items-start">
                                            <div className="bg-red-600 text-white rounded-2xl p-4 shadow-xl shrink-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <div className="space-y-4">
                                                <h3 className="text-2xl font-black text-gray-900 italic capitalize">{tAbout('visionMission.visionTitle')}</h3>
                                                <ul className="space-y-3 text-gray-600 font-medium list-disc pl-5">
                                                    <li>Menjadi mitra yang berkomitmen dengan integritas tinggi, menawarkan solusi yang terintegrasi, andal, dan terpercaya.</li>
                                                    <li>Menjadi perusahaan pemasok produk dan layanan terbaik dan paling kredibel bagi klien/pelanggan.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="flex gap-6 items-start">
                                            <div className="bg-gray-900 text-white rounded-2xl p-4 shadow-xl shrink-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <circle cx="12" cy="12" r="9" />
                                                    <path d="M12 8v8M8 12h8" />
                                                </svg>
                                            </div>
                                            <div className="space-y-4">
                                                <h3 className="text-2xl font-black text-gray-900 italic capitalize">{tAbout('visionMission.missionTitle')}</h3>
                                                <ul className="space-y-3 text-gray-600 font-medium list-disc pl-5 text-sm leading-relaxed">
                                                    <li>Menyediakan produk andal berkualitas tinggi dan harga kompetitif.</li>
                                                    <li>Membangun kemitraan berkelanjutan dengan menjunjung tinggi kredibilitas.</li>
                                                    <li>Melaksanakan proyek tepat waktu, sesuai anggaran, dan transparan.</li>
                                                    <li>Meningkatkan produktivitas SDM melalui pengembangan kompetensi karyawan.</li>
                                                    <li>Menciptakan lingkungan kerja aman dengan menjaga K3 secara konsisten.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* 3. VALUE */}
                            {activeTab === 'value' && (
                                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 text-center max-w-3xl mx-auto py-10">
                                    <h2 className="text-3xl font-black text-gray-900 mb-8 capitalize italic border-b-4 border-red-600 inline-block pb-2">{tAbout('value.title')}
                                    </h2>
                                    <div className="bg-gray-50 p-10 rounded-[3rem] border-2 border-dashed border-gray-200">
                                        <p className="text-2xl font-bold text-gray-700 leading-relaxed italic">
                                            "Integritas, Kolaborasi, Dan Inovasi Menjadi Nilai Utama Kami Dalam Menciptakan Hasil Terbaik Bagi Klien Dan Masyarakat."
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* 4. TEAM & UNIT BISNIS */}
                            {activeTab === 'team' && (
                                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 text-center max-w-5xl mx-auto">
                                    <h2 className="text-3xl font-black text-gray-900 mb-6 capitalize italic">{tAbout('team.title')}
                                    </h2>
                                    <p className="text-gray-600 font-medium mb-12 max-w-2xl mx-auto">{tAbout('team.subtitle')}</p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                                        {[
                                            { name: "PT. Andika Karya Sejahtera", div: "Divisi Konstruksi & Pengadaan Barang", color: "bg-red-50 text-red-600 hover:bg-red-600" },
                                            { name: "CV. Ilham Nusantara", div: "Divisi Konstruksi & Perdagangan Umum", color: "bg-red-50 text-red-600 hover:bg-red-600" },
                                            { name: "PT WIFA Medistra Nusantara", div: "Divisi Kesehatan", color: "bg-blue-50 text-blue-600 hover:bg-blue-600" }
                                        ].map((unit, i) => (
                                            <div key={i} className="group p-6 md:p-8 border border-gray-100 rounded-[2.5rem] shadow-sm bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                                                <div className={`mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl transition-colors duration-300 group-hover:text-white ${unit.color}`}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-lg font-black text-gray-900 capitalize leading-tight mb-4">{unit.name}</h4>
                                                <div className="w-10 h-1 bg-red-600 mx-auto mb-4 opacity-40 group-hover:w-16 transition-all"></div>
                                                <p className="text-gray-400 text-xs font-bold capitalize italic">{unit.div}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-gray-400 text-xs tracking-[0.2em] font-black border-t border-gray-100 pt-8 capitalize">— Profil Jajaran Manajemen Segera Hadir —</p>
                                </div>
                            )}

                            {/* 5. LISENSI BISNIS */}
                            {activeTab === 'lisensi' && (
                                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 text-center max-w-6xl mx-auto">
                                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 capitalize italic">Perizinan Usaha</h2>
                                    <p className="text-gray-600 font-medium mb-16 max-w-2xl mx-auto">
                                        Wifacorp berkomitmen terhadap kepatuhan legalitas dan transparansi operasional melalui entitas bisnis yang terdaftar secara resmi.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                        {[
                                            {
                                                name: "PT. Andika Karya Sejahtera",
                                                licenses: [
                                                    { label: "Akta Pendirian (CV. Andika)", detail: "No. 10 | 29-12-1992" },
                                                    { label: "Akta Pendirian (PT AKS)", detail: "No. 14 | 19-01-2008" },
                                                    { label: "Nomor Induk Berusaha (NIB)", detail: "0220008670983" }
                                                ]
                                            },
                                            {
                                                name: "CV. Ilham Nusantara",
                                                licenses: [
                                                    { label: "Akta Pendirian", detail: "No. 15 | 22-01-1999" },
                                                    { label: "Nomor Induk Berusaha (NIB)", detail: "0220100430885" }
                                                ]
                                            },
                                            {
                                                name: "PT. Wifa Medistra Nusantara",
                                                licenses: [
                                                    { label: "Akta Pendirian", detail: "No. 01 | 02-12-2024" },
                                                    { label: "Nomor Induk Berusaha (NIB)", detail: "2212240014926" }
                                                ]
                                            }
                                        ].map((company, i) => (
                                            <div key={i} className="relative p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:shadow-xl transition-all duration-500 group text-left">
                                                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                                    <svg viewBox="0 0 24 24" className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>

                                                <h3 className="font-black text-gray-900 text-lg mb-8 tracking-tight leading-tight">
                                                    {company.name}
                                                </h3>

                                                <div className="space-y-6">
                                                    {company.licenses.map((lic, idx) => (
                                                        <div key={idx} className="flex gap-4">
                                                            <div className="mt-1.5 w-2 h-2 rounded-full bg-red-600 flex-shrink-0" />
                                                            <div>
                                                                <p className="text-xs font-bold text-gray-400 capitalize tracking-widest mb-1">{lic.label}</p>
                                                                <p className="text-sm font-bold text-gray-700">{lic.detail}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
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

export default function AboutPage() {
    return (
        <Suspense fallback={null}>
            <AboutContent />
        </Suspense>
    )
}