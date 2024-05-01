// import React, { useState, useEffect } from "react";

// export const EditData = ({ match }) => {
//   const [data, setData] = useState({});
//   const id = match.params.id; // Ambil ID dari URL

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `https://v1.appbackend.io/v1/rows/4WluNE5LtmGb/${id}`
//         );
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(
//         `https://v1.appbackend.io/v1/rows/4WluNE5LtmGb/${id}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(data),
//         }
//       );
//       const result = await response.json();
//       console.log("Data updated successfully:", result);
//       // Redirect to data list or show success message
//     } catch (error) {
//       console.error("Error updating data:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Edit Data</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={data.name || ""}
//             onChange={handleChange}
//           />
//         </label>
//         {/* Add more input fields for other data properties */}
//         <button type="submit">Update Data</button>
//       </form>
//     </div>
//   );
// };
