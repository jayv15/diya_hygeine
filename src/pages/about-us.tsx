import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion } from "motion/react";
import Image from "next/image";
import { Alfa_Slab_One } from "next/font/google";

const anton = Alfa_Slab_One({ weight: "400" });

const AboutUs = () => {
  return (
    <div className="bg-slate-50 text-black flex flex-col min-h-screen">
      <Header />
      <div className="w-full h-[450px] relative overflow-hidden">
        <Image
          alt="DiyaMill"
          src="/mill_machine.jpeg"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />

        {/* Centered text over image */}
        <main className="absolute inset-0 flex items-center justify-center">
          <h1 className={`${anton.className} text-5xl text-white text-center`}>
            About Us
          </h1>
        </main>
      </div>
      <main className="flex-1 flex items-center justify-center">
        <main className="flex-1 px-6 py-12 md:px-20 max-w-5xl mx-auto space-y-12">
          {/* Who We Are */}
          <section>
            <h2 className="text-2xl font-bold text-orange-500">Who We Are</h2>
            <motion.div
              transition={{ duration: 1, ease: "easeOut" }}
              initial={{ width: 0 }}
              animate={{ width: 200 }}
              className="w-20 h-1 bg-[#004aac] mt-1 mb-4"
            />

            <p className="mb-4">
              Established in 2011, Diya Hygiene Flours has been at the forefront
              of revolutionizing the Indian food industry.
            </p>

            <blockquote className="border-l-4 border-[#004aac] pl-4 italic text-gray-800 mb-4">
              We at Diya Hygiene Flours are committed to contribute and to
              produce excellent products like Maida, Sooji, Rava, Atta, Bran
            </blockquote>

            <p className="mb-4">
              We are your one-stop destination for all flour-related
              needs—serving both standard and customized solutions tailored to
              meet specific customer requirements.
            </p>
            <p className="mb-4">
              Our Company originally began to produce 50MT per day. Because of
              our consistency, dedication, and exceptional quality we received
              an overwhelming response from our customers and vendors.
            </p>

            <blockquote className="border-l-4 border-[#004aac] pl-4 italic text-gray-800">
              Today in {new Date().getFullYear()}, the capacity of the
              production over the flour mill has grown to 150MT per day.
            </blockquote>
          </section>

          {/* Legal */}
          <section>
            <h2 className="text-2xl font-bold text-orange-500">Legal</h2>
            <motion.div
              transition={{ duration: 1, ease: "easeOut" }}
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              className="w-20 h-1 bg-[#004aac] mt-1 mb-4"
            />

            <p>
              We strictly follow the rules and regulations of the Government for
              the production of Wheat Flour products. For that purpose, we have
              all the certifications such as FSSAI and ISO 9001:2015, ISO
              22000:2005, and we are also a WHO-GMP certified company.
            </p>
          </section>

          {/* Technology */}
          <section>
            <h2 className="text-2xl font-bold text-orange-500">Technology</h2>
            <motion.div
              transition={{ duration: 1, ease: "easeOut" }}
              initial={{ width: 0 }}
              animate={{ width: 180 }}
              className="w-20 h-1 bg-[#004aac] mt-1 mb-4"
            />
            <p>
              We have backed up ourselves with the most effective, safe,
              well-liked, and eco-friendly advanced technology which is fully
              automated and supervised by only trained and skilled workforce to
              ensure that we minimize the wastage and strengthen the production
              capacity.
            </p>
          </section>

          {/* Faith */}
          <section>
            <h2 className="text-2xl font-bold text-orange-500">Faith</h2>
            <motion.div
              transition={{ duration: 1, ease: "easeOut" }}
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              className="w-20 h-1 bg-[#004aac] mt-1 mb-4"
            />
            <p>
              Trust is the major factor for every organization and the Company
              itself and for that we cover each and every aspect such as
              quality, integrity, and most importantly customer satisfaction.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-orange-500">Vision</h2>
            <motion.div
              transition={{ duration: 1, ease: "easeOut" }}
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              className="w-20 h-1 bg-[#004aac] mt-1 mb-4"
            />
            <p>
              Inspired by the latest innovation and believe in offering healthy as well as quality wheat products, and maintain integrity.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-orange-500">Mission</h2>
            <motion.div
              transition={{ duration: 1, ease: "easeOut" }}
              initial={{ width: 0 }}
              animate={{ width: 140 }}
              className="w-20 h-1 bg-[#004aac] mt-1 mb-4"
            />
            <p>
              We at Diya Hygiene Flours always look towards the notable presence in the Flour Mill Industry by maintaining our products and Contributing the finest quality to our clients and customers.
            </p>
          </section>
        </main>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
