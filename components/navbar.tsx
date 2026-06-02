'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl';
import { ChevronDown, X, Mail, Phone, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const t = useTranslations('Navbar'); // Sesuaikan namespace dengan JSON (Navbar/navbar)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeLocale, setActiveLocale] = useState('id');
    const [openMobileSub, setOpenMobileSub] = useState<string | null>(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

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

    // Kumpulin semua menu yang bisa dicari
    const searchResources = [
        { name: t('home'), href: '/' },
        { name: t('story'), href: '/about?tab=our-story' },
        { name: t('leadership'), href: '/about?tab=leadership' },
        { name: t('construction'), href: '/business?type=konstruksi' },
        { name: t('agribusiness'), href: '/business?type=agrobisnis' },
        { name: t('trading'), href: '/business?type=perdagangan' },
        { name: t('healthcare'), href: '/business?type=kesehatan' },
        { name: t('partners'), href: '/partners' },
        { name: t('careers'), href: '/work' },
    ];

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

    // Logic Filter: Mulai nyari kalau user udah ngetik minimal 2 huruf
    const filteredResults = searchQuery.length >= 2
        ? searchResources.filter(item =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : [];

    return (
        <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
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
                    {/* Icon Search */}
                    <button
                        onClick={() => setIsSearchOpen(true)}
                        className="text-white/70 hover:text-red-600 transition-all p-2"
                    >
                        <Search size={20} />
                    </button>
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

            {/* Search Overlay with Background Image */}
            <AnimatePresence>
                {isSearchOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] flex flex-col items-center justify-start overflow-y-auto h-[100dvh] bg-[#1a1a1a] pt-20 px-6 custom-scrollbar"
                    >
                        {/* Background Image Wrapper - Fixed */}
                        <div className="fixed inset-0 z-0">
                            <Image
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
                                alt="Search Background"
                                fill
                                priority
                                className="object-cover opacity-40"
                            />
                            {/* Overlay Gelap */}
                            <div className="absolute inset-0 bg-black/90 backdrop-blur-xl"></div>
                        </div>

                        {/* Close Button - Fixed */}
                        <button
                            onClick={() => setIsSearchOpen(false)}
                            className="fixed top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-red-600 transition-all z-[250] p-2"
                        >
                            <X strokeWidth={1} className="w-8 h-8 md:w-12 md:h-12" />
                        </button>

                        {/* Content Container */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="w-full max-w-5xl relative z-10 pb-24"
                        >
                            {/* Branding Small */}
                            <p className="text-red-600 font-black tracking-[0.3em] uppercase text-[10px] md:text-xs mb-8 text-center">
                                Search Wifa Nusantara
                            </p>

                            {/* Input Search Area */}
                            <div className="relative group mb-12">
                                <input
                                    autoFocus
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="What are you looking for?"
                                    className="w-full bg-transparent border-b-2 border-white/20 py-6 md:py-10 text-2xl md:text-7xl font-bold text-white placeholder:text-white/10 focus:outline-none focus:border-red-600 transition-all capitalize tracking-tighter"
                                />
                                <Search
                                    className="absolute right-0 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-red-600 transition-all w-8 h-8 md:w-12 md:h-12"
                                />
                            </div>

                            {/* Results Section */}
                            <div className="w-full max-w-4xl mx-auto">
                                {filteredResults.length > 0 ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {filteredResults.map((result, idx) => (
                                            <Link
                                                key={idx}
                                                href={result.href}
                                                onClick={() => {
                                                    setIsSearchOpen(false);
                                                    setSearchQuery("");
                                                }}
                                                className="group p-6 bg-white/5 hover:bg-red-600 transition-all rounded-2xl border border-white/10 flex items-center justify-between"
                                            >
                                                <div className="flex flex-col">
                                                    <span className="text-white font-bold text-lg md:text-xl capitalize">{result.name}</span>
                                                    <span className="text-white/30 text-[10px] uppercase tracking-widest group-hover:text-white/70">Navigate to Page</span>
                                                </div>
                                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-red-600 transition-all shrink-0">
                                                    <ChevronDown size={20} className="-rotate-90" />
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                ) : searchQuery.length >= 2 ? (
                                    <div className="text-center py-20">
                                        <p className="text-white/30 text-xl italic font-light">
                                            No results found for "<span className="text-white">{searchQuery}</span>"
                                        </p>
                                    </div>
                                ) : (
                                    <div className="text-center py-20 text-white/10 uppercase tracking-[0.4em] text-[10px] font-black">
                                        Start typing to explore...
                                    </div>
                                )}
                            </div>

                            {/* Popular Quick Links */}
                            <div className="mt-20 flex flex-wrap justify-center gap-6 md:gap-10 text-white/30 font-bold italic capitalize text-xs md:text-sm border-t border-white/5 pt-10">
                                <span className="text-white/60 not-italic uppercase tracking-widest font-black text-[10px]">Quick Access:</span>
                                <Link href="/business?type=konstruksi" onClick={() => setIsSearchOpen(false)} className="hover:text-red-600 transition-all">Construction</Link>
                                <Link href="/business?type=agrobisnis" onClick={() => setIsSearchOpen(false)} className="hover:text-red-600 transition-all">Agribusiness</Link>
                                <Link href="/about" onClick={() => setIsSearchOpen(false)} className="hover:text-red-600 transition-all">About Us</Link>
                                <Link href="/partners" onClick={() => setIsSearchOpen(false)} className="hover:text-red-600 transition-all">Partners</Link>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}