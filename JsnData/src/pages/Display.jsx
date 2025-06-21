// import { useState, useEffect } from "react";
// import axios from "axios";

// const Display = () => {
//   const [mydata, setMydata] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/attendance")
//       .then(res => setMydata(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <>
//       <h2>Employee Records</h2>
//       <table border="1" cellPadding="10">
//         <thead>
//           <tr>
//             <th>Emp No</th>
//             <th>Name</th>
//             <th>Designation</th>
//             <th>Department</th>
//             <th>Salary</th>
//           </tr>
//         </thead>
//         <tbody>
//           {mydata.map((item, i) => (
//             <tr key={i}>
//               <td>{item.empno}</td>
//               <td>{item.name}</td>
//               <td>{item.designation}</td>
//               <td>{item.department}</td>
//               <td>{item.salary}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// };

// export default Display;







import React, { useState, useEffect } from "react";
import axios from "axios";

const Display = () => {
  const [products, setProducts] = useState([]);

  const loadData = async () => {
    const res = await axios.get("http://localhost:3000/Products");
    setProducts(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  // 👇 Total Quantity
  let totalQty = 0;
  let totalNetPrice = 0;

  products.forEach((item) => {
    totalQty += parseInt(item.qty);          // qty = 5
    totalNetPrice += parseFloat(item.netQty); // netQty = 2000
  });

  return (
    <div>
      <h2>Product Records</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Product No</th>
            <th>Name</th>
            <th>Qty</th>
            <th>Net Price</th>
            <th>Customer Name</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={index}>
              <td>{item.Prodno}</td>
              <td>{item.name}</td>
              <td>{item.qty}</td>
              <td>{item.netQty}</td>
              <td>{item.Customername}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Total Quantity: {totalQty}</h3>
      <h3>Total Selling Price: ₹{totalNetPrice}</h3>
    </div>
  );
};

export default Display;