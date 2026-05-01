"use client";

import Link from "next/link";
import { ArrowLeft, Scale, Zap } from "lucide-react";

const TopBreedsPage = () => {
    const breeds = [
        { name: "Deshi Cow", weight: "150-350kg", type: "Cow", desc: "The most trusted choice. Known for lean meat and organic grazing habits." },
        { name: "Pabna Cattle", weight: "300-500kg", type: "Cow", desc: "A superior local breed with a larger frame and excellent meat-to-bone ratio." },
        { name: "Mirkadim White", weight: "250-450kg", type: "Cow", desc: "Legendary white cows. Specially fed for incredibly soft, premium texture meat." },
        { name: "Red Chittagong", weight: "200-400kg", type: "Cow", desc: "Distinct red coat. Small but highly prized for its flavor and quality." },
        { name: "Holstein Friesian", weight: "500-900kg", type: "Cow", desc: "Giant black and white patched cows for those seeking maximum meat volume." },
        { name: "Sahiwal", weight: "400-700kg", type: "Cow", desc: "Known for the prominent hump and reddish-brown coat. Very high-quality beef." },
        { name: "Brahman Cross", weight: "600-1000kg", type: "Cow", desc: "The 'King of Haats'. Massive hump and extremely fast growth rates." },
        { name: "Sindhi Red", weight: "350-600kg", type: "Cow", desc: "Heat tolerant and robust. Offers a perfect balance of fat and muscle." },
        { name: "Gir Cattle", weight: "400-800kg", type: "Cow", desc: "Identified by curved horns and long ears. A majestic breed for Qurbani." },
        { name: "North Bengal Gray", weight: "300-550kg", type: "Cow", desc: "Strong, muscular build. Very common in the northern districts of Bangladesh." },

        { name: "Black Bengal", weight: "20-35kg", type: "Goat", desc: "The 'Black Diamond'. World-famous for its delicious meat and soft skin." },
        { name: "Jamunapari", weight: "60-120kg", type: "Goat", desc: "Tall with drooping ears. Known for massive size and high meat yield." },
        { name: "Beetal", weight: "50-100kg", type: "Goat", desc: "Large frame with roman nose. A popular choice for premium goat sacrifices." },
        { name: "Boer Goat", weight: "80-130kg", type: "Goat", desc: "The ultimate meat goat. Broad shoulders and extremely thick muscle mass." },
        { name: "Sirohi", weight: "40-70kg", type: "Goat", desc: "Brown spotted coat. Very hardy and easily adaptable to urban environments." },
        { name: "Barbari", weight: "30-55kg", type: "Goat", desc: "Small, alert, and colorful. Great meat-to-bone ratio for smaller families." },
        { name: "Totapuri", weight: "70-130kg", type: "Goat", desc: "Parrot-like face. Highly prestigious and physically imposing in the market." },
        { name: "Sozat White", weight: "60-110kg", type: "Goat", desc: "Pure white, elegant, and heavy. Often kept as a status symbol for Qurbani." },

        { name: "Fat-Tailed Dumba", weight: "80-150kg", type: "Dumba", desc: "The most prestigious sacrifice. Stores fat in the tail; extremely soft meat." },
        { name: "Native Sheep", weight: "25-45kg", type: "Sheep", desc: "Hardy local sheep. Lean meat with a very distinct and strong flavor profile." },
        { name: "Garole Sheep", weight: "20-40kg", type: "Sheep", desc: "Known for fine wool and high fertility. The meat is tender and high quality." },
        { name: "Muzzafarnagri", weight: "60-100kg", type: "Sheep", desc: "One of the largest sheep breeds available. Very muscular and heavy." },
        { name: "Dorper Cross", weight: "70-120kg", type: "Sheep", desc: "Black-headed meat sheep. Fast growing and produces excellent carcasses." }
    ];

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white px-4 md:px-8 py-16 relative overflow-hidden">

            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                        Elite Breed Guide
                    </h1>
                    <p className="text-slate-400 mt-4 text-lg max-w-2xl mx-auto">
                        Browse through 20+ world-class breeds.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {breeds.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-3xl p-6 transition-all duration-300"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="text-xl font-bold text-slate-100 group-hover:text-amber-400 transition-colors">
                                    {item.name}
                                </h2>
                                <span className="text-[10px] bg-amber-500/10 border border-amber-500/20 px-2 py-1 rounded text-amber-400 font-bold uppercase">
                                    {item.type}
                                </span>
                            </div>

                            <div className="flex items-center gap-2 mb-4 text-xs text-slate-400">
                                <Scale size={14} className="text-amber-500" />
                                <span>Estimated Weight: {item.weight}</span>
                            </div>

                            <p className="text-slate-400 text-sm leading-relaxed">
                                {item.desc}
                            </p>

                            <div className="mt-6 pt-4 border-t border-slate-800/30 flex justify-end">
                                <Zap size={16} className="text-yellow-500/30 group-hover:text-yellow-500 transition-colors" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 flex flex-col items-center border-t border-slate-900 pt-16">
                    <Link
                        href="/"
                        className="group relative flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold rounded-2xl transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_40px_rgba(249,115,22,0.5)] active:scale-95"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TopBreedsPage;