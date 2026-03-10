'use client'

import Image from 'next/image'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

function PartnerCard({ id, name }: { id: number, name: string }) {
    return (
        <div className="group relative p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex items-center justify-center overflow-hidden hover:-translate-y-2">
            <div className="absolute inset-0 bg-red-600/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>

            <div className="relative z-10 w-full h-16 md:h-20">
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
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 capitalize italic tracking-tighter">
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
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
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
                        <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-[0.2em] italic">
                            Agrobisnis <span className="text-red-600">Strategic</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        <PartnerCard id={50} name="PT. Pupuk Indonesia (Persero)" />
                        <PartnerCard id={51} name="PT. Saprotan Utama" />
                    </div>
                </section>

            </div>

            <Footer />
        </main>
    )
}