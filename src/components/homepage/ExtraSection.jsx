"use client";

import Link from "next/link";

const ExtraSection = () => {
    return (
        <section className="bg-white py-12 px-4 md:px-8 lg:px-10">

            <div className="max-w-7xl mx-auto">

                <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        Extra Section
                    </h2>
                    <p className="text-slate-500 mt-1">
                        Learn more about Qurbani and livestock choices
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <Link
                        href="/qurbanitips"
                        className="bg-slate-900 text-white rounded-2xl p-6 shadow-lg"
                    >
                        <h3 className="text-2xl font-bold mb-3">
                            Qurbani Tips
                        </h3>

                        <p className="text-slate-300 leading-7">
                            Learn how to choose healthy animals, what to check before buying,
                            and important Islamic guidelines for Qurbani.
                        </p>

                        <div className="mt-5 text-emerald-300 font-semibold">
                            Read More →
                        </div>
                    </Link>

                    <Link
                        href="/topbreeds"
                        className="bg-slate-900 text-white rounded-2xl p-6 shadow-lg"
                    >
                        <h3 className="text-2xl font-bold mb-3">
                            Top Breeds
                        </h3>

                        <p className="text-slate-300 leading-7">
                            Discover the best cow, goat, and sheep breeds used for Qurbani
                            with quality and meat value details.
                        </p>

                        <div className="mt-5 text-amber-300 font-semibold">
                            Explore Breeds →
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ExtraSection;