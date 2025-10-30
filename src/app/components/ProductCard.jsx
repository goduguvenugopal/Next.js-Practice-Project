import React from 'react'
import Image from "next/image";
import { useRouter } from 'next/navigation';

const ProductCard = ({id , image , title , description , price}) => {
 const router = useRouter()
 
    return (
     <>
       <div
              key={id}
              onClick={()=> {router.push(`/pages/products/${id}`)}}
              className="bg-white shadow-md w-72 rounded-xl p-4 flex flex-col hover:scale-105 transition-transform"
            >
              <Image width={200}
              height={200}
                src={image}
                alt={title}
                className="w-48 h-48 object-contain mb-4"
              />
              <h2 className="font-semibold text-lg line-clamp-2 mb-2">
                {title}
              </h2>
              <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                {description}
              </p>
              <div className="mt-auto flex justify-between items-center flex-wrap">
                <span className="text-xl font-bold text-blue-600">
                  ${price}
                </span>
                <button className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700">
                  Add to Cart
                </button>
              </div>
            </div>
     </>
  )
}

export default ProductCard