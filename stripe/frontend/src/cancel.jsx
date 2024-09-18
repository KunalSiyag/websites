import React from 'react';

function Cancel() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-2xl font-bold">Payment Cancelled</h1>
      <p>You cancelled the payment process. You can try again later.</p>
      <a href="/" className="bg-blue-500 text-white px-4 py-2 mt-3 rounded">Back to Home</a>
    </div>
  );
}

export default Cancel;
