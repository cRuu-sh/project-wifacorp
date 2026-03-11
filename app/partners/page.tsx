'use client'

import Image from 'next/image'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

function PartnerCard({ id, name }: { id: number, name: string }) {
    return (
        <div className="group relative p-5 md:p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex items-center justify-center overflow-hidden hover:-translate-y-2">
            <div className="absolute inset-0 bg-red-600/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>

            <div className="relative z-10 w-full h-12 md:h-20 md:h-20">
                <Image
                    src={`/partner-${id}.png`}
                    alt={name}
                    fill
                    className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500 scale-90 group-hover:scale-110"
                />
            </div>
        </div>
    )
}

export default function PartnersPage() {
    const materialSuppliers = Array.from({ length: 15 }, (_, i) => ({
        id: i + 1,
        name: `Partner ${i + 1}`
    }))

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* HEADER SECTION */}
            <header className="bg-gray-900 pt-40 pb-24 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[100px] rounded-full"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-6 capitalize italic tracking-tighter">
                        Partner <span className="text-red-600">Kami</span>
                    </h1>
                    <div className="w-24 h-2 bg-red-600 mx-auto mb-8 rounded-full"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto font-bold text-lg leading-relaxed italic capitalize">
                        Kami bangga bekerja sama dengan berbagai perusahaan dan organisasi ternama yang turut mendukung kami dalam memberikan layanan terbaik.
                    </p>
                </div>
            </header>

            {/* MAIN CONTENT */}
            <div className="max-w-7xl mx-auto px-6 py-20">

                {/* 1. MATERIAL SUPPLIERS */}
                <section className="mb-24">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-10 w-2 bg-red-600 rounded-full"></div>
                        <h2 className="text-2xl md:text-3xl font-black text-gray-900 capitalize tracking-[0.2em] italic">
                            Material <span className="text-red-600">Suppliers</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8">
                        {materialSuppliers.map((partner) => (
                            <PartnerCard key={partner.id} id={partner.id} name={partner.name} />
                        ))}
                    </div>
                </section>

                {/* 2. HEALTHCARE */}
                <section className="mb-32">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-10 w-2 bg-red-600 rounded-full"></div>
                        <h2 className="text-2xl md:text-3xl font-black text-gray-900 capitalize tracking-[0.2em] italic">
                            Healthcare <span className="text-red-600">Network</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {[
                            { id: 17, name: 'Promed' },
                            { id: 18, name: 'PT. Otto Pharmaceutical Industries' },
                            { id: 19, name: 'PT. Surya Dermato Medica Laboratories' },
                            { id: 20, name: 'PT. Pratapa Normala' },
                            { id: 21, name: 'Sanbe Farma' },
                            { id: 22, name: 'PT. Simex Pharmaceutical Indonesia' },
                            { id: 23, name: 'PT. Interbat' }
                        ].map((p) => (
                            <PartnerCard key={p.id} id={p.id} name={p.name} />
                        ))}
                    </div>
                </section>

                {/* 3. GENERAL TRADING */}
                <section className="mb-32">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-10 w-2 bg-red-600 rounded-full"></div>
                        <h2 className="text-2xl md:text-3xl font-black text-gray-900 capitalize tracking-[0.2em] italic">
                            General <span className="text-red-600">Trading</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {Array.from({ length: 26 }, (_, i) => ({
                            id: i + 24,
                            name: `Trading Partner ${i + 24}`
                        })).map((p) => (
                            <PartnerCard key={p.id} id={p.id} name={p.name} />
                        ))}
                    </div>
                </section>

                {/* 4. AGROBISNIS */}
                <section className="mb-32">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-10 w-2 bg-red-600 rounded-full"></div>
                        <h2 className="text-2xl md:text-3xl font-black text-gray-900 capitalize tracking-[0.2em] italic">
                            Agrobisnis <span className="text-red-600">Strategic</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        <PartnerCard id={50} name="PT. Pupuk Indonesia (Persero)" />
                        <PartnerCard id={51} name="PT. Saprotan Utama" />
                    </div>
                </section>

            </div>

            {/* CONTACT SECTION */}
            <section id="contact" className="relative bg-gradient-to-br from-red-800 via-red-600 to-red-700 py-20 md:py-32 px-6 overflow-hidden">
                {/* Aksesoris Background biar gak sepi */}
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
                        <div className="bg-white rounded-[2.5rem] shadow-2xl p-6 md:p-12 transform hover:-translate-y-2 transition-all duration-500 border border-white/20">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                    <div key={idx} className="flex items-start md:items-center gap-4 md:gap-6 group cursor-pointer">
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