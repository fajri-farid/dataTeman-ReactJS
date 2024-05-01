import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const DataComponent = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://v1.appbackend.io/v1/rows/4WluNE5LtmGb";
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

  async function handleDelete(item) {
    try {
      const res = await fetch("https://v1.appbackend.io/v1/rows/4WluNE5LtmGb", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([item._id]),
      });
      const data = await res.json();
      console.log(data);

      setApiData((prevData) =>
        prevData.filter((dataItem) => dataItem._id !== item._id)
      );
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  }

  return (
    <div>
      <h1 className="text-lg text-red-500">Data dari API:</h1>
      <ul>
        {apiData.map((item, index) => (
          <li className="mb-4" key={item._id}>
            Nama: {item.name}, Dibuat pada:{" "}
            {new Date(item.createdAt).toString()}
            <button
              className="ml-4 border-4 border-black mr-4"
              onClick={() => handleDelete(item)}
            >
              Delete
            </button>
            <Link to={`/edit-data/${item._id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
