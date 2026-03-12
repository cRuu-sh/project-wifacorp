'use client'

import { useTranslations } from 'next-intl'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function WorkHistory() {
    const t = useTranslations('Work');

    // Data dummy dulu bray
    const careers = [
        {
            year: "2024 - Present",
            title: "Infrastructure Mega Project",
            company: "PT Wifacorp Tbk",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
        },
        {
            year: "2020 - 2023",
            title: "Urban Development Strategy",
            company: "Subsidiary WIFA",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
        },
        {
            year: "2015 - 2019",
            title: "Bridge & Highway Construction",
            company: "WIFA Engineering",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore."
        }
    ]

    return (
        <main className="bg-black min-h-screen text-white">
            <Navbar />

            {/* Header Section */}
            <section className="pt-40 pb-20 px-6 md:px-12 border-b border-white/10">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">
                        Work <span className="text-red-600">History.</span>
                    </h1>
                    <p className="max-w-2xl text-white/50 text-lg leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.
                        Aliquam erat volutpat. Donec placerat nisl magna.
                    </p>
                </div>
            </section>

            {/* Career List Section */}
            <section className="py-20 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="space-y-24">
                        {careers.map((item, index) => (
                            <div key={index} className="group grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-white/5 pt-12 transition-all duration-500 hover:border-red-600/50">
                                {/* Year Column */}
                                <div className="md:col-span-3">
                                    <span className="text-red-600 font-bold tracking-[0.2em] text-sm uppercase">
                                        {item.year}
                                    </span>
                                </div>

                                {/* Content Column */}
                                <div className="md:col-span-6">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-red-600 transition-colors">
                                        {item.title}
                                    </h2>
                                    <h3 className="text-white/40 font-medium text-xl mb-6">
                                        {item.company}
                                    </h3>
                                    <p className="text-white/60 leading-relaxed max-w-xl">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Arrow/Action Column */}
                                <div className="md:col-span-3 flex md:justify-end items-start pt-2">
                                    <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-500">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="7" y1="17" x2="17" y2="7"></line>
                                            <polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}