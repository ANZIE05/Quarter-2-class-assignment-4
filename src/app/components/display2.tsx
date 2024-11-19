import React from 'react'
import Image from 'next/image';

export default function DisplayPage2() {

    const items = [
      {
        id: 1,
        name: "VERTICAL STRIPED SHIRT",
        price: "$212",
        discountPrice: "$232",
        discount: "-20%",
        rating: "5.0/5",
        image: "/pictures/05.png",
      },
      {
        id: 2,
        name: "COURAGE GRAPHIC T-SHIRT",
        price: "$145",
        rating: "4.0/5",
        image: "/pictures/06.png",
      },
      {
        id: 3,
        name: "LOOSE FIT BERMUDA SHORTS",
        price: "$80",
        rating: "3.0/5",
        image: "/pictures/07.png",
      },
      {
        id: 4,
        name: "FADED SKINNY JEANS",
        price: "$210",
        rating: "4.5/5",
        image: "/pictures/08.png",
      },
    ];
  
    return (
      <section className="bg-white py-8 w-[390px] lg:w-[1350px] ">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <h2 className="text-2xl lg:text-4xl font-bold text-center mb-6">
          Top Selling
          </h2>
  
          {/* Items Grid */}
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 ">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`bg-white p-4 rounded-lg shadow-lg transition-transform hover:scale-110 ${
                  index > 1 ? "hidden sm:block" : "block"
                }`}
              >
                {/* Product Image */}
                <Image
                  src={item.image}
                  alt={item.name}
                  width={295}
                  height={298}
                  className="w-full h-auto rounded-md"
                />
  
                {/* Product Details */}
                <h3 className="text-lg font-bold mt-4">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.rating}</p>
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-black font-bold">{item.price}</p>
                  {item.discountPrice && (
                    <>
                      <p className="line-through text-gray-400">
                        {item.discountPrice}
                      </p>
                      <span className="text-red-500 text-sm">{item.discount}</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
  
          {/* View All Button */}
          <div className="text-center mt-6">
            <button className="px-32 lg:px-14 py-1 bg-white text-black border-2 border-gray-300 rounded-full hover:bg-slate-300">
              View All
            </button>
          </div>
        </div>
      </section>
    );
  }
  


 