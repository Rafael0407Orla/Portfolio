import React, { useState } from "react";

const ContactForm = () => {
  const [isFormsSubmit, setIsFormsSubmit] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormsSubmit(true);
    setFormData({ fullName: "", email: "", message: "" });
    console.log("Form submitted:", formData);
    setTimeout(() => {
      setIsFormsSubmit(false);
    }, 3000);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-brandText">
            Full Name:
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            name="fullName"
            placeholder="Enter your full name"
            className="mt-1 block w-full px-3 py-2 border border-brandTertirary rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-brandText">
            Email:
          </label>
          <input
            value={formData.email}
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Enter your email"
            className="mt-1 block w-full px-3 py-2 border border-brandTertirary rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-brandText">
            Message:
          </label>
          <textarea
            value={formData.message}
            onChange={handleChange}
            name="message"
            placeholder="Enter your message"
            rows="4"
            className="mt-1 block w-full px-3 py-2 border border-brandTertirary rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>

        <div className="flex justify-end">
          {isFormsSubmit && (
            <p className="block text-sm font-medium text-brandSucess mr-auto">
              Mensagem enviada!
            </p>
          )}
          <button
            type="submit"
            className="bg-gradient-to-r from-brandPrimary to-brandSecondary text-brandWhite py-2 px-6 rounded-lg shadow-md hover:shadow-lg focus:outline-none transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
