import React, { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { Alfa_Slab_One } from "next/font/google";
import toast, { Toaster } from "react-hot-toast";
import Head from "next/head";

const anton = Alfa_Slab_One({ weight: "400", subsets: ["latin"] });

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/emailService", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        setFormData({ name: "", email: "", contactNumber: "", message: "" });
      } else {
        toast.error(data.message);
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact | Diya Hygiene</title>
        <meta name="description" content="Contact Diya Hygiene Flours Pvt. Ltd. for inquiries, orders, or more information about our premium wheat-based products and services." />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://diyahygiene.com/contact" />
        <meta property="og:title" content="Contact | Diya Hygiene" />
        <meta property="og:description" content="Contact Diya Hygiene Flours Pvt. Ltd. for inquiries, orders, or more information about our premium wheat-based products and services." />
        <meta property="og:image" content="https://diyahygiene.com/DiyaHygieneBrandKit/logo.png" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://diyahygiene.com/contact" />
        <meta name="twitter:title" content="Contact | Diya Hygiene" />
        <meta name="twitter:description" content="Contact Diya Hygiene Flours Pvt. Ltd. for inquiries, orders, or more information about our premium wheat-based products and services." />
        <meta name="twitter:image" content="https://diyahygiene.com/DiyaHygieneBrandKit/logo.png" />
      </Head>
      <div className="bg-slate-50 text-black flex flex-col min-h-screen">
        <Toaster position="bottom-right" />
        <Header />
        <div className="w-full h-[450px] relative overflow-hidden">
          <Image
            alt="DiyaMill"
            src="/contact_image.jpeg"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60 pointer-events-none" />

          {/* Centered text over image */}
          <main className="absolute inset-0 flex items-center justify-center">
            <h1 className={`${anton.className} text-5xl text-white text-center`}>
              Contact Diya Hygiene Flours
            </h1>
          </main>
        </div>
        <main className="flex-1 flex items-center justify-center my-10 ">
          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-center mb-6">Contact Us</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Contact Number</label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                  rows={4}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 flex items-center justify-center"
                disabled={loading}
              >
                {loading ? (
                  <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                  </svg>
                ) : null}
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
