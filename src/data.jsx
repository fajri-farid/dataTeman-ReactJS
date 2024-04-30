import React, { useEffect, useState } from "react";

export const DataComponent = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://v1.appbackend.io/v1/rows/4WluNE5LtmGb";
        const response = await fetch(url);
        const result = await response.json();
        console.log("Data dari API:", result);
        setApiData(result.data); // Menyimpan data dari API ke dalam state
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data dari API:</h1>
      <ul>
        {apiData.map((item) => (
          <li key={item._id}>
            Nama: {item.name}, Dibuat pada:{" "}
            {new Date(item.createdAt).toString()}
          </li>
        ))}
      </ul>
    </div>
  );
};
