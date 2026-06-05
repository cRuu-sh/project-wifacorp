'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { sendContact } from '@/lib/contact'

export default function BusinessPage() {
    const [activeTab, setActiveTab] = useState('konstruksi')
    const searchParams = useSearchParams()
    const tBusiness = useTranslations('Business')
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

    const businessTabs = [
        { id: 'konstruksi', label: tBusiness('units.construction.title') },
        { id: 'agrobisnis', label: tBusiness('units.agribusiness.title') },
        { id: 'perdagangan', label: tBusiness('units.trading.title') },
        { id: 'kesehatan', label: tBusiness('units.healthcare.title') },
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
            <section className="relative w-full overflow-hidden">
                <div className="relative w-full min-h-[450px] md:h-[80vh] flex items-center justify-center text-center">

                    {/* Static Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0a1128] via-[#0d1a3a] to-[#0a1128]" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(227,30,36,0.12)_0%,_transparent_55%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(227,30,36,0.08)_0%,_transparent_55%)]" />

                    {/* Teks di Atas Gambar */}
                    <div className="relative z-10 px-6">
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white drop-shadow-2xl capitalize italic">
                            {tBusiness('title')}
                        </h1>
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
                                                {tBusiness('konstruksi.heading')}
                                            </h2>
                                            <p className="text-gray-600 leading-relaxed text-lg font-medium text-justify">
                                                Divisi konstruksi <span className="text-red-600 font-bold">WIFACORP</span> memiliki spesialisasi dalam pengadaan barang dan jasa konstruksi berkualitas tinggi. Kami mengintegrasikan teknologi terkini dengan manajemen proyek yang disiplin untuk menghasilkan bangunan yang kokoh dan estetis.
                                            </p>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                                {[tBusiness('konstruksi.item1'), tBusiness('konstruksi.item2'), tBusiness('konstruksi.item3'), tBusiness('konstruksi.item4')].
                                                    map((item, idx) => (
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
                                                <p className="text-white font-black italic text-xl capitalize tracking-widest">{tBusiness('agrobisnis.imageCaption')}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="space-y-6">
                                            <h2 className="text-3xl md:text-4xl font-black text-gray-900 capitalize italic border-l-8 border-red-600 pl-6">
                                                {tBusiness('agrobisnis.heading')}
                                            </h2>
                                            <p className="text-gray-600 leading-relaxed text-lg font-medium text-justify">
                                                Melalui pendekatan agrikultur modern, kami mengelola komoditas unggulan yang mendukung ekonomi lokal dan nasional. Fokus kami adalah pada efisiensi rantai pasok dan kualitas hasil bumi yang kompetitif untuk pasar domestik maupun industri.
                                            </p>
                                            <div className="bg-gray-900 p-8 rounded-[2rem] text-white">
                                                <h4 className="text-red-600 font-black italic mb-2 capitalize tracking-widest">{tBusiness('agrobisnis.coreFocusLabel')}
                                                </h4>
                                                <p className="font-medium italic text-gray-300">Pengelolaan Lahan Produktif, Distribusi Komoditas Utama, dan Implementasi Teknologi Tani Modern.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* 3. MATERIAL SUPPLIER */}
                            {activeTab === 'perdagangan' && (
                                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 text-center">
                                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 capitalize italic">
                                        {tBusiness('trading.heading')}
                                    </h2>
                                    <div className="max-w-4xl mx-auto bg-gray-50 p-12 rounded-[3rem] border-2 border-dashed border-gray-200">
                                        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-bold italic mb-8">
                                            "Menyediakan akses material berkualitas tinggi dan solusi pengadaan barang yang efisien untuk mendukung skala bisnis nasional."
                                        </p>
                                        <div className="flex flex-wrap justify-center gap-6">
                                            {[tBusiness('trading.tag1'), tBusiness('trading.tag2'), tBusiness('trading.tag3'), tBusiness('trading.tag4')]
                                                .map((tag, i) => (
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
                                            PT <span className="text-red-600">  WIFACORP </span> Medistra Nusantara
                                        </h2>
                                        <p className="text-gray-600 leading-relaxed text-lg font-medium">
                                            Divisi kesehatan kami berfokus pada penyediaan alat kesehatan dan layanan medis yang kredibel. Kami berkomitmen untuk meningkatkan kualitas hidup masyarakat melalui distribusi produk medis yang standar internasional.
                                        </p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                            {[
                                                { title: tBusiness('healthcare.box1Title'), desc: tBusiness('healthcare.box1Desc') },
                                                { title: tBusiness('healthcare.box2Title'), desc: tBusiness('healthcare.box2Desc') },
                                                { title: tBusiness('healthcare.box3Title'), desc: tBusiness('healthcare.box3Desc') },
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