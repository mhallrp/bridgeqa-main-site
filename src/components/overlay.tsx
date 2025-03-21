"use client";

import React, { useState } from "react";

type OverlayProps = {
  onClose: () => void;
};

const Overlay: React.FC<OverlayProps> = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [message, setMessage] = useState("");

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isFormValid = name && isValidEmail && role && teamSize;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, role, teamSize, message }),
      });

      const result = await res.json();

      if (res.ok) {
        alert("✅ Email sent successfully!");
        onClose(); // or clear the form
      } else {
        alert("❌ Failed to send email: " + result.message);
      }
    } catch (err) {
      console.error("Send error:", err);
      alert("❌ Unexpected error occurred.");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.45)] flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="p-9 bg-white border-4 border-bridgeBlue rounded-3xl flex flex-col gap-6 w-full max-w-[960px]"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="font-montserrat font-black text-4xl">
          Request Early Access to BridgeQA
        </h1>
        <p className="font-semibold text-light">
          We’re launching soon. Sign up to be among the first to streamline your design QA workflow.
        </p>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex gap-6">
            <div className="w-1/2 flex flex-col">
              <label htmlFor="name" className="mb-2 text-left">
                Your Name<span className="text-red-500"> *</span>
              </label>
              <input
                type="text"
                id="name"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-bridgeBlue focus:border-bridgeBlue"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Alice Robertson"
              />
            </div>

            <div className="w-1/2 flex flex-col">
              <label htmlFor="email" className="mb-2 text-left">
                Your Email<span className="text-red-500"> *</span>
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-bridgeBlue focus:border-bridgeBlue"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. alice@company.com"
              />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="w-1/2 flex flex-col">
              <label htmlFor="role" className="mb-2 text-left">
                Your Role<span className="text-red-500"> *</span>
              </label>
              <input
                type="text"
                id="role"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-bridgeBlue focus:border-bridgeBlue"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="e.g. Product Designer"
              />
            </div>

            <div className="w-1/2 flex flex-col">
              <label className="mb-2 text-left">
                Team Size<span className="text-red-500"> *</span>
              </label>
              <div className="flex flex-wrap gap-4">
                {["1–5", "6–15", "16–50", "51+"].map((size) => (
                  <label key={size} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="teamSize"
                      value={size}
                      className="accent-bridgeBlue"
                      checked={teamSize === size}
                      onChange={(e) => setTeamSize(e.target.value)}
                    />
                    {size}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="mb-2 text-left">
              Message (Optional)
            </label>
            <textarea
              id="message"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-bridgeBlue focus:border-bridgeBlue"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="e.g. Anything else you’d like to tell us?"
            />
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className={`text-white rounded py-2 px-4 font-semibold text-sm self-start ${
              isFormValid ? "bg-bridgeBlue cursor-pointer" : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Request Early Access
          </button>
        </form>
      </div>
    </div>
  );
};

export default Overlay;
