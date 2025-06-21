// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Update = () => {
//   const [mydata, setMydata] = useState([]);
//   const navigate = useNavigate();

//   const loadData = () => {
//     axios
//       .get("http://localhost:3000/attendance")
//       .then(res => setMydata(res.data))
//       .catch(err => console.error(err));
//   };

//   useEffect(loadData, []);

//   const recDelete = id => {
//     axios
//       .delete(`http://localhost:3000/attendance/${id}`)
//       .then(() => {
//         alert("Deleted");
//         loadData();
//       })
//       .catch(() => alert("Delete failed"));
//   };

//   return (
//     <>
//       <h3>Employee List</h3>
//       <table border="1" width="600">
//         <thead>
//           <tr>
//             <th>#</th><th>Name</th><th>Empno</th><th>Designation</th><th>Dept</th><th>Salary</th><th>Edit</th><th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {mydata.map((item, i) => (
//             <tr key={item.id}>
//               <td>{i + 1}</td>
//               <td>{item.name}</td>
//               <td>{item.empno}</td>
//               <td>{item.designation}</td>
//               <td>{item.department}</td>
//               <td>{item.salary}</td>
//               <td><button onClick={() => navigate(`/edit/${item.id}`)}>Edit</button></td>
//               <td><button onClick={() => recDelete(item.id)}>Delete</button></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// };

// export default Update;


import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const loadData = async () => {
    const res = await axios.get("http://localhost:3000/Products");
    setProducts(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:3000/Products/${id}`);
    loadData();
  };

  return (
    <>
      <h2>Update Products</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Prod No</th>
            <th>Name</th>
            <th>Qty</th>
            <th>Net Price</th>
            <th>Customer</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.Prodno}</td>
              <td>{p.name}</td>
              <td>{p.qty}</td>
              <td>{p.netQty}</td>
              <td>{p.Customername}</td>
              <td><button onClick={() => navigate(`/edit/${p.id}`)}>Edit</button></td>
              <td><button onClick={() => deleteItem(p.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Update;