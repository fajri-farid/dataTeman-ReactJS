import React, { useEffect } from "react";

export const DataComponent = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://v1.appbackend.io/v1/rows/4WluNE5LtmGb";
        const response = await fetch(url);
        const result = await response.json();
        console.log("Data dari API:", result);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, []); // useEffect akan dipanggil hanya sekali saat komponen ini di-mount

  return <div>Data</div>;
};
