'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl';
import { ChevronDown, X, Mail, Phone, } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const t = useTranslations('Navbar'); // Sesuaikan namespace dengan JSON (Navbar/navbar)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeLocale, setActiveLocale] = useState('id');
    const [openMobileSub, setOpenMobileSub] = useState<string | null>(null);
    const [isHidden, setIsHidden] = useState(false)
    const lastScrollY = useRef(0)

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

    useEffect(() => {
        if (isMobileMenuOpen) {
            // Kunci total scroll body
            document.body.style.overflow = 'hidden';
            document.body.style.height = '100vh';
        } else {
            document.body.style.overflow = 'unset';
            document.body.style.height = 'auto';
        }
        return () => {
            document.body.style.overflow = 'unset';
            document.body.style.height = 'auto';
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const saved = localStorage.getItem('locale') || 'id';
        setActiveLocale(saved);

        const handleScroll = () => {
            const currentY = window.scrollY
            setIsScrolled(currentY > 50)
            setIsHidden(currentY > lastScrollY.current && currentY > 100)
            lastScrollY.current = currentY
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-8'} ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

                {/* LOGO SECTION */}
                <div className="flex-shrink-0">
                    <Link href="/" className="group flex items-center">
                        <span className="text-xl md:text-2xl font-black text-white uppercase transition-all duration-300 group-hover:text-red-600">
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
                        scroll={true}
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

            {/* MOBILE SIDE DRAWER */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[110] md:hidden"
                        />

                        {/* Drawer Content */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 right-0 w-[85%] bg-[#1a1a1a] z-[120] flex flex-col md:hidden shadow-2xl h-[100dvh] touch-none"
                        >
                            {/* 1. FIXED HEADER (Gak bakal ikut ke-scroll) */}
                            <div className="p-8 flex justify-between items-start shrink-0">
                                <div className="space-y-1">
                                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-black text-white text-[10px] leading-none">WIFACORP.</div>
                                    <p className="text-[10px] font-black tracking-[0.3em] text-white/40 uppercase">Menu</p>
                                </div>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-3 border border-white/10 rounded-full text-white hover:bg-white/5 transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* 2. SCROLLABLE AREA  */}
                            <div className="flex-1 overflow-y-auto px-8 pb-20 touch-pan-y custom-scrollbar bg-[#1a1a1a]">
                                <div className="flex flex-col min-h-full">

                                    {/* Nav Links Group */}
                                    <div className="flex-1 space-y-8 py-4">
                                        {/* Home */}
                                        <Link
                                            href="/"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block text-2xl font-bold text-white/50 hover:text-white transition-colors"
                                        >
                                            {t('home')}
                                        </Link>

                                        {/* About Dropdown */}
                                        <div className="space-y-4">
                                            <button
                                                onClick={() => setOpenMobileSub(openMobileSub === 'about' ? null : 'about')}
                                                className={`flex items-center justify-between w-full text-2xl font-bold transition-colors ${openMobileSub === 'about' ? 'text-red-600' : 'text-white'}`}
                                            >
                                                {t('about')}
                                                <ChevronDown size={20} className={`transition-transform duration-300 ${openMobileSub === 'about' ? 'rotate-180' : ''}`} />
                                            </button>
                                            <AnimatePresence>
                                                {openMobileSub === 'about' && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden pl-4 space-y-5 border-l-2 border-red-600/30"
                                                    >
                                                        {menuStructure.about.map(s => (
                                                            <Link key={s.name} href={s.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-white/40 hover:text-white capitalize transition-colors">{s.name}</Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>

                                        {/* Business Dropdown */}
                                        <div className="space-y-4">
                                            <button
                                                onClick={() => setOpenMobileSub(openMobileSub === 'business' ? null : 'business')}
                                                className={`flex items-center justify-between w-full text-2xl font-bold transition-colors ${openMobileSub === 'business' ? 'text-red-600' : 'text-white'}`}
                                            >
                                                {t('business')}
                                                <ChevronDown size={20} className={`transition-transform duration-300 ${openMobileSub === 'business' ? 'rotate-180' : ''}`} />
                                            </button>
                                            <AnimatePresence>
                                                {openMobileSub === 'business' && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden pl-4 space-y-5 border-l-2 border-red-600/30"
                                                    >
                                                        {menuStructure.business.map(s => (
                                                            <Link key={s.name} href={s.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-white/40 hover:text-white capitalize transition-colors">{s.name}</Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>

                                        {/* Partners & Careers */}
                                        <Link
                                            href="/partners"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block text-2xl font-bold text-white hover:text-red-600 transition-colors"
                                        >
                                            {t('partners')}
                                        </Link>
                                        <Link
                                            href="/work"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block text-2xl font-bold text-white hover:text-red-600 transition-colors"
                                        >
                                            {t('careers')}
                                        </Link>
                                    </div>

                                    {/* 3. FOOTER AREA  */}
                                    <div className="mt-12 pt-8 border-t border-white/10 space-y-8">
                                        <div className="space-y-2">
                                            <p className="text-[10px] font-black tracking-[0.3em] text-white uppercase opacity-50">Get In Touch</p>
                                            <div className="h-1 bg-red-600 w-12"></div>
                                        </div>

                                        <div className="space-y-6">
                                            <a href="mailto:nusantara@wifacorp.com" className="group flex items-center gap-4">
                                                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white shrink-0 group-active:scale-95 transition-transform">
                                                    <Mail size={20} fill="currentColor" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Email Us</span>
                                                    <span className="text-white text-sm font-bold tracking-tight">nusantara@wifacorp.com</span>
                                                </div>
                                            </a>

                                            <a href="tel:+62217975311" className="group flex items-center gap-4">
                                                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white shrink-0 group-active:scale-95 transition-transform">
                                                    <Phone size={20} fill="currentColor" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Call Center</span>
                                                    <span className="text-white text-sm font-bold tracking-tight">+62 21 797 5311</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    )
}