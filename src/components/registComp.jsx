import toast, { Toaster } from "react-hot-toast";
import React, { useState } from "react";
import { Eye, EyeSlash } from "iconsax-react";
import { Link } from "react-router-dom";

export const RegistComp = () => {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    nama: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  // State to track if password is visible or not
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Reset form error when user starts typing in a field
    setFormErrors({ ...formErrors, [name]: false });
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleAddNewUser = async (e) => {
    e.preventDefault();
    // cek value ada isinya atau tidak
    const isFormValid = Object.values(formData).every((value) => value !== "");
    if (!isFormValid) {
      setFormErrors({
        nama: formData.nama === "",
        email: formData.email === "",
        password: formData.password === "",
        confirmPassword: formData.confirmPassword === "",
      });
      return;
    }
    // cek password sama atau nda
    if (formData.password !== formData.confirmPassword) {
      toast.error("Pasword dan konfirmasi password tidak sesuai.");
      return;
    }
    try {
      const url = "https://v1.appbackend.io/v1/rows/l0h0FS0hj4ln";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          {
            name: formData.nama,
            email: formData.email,
            password: formData.password,
          },
        ]),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Data added successfully:", result);
        toast.success("Akun Anda berhasil dibuat");

        setTimeout(() => {
          window.location.href = "/login";
        }, 1000);
      } else {
        console.log("Failed to add data:", response.statusText);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div>
      <Toaster />
      <div className="flex items-center min-h-screen px-4 md:px-0">
        <div className="max-w-md w-full mx-auto bg-white p-6 rounded-md shadow-md ">
          <h1 className="text-[1.6rem] text-center mb-4">Register</h1>
          <form onSubmit={handleAddNewUser}>
            <div className="mb-4">
              <label htmlFor="nama" className="block text-gray-800">
                Nama Lengkap:
              </label>
              <input
                type="text"
                name="nama"
                id="nama"
                value={formData.nama}
                onChange={handleChange}
                className={`w-full border ${
                  formErrors.nama ? "border-red-500" : "border-gray-300"
                } rounded-md py-2 px-3 text-gray-800 focus:outline-none focus:border-blue-500`}
              />
              {formErrors.nama && (
                <p className="text-red-500">Nama lengkap harus diisi</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-800">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border ${
                  formErrors.email ? "border-red-500" : "border-gray-300"
                } rounded-md py-2 px-3 text-gray-800 focus:outline-none focus:border-blue-500`}
              />
              {formErrors.email && (
                <p className="text-red-500">Email harus diisi dengan benar</p>
              )}
            </div>

            <div className="mb-4 relative">
              <label htmlFor="password" className="block text-gray-800">
                Password:
              </label>
              <input
                type={passwordVisible ? "text" : "password"} // Use text type if passwordVisible is true
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full border ${
                  formErrors.password ? "border-red-500" : "border-gray-300"
                } rounded-md py-2 px-3 text-gray-800 focus:outline-none focus:border-blue-500 pr-10`} // Add padding right for the icon
              />
              
              <div
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <Eye /> : <EyeSlash />}
              </div>
              {formErrors.password && (
                <p className="text-red-500">Password harus diisi</p>
              )}
            </div>

            
            <div className="mb-4 relative">
              <label htmlFor="confirmPassword" className="block text-gray-800">
                Konfirmasi Password:
              </label>
              <input
                type={passwordVisible ? "text" : "password"} // Use text type if passwordVisible is true
                name="confirmPassword"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full border ${
                  formErrors.confirmPassword
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md py-2 px-3 text-gray-800 focus:outline-none focus:border-blue-500 pr-10`} // Add padding right for the icon
              />
              
              <div
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <Eye /> : <EyeSlash />}
              </div>
              {formErrors.confirmPassword && (
                <p className="text-red-500">Konfirmasi Password harus diisi</p>
              )}
            </div>

            
            <button
              type="submit"
              className="bg-indigo-700 text-white px-4 py-2 rounded-md hover:bg-indigo-800 focus:outline-none focus:bg-indigo-900 w-full mb-10"
            >
              Register
            </button>
          </form>
          <p>
            <span>Sudah punya akun? </span>
            <Link className="text-blue-700" to="/login">
              login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
