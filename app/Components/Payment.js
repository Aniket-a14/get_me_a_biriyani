"use client"
import React, { useState } from "react";
import { Textarea } from "./ui/textarea";

const PaymentForm = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Name is required.");
      return;
    }
    if (!amount || amount < 10) {
      setError("Amount must be at least ₹10.");
      return;
    }
  };

  return (
    <div className="max-w-sm mx-auto p-5 shadow-md rounded-xl bg-black text-white">
      <h2 className="text-2xl font-semibold text-center mb-3">
        Support Your Creator
      </h2>
      
      <form className="space-y-3" onSubmit={handleSubmit}>
        <div className="flex justify-center space-x-2">
          {[10, 100, 500, 1000].map((amt) => (
            <button
              key={amt}
              type="button"
              className="px-3 py-1 bg-[rgba(255,255,255,.35)] hover:bg-[rgba(255,255,255,.65)] text-white font-medium rounded-md transition"
              onClick={() => setAmount(amt)}
            >
              ₹{amt}
            </button>
          ))}
        </div>

        {error && <p className="text-red-500 text-base text-center my-3">{error}</p>}

        <div>
          <label className="block text-sm font-medium">Enter Amount</label>
          <input 
            type="number" 
            placeholder="Amount (₹)" 
            className="w-full p-3 bg-transparent text-white rounded-md border border-white focus:outline-none"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="10"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Your Name</label>
          <input 
            type="text"
            className="w-full p-3 bg-transparent text-white rounded-md border border-white focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Message</label>
          <Textarea className="h-16" />
        </div>

        <button type="submit" className="w-full p-2 bg-[rgba(255,255,255,.35)] hover:bg-[rgba(255,255,255,.65)] text-white font-semibold rounded-md shadow-sm transition">
          Pay
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
