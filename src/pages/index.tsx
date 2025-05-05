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

const anton = Alfa_Slab_One({ weight: "400", subsets: ['latin'] });

const Home = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-orange-100">
        <Splashscreen />
      </div>
    );
  }

  return (
    <div className="bg-slate-50 text-black flex flex-col min-h-screen">
      <Header />
      <div className="w-full h-[450px] relative overflow-hidden">
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
            className={`${anton.className} text-5xl text-[#004aac] text-center`}
          >
            Welcome to Diya Hygiene
          </h1>
        </main>
      </div>
      <div className="py-20 px-100">
        <div>
          <div className="font-bold text-2xl text-orange-500">
            Diya Hygiene Flours Pvt. Ltd.
          </div>
          <motion.div
              transition={{ duration: 1, ease: "easeOut" }}
              initial={{ width: 0 }}
              animate={{ width: 400 }}
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
      <div className="py-5 px-20 items-center">
        <div className="py-20 text-center flex flex-col items-center">
          <div className="font-bold text-2xl text-orange-500">Products</div>
          <FillBar />
        </div>

        <div className="flex justify-evenly flex-wrap">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="w-[400px] flex flex-col items-center bg-white shadow-md rounded-xl p-4"
            >
              <Image
                src="/products/maida.jpeg"
                alt="maida"
                height={400}
                width={400}
                className="rounded-xl"
              />
              <p className="text-sm text-center mt-4">
                Diya premium maida is a 100% refined wheat flour, packed in a
                convenient bag for easy storage. Made for vegetarians, this
                maida is perfect for making fluffy naans. Store in dry
                conditions to keep it fresh. Packaging size is 30 kg and 50 kg.
                Ideal for all your cooking and baking needs.
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
      <Footer />
    </div>
  );
};

export default Home;
