/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Inter, Roboto } from "next/font/google";
import { MdStar } from "react-icons/md";
import { PiCheckSquareOffset } from "react-icons/pi";

// Fonts
const inter = Inter({ subsets: ["latin"], weight: "700" });
const text = Roboto({ subsets: ["latin"], weight: "700" });

// TypeScript Interfaces
interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

const ProductPage = () => {
  // State for products, ratings, and quantities
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Burger", image: "/burger.jpg", price: 35.0 },
    { id: 2, name: "Fresh Lime", image: "/freshLime.jpg", price: 25.0 },
    { id: 3, name: "Pizza", image: "/pizza.jpg", price: 15.0 },
    { id: 4, name: "Chocolate Muffins", image: "/chocolateMuffins.jpg", price: 45.0 },
    { id: 5, name: "Cheese Butter", image: "/chineseButter.jpg", price: 15.0 },
  ]);

  const [ratings, setRatings] = useState<Record<number, number>>({});
  const [quantities, setQuantities] = useState<Record<number, number>>({});

  // Helper to calculate total for a product
  const calculateTotal = (productId: number, price: number) =>
    (quantities[productId] || 0) * price;

  // Helper to format price
  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price);

  // Calculate subtotal
  const subtotal = products.reduce(
    (sum, product) => sum + calculateTotal(product.id, product.price),
    0
  );

  // Render star ratings
  const renderStars = (productId: number) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <MdStar
          key={star}
          fill={star <= (ratings[productId] || 0) ? "gold" : "gray"}
          className="w-4 h-4 cursor-pointer hover:scale-110 transition-transform"
          onClick={() => setRatings({ ...ratings, [productId]: star })}
        />
      ))}
    </div>
  );

  // Reset ratings and quantities
  const resetAll = () => {
    setRatings({});
    setQuantities({});
  };

  // Remove product
  const handleRemoveProduct = (productId: number) => {
    setProducts((prev) => prev.filter((product) => product.id !== productId));
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setRatings(({ [productId]: _, ...rest }) => rest);
    setQuantities(({ [productId]: _, ...rest }) => rest);
  };

  return (
    <div className="bg-white py-20 px-60">
      {/* Product List */}
      <div className="mb-10">
        <button
          className="px-4 py-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={resetAll}
        >
          Reset All
        </button>
        {products.length === 0 ? (
          <p className="text-center text-gray-500">No products available.</p>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {["Product", "Price", "Quantity", "Total", "Remove"].map((header) => (
                  <th key={header} className="p-3 text-left border-b">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b">
                  <td className="p-3 flex gap-3 items-center">
                    <Image
                      src={product.image}
                      alt={`${product.name} image`}
                      width={80}
                      height={80}
                      className="rounded"
                    />
                    <div>
                      <p className={`${inter.className}`}>{product.name}</p>
                      {renderStars(product.id)}
                    </div>
                  </td>
                  <td className="p-3">{formatPrice(product.price)}</td>
                  <td className="p-3 flex items-center space-x-3">
                    <button
                      className="px-2 text-lg rounded-full border-2 text-red-500 hover:bg-gray-200"
                      onClick={() =>
                        setQuantities((prev) => ({
                          ...prev,
                          [product.id]: Math.max((prev[product.id] || 0) - 1, 0),
                        }))
                      }
                    >
                      -
                    </button>
                    <span>{quantities[product.id] || 0}</span>
                    <button
                      className="px-2 text-lg rounded-full text-green-500 border-2 hover:bg-gray-200"
                      onClick={() =>
                        setQuantities((prev) => ({
                          ...prev,
                          [product.id]: (prev[product.id] || 0) + 1,
                        }))
                      }
                    >
                      +
                    </button>
                  </td>
                  <td className="p-3 font-bold">
                    {formatPrice(calculateTotal(product.id, product.price))}
                  </td>
                  <td className="p-3">
                    <button
                      className="px-3 py-1 text-red-600 hover:bg-gray-200 border-2 rounded-full"
                      onClick={() => handleRemoveProduct(product.id)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Payment Section */}
      <div className="flex space-x-5">
        {/* Coupon Code */}
        <div className="w-[50%]">
          <p className={`${text.className} text-[32px]`}>Coupon Code</p>
          <div className="mt-8 border-2 rounded-lg p-5">
            <p className={`${inter.className} text-[18px] text-gray-500`}>
              Apply a discount coupon for additional savings.
            </p>
            <div className="flex mt-5">
              <input
                type="text"
                placeholder="Enter Your Code Here"
                className="flex-1 p-2 border rounded-l focus:outline-none"
              />
              <button className="bg-orange-500 px-5 py-2 text-white rounded-r">
                Apply
              </button>
            </div>
          </div>
        </div>
        {/* Total Bill */}
        <div className="w-[50%]">
          <p className={`${text.className} text-[32px]`}>Total Bill</p>
          <div className="mt-8 border-2 rounded-lg p-5">
            <p className="flex justify-between">
              <span>Cart Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </p>
            <p className="flex justify-between text-gray-500 mt-2">
              <span>Shipping Charge</span>
              <span>{formatPrice(0)}</span>
            </p>
            <div className="flex justify-between border-t pt-3 mt-3 font-bold text-lg">
              <span>Total Amount</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
          </div>
          <button className="w-full mt-5 bg-orange-500 text-white py-3 rounded">
            Proceed to Checkout
            <PiCheckSquareOffset className="inline ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
