import React, { useState } from "react";

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
        // Tambahkan logika lainnya di sini, misalnya memperbarui tampilan dengan data terbaru
      } else {
        console.log("Failed to add data:", response.statusText);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div>
      <h2>Add New Data</h2>
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
