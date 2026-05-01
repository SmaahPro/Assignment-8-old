"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { FaShieldAlt, FaTruck, FaHandshake, FaUsers, FaArrowRight, FaCheckCircle } from "react-icons/fa";

const AboutPage = () => {
    const values = [
        {
            icon: FaShieldAlt,
            title: "Trusted Sellers",
            desc: "Every seller is reviewed to ensure quality livestock and honest service.",
        },
        {
            icon: FaHandshake,
            title: "Fair Deals",
            desc: "Transparent pricing so buyers can compare and choose confidently.",
        },
        {
            icon: FaTruck,
            title: "Easy Delivery",
            desc: "Smooth communication and delivery support for stress-free booking.",
        },
        {
            icon: FaUsers,
            title: "Customer Care",
            desc: "Friendly support team ready to help whenever you need us.",
        },
    ];

    const stats = [
        { number: "500+", label: "Animals Listed" },
        { number: "100+", label: "Trusted Sellers" },
        { number: "5K+", label: "Happy Visitors" },
        { number: "24/7", label: "Support" },
    ];

    return (
        <section className="bg-slate-950 text-white overflow-hidden">

            <div className="relative border-b border-slate-800">
                <div className="absolute -top-20 left-0 w-72 h-72 bg-emerald-500/20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/20 blur-3xl rounded-full"></div>

                <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 py-20 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-14 items-center">

                        <div>
                            <p className="inline-block px-4 py-2 rounded-full bg-slate-900 text-amber-400 text-sm font-medium mb-5 border border-slate-800">
                                About QurbaniHat
                            </p>

                            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                                A Smarter Way to Buy{" "}
                                <span className="bg-gradient-to-r from-emerald-400 to-lime-300 bg-clip-text text-transparent">
                                    Qurbani Animals
                                </span>
                            </h1>

                            <p className="mt-6 text-slate-300 text-lg leading-8 max-w-xl">
                                QurbaniHat is a modern livestock marketplace built
                                to connect buyers with trusted sellers across
                                Bangladesh. We make your Qurbani easier, safer,
                                and faster.
                            </p>

                            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/allanimals"
                                    className="px-8 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-black font-semibold transition shadow-lg hover:scale-105 text-center"
                                >
                                    Browse Animals
                                </Link>

                                <Link
                                    href="/"
                                    className="px-8 py-3 rounded-xl border border-slate-700 hover:border-emerald-400 hover:text-emerald-400 transition font-semibold text-center"
                                >
                                    Contact Info
                                </Link>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1000&q=80"
                                    alt="Farm"
                                    className="rounded-3xl w-full h-[430px] object-cover"
                                />
                            </div>

                            <div className="absolute -bottom-5 -left-5 bg-slate-900 border border-slate-800 rounded-2xl px-5 py-4 shadow-xl">
                                <p className="text-2xl font-bold text-emerald-400">
                                    100%
                                </p>
                                <p className="text-sm text-slate-400">
                                    Trusted Platform
                                </p>
                            </div>

                            <div className="absolute -top-5 -right-5 bg-amber-500 text-black px-5 py-3 rounded-2xl font-bold shadow-xl">
                                Since 2026
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 py-14">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-emerald-500 transition"
                        >
                            <h3 className="text-3xl font-bold text-emerald-400">
                                {item.number}
                            </h3>
                            <p className="text-slate-400 mt-2 text-sm">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-slate-900 border-y border-slate-800">
                <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 py-20">
                    <div className="grid lg:grid-cols-2 gap-14 items-center">

                        <div>
                            <p className="text-amber-400 text-sm font-medium uppercase mb-3">
                                Our Story
                            </p>

                            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                                Built for Simplicity, Trust & Quality
                            </h2>

                            <p className="mt-6 text-slate-300 leading-8">
                                Traditional livestock buying often takes time,
                                effort, and uncertainty. QurbaniHat was created
                                to modernize the experience with digital
                                convenience and seller transparency.
                            </p>

                            <div className="mt-8 space-y-4">
                                {[
                                    "Verified animals from real sellers",
                                    "Easy browsing and booking",
                                    "Reliable support before purchase",
                                    "Simple experience on all devices",
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3"
                                    >
                                        <FaCheckCircle className="text-emerald-400" />
                                        <span className="text-slate-300">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center justify-center bg-slate-900 border border-slate-800 rounded-3xl h-[430px] shadow-2xl">
                            <Image
                                src={logo}
                                alt="QurbaniHat Logo"
                                width={300}
                                height={300}
                                className="object-contain rounded-full"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 py-20">
                <div className="text-center mb-14">
                    <p className="text-amber-400 text-sm font-medium uppercase mb-3">
                        Why Choose Us
                    </p>

                    <h2 className="text-3xl md:text-5xl font-bold">
                        Designed Around Buyers
                    </h2>

                    <p className="text-slate-400 mt-4 max-w-2xl mx-auto leading-8">
                        We focus on trust, simplicity, and quality so your
                        Qurbani experience feels easy from start to finish.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="bg-slate-900 border border-slate-800 rounded-3xl p-7 hover:-translate-y-2 hover:border-emerald-500 transition duration-300"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-2xl mb-5">
                                    <Icon />
                                </div>

                                <h3 className="text-xl font-bold mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-slate-400 leading-7 text-sm">
                                    {item.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="border-t border-slate-800">
                <div className="max-w-5xl mx-auto px-4 md:px-8 py-20 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                        Ready to Find the Right Animal?
                    </h2>

                    <p className="text-slate-400 mt-5 max-w-2xl mx-auto leading-8">
                        Explore quality livestock from trusted sellers and enjoy
                        a smoother Qurbani buying experience today.
                    </p>

                    <Link
                        href="/animals"
                        className="inline-flex items-center gap-3 mt-8 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-black font-bold transition shadow-lg hover:scale-105"
                    >
                        Browse Animals
                        <FaArrowRight />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;