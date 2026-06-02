import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="w-full">
            {/* Bagian atas: putih */}
            <div className="bg-white text-gray-800 pt-16 pb-10 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 mb-12">
                        {/* Kolom 1: Logo & Deskripsi */}
                        <div className="flex flex-col items-center text-center sm:items-start sm:text-left space-y-6">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl font-black tracking-tighter text-red-700 italic capitalize">WIFACORP</span>
                            </div>
                            <p className="text-gray-500 leading-relaxed font-medium">
                                Kami berkomitmen untuk memberikan layanan terbaik dan berkelanjutan kepada pelanggan kami, didukung oleh tim profesional yang terpercaya.
                            </p>
                        </div>

                        {/* Kolom 2: Menu Navigasi */}
                        <div className="md:pl-12 lg:pl-24">
                            <h3 className="text-sm font-black capitalize tracking-tight mb-6 text-red-700 italic border-l-4 border-red-600 pl-3">
                                Navigasi
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    { name: 'Beranda', href: '/#home' },
                                    { name: 'Tentang WIFA', href: '/about' },
                                    { name: 'Bisnis WIFA', href: '/business' },
                                    { name: 'Mitra WIFA', href: '/#partner' },
                                    { name: 'Karir WIFA', href: '/work' },
                                    { name: 'Kontak', href: '/#contact' },
                                ].map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="block py-1 text-gray-600 hover:text-red-600 transition-colors font-bold text-sm capitalize tracking-wide block"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Kolom 3: Ikuti Kami */}
                        <div>
                            <h3 className="text-sm font-black capitalize tracking-tight mb-6 text-red-700 italic border-l-4 border-red-600 pl-3">
                                Ikuti Kami
                            </h3>
                            <div className="flex items-center justify-center sm:justify-start gap-5">
                                {/* Instagram */}
                                <Link href="#" className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-50 text-gray-700 hover:bg-red-600 hover:text-white transition-all duration-300 shadow-sm border border-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm5.75.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                                    </svg>
                                </Link>
                                {/* YouTube */}
                                <Link href="#" className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-50 text-gray-700 hover:bg-red-600 hover:text-white transition-all duration-300 shadow-sm border border-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19.6 3.2H4.4A4.4 4.4 0 0 0 0 7.6v8.8a4.4 4.4 0 0 0 4.4 4.4h15.2a4.4 4.4 0 0 0 4.4-4.4V7.6a4.4 4.4 0 0 0-4.4-4.4zM9.75 15.02V8.98l6.13 3.02-6.13 3.02z" />
                                    </svg>
                                </Link>
                                {/* X */}
                                <Link href="#" className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-50 text-gray-700 hover:bg-red-600 hover:text-white transition-all duration-300 shadow-sm border border-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.505 11.24h-6.675l-5.22-6.824-5.973 6.824H1.656l7.727-8.823L1.15 2.25h6.844l4.713 6.19 5.537-6.19zM17.1 19.555h1.832L7.045 4.39H5.078l12.022 15.165z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bagian bawah: merah */}
            <div className="bg-red-700 text-white py-8 border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-[12px] md:text-sm font-bold tracking-tight capitalize opacity-90">
                        © {new Date().getFullYear()} WIFACORP Corporation. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}