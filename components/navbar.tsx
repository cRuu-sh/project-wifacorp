'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Tentang WIFA', href: '/about' },
        { name: 'Bisnis WIFA', href: '/business' },
        { name: 'Partners WIFA', href: '/partners' },
        { name: 'Contact', href: '/#contact' },
    ]

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
                    {['Home', 'Tentang WIFA', 'Bisnis WIFA', 'Partners WIFA', 'Contact'].map((item) => {
                        // Logika penentuan path
                        const href =
                            item === 'Home' ? '/' :
                                item === 'Tentang WIFA' ? '/about' :
                                    item === 'Bisnis WIFA' ? '/business' :
                                        item === 'Partners WIFA' ? '/partners' :
                                            '/#contact'; // Contact balik ke home section contact

                        return (
                            <Link
                                key={item}
                                href={href}
                                className="text-[10px] font-bold capitalize tracking-[0.3em] text-white/70 hover:text-red-600 transition-colors"
                            >
                                {item}
                            </Link>
                        );
                    })}
                </div>

                {/* CTA BUTTON / MOBILE TOGGLE */}
                <div className="flex items-center gap-4">
                    <button className="px-6 py-2 border border-white/20 text-[10px] font-bold tracking-widest uppercase hover:bg-red-600 hover:border-red-600 transition-all text-white">
                        Inquiry
                    </button>

                    {/* Mobile Menu Icon (Simple version) */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden flex flex-col gap-1.5 p-2 relative z-[110]"
                    >
                        <div className={`w-6 h-[2px] bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                        <div className={`w-4 h-[2px] bg-white ml-auto transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                        <div className={`w-6 h-[2px] bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
                    </button>
                </div>

            </div>

            {/* MOBILE OVERLAY */}
            <div
                className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-[105] transition-all duration-500 md:hidden ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
                    }`}
            >
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-2xl font-black text-white hover:text-red-600 transition-colors uppercase tracking-[0.2em]"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button className="mt-4 px-10 py-4 bg-red-600 text-white font-black tracking-widest uppercase hover:bg-white hover:text-red-600 transition-all duration-300">
                        Inquiry Now
                    </button>
                </div>
            </div>
        </nav>
    )
}