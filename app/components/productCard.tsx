import { useRef, RefObject } from "react";
import Image from "next/image";

import { ProductDetails } from "../utils/types";
import DetailedProductCard from "./detailedProductCard";

const ProductCard = ({ productDetails }: { productDetails: ProductDetails }) => {
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

    const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
      document.body.style.overflow = "hidden";
    }
  };

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
      document.body.style.overflow = "auto";
    }
  };

  const myLoader = ({ src }: { src: string }) => {
    return thumbnail;
  };

   return (
    <div className="relative h-full">
      <div
        className="rounded-md pt-2 h-full overflow-hidden shadow-custom bg-white transition-all duration-300 hover:shadow-md hover:shadow-green-200"
        onClick={openDialog}
      >
        <div className="relative w-full h-60 overflow-hidden cursor-pointer">
          <Image
            loader={myLoader}
            src={thumbnail}
            layout="fill"
            objectFit="fit"
            alt={title}
            className="transition-all duration-300 hover:scale-110"
          />
        </div>

        <div className="p-4">
          <p className="text-lg font-semibold mb-2 text-cyan-600">{title}</p>
          <p className="text-gray-600 mb-2 line-clamp-2">{description}</p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-lg">${price}</p>
              {discountPercentage > 0 && (
                <p className="text-emerald-500 text-sm">
                  Save {discountPercentage}%
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center mt-3">
            <div className="flex items-center space-x-1">
              <Image src="/star-fill.svg" width={16} height={16} alt="star" />
              <p className="text-gray-600 text-sm">{rating}</p>
            </div>
            <p className="text-gray-500 text-sm ml-4">{availabilityStatus}</p>
          </div>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="dialog w-[90%] h-[90%] bg-slate-100/20 rounded-lg"
      >
        <div className="bg-white p-4 rounded-md flex flex-col">
          <button
            onClick={closeDialog}
            className="bg-cyan-500 text-white py-1 px-3 rounded-md hover:bg-cyan-600 self-end mb-2"
          >
            x
          </button>
          <DetailedProductCard productDetails={productDetails} />
        </div>
      </dialog>
    </div>
  );

}

export default ProductCard