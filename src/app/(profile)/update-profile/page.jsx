"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { User, Image as ImageIcon, Save, X, ArrowLeft, Loader2, Edit3, CheckCircle, AlertCircle } from "lucide-react";

const UpdateProfilePage = () => {
    const router = useRouter();

    const [name, setName] = useState("");
    const [image, setImage] = useState("");

    const [oldName, setOldName] = useState("");
    const [oldImage, setOldImage] = useState("");

    const [editMode, setEditMode] = useState(false);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState("");

    const [isValidImage, setIsValidImage] = useState(false);
    const [isCheckingImage, setIsCheckingImage] = useState(false);
    const [imageError, setImageError] = useState("");

    useEffect(() => {
        const getSession = async () => {
            const { data: session } = await authClient.getSession();

            if (!session?.user) {
                router.push("/login");
                return;
            }

            setName(session.user.name || "");
            setImage(session.user.image || "");
            setOldName(session.user.name || "");
            setOldImage(session.user.image || "");

            if (session.user.image) {
                validateImage(session.user.image);
            }

            setLoading(false);
        };

        getSession();
    }, [router]);

    const validateImage = (url) => {
        if (!url || url.trim() === "") {
            setIsValidImage(false);
            setIsCheckingImage(false);
            setImageError("");
            return false;
        }

        setIsCheckingImage(true);
        setImageError("");

        const img = new Image();

        img.onload = () => {
            setIsValidImage(true);
            setIsCheckingImage(false);
            setImageError("");
        };

        img.onerror = () => {
            setIsValidImage(false);
            setIsCheckingImage(false);
            setImageError("Image not found! Please enter a valid URL.");
        };

        img.src = url;

        return isValidImage;
    };

    useEffect(() => {
        if (image && editMode) {
            const timer = setTimeout(() => {
                validateImage(image);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [image, editMode]);

    const handleSave = async () => {
        if (image && !isValidImage && !isCheckingImage) {
            setMessage("Please enter a valid image URL!");
            return;
        }

        setSaving(true);
        setMessage("");

        try {
            await authClient.updateUser({
                name,
                image: image || null,
            });

            setOldName(name);
            setOldImage(image);

            setEditMode(false);
            setMessage("Profile updated successfully!");
            setTimeout(() => setMessage(""), 3000);
        } catch (error) {
            setMessage("Update failed! Please try again.");
        } finally {
            setSaving(false);
        }
    };

    const handleCancel = () => {
        setName(oldName);
        setImage(oldImage);
        setEditMode(false);
        setMessage("");
        setImageError("");
        if (oldImage) {
            validateImage(oldImage);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
                <Loader2 className="animate-spin" size={24} />
            </div>
        );
    }

    const displayImage = editMode ? (image || oldImage || "/avatar.png") : (oldImage || "/avatar.png");

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-6">

                <h1 className="text-2xl font-bold text-white text-center mb-6">
                    Update Profile
                </h1>

                <div className="flex flex-col items-center mb-6">
                    <img
                        src={displayImage}
                        alt="preview"
                        className="w-20 h-20 rounded-full object-cover"
                    />
                    <p className="text-white mt-3 font-semibold">
                        {editMode ? (name || oldName || "User Name") : (oldName || "User Name")}
                    </p>
                </div>

                <div className="space-y-4">

                    <div>
                        <label className="text-sm text-slate-300 mb-2 block">
                            Full Name
                        </label>
                        <div className="relative">
                            <User
                                size={16}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                            />
                            <input
                                type="text"
                                value={name}
                                disabled={!editMode}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your full name"
                                className="w-full pl-10 pr-3 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-70"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-sm text-slate-300 mb-2 block">
                            Profile Picture URL
                        </label>
                        <div className="relative">
                            <ImageIcon
                                size={16}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                            />
                            <input
                                type="text"
                                value={image}
                                disabled={!editMode}
                                onChange={(e) => setImage(e.target.value)}
                                placeholder="https://example.com/photo.jpg"
                                className={`w-full pl-10 pr-3 py-3 rounded-xl bg-slate-950 border text-white outline-none focus:ring-2 disabled:opacity-70 ${editMode && image && isCheckingImage
                                    ? "border-yellow-500 focus:ring-yellow-500"
                                    : editMode && image && isValidImage
                                        ? "border-emerald-500 focus:ring-emerald-500"
                                        : editMode && image && imageError
                                            ? "border-red-500 focus:ring-red-500"
                                            : "border-slate-700 focus:ring-emerald-500"
                                    }`}
                            />
                        </div>

                        {editMode && image && (
                            <div className="mt-1.5">
                                {isCheckingImage ? (
                                    <p className="text-yellow-400 text-xs flex items-center gap-1">
                                        <Loader2 size={10} className="animate-spin" /> Checking image...
                                    </p>
                                ) : isValidImage ? (
                                    <p className="text-emerald-400 text-xs flex items-center gap-1">
                                        <CheckCircle size={10} /> Valid image URL
                                    </p>
                                ) : imageError ? (
                                    <p className="text-red-400 text-xs flex items-center gap-1">
                                        <AlertCircle size={10} /> {imageError}
                                    </p>
                                ) : null}
                            </div>
                        )}
                    </div>

                    {message && (
                        <p className={`text-sm text-center ${message.includes("success") ? "text-emerald-400" : "text-red-400"
                            }`}>
                            {message}
                        </p>
                    )}

                    {!editMode ? (
                        <button
                            onClick={() => {
                                setEditMode(true);
                                setImage(oldImage);
                                setName(oldName);
                            }}
                            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold flex items-center justify-center gap-2 transition"
                        >
                            <Edit3 size={16} />
                            Update Information
                        </button>
                    ) : (
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={handleSave}
                                disabled={saving || (image && !isValidImage && !isCheckingImage)}
                                className="py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold flex items-center justify-center gap-2 transition disabled:opacity-50"
                            >
                                {saving ? (
                                    <Loader2 size={16} className="animate-spin" />
                                ) : (
                                    <Save size={16} />
                                )}
                                Save
                            </button>

                            <button
                                onClick={handleCancel}
                                className="py-3 rounded-xl bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 text-white font-semibold flex items-center justify-center gap-2 transition"
                            >
                                <X size={16} />
                                Cancel
                            </button>
                        </div>
                    )}

                    <Link href="/my-profile">
                        <button className="w-full mt-2 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center gap-2 transition">
                            <ArrowLeft size={16} />
                            Back to Profile
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfilePage;