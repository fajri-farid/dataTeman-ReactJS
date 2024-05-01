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

  const addNewData = async () => {
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
          window.location.href = "/"; // Replace with your home page URL
        }, 1000); // 3000 milliseconds (3 seconds)
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
      <form>
        <div>
          <label>Nama:</label>
          <input
            type="text"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Deskripsi:</label>
          <input
            type="text"
            name="deskripsi"
            value={formData.deskripsi}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Alamat:</label>
          <input
            type="text"
            name="alamat"
            value={formData.alamat}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Tanggal Lahir:</label>
          <input
            type="date"
            name="tanggal_lahir"
            value={formData.tanggal_lahir}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Gambar (link):</label>
          <input
            type="text"
            name="gambar"
            value={formData.gambar}
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={addNewData}>
          Add
        </button>
      </form>
    </div>
  );
};
