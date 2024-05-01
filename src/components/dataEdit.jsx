import React, { useState, useEffect } from "react";

const EditDataComponent = () => {
  const [formData, setFormData] = useState({
    nama: "",
    deskripsi: "",
    alamat: "",
    tanggal_lahir: "",
    gambar: "",
  });

  const fetchData = async () => {
    try {
      const url = "https://v1.appbackend.io/v1/rows/4WluNE5LtmGb/{item._id";
      const response = await fetch(url);
      const result = await response.json();
      console.log("Data dari API:", result);
      setApiData(result.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const addNewData = () => {
    fetch("https://v1.appbackend.io/v1/rows/4WluNE5LtmGb", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
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
  );
};

export default EditDataComponent;
