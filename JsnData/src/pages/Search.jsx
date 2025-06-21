// import { useState } from "react";
// import axios from "axios";

// const Search = () => {
//   const [eno, setEno] = useState("");
//   const [editData, setEditData] = useState(null);

//   const handleSearch = () => {
//     axios
//       .get(`http://localhost:3000/attendance?empno=${eno}`)
//       .then(res => {
//         if (res.data.length > 0) setEditData(res.data[0]);
//         else alert("Not found");
//       })
//       .catch(() => alert("Search failed"));
//   };

//   const handleUpdate = () => {
//     axios
//       .put(`http://localhost:3000/attendance/${editData.id}`, editData)
//       .then(() => {
//         alert("Updated");
//         setEditData(null);
//         setEno("");
//       })
//       .catch(() => alert("Update failed"));
//   };

//   return (
//     <div>
//       <h1>Search by Empno</h1>
//       <input value={eno} onChange={e => setEno(e.target.value)} placeholder="Empno" />
//       <button onClick={handleSearch}>Search</button>

//       {editData && (
//         <>
//           <h3>Edit Record</h3>
//           <input
//             value={editData.name} 
//             onChange={e => setEditData({ ...editData, name: e.target.value })}
//           />
//           <input
//             value={editData.empno}
//             onChange={e => setEditData({ ...editData, empno: e.target.value })}
//           />
//           <button onClick={handleUpdate}>Update</button>
//         </>
//       )}
//     </div>
//   );
// };

// export default Search;


import { useState } from "react";
import axios from "axios";

const Search = () => {
  const [prodno, setProdno] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = async () => {
    const res = await axios.get(`http://localhost:3000/Products?Prodno=${prodno}`);
    if (res.data.length > 0) setResult(res.data[0]);
    else {
      alert("Not found");
      setResult(null);
    }
  };

  return (
    <>
      <h2>Search by Product No</h2>
      <input value={prodno} onChange={(e) => setProdno(e.target.value)} placeholder="Enter Product No" />
      <button onClick={handleSearch}>Search</button>
      {result && (
        <div>
          <h4>Result:</h4>
          <p>Product Name: {result.name}</p>
          <p>Qty: {result.qty}</p>
          <p>Net Price: {result.netQty}</p>
          <p>Customer: {result.Customername}</p>
        </div>
      )}
    </>
  );
};

export default Search;