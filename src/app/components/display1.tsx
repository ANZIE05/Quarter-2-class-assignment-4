import React from 'react'
import Image from 'next/image';

export default function DisplayPage1() {

    const items = [
      {
        id: 1,
        name: "T-shirt with Tape Details",
        price: "$120",
        rating: "4.5/5",
        image: "/pictures/01.png",
      },
      {
        id: 2,
        name: "Skinny Fit Jeans",
        price: "$240",
        discountPrice: "$260",
        discount: "20%",
        rating: "3.5/5",
        image: "/pictures/02.png",
      },
      {
        id: 3,
        name: "Checkered Shirt",
        price: "$180",
        rating: "4.5/5",
        image: "/pictures/03.png",
      },
      {
        id: 4,
        name: "Sleeve Striped T-shirt",
        price: "$130",
        discountPrice: "$160",
        discount: "30%",
        rating: "4.5/5",
        image: "/pictures/04.png",
      },
    ];
  
    return (
      <section className="bg-white py-8 w-[390px] lg:w-[1350px] ">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <h2 className="text-2xl lg:text-4xl font-bold text-center mb-6">
            NEW ARRIVALS
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

       <hr className='w-[1240px] h-[0px] ml-12 mt-8 border-[1px]'></hr>

      </section>

      
    );
  }
  


 