import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const EditData = () => {
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
      // Redirect to data list or show success message
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div>
      <h1>Edit Data</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={data.name || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Deksripsi:
          <input
            type="text"
            name="deskripsi"
            value={data.deksripsi || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Alamat:
          <input
            type="text"
            name="alamat"
            value={data.alamat || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Tanggal Lahir:
          <input
            type="date"
            name="tanggal_lahir"
            value={data.tanggal_lahir || ""}
            onChange={handleChange}
          />
        </label>{" "}
        <br />
        <label>
          Gambar (link):
          <input
            type="text"
            name="Gambar"
            value={data.gambar || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Update Data</button>
      </form>
    </div>
  );
};
