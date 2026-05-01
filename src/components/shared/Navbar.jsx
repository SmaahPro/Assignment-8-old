"use client";

import logo from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState(null);
    const [showAvatar, setShowAvatar] = useState(true);
    const [isSessionLoading, setIsSessionLoading] = useState(true);

    useEffect(() => {
        const getSession = async () => {
            try {
                const { data: session } = await authClient.getSession();
                if (session?.user) {
                    setUser(session.user);
                }
            } catch (err) {
                console.error(err);
            } finally {
                setIsSessionLoading(false);
            }
        };
        getSession();
    }, []);

    useEffect(() => {
        if (!user) return;
        let timeoutId;

        const startCycle = () => {
            setShowAvatar(true);
            timeoutId = setTimeout(() => {
                setShowAvatar(false);
                timeoutId = setTimeout(() => {
                    startCycle();
                }, 2000);
            }, 3000);
        };

        startCycle();

        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [user]);

    const handleLogout = async () => {
        try {
            await authClient.signOut();
            setUser(null);
            router.push("/");
            router.refresh();
        } catch (err) {
            console.error("Logout failed:", err);
        }
    };

    const closeMenu = () => setOpen(false);

    const getLinkClass = (path) => {
        return `text-base font-medium transition-colors duration-200 ${pathname === path
            ? "text-red-500"
            : "text-white hover:text-emerald-400"
            }`;
    };

    const getMobileLinkClass = (path) => {
        return `block py-2 text-base transition-colors duration-200 ${pathname === path
            ? "text-red-500 font-semibold"
            : "text-white hover:text-emerald-400"
            }`;
    };

    return (
        <nav className="bg-slate-950 text-white border-b border-slate-800 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex items-center justify-between h-20 md:h-24">

                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src={logo}
                            alt="QurbaniHat Logo"
                            width={50}
                            height={50}
                            className="rounded-full md:w-[55px] md:h-[55px]"
                        />
                        <h2 className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-emerald-400 to-lime-300 bg-clip-text text-transparent">
                            QurbaniHat
                        </h2>
                    </Link>

                    <div className="hidden md:flex items-center gap-10">
                        <Link href="/" className={getLinkClass("/")}>
                            Home
                        </Link>
                        <Link href="/animals" className={getLinkClass("/animals")}>
                            All Animals
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        {isSessionLoading ? (
                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 bg-slate-800 rounded-full animate-pulse" />
                                <div className="w-20 h-9 bg-slate-800 rounded-lg animate-pulse" />
                            </div>
                        ) : user ? (
                            <div className="flex items-center gap-3">
                                <Link href="/my-profile">
                                    {showAvatar ? (
                                        <div className="w-11 h-11 rounded-full bg-gradient-to-r from-amber-600 to-amber-400 flex items-center justify-center text-white text-xl shadow-md">
                                            🐂
                                        </div>
                                    ) : (
                                        <Image
                                            src={user?.image || "/avatar.png"}
                                            alt="Profile"
                                            width={44}
                                            height={44}
                                            className="rounded-full border-2 border-slate-700 object-cover w-11 h-11"
                                        />
                                    )}
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-sm font-medium"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center gap-3">
                                <Link
                                    href="/login"
                                    className="px-5 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-black font-semibold"
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/register"
                                    className="px-5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-medium"
                                >
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>

                    <button
                        className="md:hidden text-3xl"
                        onClick={() => setOpen(!open)}
                    >
                        ☰
                    </button>
                </div>

                {open && (
                    <div className="md:hidden pb-5 space-y-3">
                        <Link
                            href="/"
                            onClick={closeMenu}
                            className={getMobileLinkClass("/")}
                        >
                            Home
                        </Link>
                        <Link
                            href="/animals"
                            onClick={closeMenu}
                            className={getMobileLinkClass("/animals")}
                        >
                            All Animals
                        </Link>

                        <div className="pt-3 border-t border-slate-800">
                            {isSessionLoading ? (
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-slate-800 rounded-full animate-pulse" />
                                    <div className="w-20 h-8 bg-slate-800 rounded animate-pulse" />
                                </div>
                            ) : user ? (
                                <div className="flex items-center gap-3">
                                    <Link href="/my-profile">
                                        {showAvatar ? (
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-600 to-amber-400 flex items-center justify-center text-white text-base">
                                                🐂
                                            </div>
                                        ) : (
                                            <Image
                                                src={user?.image || "/avatar.png"}
                                                alt="User"
                                                width={40}
                                                height={40}
                                                className="rounded-full border border-slate-700 object-cover w-10 h-10"
                                            />
                                        )}
                                    </Link>
                                    <button
                                        onClick={() => {
                                            handleLogout();
                                            closeMenu();
                                        }}
                                        className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-sm"
                                    >
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-2">
                                    <Link
                                        href="/login"
                                        onClick={closeMenu}
                                        className="px-4 py-2 rounded-lg bg-amber-500 text-black font-semibold text-sm text-center"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        href="/register"
                                        onClick={closeMenu}
                                        className="px-4 py-2 rounded-lg bg-emerald-500 text-white font-medium text-sm text-center"
                                    >
                                        Register
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;