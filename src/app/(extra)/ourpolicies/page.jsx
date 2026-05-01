"use client";

import Link from "next/link";

const PoliciesPage = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-white px-4 md:px-8 lg:px-10 py-16">

            <div className="max-w-5xl mx-auto">

                <div className="text-center mb-14">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Our Policies
                    </h1>
                    <p className="text-slate-400 mt-4">
                        Transparency, trust, and safety are our top priorities.
                    </p>
                </div>

                <div className="space-y-10">

                    <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8">
                        <h2 className="text-2xl font-semibold text-emerald-400 mb-3">
                            Privacy Policy
                        </h2>
                        <p className="text-slate-300 leading-8">
                            We respect your privacy. Your personal information is
                            only used to provide better services and will never be
                            shared with third parties without your consent.
                        </p>
                    </section>

                    <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8">
                        <h2 className="text-2xl font-semibold text-amber-400 mb-3">
                            Buying Policy
                        </h2>
                        <p className="text-slate-300 leading-8">
                            All animals listed on QurbaniHat are verified by sellers.
                            Buyers are responsible for checking details before purchase.
                            We recommend direct communication with sellers for clarity.
                        </p>
                    </section>

                    <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8">
                        <h2 className="text-2xl font-semibold text-pink-400 mb-3">
                            Refund Policy
                        </h2>
                        <p className="text-slate-300 leading-8">
                            Refunds are only applicable in case of verified fraud or
                            listing mismatch. We encourage buyers to confirm everything
                            before completing a deal.
                        </p>
                    </section>

                    <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8">
                        <h2 className="text-2xl font-semibold text-cyan-400 mb-3">
                            Safety Policy
                        </h2>
                        <p className="text-slate-300 leading-8">
                            We ensure a safe marketplace by monitoring listings.
                            Any suspicious activity should be reported immediately
                            for quick action.
                        </p>
                    </section>

                </div>

                <div className="text-center mt-14">
                    <Link
                        href="/"
                        className="inline-block px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 transition font-semibold"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PoliciesPage;