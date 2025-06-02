/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { Alfa_Slab_One } from "next/font/google";
import FillBar from "@/components/fillbar";
import { useRouter } from "next/router";
import Splashscreen from "@/components/splashscreen";
import { motion } from "motion/react";
import { homeProducts } from "@/utils/constant";
import { X } from "lucide-react";
import Head from "next/head";

const anton = Alfa_Slab_One({ weight: "400", subsets: ['latin'] });

const Home = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [modalImage, setModalImage] = useState<string | null>(null);


  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const redirectToProducts = () => {
    router.push("/products");
  };

  const redirectToAbout = () => {
    router.push("/about-us");
  };

  // Open image modal
  const openImageModal = (img: string) => {
    setModalImage(img);
  };

  // Close image modal
  const closeImageModal = () => {
    setModalImage(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-orange-100">
        <Splashscreen />
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Home | Diya Hygiene</title>
        <meta name="description" content="Diya Hygiene Flours Pvt. Ltd. - Premium wheat-based products including Maida, Sooji, Rava, Atta, Bran, and more. Quality and innovation since 2011." />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://diyahygiene.com/" />
        <meta property="og:title" content="Home | Diya Hygiene" />
        <meta property="og:description" content="Diya Hygiene Flours Pvt. Ltd. - Premium wheat-based products including Maida, Sooji, Rava, Atta, Bran, and more. Quality and innovation since 2011." />
        <meta property="og:image" content="https://diyahygiene.com/DiyaHygieneBrandKit/logo.png" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://diyahygiene.com/" />
        <meta name="twitter:title" content="Home | Diya Hygiene" />
        <meta name="twitter:description" content="Diya Hygiene Flours Pvt. Ltd. - Premium wheat-based products including Maida, Sooji, Rava, Atta, Bran, and more. Quality and innovation since 2011." />
        <meta name="twitter:image" content="https://diyahygiene.com/DiyaHygieneBrandKit/logo.png" />
      </Head>
      <div className="bg-slate-50 text-black flex flex-col w-full min-h-screen overflow-x-hidden">
        <Header />
        <div className="w-full h-[300px] md:h-[450px] relative overflow-hidden">
          <Image
            alt="DiyaMill"
            src="/diya_gate.jpeg"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/60 pointer-events-none" />

          {/* Centered text over image */}
          <main className="absolute inset-0 flex items-center justify-center">
            <h1
              className={`${anton.className} text-3xl md:text-5xl text-[#004aac] text-center`}
            >
              Welcome to Diya Hygiene
            </h1>
          </main>
        </div>
        <div className="py-20 pl-4 pr-4 w-full md:px-20 ">
          <div>
            <div className="font-bold text-2xl text-orange-500">
              Diya Hygiene Flours Pvt. Ltd.
            </div>
            <motion.div
              transition={{ duration: 1, ease: "easeOut" }}
              initial={{ width: 0 }}
              animate={{ width: 350 }}
              className="w-20 h-1 bg-[#004aac] mt-1 mb-4"
            />
          </div>
          <span>
            Established in 2011, Diya Hygiene Flours has been at the forefront of
            revolutionizing the Indian food industry.
          </span>
          <span>
            With a strong commitment to quality and innovation, we offer a wide
            range of premium wheat-based products including Maida, Sooji, Rava,
            Atta, Bran, and more.
          </span>
          <span>
            We are your one-stop destination for all flour-related needs—serving
            both standard and customized solutions tailored to meet specific
            customer requirements.
          </span>
          <span>
            As a leading name in flour production, we take pride in delivering
            excellence with every grain.
          </span>
          <div className="flex mt-4 mb-10">
            <button
              type="button"
              className="h-[50px] px-6 rounded-full text-white font-bold bg-[#004aac] hover:bg-orange-400 transition-all duration-300"
              onClick={redirectToAbout}
            >
              Read More
            </button>
          </div>
        </div>
        <div className="py-5 px-6 md:px-20 items-center">
          <div className="py-2 text-center flex flex-col items-center">
            <div className="font-bold text-2xl text-orange-500">Products</div>
            <FillBar />
          </div>

          <div className="flex justify-evenly gap-3 flex-wrap">
            {homeProducts.map((product, i) => (
              <div
                key={i}
                className="w-[400px] flex flex-col items-center bg-white shadow-md rounded-xl p-4"
              >
                <img
                  src={product.img}
                  alt="maida"
                  height={400}
                  width={400}
                  className="rounded-xl"
                  onClick={() => openImageModal(product.img)}
                />
                <p className="text-sm text-center mt-4">
                  {product.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-4 mb-10">
          <button
            type="button"
            className="h-[50px] px-6 rounded-full text-white font-bold bg-[#004aac] hover:bg-orange-400 transition-all duration-300"
            onClick={redirectToProducts}
          >
            Know More
          </button>
        </div>
              
        {/* Image Modal */}
        {modalImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/38" onClick={closeImageModal}>
            <div className="relative max-w-xl w-full mx-4" onClick={e => e.stopPropagation()}>
              <button
                className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:bg-orange-100"
                onClick={closeImageModal}
                aria-label="Close"
              >
                <X className="w-6 h-6 text-orange-600" />
              </button>
              <img src={modalImage} alt="Product" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
};

export default Home;
