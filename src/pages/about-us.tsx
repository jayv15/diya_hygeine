/* eslint-disable react/no-unescaped-entities */

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Head from "next/head";

const AboutUs = () => {
  return (
    <div>
      <Head>
        <title>About Us | Diya Hygiene</title>
        <meta
          name="description"
          content="Learn about Diya Hygiene Flours Pvt. Ltd. - our mission, vision, and commitment to quality in the Indian food industry since 2011."
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://diyahygiene.com/about-us" />
        <meta property="og:title" content="About Us | Diya Hygiene" />
        <meta
          property="og:description"
          content="Learn about Diya Hygiene Flours Pvt. Ltd. - our mission, vision, and commitment to quality in the Indian food industry since 2011."
        />
        <meta
          property="og:image"
          content="https://diyahygiene.com/DiyaHygieneBrandKit/logo.png"
        />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://diyahygiene.com/about-us" />
        <meta name="twitter:title" content="About Us | Diya Hygiene" />
        <meta
          name="twitter:description"
          content="Learn about Diya Hygiene Flours Pvt. Ltd. - our mission, vision, and commitment to quality in the Indian food industry since 2011."
        />
        <meta
          name="twitter:image"
          content="https://diyahygiene.com/DiyaHygieneBrandKit/logo.png"
        />
      </Head>
      <Header />
      <div className="bg-slate-50 text-black flex flex-col min-h-screen">
        {/* Hero Section */}
        <div className="w-full h-[450px] relative overflow-hidden">
          <img
            alt="DiyaMill"
            src="/mill_machine.jpeg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 pointer-events-none" />

          {/* Centered text over image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl font-bold text-white text-center">
              About Us
            </h1>
          </div>
        </div>

        <main className="flex-1 px-6 py-12 md:px-20 max-w-6xl mx-auto space-y-16">
          {/* Founder's Message Section */}
          <section className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <Avatar className="w-48 h-48 md:w-64 md:h-64">
                  <AvatarImage
                    src="/founder.png"
                    alt="Founder"
                    className="object-cover"
                  />
                  <AvatarFallback className="text-4xl">F</AvatarFallback>
                </Avatar>
              </div>

              <div className="flex-1 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-orange-500 mb-2">
                    Founder's Message
                  </h2>
                  <div className="w-32 h-1 bg-blue-600 mb-6"></div>
                </div>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    "Diya Hygiene Flour Pvt. Ltd. is not just a name — it's a
                    dream I started building back in 2011. At that time, most
                    flour industries focused primarily on quality over
                    competition. But I chose a different path: to prioritize
                    competition over quality in order to ensure that hygiene,
                    purity, and customer trust always came first."
                  </p>

                  <blockquote className="border-l-4 border-blue-600 pl-6 italic text-blue-800 font-medium">
                    "Diya Hygiene – Lighting the way for people to choose
                    hygiene over competition."
                  </blockquote>

                  <p>
                    "Like many others, our journey began with a slow and steady
                    start. We started with just 50 metric tons of production
                    capacity, working hard every day to earn the trust of our
                    customers. Their belief in us motivated and encouraged our
                    growth."
                  </p>

                  <p>
                    "Today, I am proud to say that Diya Hygiene Flour Pvt. Ltd.
                    has grown into a leading company, producing 150 metric tons
                    of high-quality flour daily. And seeing this trust from our
                    customers, I can confidently say — our growth story is far
                    from over."
                  </p>

                  <p>
                    "This achievement is the result of consistent dedication,
                    hard work, and the unwavering commitment of my trusted team.
                    I believe not only in myself but also in the strength and
                    integrity of my staff, who have stood by this vision since
                    day one, helping Diya Hygiene Flour reach new heights."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Company Overview Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Who We Are */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-orange-500 mb-4">
                  Who We Are
                </h2>
                <div className="w-20 h-1 bg-blue-600 mb-6"></div>

                <div className="space-y-4 text-gray-700">
                  <p>
                    Established in 2011, Diya Hygiene Flours has been at the
                    forefront of revolutionizing the Indian food industry.
                  </p>

                  <p>
                    We are your one-stop destination for all flour-related
                    needs—serving both standard and customized solutions
                    tailored to meet specific customer requirements.
                  </p>

                  <blockquote className="border-l-4 border-blue-600 pl-4 italic text-blue-800">
                    We are committed to producing excellent products like Maida,
                    Sooji, Rava, Atta, and Bran.
                  </blockquote>
                </div>
              </CardContent>
            </Card>

            {/* Our Growth */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-orange-500 mb-4">
                  Our Growth
                </h2>
                <div className="w-20 h-1 bg-blue-600 mb-6"></div>

                <div className="space-y-4 text-gray-700">
                  <p>
                    Our Company originally began with a production capacity of
                    50MT per day. Because of our consistency, dedication, and
                    exceptional quality, we received an overwhelming response
                    from our customers and vendors.
                  </p>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="font-semibold text-blue-800">
                      Today in {new Date().getFullYear()}, our production
                      capacity has grown to 150MT per day.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Core Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-orange-500 mb-3">
                  Legal Compliance
                </h3>
                <div className="w-16 h-1 bg-blue-600 mb-4"></div>
                <p className="text-gray-700 text-sm">
                  We strictly follow government rules and regulations with
                  certifications including FSSAI, ISO 9001:2015, ISO 22000:2005,
                  and WHO-GMP certification.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-orange-500 mb-3">
                  Technology
                </h3>
                <div className="w-16 h-1 bg-blue-600 mb-4"></div>
                <p className="text-gray-700 text-sm">
                  We utilize advanced, eco-friendly technology that is fully
                  automated and supervised by trained professionals to minimize
                  waste and maximize production capacity.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-orange-500 mb-3">
                  Trust & Faith
                </h3>
                <div className="w-16 h-1 bg-blue-600 mb-4"></div>
                <p className="text-gray-700 text-sm">
                  Trust is fundamental to our organization. We focus on quality,
                  integrity, and most importantly, customer satisfaction in
                  every aspect of our business.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg border-l-4 border-orange-500">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-orange-500 mb-4">
                  Our Vision
                </h2>
                <div className="w-20 h-1 bg-blue-600 mb-6"></div>
                <p className="text-gray-700 leading-relaxed">
                  Inspired by the latest innovation and committed to offering
                  healthy, quality wheat products while maintaining integrity in
                  all our operations.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-l-4 border-blue-600">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-orange-500 mb-4">
                  Our Mission
                </h2>
                <div className="w-20 h-1 bg-blue-600 mb-6"></div>
                <p className="text-gray-700 leading-relaxed">
                  We strive to maintain a notable presence in the Flour Mill
                  Industry by consistently delivering the finest quality
                  products to our clients and customers.
                </p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
