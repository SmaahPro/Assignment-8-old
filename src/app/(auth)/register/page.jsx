"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { User, Mail, Image as ImageIcon, Lock, ArrowRight, AlertCircle, Eye, EyeOff, CheckCircle, Loader2, Rocket, XCircle } from "lucide-react";
import { authClient } from "@/lib/auth-client";

const RegisterPage = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isValidImage, setIsValidImage] = useState(false);
    const [isCheckingImage, setIsCheckingImage] = useState(false);
    const [formMessage, setFormMessage] = useState({ type: "", text: "" });

    const {
        register,
        handleSubmit,
        watch,
        reset,
        clearErrors,
        setError,
        formState: { errors },
    } = useForm();

    const password = watch("password");
    const photoUrl = watch("photo");

    useEffect(() => {
        if (!photoUrl || photoUrl.trim() === "") {
            setIsValidImage(false);
            setIsCheckingImage(false);
            return;
        }

        setIsCheckingImage(true);
        clearErrors("photo");
        setFormMessage({ type: "", text: "" });

        const img = new Image();

        img.onload = () => {
            setIsValidImage(true);
            setIsCheckingImage(false);
            clearErrors("photo");
        };

        img.onerror = () => {
            setIsValidImage(false);
            setIsCheckingImage(false);
            setError("photo", { type: "manual", message: "No image found at this URL" });
        };

        img.src = photoUrl;

        return () => {
            img.onload = null;
            img.onerror = null;
        };
    }, [photoUrl, setError, clearErrors]);

    const validationRules = {
        name: {
            required: "Full name is required",
            minLength: {
                value: 3,
                message: "Name must be at least 3 characters"
            },
            pattern: {
                value: /^[a-zA-Z\s\u0980-\u09FF]+$/,
                message: "Name can only contain letters and spaces"
            }
        },
        email: {
            required: "Email is required",
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
            }
        },
        photo: {
            required: "Photo URL is required",
            validate: () => {
                if (photoUrl && !isValidImage && !isCheckingImage) {
                    return "Please enter a valid image URL";
                }
                return true;
            }
        },
        password: {
            required: "Password is required",
            minLength: {
                value: 6,
                message: "Password must be at least 6 characters"
            },
            pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                message: "Password must contain uppercase, lowercase and number"
            }
        },
        confirmPassword: {
            required: "Please confirm your password",
            validate: (value) => value === password || "Passwords do not match"
        }
    };

    const onSubmit = async (data) => {
        setIsLoading(true);
        setFormMessage({ type: "", text: "" });

        if (!isValidImage) {
            setFormMessage({ type: "error", text: "Please enter a valid image URL that actually exists!" });
            setIsLoading(false);
            return;
        }

        try {
            const { data: result, error } = await authClient.signUp.email({
                name: data.name,
                email: data.email,
                password: data.password,
                image: data.photo,
            });

            if (!error) {
                setFormMessage({ type: "success", text: "Registration successful! Redirecting to login..." });
                reset();
                setIsValidImage(false);
                setTimeout(() => {
                    router.push("/login?registered=true");
                }, 2000);
            } else {
                setFormMessage({ type: "error", text: error.message || "Registration failed!" });
            }
        } catch (err) {
            setFormMessage({ type: "error", text: "Network error! Please check your connection." });
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setIsLoading(true);
        setFormMessage({ type: "", text: "" });

        try {
            await authClient.signIn.social({
                provider: "google",
                callbackURL: "/",
            });
        } catch (err) {
            setFormMessage({ type: "error", text: "Google login failed! Please try again." });
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 relative overflow-hidden">

            <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-emerald-600/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-teal-600/10 rounded-full blur-[100px] -z-10" />

            <div className="w-full max-w-md bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 shadow-xl mx-auto">

                <div className="text-center mb-5">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 mb-2">
                        <Rocket size={22} className="text-emerald-400" />
                    </div>
                    <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                        Create Account
                    </h1>
                    <p className="text-slate-400 mt-0.5 text-xs">
                        Join us to start your Qurbani journey
                    </p>
                </div>

                {formMessage.text && (
                    <div className={`mb-4 rounded-lg p-3 backdrop-blur-sm transition-all duration-300 ${formMessage.type === "success"
                        ? "bg-emerald-500/15 border-l-4 border-emerald-500"
                        : "bg-red-500/15 border-l-4 border-red-500"
                        }`}>
                        <div className="flex items-center gap-2.5">
                            <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${formMessage.type === "success" ? "bg-emerald-500/20" : "bg-red-500/20"
                                }`}>
                                {formMessage.type === "success" ? (
                                    <CheckCircle size={14} className="text-emerald-400" />
                                ) : (
                                    <AlertCircle size={14} className="text-red-400" />
                                )}
                            </div>
                            <div className="flex-1">
                                <p className={`text-xs font-medium ${formMessage.type === "success" ? "text-emerald-400" : "text-red-400"
                                    }`}>
                                    {formMessage.type === "success" ? "Success!" : "Error!"}
                                </p>
                                <p className="text-[11px] text-slate-300 mt-0.5">
                                    {formMessage.text}
                                </p>
                            </div>
                            <button
                                onClick={() => setFormMessage({ type: "", text: "" })}
                                className="text-slate-500 hover:text-slate-300 transition"
                            >
                                <XCircle size={12} />
                            </button>
                        </div>
                    </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5">
                    <div>
                        <div className="relative">
                            <User size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Full Name"
                                {...register("name", validationRules.name)}
                                className="w-full pl-9 pr-3 py-2 rounded-lg bg-slate-950/50 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all border border-slate-700/50"
                            />
                        </div>
                        {errors.name && (
                            <p className="text-red-400 text-[11px] mt-1 flex items-center gap-1">
                                <AlertCircle size={9} /> {errors.name.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <div className="relative">
                            <Mail size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                type="email"
                                placeholder="Email Address"
                                {...register("email", validationRules.email)}
                                className="w-full pl-9 pr-3 py-2 rounded-lg bg-slate-950/50 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all border border-slate-700/50"
                            />
                        </div>
                        {errors.email && (
                            <p className="text-red-400 text-[11px] mt-1 flex items-center gap-1">
                                <AlertCircle size={9} /> {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <div className="relative">
                            <ImageIcon size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Profile Photo URL"
                                {...register("photo", validationRules.photo)}
                                className="w-full pl-9 pr-3 py-2 rounded-lg bg-slate-950/50 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all border border-slate-700/50"
                            />
                        </div>
                        {isCheckingImage && photoUrl && (
                            <p className="text-amber-400 text-[11px] mt-1 flex items-center gap-1">
                                <Loader2 size={9} className="animate-spin" /> Checking image...
                            </p>
                        )}
                        {!isCheckingImage && isValidImage && photoUrl && (
                            <p className="text-emerald-400 text-[11px] mt-1 flex items-center gap-1">
                                <CheckCircle size={9} /> Valid image URL
                            </p>
                        )}
                        {errors.photo && (
                            <p className="text-red-400 text-[11px] mt-1 flex items-center gap-1">
                                <AlertCircle size={9} /> {errors.photo.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <div className="relative">
                            <Lock size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                {...register("password", validationRules.password)}
                                className="w-full pl-9 pr-8 py-2 rounded-lg bg-slate-950/50 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all border border-slate-700/50"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition"
                            >
                                {showPassword ? <EyeOff size={13} /> : <Eye size={13} />}
                            </button>
                        </div>
                        {errors.password && (
                            <p className="text-red-400 text-[11px] mt-1 flex items-center gap-1">
                                <AlertCircle size={9} /> {errors.password.message}
                            </p>
                        )}
                        {!errors.password && password && password.length >= 6 && (
                            <div className="mt-1 flex flex-wrap gap-2">
                                {password.length >= 6 && <span className="text-emerald-400 text-[10px]">✓ 6+ characters</span>}
                                {/(?=.*[A-Z])/.test(password) && <span className="text-emerald-400 text-[10px]">✓ Uppercase</span>}
                                {/(?=.*[a-z])/.test(password) && <span className="text-emerald-400 text-[10px]">✓ Lowercase</span>}
                                {/(?=.*\d)/.test(password) && <span className="text-emerald-400 text-[10px]">✓ Number</span>}
                            </div>
                        )}
                    </div>

                    <div>
                        <div className="relative">
                            <Lock size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm Password"
                                {...register("confirmPassword", validationRules.confirmPassword)}
                                className="w-full pl-9 pr-8 py-2 rounded-lg bg-slate-950/50 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all border border-slate-700/50"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition"
                            >
                                {showConfirmPassword ? <EyeOff size={13} /> : <Eye size={13} />}
                            </button>
                        </div>
                        {errors.confirmPassword && (
                            <p className="text-red-400 text-[11px] mt-1 flex items-center gap-1">
                                <AlertCircle size={9} /> {errors.confirmPassword.message}
                            </p>
                        )}
                        {!errors.confirmPassword && watch("confirmPassword") && password === watch("confirmPassword") && (
                            <p className="text-emerald-400 text-[11px] mt-1 flex items-center gap-1">
                                <CheckCircle size={9} /> Passwords match
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 transition-all font-semibold text-white text-sm shadow-md hover:shadow-emerald-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-1"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 size={14} className="animate-spin" />
                                Creating Account...
                            </>
                        ) : (
                            <>
                                Create Account
                                <ArrowRight size={14} />
                            </>
                        )}
                    </button>
                </form>

                <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-700/50"></div>
                    </div>
                    <div className="relative flex justify-center text-[10px]">
                        <span className="px-2 bg-slate-900/80 text-slate-400">OR</span>
                    </div>
                </div>

                <button
                    onClick={handleGoogleLogin}
                    disabled={isLoading}
                    className="w-full py-2 rounded-lg border border-slate-700 text-white hover:bg-slate-800 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm group"
                >
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    Continue with Google
                </button>

                <p className="text-center text-[11px] text-slate-400 mt-4">
                    Already have an account?{" "}
                    <Link href="/login" className="text-emerald-400 hover:text-emerald-300 hover:underline transition font-medium">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;