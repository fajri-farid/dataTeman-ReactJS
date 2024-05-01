import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noneImage from "../assets/none.svg";
import { Toaster, toast } from "react-hot-toast";

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

      toast.success("data berhasil dihapus");

      setApiData((prevData) =>
        prevData.filter((dataItem) => dataItem._id !== item._id)
      );
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  }

  function formatDate(dateString) {
    const months = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    const dateParts = dateString.split("-");
    const year = dateParts[0];
    const monthIndex = parseInt(dateParts[1]) - 1;
    const day = dateParts[2];
    const monthName = months[monthIndex];
    return `${day} ${monthName} ${year}`;
  }

  return (
    <div>
      <Toaster />
      {/* <h1 className="text-lg text-red-500">Data dari API:</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {apiData.map((item) => (
          <div className="bg-white shadow-md rounded-md p-4" key={item._id}>
            {item.gambar ? (
              <img
                src={item.gambar}
                alt="Foto Temanmu"
                className="mx-auto w-[50vw] sm:w-[30vw] md:w-[20vw] lg:w-[15vw] h-auto mb-2"
              />
            ) : (
              <img
                src={noneImage}
                alt="Gambar Tidak Tersedia"
                className="mx-auto w-[50vw] sm:w-[30vw] md:w-[20vw] lg:w-[15vw] h-auto mb-2"
              />
            )}
            <h2 className="text-[1.3rem] font-semibold mb-2">{item.name}</h2>
            {/* <p className="text-gray-600 mb-2">
              Dibuat pada: {new Date(item.createdAt).toString()}
            </p> */}
            <p className="text-gray-600 mb-2">Deskripsi: {item.deksripsi}</p>
            <p className="text-gray-600 mb-2">Alamat: {item.alamat}</p>
            <p className="text-gray-600 mb-2">
              Tanggal Lahir: {formatDate(item.tanggal_lahir)}
            </p>

            <div className="flex justify-between items-center mt-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600"
                onClick={() => handleDelete(item)}
              >
                Delete
              </button>
              <Link
                to={`/edit-data/${item._id}`}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
