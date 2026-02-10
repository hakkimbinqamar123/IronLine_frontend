import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FiTrash2 } from "react-icons/fi";

import Loader from "../Components/Loader";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import AddNewsModal from "../Components/News/AddNewsModal";
import LoginModal from "../Components/LoginModal";

const API_URL = import.meta.env.VITE_API_URL;

const News = () => {
    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState([]);
    const [featuredNews, setFeaturedNews] = useState(null);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handlePrimaryAction = () => {
        if (!isAuthenticated) {
            setIsLoginOpen(true);
        } else {
            setIsAddModalOpen(true);
        }
    };

    const fetchNews = async () => {
        try {
            const res = await axios.get(`${API_URL}/api/news`);

            if (res.data.length > 0) {
                setFeaturedNews(res.data[0]);
                setNews(res.data.slice(1));
            } else {
                setFeaturedNews(null);
                setNews([]);
            }
        } catch (error) {
            console.error("Failed to fetch news:", error);
        } finally {
            setLoading(false);
        }
    };

    const checkAuth = async () => {
        const token = localStorage.getItem("token");

        if (!token) {
            setIsAuthenticated(false);
            return;
        }

        try {
            await axios.get(`${API_URL}/api/auth/me`, {
                headers: { Authorization: `Bearer ${token}` }
            });

            setIsAuthenticated(true);
        } catch (err) {
            localStorage.removeItem("token");
            setIsAuthenticated(false);
        }
    };

    useEffect(() => {
        checkAuth();
        fetchNews();
    }, []);

    const confirmDelete = (id) => {
        toast(
            ({ closeToast }) => (
                <div className="space-y-3">
                    <p className="text-sm font-medium">
                        Are you sure you want to delete this news?
                    </p>

                    <div className="flex justify-end gap-3">
                        <button
                            onClick={closeToast}
                            className="px-3 py-1 text-sm rounded border"
                        >
                            Cancel
                        </button>

                        <button
                            onClick={() => {
                                closeToast();
                                handleDelete(id);
                            }}
                            className="px-3 py-1 text-sm rounded bg-red-600 text-white"
                        >
                            Yes, Delete
                        </button>
                    </div>
                </div>
            ),
            { autoClose: false }
        );
    };

    const handleDelete = async (id) => {
        try {
            const token = localStorage.getItem("token");

            await axios.delete(`${API_URL}/api/news/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            toast.success("News deleted successfully");
            fetchNews();

        } catch (error) {

            if (error.response?.status === 401) {
                localStorage.removeItem("token");
                setIsAuthenticated(false);
                toast.error("Session expired. Please login again.");
            } else {
                toast.error("Failed to delete news");
            }

        }
    };


    if (loading) return <Loader />;

    return (
        <>
            <Navbar />

            <div className="bg-[#0F2A44] text-white min-h-screen">

                {/* INTRO STRIP */}
                <section className="border-b border-white/10">
                    <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <p className="uppercase tracking-widest text-xs text-white/60 mb-2">
                                Corporate Intelligence
                            </p>
                            <h1 className="text-4xl md:text-5xl font-semibold">
                                News & Updates
                            </h1>
                        </div>

                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                            <p className="max-w-xl text-white/70 text-sm leading-relaxed">
                                Strategic updates, operational milestones, and safety-led execution
                                insights across Iron Line Contracting’s project portfolio.
                            </p>

                            <button
                                onClick={handlePrimaryAction}
                                className="inline-flex items-center gap-2 bg-white/10 border border-white/20
                                text-white px-5 py-2.5 rounded-lg text-sm font-medium
                                hover:bg-white/20 transition backdrop-blur"
                            >
                                {isAuthenticated ? "+ Add News" : "Login"}
                            </button>
                        </div>
                    </div>
                </section>

                {/* FEATURE BAND */}
                {featuredNews && (
                    <section className="bg-white text-[#0F2A44]">
                        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-12 gap-10">
                            <div className="md:col-span-7">
                                <img
                                    src={
                                        featuredNews.images?.length
                                            ? `${API_URL}/uploads/news/${featuredNews.images[0]}`
                                            : "https://images.unsplash.com/photo-1581092334651-ddf26d9d9f3a"
                                    }
                                    alt={featuredNews.title}
                                    className="rounded-2xl shadow-2xl w-full h-full object-cover"
                                />
                            </div>

                            <div className="md:col-span-5 flex flex-col justify-center">
                                <span className="uppercase tracking-widest text-xs text-blue-700 font-semibold mb-4">
                                    Featured Brief
                                </span>

                                <h2 className="text-3xl font-semibold leading-snug mb-6">
                                    {featuredNews.title}
                                </h2>

                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {featuredNews.description}
                                </p>

                                <div className="flex items-center gap-5">
                                    <a
                                        href={`/news/${featuredNews._id}`}
                                        className="text-sm font-medium text-blue-700 hover:underline"
                                    >
                                        View Details →
                                    </a>

                                    {isAuthenticated && (
                                        <button
                                            onClick={() => confirmDelete(featuredNews._id)}
                                            title="Delete news"
                                            className="text-red-600 hover:text-red-700 transition"
                                        >
                                            <FiTrash2 size={18} />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* NEWS LIST */}
                <section className="bg-[#F5F8FC] text-[#0F2A44]">
                    <div className="max-w-7xl mx-auto px-6 py-28">
                        <h2 className="text-2xl font-semibold mb-16">
                            Recent Intelligence
                        </h2>

                        <div className="space-y-16">
                            {news.map((item) => (
                                <div key={item._id}>
                                    <div className="grid md:grid-cols-12 gap-8 items-start">
                                        <div className="md:col-span-2 text-sm text-gray-500">
                                            <p className="font-medium">
                                                {new Date(item.createdAt).toLocaleDateString("en-US", {
                                                    month: "short",
                                                    year: "numeric",
                                                })}
                                            </p>
                                            <p className="uppercase tracking-widest text-xs">
                                                {item.category}
                                            </p>
                                        </div>

                                        <div className="md:col-span-7">
                                            <h3 className="text-xl font-semibold mb-3">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>

                                        <div className="md:col-span-3 text-right flex justify-end items-center gap-4">
                                            <a
                                                href={`/news/${item._id}`}
                                                className="text-sm font-medium hover:underline"
                                            >
                                                View →
                                            </a>

                                            {isAuthenticated && (
                                                <button
                                                    onClick={() => confirmDelete(item._id)}
                                                    title="Delete news"
                                                    className="text-red-600 hover:text-red-700 transition"
                                                >
                                                    <FiTrash2 size={16} />
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    <div className="border-t border-gray-200 mt-16"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            <Footer />

            <LoginModal
                isOpen={isLoginOpen}
                onClose={() => setIsLoginOpen(false)}
                onSuccess={() => window.location.reload()}
            />

            <AddNewsModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                onSuccess={fetchNews}
            />
        </>
    );
};

export default News;
