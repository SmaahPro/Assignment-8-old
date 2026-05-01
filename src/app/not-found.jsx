import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-4">

            <div className="text-center max-w-xl">

                <h1 className="text-[6rem] md:text-[10rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400 animate-pulse">
                    404
                </h1>

                <h2 className="text-2xl md:text-4xl font-bold mt-2">
                    Page Not Found
                </h2>

                <p className="text-gray-300 mt-3 text-sm md:text-base">
                    Sorry, the page you are looking for doesn’t exist or has been moved.
                </p>

                <Link
                    href="/"
                    className="inline-block mt-6 px-6 py-3 rounded-full bg-pink-500 hover:bg-pink-600 transition font-semibold shadow-lg"
                >
                    Go Back Home
                </Link>

                <div className="mt-10 flex justify-center gap-6">
                    <div className="w-20 h-20 md:w-28 md:h-28 bg-pink-500/20 blur-2xl rounded-full"></div>
                    <div className="w-20 h-20 md:w-28 md:h-28 bg-yellow-400/20 blur-2xl rounded-full"></div>
                </div>

            </div>

        </div>
    );
}