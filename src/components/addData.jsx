import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
// import { toast } from "react-toastify";

export const AddData = () => {
  const [formData, setFormData] = useState({
    nama: "",
    deskripsi: "",
    alamat: "",
    tanggal_lahir: "",
    gambar: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddNewData = async () => {
    try {
      const url = "https://v1.appbackend.io/v1/rows/4WluNE5LtmGb";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          {
            name: formData.nama,
            gambar: formData.gambar,
            deksripsi: formData.deskripsi,
            tanggal_lahir: formData.tanggal_lahir,
            alamat: formData.alamat,
          },
        ]),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Data added successfully:", result);
        toast.success("data berhasil ditambahkan");

        setTimeout(() => {
          window.location.href = "/home";
        }, 1000);
      } else {
        console.log("Failed to add data:", response.statusText);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md mb-8">
      <Toaster />
      <form>
        <div className="mb-4">
          <label htmlFor="nama" className="block text-gray-800">
            Nama:
          </label>
          <input
            type="text"
            name="nama"
            id="nama"
            value={formData.nama}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-800 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="deskripsi" className="block text-gray-800">
            Deskripsi:
          </label>
          <input
            type="text"
            name="deskripsi"
            id="deskripsi"
            value={formData.deskripsi}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-800 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="alamat" className="block text-gray-800">
            Alamat:
          </label>
          <input
            type="text"
            name="alamat"
            id="alamat"
            value={formData.alamat}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-800 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="tanggal_lahir" className="block text-gray-800">
            Tanggal Lahir:
          </label>
          <input
            type="date"
            name="tanggal_lahir"
            id="tanggal_lahir"
            value={formData.tanggal_lahir}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-800 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gambar" className="block text-gray-800">
            Gambar (link):
          </label>
          <input
            type="text"
            name="gambar"
            id="gambar"
            value={formData.gambar}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-800 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="button"
          onClick={handleAddNewData}
          className="bg-indigo-700 text-white px-4 py-2 rounded-md hover:bg-indigo-800 focus:outline-none focus:bg-indigo-900 w-full"
        >
          Add
        </button>
      </form>
    </div>
  );
};
