'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)

    // Efek buat deteksi scroll biar navbar berubah warna
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav
            className={`fixed top-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-8'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

                {/* LOGO AREA - Only Icon */}
                <Link href="/" className="group flex items-center">
                    <div className="relative w-10 h-10 md:w-12 md:h-12 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                        <Image
                            src="/wifa_icon.png" // 
                            alt="Wifacorp Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </Link>

                {/* MENU LINKS (Desktop) */}
                <div className="hidden md:flex items-center gap-10">
                    {['Home', 'Business Units', 'Projects', 'Careers', 'Contact'].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase().replace(' ', '-')}`}
                            className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70 hover:text-red-600 transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* CTA BUTTON / MOBILE TOGGLE */}
                <div className="flex items-center gap-4">
                    <button className="px-6 py-2 border border-white/20 text-[10px] font-bold tracking-widest uppercase hover:bg-red-600 hover:border-red-600 transition-all text-white">
                        Inquiry
                    </button>

                    {/* Mobile Menu Icon (Simple version) */}
                    <button className="md:hidden flex flex-col gap-1.5 p-2">
                        <div className="w-6 h-[2px] bg-white"></div>
                        <div className="w-4 h-[2px] bg-white ml-auto"></div>
                    </button>
                </div>

            </div>
        </nav>
    )
}