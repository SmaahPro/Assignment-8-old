"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { User, Mail, Camera, Edit2, LogOut, ArrowLeft, BadgeCheck, Calendar } from "lucide-react";
import Lottie from "lottie-react";

const loadingAnimation = {
    v: "5.5.7",
    fr: 60,
    ip: 0,
    op: 60,
    w: 100,
    h: 100,
    nm: "Loading",
    ddd: 0,
    assets: [],
    layers: [
        {
            ddd: 0,
            ind: 1,
            ty: 4,
            nm: "Shape Layer",
            sr: 1,
            ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 1, k: [{ t: 0, s: [0], e: [360], h: 0 }], ix: 10 },
                p: { a: 0, k: [50, 50, 0], ix: 2 },
                a: { a: 0, k: [0, 0, 0], ix: 1 },
                s: { a: 0, k: [60, 60, 100], ix: 6 }
            },
            ao: 0,
            shapes: [
                {
                    ty: "rc",
                    d: 1,
                    s: { a: 0, k: [40, 40], ix: 2 },
                    p: { a: 0, k: [0, 0], ix: 3 },
                    r: { a: 0, k: 5, ix: 4 },
                    nm: "Rectangle",
                    mn: "ADBE Vector Shape - Rect",
                    hd: false
                }
            ],
            ty: "st",
            c: { a: 0, k: [0.043, 0.854, 0.533, 1], ix: 1 },
            o: { a: 0, k: 100, ix: 3 },
            w: { a: 0, k: 4, ix: 2 },
            lc: 1,
            lj: 1
        }
    ]
};

const MyProfilePage = () => {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [memberSince, setMemberSince] = useState("");

    useEffect(() => {
        const getSession = async () => {
            try {
                const { data: session, error } = await authClient.getSession();

                if (error || !session?.user) {
                    router.push("/login");
                } else {
                    setUser(session.user);

                    const createdAt = session.user.createdAt || new Date().toISOString();
                    const date = new Date(createdAt);

                    setMemberSince(
                        date.toLocaleDateString("en-US", {
                            month: "long",
                            year: "numeric",
                        })
                    );
                    setLoading(false);
                }
            } catch (err) {
                console.error("Failed to retrieve session", err);
                router.push("/login");
            }
        };

        getSession();
    }, [router]);

    const handleLogout = async () => {
        await authClient.signOut();
        router.push("/");
        router.refresh();
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white gap-4">
                <div className="w-20 h-20">
                    <Lottie animationData={loadingAnimation} loop={true} />
                </div>
                <p className="text-emerald-400 font-medium tracking-wide">Loading Profile...</p>
            </div>
        );
    }

    if (!user) return null;

    const currentYear = new Date().getFullYear();

    return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center px-4 py-8">

            <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center">

                    <div className="relative">
                        <Image
                            src={user?.image || "/avatar.png"}
                            alt="profile"
                            width={130}
                            height={130}
                            className="rounded-full object-cover w-[130px] h-[130px] border-4 border-slate-800"
                            priority
                        />

                        <div className="absolute bottom-2 right-2 bg-emerald-500 p-1 rounded-full border-2 border-slate-900">
                            <BadgeCheck size={14} className="text-white" />
                        </div>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-white mt-4 break-words w-full px-2">
                        {user?.name}
                    </h2>

                    <div className="flex items-center justify-center gap-1 text-emerald-400 text-sm mt-1 w-full">
                        <Calendar size={14} />
                        <span>Member since {memberSince || currentYear}</span>
                    </div>

                    <div className="w-full mt-6">
                        <Link href="/update-profile" prefetch={true}>
                            <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg 
                            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                            hover:from-indigo-600 hover:to-pink-600 
                            text-white font-semibold transition text-sm sm:text-base px-2">
                                <Edit2 size={14} />
                                Update Information
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-center">

                    <h2 className="text-lg font-bold text-white mb-6 text-center md:text-left">
                        Personal Information
                    </h2>

                    <div className="space-y-4">

                        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                            <div className="flex items-center gap-2 text-emerald-400">
                                <User size={16} />
                                <span className="text-sm">Full Name</span>
                            </div>
                            <p className="text-white font-medium mt-1 break-words">
                                {user?.name}
                            </p>
                        </div>

                        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                            <div className="flex items-center gap-2 text-emerald-400">
                                <Mail size={16} />
                                <span className="text-sm">Email</span>
                            </div>
                            <p className="text-white font-medium mt-1 break-all">
                                {user?.email}
                            </p>
                        </div>

                        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                            <div className="flex items-center gap-2 text-emerald-400">
                                <Camera size={16} />
                                <span className="text-sm">Profile Image</span>
                            </div>
                            <p className="text-white font-medium mt-1 break-all">
                                {user?.image ? "Uploaded Image" : "Default Avatar"}
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl mt-8 px-2">
                <Link href="/" prefetch={true} className="flex-1">
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium transition text-sm sm:text-base">
                        <ArrowLeft size={16} />
                        Go Back Home
                    </button>
                </Link>

                <button
                    onClick={handleLogout}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 hover:bg-red-600 border border-red-500/20 text-red-400 hover:text-white transition font-medium text-sm sm:text-base"
                >
                    <LogOut size={16} />
                    Logout
                </button>
            </div>
        </div>
    );
};

export default MyProfilePage;