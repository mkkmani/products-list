import { ProductDetails } from "../utils/types";

import Image from "next/image";

const DetailedProductCard = ({ productDetails }:{productDetails:ProductDetails}) => {
  const {
    title,
    brand,
    description,
    category,
    price,
    rating,
    stock,
    sku,
    warrantyInformation,
    shippingInformation,
    availabilityStatus,
    returnPolicy,
    minimumOrderQuantity,
    images,
    reviews,
  } = productDetails;

  const myLoader = ({ src }:{src:string}) => {
    return src;
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 relative hover:scale-105 transition-all duration-300">
          <Image
            loader={myLoader}
            src={images[0]}
            alt={title}
            width={500}
            height={500}
            objectFit="cover"
            className="rounded-t-lg md:rounded-l-lg md:rounded-t-none"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-2">
              {title}
            </h2>
            <p className="text-gray-600 mb-4">{brand}</p>
            <p className="text-gray-700 mb-4">{description}</p>
            <div className="flex items-center mb-4">
              <p className="text-gray-600">Category:</p>
              <p className="text-gray-700 ml-2">{category}</p>
            </div>
            <div className="flex items-center mb-4">
              <p className="text-gray-600">Price:</p>
              <p className="text-gray-700 ml-2">${price}</p>
            </div>
            <div className="flex items-center mb-4">
              <p className="text-gray-600">Rating:</p>
              <div className="flex space-x-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className={`text-2xl ${
                      i < rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    {i < rating ? "\u2605" : "\u2606"}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center mb-4">
              <p className="text-gray-600">Stock:</p>
              <p className="text-gray-700 ml-2">{stock}</p>
            </div>
            <div className="flex items-center mb-4">
              <p className="text-gray-600">SKU:</p>
              <p className="text-gray-700 ml-2">{sku}</p>
            </div>
            <div className="flex items-center mb-4">
              <p className="text-gray-600">Warranty:</p>
              <p className="text-gray-700 ml-2">{warrantyInformation}</p>
            </div>
            <div className="flex items-center mb-4">
              <p className="text-gray-600">Shipping:</p>
              <p className="text-gray-700 ml-2">{shippingInformation}</p>
            </div>
            <div className="flex items-center mb-4">
              <p className="text-gray-600">Availability:</p>
              <p className="text-gray-700 ml-2">{availabilityStatus}</p>
            </div>
            <div className="flex items-center mb-4">
              <p className="text-gray-600">Return Policy:</p>
              <p className="text-gray-700 ml-2">{returnPolicy}</p>
            </div>
            <div className="flex items-center mb-4">
              <p className="text-gray-600">Minimum Order Quantity:</p>
              <p className="text-gray-700 ml-2">{minimumOrderQuantity}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">Ratings & Reviews</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-100 rounded-md p-4">
              <p className="text-gray-700 font-semibold">
                {review.reviewerName}
              </p>
              <p className="text-gray-600 mb-2">{review.reviewerEmail}</p>
              <div className="flex space-x-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className={`text-xl ${
                      i < review.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    {i < review.rating ? "\u2605" : "\u2606"}
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mt-2">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailedProductCard;