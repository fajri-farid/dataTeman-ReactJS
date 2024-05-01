import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const EditData = () => {
  const [data, setData] = useState({});
  const { id } = useParams(); // Ambil nilai parameter ID dari URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://v1.appbackend.io/v1/rows/4WluNE5LtmGb/${id}`
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {/* COMING SOON */}
      <h1>Edit Data</h1>
      <p>ID: {id}</p>
      <p>Name: {data.name}</p>
    </div>
  );
};
