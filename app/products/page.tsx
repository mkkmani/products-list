"use client";

import { ProductDetails } from "../utils/types";
import ProductCard from "../components/productCard";
import { useState, useEffect } from "react";
import Link from "next/link";

const Products = () => {
  const [products,setProducts]=useState<ProductDetails[]>([])
  const [searchKeyword, setSearchKeyword] = useState < string >("");
  const [page, changePage] = useState < number > (0);

  const getProducts = async (page:number) => {
    const skipValues = page * 30;
    try {
      const api = "https://dummyjson.com/products";
      console.log("fetching products");
      const response = await fetch(`${api}?skip=${skipValues}&limit=30`);
      const data = await response.json();
      console.log(data.products);
      return data.products;
    } catch (error) {
      console.error("Error", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getProducts(page);
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, [page]);

  const onChangePage = (nav: string) => {
    if (nav === "prev") {
      changePage(page - 1);
    }

    if (nav === "next") {
      changePage(page + 1);
    }
  };

    function filterProducts(keyword:string) {
    const searchKeyword = keyword.toLowerCase();
    return products.filter((product) => {
      return Object.values(product).some((value) => {
        const lowercaseValue = String(value).toLowerCase();
        return lowercaseValue.includes(searchKeyword);
      });
    });
  }

  const filteredProducts = filterProducts(searchKeyword);


  return (
  <div className="bg-white h-screen w-full overflow-y-auto">
    <div className="p-4">
      <div className="w-full flex sm:flex-col md:flex-row justify-between">
        <Link href="/">
          <h1 className="text-3xl font-bold text-blue-950 mb-4">Products</h1>
        </Link>

        <input
          type="search"
          placeholder="Search with keywords"
          className="border rounded-md border-gray-400 h-fit p-1 text-gray-900"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
      </div>
      {products && products.length > 0 ? (
        <div>
          <ul className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-5">
            {filteredProducts.map((product) => (
              <li key={product.id}>
                <ProductCard productDetails={product} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>loading...</p>
      )}

    
      </div>
        <div className="flex justify-center items-center text-black space-x-4 h-10 mt-4">
        <button
          disabled={page === 0}
          type="button"
          onClick={() => onChangePage("prev")}
        >
          Prev
        </button>
        <span>{page + 1}</span>
        <button
          disabled={products.length < 30}
          type="button"
          onClick={() => onChangePage("next")}
        >
          Next
        </button>
      </div>
      </div>
  );
};

export default Products;
