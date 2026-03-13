'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
    const t = useTranslations('Navbar'); // Sesuaikan namespace dengan JSON (Navbar/navbar)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeLocale, setActiveLocale] = useState('id');

    const navLinks = [
        { name: 'home', href: '/' },
        { name: 'about', href: '/about' },
        { name: 'business', href: '/business' },
        { name: 'partners', href: '/partners' },
        { name: 'careers', href: '/work' },
        { name: 'contact', href: '/#contact' },
    ]

    // State untuk kontrol dropdown desktop
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const menuStructure = {
        about: [
            { name: t('story'), href: '/about?tab=our-story' },
            { name: t('visionMission'), href: '/about?tab=visi-misi' },
            { name: t('value'), href: '/about?tab=value' },
            { name: t('team'), href: '/about?tab=team' },
            { name: t('license'), href: '/about?tab=lisensi' },
        ],
        business: [
            { name: t('construction'), href: '/business?type=konstruksi' },
            { name: t('agrobisnis'), href: '/business?type=agrobisnis' },
            { name: t('trading'), href: '/business?type=perdagangan' },
            { name: t('healthcare'), href: '/business?type=kesehatan' },
        ]
    };

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
                        <span className="text-xl md:text-2xl font-black tracking-[0.3em] text-white uppercase transition-all duration-300 group-hover:text-red-600">
                            WIFACORP<span className="text-red-600 group-hover:text-white">.</span>
                        </span>
                    </Link>
                </div>

                {/* DESKTOP MENU */}
                <div className="hidden md:flex items-center gap-8">

                    {/* DROPDOWN: ABOUT */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setOpenDropdown('about')}
                        onMouseLeave={() => setOpenDropdown(null)}
                    >
                        <button className="text-[10px] font-bold capitalize tracking-[0.2em] text-white/70 hover:text-red-600 flex items-center gap-1 transition-all py-4">
                            {t('about')} <ChevronDown size={12} className={`transition-transform duration-300 ${openDropdown === 'about' ? 'rotate-180' : ''}`} />
                        </button>

                        <div className={`absolute top-[90%] left-0 pt-2 w-56 transition-all duration-300 origin-top ${openDropdown === 'about' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                            <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/20">
                                {menuStructure.about.map((item) => (
                                    <Link key={item.name} href={item.href} className="block px-4 py-3 text-[9px] font-black capitalize tracking-widest text-slate-800 hover:text-red-600 hover:bg-slate-50 rounded-xl transition-all">
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* DROPDOWN: BUSINESS */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setOpenDropdown('business')}
                        onMouseLeave={() => setOpenDropdown(null)}
                    >
                        <button className="text-[10px] font-bold capitalize tracking-[0.2em] text-white/70 hover:text-red-600 flex items-center gap-1 transition-all py-4">
                            {t('business')} <ChevronDown size={12} className={`transition-transform duration-300 ${openDropdown === 'business' ? 'rotate-180' : ''}`} />
                        </button>

                        <div className={`absolute top-[90%] left-0 pt-2 w-64 transition-all duration-300 origin-top ${openDropdown === 'business' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                            <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/20">
                                {menuStructure.business.map((item) => (
                                    <Link key={item.name} href={item.href} className="block px-4 py-3 text-[9px] font-black capitalize tracking-widest text-slate-800 hover:text-red-600 hover:bg-slate-50 rounded-xl transition-all">
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* REGULAR LINKS */}
                    <Link href="/partners" className="text-[10px] font-bold capitalize tracking-[0.2em] text-white/70 hover:text-red-600 transition-all">
                        {t('partners')}
                    </Link>
                    <Link href="/work" className="text-[10px] font-bold capitalize tracking-[0.2em] text-white/70 hover:text-red-600 transition-all">
                        {t('careers')}
                    </Link>
                    <Link href="/#contact" className="text-[10px] font-bold capitalize tracking-[0.2em] text-white/70 hover:text-red-600 transition-all">
                        {t('contact')}
                    </Link>
                </div>

                {/* RIGHT SECTION (Lang & Inquiry) */}
                <div className="flex items-center gap-6">
                    <div className="hidden md:flex gap-2 items-center text-[10px] font-bold tracking-widest border-r border-white/20 pr-6 mr-2">
                        <button onClick={() => handleLanguageChange('id')} className={`${activeLocale === 'id' ? 'text-red-600' : 'text-white/50'} hover:text-white transition-colors`}>ID</button>
                        <span className="text-white/20">|</span>
                        <button onClick={() => handleLanguageChange('en')} className={`${activeLocale === 'en' ? 'text-red-600' : 'text-white/50'} hover:text-white transition-colors`}>EN</button>
                    </div>
                    <button className="px-6 py-2 border border-white/20 text-[10px] font-bold tracking-widest capitalize hover:bg-red-600 hover:border-red-600 transition-all text-white">Inquiry</button>

                    {/* HAMBURGER (Sama kayak sebelumnya) */}
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden flex flex-col gap-1.5 p-2 relative z-[120]">
                        <div className={`w-6 h-[2px] bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                        <div className={`w-4 h-[2px] bg-white ml-auto transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                        <div className={`w-6 h-[2px] bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
                    </button>
                </div>
            </div>

            {/* MOBILE MENU (Disederhanakan) */}
            <div className={`fixed inset-0 bg-black/98 backdrop-blur-2xl z-[115] transition-all duration-700 md:hidden ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
                <div className="flex flex-col items-center justify-center h-full gap-8 overflow-y-auto pt-20 pb-10">
                    <p className="text-[8px] font-black tracking-[0.5em] text-red-600 uppercase">Menu About</p>
                    {menuStructure.about.map((item) => (
                        <Link key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-black text-white hover:text-red-600 transition-all uppercase tracking-widest">{item.name}</Link>
                    ))}

                    <div className="w-12 h-[1px] bg-white/10 my-4"></div>

                    <p className="text-[8px] font-black tracking-[0.5em] text-red-600 uppercase">Menu Business</p>
                    {menuStructure.business.map((item) => (
                        <Link key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-black text-white hover:text-red-600 transition-all uppercase tracking-widest">{item.name}</Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}