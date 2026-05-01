import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaXTwitter, FaThreads } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-white mt-10">
            <div className="h-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    <div>
                        <h2 className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-emerald-400 via-lime-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-md">
                            QurbaniHat
                        </h2>

                        <p className="mt-4 text-slate-300 text-sm md:text-base font-medium leading-relaxed">
                            Trusted Digital Marketplace for
                            <span className="text-emerald-400 font-semibold"> Livestock Booking</span>,
                            Easy Purchase & Hassle-Free Qurbani Experience.
                        </p>

                        <div className="mt-5 flex items-center gap-2">
                            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                            <span className="text-xs text-slate-400 uppercase tracking-widest">
                                Secure • Reliable • Modern
                            </span>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-5">Contact Info</h3>

                        <div className="space-y-4 text-sm text-slate-300">
                            <div className="flex gap-3">
                                <FaMapMarkerAlt className="text-amber-500 mt-1" />
                                <p>Dhaka, Bangladesh</p>
                            </div>

                            <div className="flex gap-3 items-center">
                                <FaPhoneAlt className="text-amber-500" />
                                <p>+880 1234-567890</p>
                            </div>

                            <div className="flex gap-3 items-center">
                                <FaEnvelope className="text-amber-500" />
                                <p>support@qurbanihat.com</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-5">Quick Links</h3>
                        <ul className="space-y-3 text-sm text-slate-300">
                            <li>
                                <Link href="/aboutus" className="hover:text-green-400 transition">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:text-green-400 transition">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/animals" className="hover:text-green-400 transition">
                                    All Animals
                                </Link>
                            </li>
                            <li>
                                <Link href="/ourpolicies" className="hover:text-green-400 transition">
                                    Our Policies
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-5">Follow Us</h3>

                        <div className="flex gap-4">
                            {[
                                {
                                    icon: FaFacebookF,
                                    link: "https://www.facebook.com/qurbanirhatbd",
                                    hover: "hover:bg-blue-600",
                                },
                                {
                                    icon: FaXTwitter,
                                    link: "https://twitter.com/qurbanirhatbd",
                                    hover: "hover:bg-amber-500",
                                },
                                {
                                    icon: FaInstagram,
                                    link: "https://www.instagram.com/qurbanirhatbd",
                                    hover: "hover:bg-pink-500",
                                },
                                {
                                    icon: FaThreads,
                                    link: "https://www.threads.net/@qurbanirhatbd",
                                    hover: "hover:bg-amber-500",
                                },
                                {
                                    icon: FaLinkedinIn,
                                    link: "https://linkedin.com/company/qurbanirhatbd",
                                    hover: "hover:bg-blue-700",
                                },
                            ].map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <a
                                        key={index}
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-11 h-11 inline-flex shrink-0 rounded-full bg-slate-800 ${item.hover} transition duration-300 items-center justify-center shadow-md hover:scale-110`}
                                    >
                                        <Icon size={18} />
                                    </a>
                                );
                            })}
                        </div>

                        <p className="text-slate-400 text-sm mt-5">
                            Stay connected with us.
                        </p>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-12 pt-6 text-center text-sm text-slate-500">
                    © {new Date().getFullYear()} QurbaniHat. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;