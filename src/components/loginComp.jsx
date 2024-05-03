import toast, { Toaster } from "react-hot-toast";
import React, { useState, useEffect } from "react";
import { Eye, EyeSlash } from "iconsax-react";
import { Link } from "react-router-dom";

export const LoginComp = () => {
  const [apiData, setApiData] = useState([]);

  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    nama: false,
    email: false,
    password: false,
  });

  // traking see dan unseen pass
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setFormErrors({ ...formErrors, [name]: false });
  };

  // Function untuk muncul dan tidak nya pass
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://v1.appbackend.io/v1/rows/l0h0FS0hj4ln";
        const response = await fetch(url);
        const result = await response.json();
        console.log("Data dari API:", result);
        setApiData(result.data);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    // Pengecekan email dan password
    const user = apiData.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (user) {
      console.log("Login successful");
      toast.success("login berhasil");

      setTimeout(() => {
        window.location.href = "/home";
      }, 1000);
    } else {
      toast.error("cek kembali email atau password anda!");
      console.log("Email atau password salah");
    }
  };

  return (
    <div>
      <Toaster />
      <div className="flex items-center min-h-screen px-4 md:px-0">
        <div className="max-w-md w-full mx-auto bg-white p-6 rounded-md shadow-md ">
          <h1 className="text-[1.6rem] text-center mb-4">Login</h1>
          <form onSubmit={handleLogin}>
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

            <button
              type="submit"
              className="bg-indigo-700 text-white px-4 py-2 rounded-md hover:bg-indigo-800 focus:outline-none focus:bg-indigo-900 w-full mb-10"
            >
              Login
            </button>
          </form>
          <p>
            <span>Belum punya akun?</span>{" "}
            <Link className="text-blue-700" to="/register">
              register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
