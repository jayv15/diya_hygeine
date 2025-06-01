import { useState } from "react";

import { ShoppingCart, Info, X } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { products } from "@/utils/constant";
import Link from "next/link";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [modalImage, setModalImage] = useState<string | null>(null);

  // Toggle product details
  const toggleProductDetails = (productId: string) => {
    if (selectedProduct === productId) {
      setSelectedProduct(null);
    } else {
      setSelectedProduct(productId);
    }
  };

  // Open image modal
  const openImageModal = (img: string) => {
    setModalImage(img);
  };

  // Close image modal
  const closeImageModal = () => {
    setModalImage(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-orange-500/80">Our Premium Products</h1>
            <p className="text-lg text-center text-orange-500/80 max-w-2xl mx-auto">
              Discover our range of high-quality flour products, crafted with care for your baking, cooking and commercial needs.
            </p>
          </div>
        </div>

        {/* Products Section */}
        <div className="container mx-auto py-16 px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-lg shadow-md border border-orange-100 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Product Image */}
                <div className="overflow-hidden cursor-pointer" onClick={() => openImageModal(product.img)}>
                  <img 
                    src={product.img} 
                    alt={product.name}
                    height={80}
                    width={80}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                
                {/* Product Content */}
                <div className="p-6">
                  {/* Product Header */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-orange-700">{product.name}</h3>
                    <span className="inline-block px-2 py-1 text-xs font-semibold text-white bg-orange-500 rounded-full">
                      {product.id}
                    </span>
                  </div>
                  
                  {/* Product Description */}
                  <p className={`text-gray-600 mb-6 ${selectedProduct === product.id ? '' : 'line-clamp-3'}`}>
                    {product.desc}
                  </p>
                  
                  {/* Product Actions */}
                  <div className="flex justify-between items-center mt-4">
                    <button 
                      onClick={() => toggleProductDetails(product.id)} 
                      className="flex items-center text-sm px-3 py-1.5 text-orange-600 border border-orange-300 rounded-md hover:bg-orange-50"
                    >
                      <Info className="w-4 h-4 mr-1" />
                      {selectedProduct === product.id ? 'Show Less' : 'Show More'}
                    </button>
                    
                    <Link href='/contact' className="flex items-center text-sm px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      Inquire
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
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

        {/* Packaging Info Section */}
        <div className="bg-orange-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-orange-700">Available Packaging</h2>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="bg-white rounded-lg p-6 text-center shadow-md max-w-xs w-full border border-orange-100">
                <h3 className="text-xl font-bold text-orange-600 mb-3">30 kg Bags</h3>
                <p className="text-gray-600">Perfect for medium-sized bakeries and restaurants with moderate flour needs.</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md max-w-xs w-full border border-orange-100">
                <h3 className="text-xl font-bold text-orange-600 mb-3">50 kg Bags</h3>
                <p className="text-gray-600">Ideal for commercial establishments with high-volume production requirements.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Order?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contact our sales team for bulk orders, pricing information, or to discuss your specific flour requirements.
            </p>
            <Link
              href='/contact'
              className="px-8 py-3 bg-white text-orange-600 font-medium rounded-md hover:bg-orange-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;