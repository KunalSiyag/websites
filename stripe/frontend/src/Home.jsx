import React from "react";

const items = [
  { id: 1, name: "Item 1", price: 10 },
  { id: 2, name: "Item 2", price: 20 },
  { id: 3, name: "Item 3", price: 30 },
  { id: 4, name: "Item 4", price: 40 },
];

function Home({ addToCart }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-purple-300 p-4 rounded-md text-center"
        >
          <h2 className="text-xl font-bold">{item.name}</h2>
          <p className="text-lg">${item.price}</p>
          <button
            onClick={() => addToCart(item)}
            className="bg-green-500 text-white px-3 py-1 mt-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
