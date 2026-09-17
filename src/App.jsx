import { useState } from "react";
import Submitted from "./Submitted";
import Navbar from "./Navbar";

import logo from "./assets/Sharda.png";
import newlogo from "./assets/shardaads.jpg";

import { FaMobileScreen } from "react-icons/fa6";
import { MdDriveFileRenameOutline, MdEmail } from "react-icons/md";
import {
  FaPager,
  FaMapMarker,
  FaBirthdayCake,
  FaFileUpload,
} from "react-icons/fa";
import { FaArrowRightToCity } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";

function App() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    age: "",
    pin: "",
    city: "",
    dob: "",
    password: "",
    Resume: "",
  });

  if (window.location.pathname === "/submitted") {
    return <Submitted />;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    let newValue = value;

    if (name === "name") {
      newValue = value.replace(/[^a-zA-Z ]/g, "");
    }

    if (name === "city") {
      newValue = value.replace(/[^a-zA-Z ]/g, "");
    }

    if (name === "mobile") {
      newValue = value.replace(/\D/g, "").slice(0, 10);
    }

    if (name === "pin") {
      newValue = value.replace(/\D/g, "").slice(0, 6);
    }

    setForm({
      ...form,
      [name]: newValue,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (form.mobile.length !== 10) {
    alert("Mobile number must be exactly 10 digits.");
    return;
  }

  if (form.pin.length !== 6) {
    alert("PIN code must be exactly 6 digits.");
    return;
  }

  try {
    const response = await fetch(
      "http://localhost/registration-api/register.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          mobile: form.mobile,
          email: form.email,
          age: form.age,
          pin: form.pin,
          city: form.city,
          dob: form.dob,
          password: form.password,
        }),
      }
    );

    const result = await response.json();

    if (result.success) {
      alert("Registration successful!");

      sessionStorage.setItem(
        "submittedData",
        JSON.stringify(form)
      );

      window.location.href = "/submitted";
    } else {
      alert(result.message);
    }

  } catch (error) {
    console.error(error);
    alert("Server connection failed. Please check XAMPP.");
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">

      {/* Navbar */}
      <Navbar />

      {/* Background Section */}
      <div className="min-h-screen px-4 py-10">

        {/* Main Card */}
        <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-blue-100 overflow-hidden">

          {/* Top Blue Section */}
          <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 px-6 py-8">

            {/* Logos */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg">
                <img
                  src={logo}
                  alt="Sharda University Logo"
                  className="w-56 h-auto object-contain"
                />
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg">
                <img
                  src={newlogo}
                  alt="Sharda University"
                  className="w-64 h-auto object-contain"
                />
              </div>

            </div>

          </div>

          {/* Form Content */}
          <div className="p-6 md:p-10">

            {/* Heading */}
            <div className="text-center mb-10">

              <h1 className="text-4xl font-bold text-blue-950">
                Registration <span className="text-blue-600">Form</span>
              </h1>

              <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>

              <p className="text-gray-500 mt-4">
                Please fill in your details to complete the registration.
              </p>

            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>

              {/* Fields Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">

                {/* Name */}
                <div className="mb-5">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <MdDriveFileRenameOutline className="text-blue-600 text-lg" />
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    minLength="3"
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  />
                </div>

                {/* Mobile */}
                <div className="mb-5">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <FaMobileScreen className="text-blue-600 text-lg" />
                    Mobile Number
                  </label>

                  <input
                    type="text"
                    name="mobile"
                    value={form.mobile}
                    onChange={handleChange}
                    required
                    placeholder="Enter 10 digit mobile number"
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  />
                </div>

                {/* Email */}
                <div className="mb-5">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <MdEmail className="text-blue-600 text-lg" />
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  />
                </div>

                {/* Age */}
                <div className="mb-5">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <FaPager className="text-blue-600 text-lg" />
                    Age
                  </label>

                  <input
                    type="number"
                    name="age"
                    value={form.age}
                    onChange={handleChange}
                    min="18"
                    max="60"
                    required
                    placeholder="Enter your age"
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  />
                </div>

                {/* PIN */}
                <div className="mb-5">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <FaMapMarker className="text-blue-600 text-lg" />
                    PIN Code
                  </label>

                  <input
                    type="text"
                    name="pin"
                    value={form.pin}
                    onChange={handleChange}
                    required
                    placeholder="Enter 6 digit PIN code"
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  />
                </div>

                {/* City */}
                <div className="mb-5">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <FaArrowRightToCity className="text-blue-600 text-lg" />
                    City
                  </label>

                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    required
                    placeholder="Enter your city"
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  />
                </div>

                {/* DOB */}
                <div className="mb-5">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <FaBirthdayCake className="text-blue-600 text-lg" />
                    Date of Birth
                  </label>

                  <input
                    type="date"
                    name="dob"
                    value={form.dob}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  />
                </div>

                {/* Password */}
                <div className="mb-5">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <RiLockPasswordFill className="text-blue-600 text-lg" />
                    Password
                  </label>

                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    minLength="8"
                    required
                    placeholder="Minimum 8 characters"
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  />
                </div>

              </div>

              {/* Resume */}
              <div className="mt-3 mb-7">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <FaFileUpload className="text-blue-600 text-lg" />
                  Resume
                </label>

                <input
                  type="file"
                  name="Resume"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) =>
                    setForm({
                      ...form,
                      Resume: e.target.files[0],
                    })
                  }
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                />

                <p className="text-xs text-gray-500 mt-2">
                  Accepted formats: PDF, DOC, DOCX
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
              >
                Submit Registration chirag →
              </button>

            </form>

          </div>
        </div>

        {/* Footer Text */}
        <p className="text-center text-gray-500 text-sm mt-6">
          © 2026 Sharda University • Registration Portal
        </p>

      </div>
    </div>
  );
}

export default App;