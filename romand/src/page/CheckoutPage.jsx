import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate(); // For cancel button
  const queryParams = new URLSearchParams(location.search);
  const productName = queryParams.get("product");

  const handleCancel = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-50 via-white to-pink-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 text-center">
        <h1 className="text-3xl font-bold text-pink-600 mb-6 flex items-center justify-center gap-2">
          🛒 Checkout
        </h1>

        {productName ? (
          <div className="space-y-4">
            <div className="bg-pink-50 p-4 rounded-xl shadow-sm">
              <p className="text-lg text-gray-700 mb-2">You are buying:</p>
              <p className="text-xl font-semibold text-gray-900">
                {productName}
              </p>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-md">
                Confirm Purchase
              </button>

              <button
                onClick={handleCancel}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-3 rounded-lg transition duration-200 shadow-md"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <p className="text-lg text-gray-600">No product selected.</p>
        )}
      </div>
    </div>
  );
}
