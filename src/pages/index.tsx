import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Target, Heart, ArrowRight, CheckCircle } from "lucide-react";
import Head from "next/head";
import Splashscreen from "@/components/splashscreen";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "@/components/header";
import Footer from "@/components/footer";

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

  const redirectToContact = () => {
    router.push("/contact");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-orange-100">
        <Splashscreen />
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>Home | Diya Hygiene</title>
        <meta
          name="description"
          content="Diya Hygiene Flours Pvt. Ltd. - Premium wheat-based products including Maida, Sooji, Rava, Atta, Bran, and more. Quality and innovation since 2011."
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://diyahygiene.com/" />
        <meta property="og:title" content="Home | Diya Hygiene" />
        <meta
          property="og:description"
          content="Diya Hygiene Flours Pvt. Ltd. - Premium wheat-based products including Maida, Sooji, Rava, Atta, Bran, and more. Quality and innovation since 2011."
        />
        <meta
          property="og:image"
          content="https://diyahygiene.com/DiyaHygieneBrandKit/logo.png"
        />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://diyahygiene.com/" />
        <meta name="twitter:title" content="Home | Diya Hygiene" />
        <meta
          name="twitter:description"
          content="Diya Hygiene Flours Pvt. Ltd. - Premium wheat-based products including Maida, Sooji, Rava, Atta, Bran, and more. Quality and innovation since 2011."
        />
        <meta
          name="twitter:image"
          content="https://diyahygiene.com/DiyaHygieneBrandKit/logo.png"
        />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
        <Header />
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-orange-500 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <Badge
                variant="secondary"
                className="mb-4 bg-white/20 text-white border-white/30"
              >
                Est. 2011 - Premium Flour Manufacturing
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Welcome to <span className="text-orange-200">Diya Hygiene</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Revolutionizing the Indian food industry with premium
                wheat-based products and unwavering commitment to quality
              </p>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-orange-100 hover:text-orange-600 transition-all duration-300"
                onClick={redirectToProducts}
              >
                Discover Our Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Company Introduction */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-orange-600 mb-4">
                  Diya Hygiene Flours Pvt. Ltd.
                </h2>
                <div className="w-24 h-1 bg-blue-600 mb-6"></div>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Established in 2011, Diya Hygiene Flours has been at the
                  forefront of revolutionizing the Indian food industry with
                  innovation and integrity.
                </p>
                <p>
                  With an unwavering commitment to quality and continuous
                  innovation, we offer a comprehensive range of premium
                  wheat-based products including Maida, Sooji, Rava, Atta, Bran,
                  and specialized flour solutions.
                </p>
                <p>
                  We are your trusted partner for all flour-related
                  needs—delivering both standard excellence and customized
                  solutions tailored to meet your unique requirements.
                </p>
                <p>
                  As a leading name in flour production, we take immense pride
                  in delivering excellence with every grain, building lasting
                  relationships with our valued customers.
                </p>
              </div>

              <div className="flex gap-4 mt-8">
                <Button
                  className="bg-blue-600 hover:bg-orange-500 transition-all duration-300"
                  onClick={redirectToAbout}
                >
                  Learn More About Us
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      13+
                    </div>
                    <div className="text-gray-600">Years of Excellence</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <div className="text-3xl font-bold text-orange-500 mb-2">
                      100%
                    </div>
                    <div className="text-gray-600">Quality Assurance</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      500+
                    </div>
                    <div className="text-gray-600">Satisfied Clients</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <div className="text-3xl font-bold text-orange-500 mb-2">
                      24/7
                    </div>
                    <div className="text-gray-600">Customer Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision, Mission, Faith Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Built on the foundation of trust, innovation, and unwavering
                commitment to our customers
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Vision Card */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-orange-200">
                    Our Vision
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    To be the pioneering force in healthy and innovative wheat
                    products, setting new standards of excellence while
                    maintaining absolute integrity in everything we do. We
                    envision a future where quality nutrition reaches every home
                    across India.
                  </p>
                </CardContent>
              </Card>

              {/* Mission Card */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-orange-200">
                    Our Mission
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    We are dedicated to establishing a distinguished presence in
                    the Flour Mill Industry by consistently delivering products
                    of the finest quality. Our mission is to exceed customer
                    expectations and build lasting partnerships through
                    excellence and reliability.
                  </p>
                </CardContent>
              </Card>

              {/* Faith Card */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-orange-200">
                    Our Faith
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    Trust forms the cornerstone of our organization and every
                    relationship we build. We embrace this responsibility by
                    ensuring uncompromising quality, absolute integrity, and
                    customer satisfaction that goes beyond expectations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose Diya Hygiene?
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don&apos;t just produce flour; we craft relationships built on
              trust, quality, and shared success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Premium Quality",
                description:
                  "Every product undergoes rigorous quality checks to ensure excellence",
              },
              {
                icon: Heart,
                title: "Customer-Centric",
                description:
                  "Your satisfaction is our priority, and we go the extra mile to achieve it",
              },
              {
                icon: Target,
                title: "Innovation Focus",
                description:
                  "Constantly evolving with the latest technology and industry best practices",
              },
              {
                icon: Eye,
                title: "Transparent Process",
                description:
                  "Complete transparency in our manufacturing and business processes",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-orange-500 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Experience the Diya Hygiene Difference?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Join hundreds of satisfied customers who trust us for their flour
              needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-orange-100 hover:text-orange-600"
                onClick={redirectToProducts}
              >
                View Our Products
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-blue-600 hover:bg-orange-100 hover:text-orange-600"
                onClick={redirectToContact}
              >
                Contact Us Today
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
