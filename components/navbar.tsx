'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl';
import { ChevronDown, X, Mail, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const t = useTranslations('Navbar'); // Sesuaikan namespace dengan JSON (Navbar/navbar)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeLocale, setActiveLocale] = useState('id');
    const [openMobileSub, setOpenMobileSub] = useState<string | null>(null);

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
            { name: t('agribusiness'), href: '/business?type=agrobisnis' },
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

    // Lock scroll pas mobile menu buka
    useEffect(() => {
        if (isMobileMenuOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
    }, [isMobileMenuOpen]);

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
                </div>

                {/* RIGHT SECTION (Lang & Inquiry Action) */}
                <div className="flex items-center gap-6">
                    {/* Language Switcher */}
                    <div className="hidden md:flex gap-2 items-center text-[10px] font-bold tracking-widest border-r border-white/20 pr-6 mr-2">
                        <button onClick={() => handleLanguageChange('id')} className={`${activeLocale === 'id' ? 'text-red-600' : 'text-white/50'} hover:text-white transition-colors`}>ID</button>
                        <span className="text-white/20">|</span>
                        <button onClick={() => handleLanguageChange('en')} className={`${activeLocale === 'en' ? 'text-red-600' : 'text-white/50'} hover:text-white transition-colors`}>EN</button>
                    </div>

                    {/* Tombol Contact yang sekarang jadi Inquiry Button */}
                    <Link
                        href="/#contact"
                        className="px-6 py-2 border border-white/20 text-[10px] font-bold tracking-widest capitalize hover:bg-red-600 hover:border-red-600 transition-all text-white"
                    >
                        {t('contact')}
                    </Link>

                    {/* Hamburger Button (Mobile) */}
                    <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden flex flex-col gap-1.5 p-2 relative z-[120]">
                        <div className="w-6 h-[2px] bg-white"></div>
                        <div className="w-4 h-[2px] bg-white ml-auto"></div>
                        <div className="w-6 h-[2px] bg-white"></div>
                    </button>
                </div>
            </div>

            {/* MOBILE SIDE DRAWER (ADHI STYLE) */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] md:hidden"
                        />

                        {/* Drawer Content */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-[85%] bg-[#1a1a1a] z-[120] p-8 flex flex-col md:hidden"
                        >
                            {/* Header Drawer */}
                            <div className="flex justify-between items-start mb-12">
                                <div className="space-y-1">
                                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center font-black text-white text-xs">W</div>
                                    <p className="text-[10px] font-black tracking-[0.3em] text-white/40 uppercase">Menu</p>
                                </div>
                                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 border border-white/10 rounded-full text-white">
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Nav Links Accordion */}
                            <div className="flex-1 overflow-y-auto space-y-6">
                                {/* Home - Tambah onClick */}
                                <Link
                                    href="/"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block text-xl font-bold text-white/50 hover:text-red-600"
                                >
                                    {t('home')}
                                </Link>

                                {/* About Dropdown */}
                                <div>
                                    <button
                                        onClick={() => setOpenMobileSub(openMobileSub === 'about' ? null : 'about')}
                                        className={`flex items-center justify-between w-full text-xl font-bold ${openMobileSub === 'about' ? 'text-red-600' : 'text-white'}`}
                                    >
                                        {t('about')} <ChevronDown size={18} className={`transition-transform ${openMobileSub === 'about' ? 'rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {openMobileSub === 'about' && (
                                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pl-4 space-y-4 mt-4 border-l border-white/10">
                                                {menuStructure.about.map(s => (
                                                    <Link key={s.name} href={s.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-bold text-white/40 hover:text-white capitalize">{s.name}</Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Business Dropdown */}
                                <div>
                                    <button
                                        onClick={() => setOpenMobileSub(openMobileSub === 'business' ? null : 'business')}
                                        className={`flex items-center justify-between w-full text-xl font-bold ${openMobileSub === 'business' ? 'text-red-600' : 'text-white'}`}
                                    >
                                        {t('business')} <ChevronDown size={18} className={`transition-transform ${openMobileSub === 'business' ? 'rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {openMobileSub === 'business' && (
                                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pl-4 space-y-4 mt-4 border-l border-white/10">
                                                {menuStructure.business.map(s => (
                                                    <Link key={s.name} href={s.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-bold text-white/40 hover:text-white capitalize">{s.name}</Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Partners & Careers - Tambah onClick */}
                                <Link
                                    href="/partners"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block text-xl font-bold text-white hover:text-red-600"
                                >
                                    {t('partners')}
                                </Link>
                                <Link
                                    href="/work"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block text-xl font-bold text-white hover:text-red-600"
                                >
                                    {t('careers')}
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    )
}