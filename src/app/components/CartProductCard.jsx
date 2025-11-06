 import React from "react";

const CartProductCard = ({ cart, removeFromCart }) => {
  // Calculate total price
  const total = cart.reduce((sum, item) => sum + item.price , 0);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center text-gray-600 text-lg">Your cart is empty 🛒</div>
      ) : (
        <div className="bg-white shadow-md rounded-xl p-4">
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-gray-200 pb-4"
              >
                {/* Product Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-lg border"
                  />
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">{item.title}</h3>
                    <p className="text-gray-500">${item.price}</p>
                  </div>
                </div>

                {/* Quantity & Total */}
                <div className="flex items-center gap-6">
                  <p className="text-gray-600">Qty: 1</p>
                  <p className="font-semibold text-gray-800">
                     ${item.price}
                  </p>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total Section */}
          <div className="mt-6 flex justify-between items-center border-t pt-4">
            <h2 className="text-xl font-semibold text-gray-800">Total:</h2>
            <p className="text-xl font-bold text-green-600">${total}</p>
          </div>

          <div className="mt-4 flex justify-end">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartProductCard;
