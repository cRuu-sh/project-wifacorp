'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl';

export default function Navbar() {
    const t = useTranslations('Navbar'); // Sesuaikan namespace dengan JSON (Navbar/navbar)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeLocale, setActiveLocale] = useState('id');

    // Definisikan navLinks di sini biar kebaca sampe ke bawah (Mobile Menu)
    // 'name' di sini adalah KEY di file JSON 
    const navLinks = [
        { name: 'home', href: '/' },
        { name: 'about', href: '/about' },
        { name: 'business', href: '/business' },
        { name: 'partners', href: '/partners' },
        { name: 'contact', href: '/#contact' },
    ]

    useEffect(() => {
        const saved = localStorage.getItem('locale') || 'id';
        setActiveLocale(saved);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleLanguageChange = (lang: string) => {
        localStorage.setItem('locale', lang);
        window.location.reload();
    };

    return (
        <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

                {/* LOGO SECTION */}
                <div className="flex-shrink-0">
                    <Link href="/" className="group flex items-center">
                        <span className="text-xl md:text-2xl font-black tracking-[0.3em] text-white transition-all duration-300 group-hover:text-red-600 uppercase">
                            WIFACORP<span className="text-red-600 group-hover:text-white">.</span>
                        </span>
                    </Link>
                </div>

                {/* MENU LINKS (Desktop) */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[10px] font-bold capitalize tracking-[0.3em] text-white/70 hover:text-red-600 transition-colors"
                        >
                            {t(link.name)} {/* <--- Panggil fungsi t() di sini */}
                        </Link>
                    ))}
                </div>

                {/* BUTTONS (Language & Inquiry) */}
                <div className="flex items-center gap-6">
                    <div className="hidden md:flex gap-2 items-center text-[10px] font-bold tracking-widest border-r border-white/20 pr-6 mr-2">
                        <button
                            onClick={() => handleLanguageChange('id')}
                            className={`${activeLocale === 'id' ? 'text-red-600' : 'text-white/50'} hover:text-white transition-colors`}
                        >
                            ID
                        </button>
                        <span className="text-white/20">|</span>
                        <button
                            onClick={() => handleLanguageChange('en')}
                            className={`${activeLocale === 'en' ? 'text-red-600' : 'text-white/50'} hover:text-white transition-colors`}
                        >
                            EN
                        </button>
                    </div>

                    <button className="px-6 py-2 border border-white/20 text-[10px] font-bold tracking-widest uppercase hover:bg-red-600 hover:border-red-600 transition-all text-white">
                        Inquiry
                    </button>

                    {/* Hamburger Button */}
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden flex flex-col gap-1.5 p-2 relative z-[110]">
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
                            className="text-2xl font-black text-white hover:text-red-600 transition-colors capitalize tracking-[0.2em]"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button className="mt-4 px-10 py-4 bg-red-600 text-white font-black tracking-widest uppercase hover:bg-white hover:text-red-600 transition-all duration-300">
                        Inquiry Now
                    </button>
                </div>
            </div>
        </nav >
    )
}