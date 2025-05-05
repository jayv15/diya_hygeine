import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const Products = () => {
  return (
    <div className="bg-slate-50 text-black flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <h1 className="text-4xl font-bold">Products Page</h1>
      </main>
      <Footer />
    </div>
  );
};

export default Products; 