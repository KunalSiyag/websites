import React from 'react';

function Success() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-2xl font-bold">Payment Successful!</h1>
      <p>Thank you for your purchase.</p>
      <a href="/" className="bg-blue-500 text-white px-4 py-2 mt-3 rounded">Back to Home</a>
    </div>
  );
}

export default Success;