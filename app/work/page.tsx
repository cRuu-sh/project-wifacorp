'use client'

import { useTranslations } from 'next-intl'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Image from 'next/image'

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

            <Footer />
        </main>
    )
}