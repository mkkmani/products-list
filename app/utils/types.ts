/**
 * Give te dimensional details of the product
 */
export type Dimensions = {
  /** Tells the width of the product */
  width: number,
  /** Tells the height of the product */
  height: number,
  /** Tells the depth of the product */
  depth:number
}


/**Gives the information about the product review section */
export interface Review {
  /** The rating given by the customer */
  rating: number;
  /** The review text given by the customer */
  comment: string;
  /** The date time when the customer gave the rating */
  date: string;
  /** Name of the customer who gave the review */
  reviewerName: string;
  /** Mail address of the customer who gave the review */
    reviewerEmail: string;
}


/**
 * Gives the meta information about the product listed
 */
export interface MetaData {
  /** Date time of the document when it was created */
  createdAt: string;
  /** Date time of the document when it was last updated */
  updatedAt: string;
  /**barcode number of the product */
  barcode: string;
  /**Qr code of the product  */
  qrCode: string;
}


/**
 * Represents details of a product.
 */
export type ProductDetails = {
    /** The unique identifier of the product. */
    id: number;
    /** The title of the product. */
    title: string;
    /** The description of the product. */
    description: string;
    /** The category of the product. */
    category: string;
    /** The price of the product. */
    price: number;
    /** The discount percentage applied to the product. */
    discountPercentage: number;
    /** The rating of the product. */
    rating: number;
    /** The stock quantity of the product. */
    stock: number;
    /** The tags associated with the product. */
    tags: string[];
    /** The brand of the product. */
    brand: string;
    /** The SKU (stock-keeping unit) of the product. */
    sku: string;
    /** The weight of the product. */
    weight: string;
    /** The dimensions of the product. */
    dimensions: Dimensions;
    /** Information about the warranty of the product. */
    warrantyInformation: string;
    /** Information about the shipping of the product. */
    shippingInformation: string;
    /** The availability status of the product. */
    availabilityStatus: string;
    /** Reviews of the product. */
    reviews: Review[];
    /** The return policy of the product. */
    returnPolicy: string;
    /** The minimum order quantity of the product. */
    minimumOrderQuantity: number;
    /** The URL of the thumbnail image of the product. */
    thumbnail: string;
    /** URLs of the images of the product. */
    images: string[];
    /** Metadata associated with the product. */
    meta: MetaData;
}

