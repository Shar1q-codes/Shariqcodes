import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields.");
      return;
    }
    // Simulate submission
    setSuccess("Thank you! Your message has been received.");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-slate-800/70 backdrop-blur-sm rounded-xl shadow p-6 flex flex-col gap-4 mb-8">
      <label className="text-gray-200 font-semibold" htmlFor="cf-name">Name</label>
      <input
        id="cf-name"
        name="name"
        type="text"
        className="border border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-700/50 text-gray-200"
        value={form.name}
        onChange={handleChange}
        aria-required="true"
        aria-label="Your Name"
      />
      <label className="text-gray-200 font-semibold" htmlFor="cf-email">Email</label>
      <input
        id="cf-email"
        name="email"
        type="email"
        className="border border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-700/50 text-gray-200"
        value={form.email}
        onChange={handleChange}
        aria-required="true"
        aria-label="Your Email"
      />
      <label className="text-gray-200 font-semibold" htmlFor="cf-message">Message</label>
      <textarea
        id="cf-message"
        name="message"
        rows={4}
        className="border border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-700/50 text-gray-200"
        value={form.message}
        onChange={handleChange}
        aria-required="true"
        aria-label="Your Message"
      />
      {error && <div className="text-red-400 text-sm">{error}</div>}
      {success && <div className="text-green-400 text-sm">{success}</div>}
      <button
        type="submit"
        className="mt-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition text-sm"
        aria-label="Send Message"
      >
        Send Message
      </button>
    </form>
  );
}
