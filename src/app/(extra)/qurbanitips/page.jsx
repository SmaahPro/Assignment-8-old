"use client";

import Link from "next/link";

const QurbaniTipsPage = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-white px-4 md:px-8 lg:px-10 py-16">

            <div className="max-w-5xl mx-auto">

                <h1 className="text-4xl md:text-5xl font-bold text-emerald-400">
                    Qurbani Tips
                </h1>

                <p className="text-slate-400 mt-4 leading-7">
                    Follow these essential tips to choose the right animal and perform a proper and accepted Qurbani.
                </p>

                <div className="mt-10 space-y-6">

                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                        <h2 className="text-xl font-semibold mb-2">1. Choose Healthy Animals</h2>
                        <p className="text-slate-300 leading-7">
                            Make sure the animal is active, strong, and free from diseases like eye infection,
                            skin issues, or weakness. A healthy animal gives better meat quality.
                        </p>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                        <h2 className="text-xl font-semibold mb-2">2. Check Age Requirement</h2>
                        <p className="text-slate-300 leading-7">
                            Cow/Buffalo must be at least 2 years old. Goat/Sheep must be at least 1 year old.
                            Age matters for valid Qurbani acceptance.
                        </p>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                        <h2 className="text-xl font-semibold mb-2">3. Avoid Physical Defects</h2>
                        <p className="text-slate-300 leading-7">
                            Do not choose animals with broken horns, missing teeth, blind eyes, or severe injuries.
                            Such defects can invalidate Qurbani.
                        </p>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                        <h2 className="text-xl font-semibold mb-2">4. Buy from Trusted Sellers</h2>
                        <p className="text-slate-300 leading-7">
                            Always purchase from verified sellers to avoid fraud, fake pricing, or unhealthy animals.
                        </p>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                        <h2 className="text-xl font-semibold mb-2">5. Check Feeding & Care</h2>
                        <p className="text-slate-300 leading-7">
                            Animals that are well-fed and properly cared for give better meat quality.
                            Ask sellers about diet and maintenance.
                        </p>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                        <h2 className="text-xl font-semibold mb-2">6. Time of Purchase</h2>
                        <p className="text-slate-300 leading-7">
                            Buy early before Eid rush to get better prices and healthier choices.
                        </p>
                    </div>

                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/"
                        className="inline-block px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 transition font-semibold"
                    >
                        ← Go Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default QurbaniTipsPage;