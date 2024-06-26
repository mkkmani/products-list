import { useRef, RefObject } from "react";
import Image from "next/image";

import { ProductDetails } from "../utils/types";
import DetailedProductCard from "./detailedProductCard";


/**
 * @param {object} details - Various details about the product will be passed  as object
 * @param {string} details.title - Title of the product
 * @param {string} details.description  - Description of the product
 * @param {number} details.price - Price of the product
 * @param {number} details.discountPercentage - Discount giving on the product
 * @param {number} details.rating - Average rating of the product given by the customers to the product
 * @param {string} details.availabilityStatus - Gives the information about the availability of the product
 * @param {string} details.thumbnail - Gives the src file of the product thumbnail
 * @returns {JSX.Element} JSX component of the product as per the given details
 */
const ProductCard = ({ productDetails }: { productDetails: ProductDetails }): JSX.Element => {
  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    availabilityStatus,
    thumbnail,
  } = productDetails;


  const dialogRef: RefObject<HTMLDialogElement> = useRef(null);

  /**
 * Toggles the visibility of dialog element and controls the overflow style of the document body.
 * @function
 * @returns void
 */
  function toggleDialog() {
    if (!dialogRef.current) return;
    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  }

  /**
   * Returns the image src file of the product.
   * @param {Object} options - The options object.
   * @param {string} options.src - The src file of the product image.
   * @returns {string} The image src file of the product.
   */
  const myLoader = ({ src }: { src: string }): string => {
    return src;
  };


  return (
    <div className="rounded-md overflow-hidden h-full w-full bg-white hover:shadow-md hover:shadow-green-200"
      onClick={toggleDialog}>
      <div className="h-full w-full">

        <div className="w-full h-full grid grid-cols-1 cursor-pointer p-2 space-y-3">
          <div className="shadow-custom rounded-lg p-2">
            <p className="text-lg font-semibold mb-2 text-cyan-600">{title}</p>
            <Image
              loader={myLoader}
              src={thumbnail}
              alt={title}
              width={360}
              height={360}
            />
            <p className="text-gray-600 mb-2 line-clamp-2">{description}</p>
          </div>

          <div className="p-3 bg-emerald-500 rounded-lg text-white flex flex-col justify-between items-between shadow-custom">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-100">{availabilityStatus}</p>
              <div className="flex items-center space-x-1">
                <span className="text-yellow-400 text-lg">{"\u2605"}</span>
                <p className=" text-sm">{rating}</p>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <p className="text-sm">Save {discountPercentage}%</p>
                <p className=" text-lg">${price}</p>
              </div>
            </div>
          </div>
        </div>

        <dialog
          ref={dialogRef}
          className="dialog w-[90%] h-[90%] bg-slate-100/20 rounded-lg"
        >
          <div className="bg-white p-4 rounded-md flex flex-col">
            <button
              onClick={toggleDialog}
              className="bg-cyan-500 text-white py-1 px-3 rounded-md hover:bg-cyan-600 self-end mb-2"
            >
              &#x2716;
            </button>
            <DetailedProductCard productDetails={productDetails} />
          </div>
        </dialog>
      </div>
    </div>
  );



}


export default ProductCard