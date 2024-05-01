import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export const DataEdit = () => {
  let { id } = useParams(); // Ambil nilai parameter ID dari URL
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://v1.appbackend.io/v1/rows/4WluNE5LtmGb/${id}`
        );
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://v1.appbackend.io/v1/rows/4WluNE5LtmGb`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      console.log("Data updated successfully:", result);
      toast.success("data berhasil diupdate");

      setTimeout(() => {
        window.location.href = "/home";
      }, 1000);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-10 md:p-6 rounded-md shadow-md">
      <Toaster />
      {/* <h1>Edit Data</h1> */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="nama" className="block text-gray-800">
            Name:
            <input
              type="text"
              name="name"
              value={data.name || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-800 focus:outline-none focus:border-blue-500"
            />
          </label>
        </div>

        <div className="mb-4">
          <label htmlFor="deskripsi" className="block text-gray-800">
            Deskripsi:
            <input
              type="text"
              name="deksripsi"
              value={data.deksripsi || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-800 focus:outline-none focus:border-blue-500"
            />
          </label>
        </div>

        <div className="mb-4">
          <label htmlFor="alamat" className="block text-gray-800">
            Alamat:
            <input
              type="text"
              name="alamat"
              value={data.alamat || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-800 focus:outline-none focus:border-blue-500"
            />
          </label>
        </div>

        <div className="mb-4">
          <label htmlFor="tanggal_lahir" className="block text-gray-800">
            Tanggal Lahir:
            <input
              type="date"
              name="tanggal_lahir"
              value={data.tanggal_lahir || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-800 focus:outline-none focus:border-blue-500"
            />
          </label>
        </div>

        <div className="mb-4">
          <label htmlFor="gambar" className="block text-gray-800">
            Gambar (link):
            <input
              type="text"
              name="gambar"
              value={data.gambar || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-800 focus:outline-none focus:border-blue-500"
            />
          </label>
        </div>

        <button
          type="submit"
          className="bg-indigo-700 text-white px-4 py-2 rounded-md hover:bg-indigo-800 focus:outline-none focus:bg-indigo-900 w-full"
        >
          Update Data
        </button>
      </form>
    </div>
  );
};
