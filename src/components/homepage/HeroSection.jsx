"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";

const HeroSection = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getSession = async () => {
            try {
                const { data: session } = await authClient.getSession();
                if (session?.user) {
                    setUser(session.user);
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.error("Session check failed:", error);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };
        getSession();
    }, []);

    useEffect(() => {
        const checkAuth = async () => {
            const { data: session } = await authClient.getSession();
            setUser(session?.user || null);
        };

        const interval = setInterval(checkAuth, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative overflow-hidden bg-slate-950 text-white">

            <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/15 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-500/15 blur-3xl rounded-full"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 py-14 md:py-18 relative z-10">
                <div className="grid md:grid-cols-2 gap-8 items-center">

                    <div>
                        <p className="inline-block px-4 py-2 rounded-full bg-slate-800 text-amber-400 text-sm font-medium mb-4">
                            Trusted Livestock Marketplace
                        </p>

                        <h1 className="text-4xl md:text-5xl font-extrabold leading-snug">
                            Find Your Perfect{" "}
                            <span className="bg-gradient-to-r from-emerald-400 to-lime-300 bg-clip-text text-transparent">
                                Qurbani Animal
                            </span>
                        </h1>

                        <p className="mt-4 text-slate-300 text-base md:text-lg leading-7 max-w-xl">
                            Explore healthy cows, goats, sheep, and premium breeds
                            from verified sellers across Bangladesh.
                        </p>

                        <div className="mt-7 flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/animals"
                                className="px-7 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 transition duration-300 font-semibold text-black text-center shadow-lg hover:scale-105"
                            >
                                Browse Animals
                            </Link>

                            {!loading && !user && (
                                <Link
                                    href="/register"
                                    className="px-7 py-3 rounded-xl border border-slate-700 hover:border-amber-400 hover:text-amber-400 transition font-semibold text-center"
                                >
                                    Join Now
                                </Link>
                            )}
                        </div>

                        <div className="grid grid-cols-3 gap-5 mt-8 max-w-md">
                            <div>
                                <h3 className="text-2xl font-bold text-emerald-400">
                                    500+
                                </h3>
                                <p className="text-sm text-slate-400">Animals</p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-amber-400">
                                    100+
                                </h3>
                                <p className="text-sm text-slate-400">Sellers</p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-cyan-400">
                                    24/7
                                </h3>
                                <p className="text-sm text-slate-400">Support</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&w=900&q=80"
                            alt="Cow"
                            className="w-full max-w-md md:max-w-lg h-auto object-cover rounded-3xl transition duration-700 hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;