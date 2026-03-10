import Link from 'next/link'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-black text-white py-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Brand Identity */}
                    <div className="md:col-span-2">
                        <h2 className="text-4xl font-black italic tracking-tighter uppercase leading-none">
                            WIFACORP <br /> <span className="text-red-600 text-lg not-italic tracking-[0.3em]">BEYOND CONSTRUCTION</span>
                        </h2>
                        <p className="mt-6 text-sm text-white/50 max-w-sm leading-relaxed">
                            Leading the way in infrastructure development and strategic business units across the nation. Building the future, one project at a time.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-red-600">Company</h4>
                        {['About Us', 'Business Units', 'Projects', 'Careers', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                href="#"
                                className="text-sm font-medium text-white/60 hover:text-white transition-colors"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-red-600">Head Office</h4>
                        <p className="text-sm text-white/60 leading-relaxed">
                            Wifacorp Tower, 12th Floor <br />
                            Sudirman Central Business District <br />
                            Jakarta, Indonesia
                        </p>
                        <p className="text-sm font-bold text-white mt-2">info@wifacorp.com</p>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] uppercase tracking-widest text-white/30">
                        © {currentYear} PT Wifacorp Tbk. All Rights Reserved.
                    </p>
                    <div className="flex gap-8">
                        {['Instagram', 'LinkedIn', 'YouTube'].map((social) => (
                            <Link
                                key={social}
                                href="#"
                                className="text-[10px] uppercase tracking-widest text-white/30 hover:text-red-600 transition-colors"
                            >
                                {social}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}