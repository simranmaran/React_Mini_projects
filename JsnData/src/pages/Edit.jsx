// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";

// const Edit = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [mydata, setMydata] = useState({});

//   useEffect(() => {
//     axios
//       .get(`http://localhost:3000/attendance/${id}`)
//       .then(res => setMydata(res.data))
//       .catch(err => console.error(err));
//   }, [id]);

//   const handleUpdate = () => {
//     axios
//       .put(`http://localhost:3000/attendance/${id}`, mydata)
//       .then(() => {
//         alert("Updated");
//         navigate("/update");
//       })
//       .catch(() => alert("Update failed"));
//   };

//   const handleInput = e => {
//     setMydata({ ...mydata, [e.target.name]: e.target.value });
//   };

//   if (!mydata.name) return <p>Loading...</p>;

//   return (
//     <div>
//       <h3>Edit Employee</h3>
//       {["name","empno","designation","department","salary"].map(key => (
//         <div key={key}>
//           <label>
//             {key.charAt(0).toUpperCase()+key.slice(1)}:
//             <input name={key} value={mydata[key] || ""} onChange={handleInput} />
//           </label><br/><br/>
//         </div>
//       ))}
//       <button onClick={handleUpdate}>Save</button>
//       <button onClick={() => navigate("/update")}>Cancel</button>
//     </div>
//   );
// };

// export default Edit;




import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [input, setInput] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3000/Products/${id}`).then((res) => setInput(res.data));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    await axios.put(`http://localhost:3000/Products/${id}`, input);
    alert("Product updated!");
    navigate("/update");
  };

  return (
    <>
      <h2>Edit Product</h2>
      Product No: <input name="Prodno" value={input.Prodno} onChange={handleChange} /><br />
      Name: <input name="name" value={input.name} onChange={handleChange} /><br />
      Qty: <input name="qty" value={input.qty} onChange={handleChange} /><br />
      Net Price: <input name="netQty" value={input.netQty} onChange={handleChange} /><br />
      Customer: <input name="Customername" value={input.Customername} onChange={handleChange} /><br />
      <button onClick={handleSubmit}>Update</button>
    </>
  );
};

export default Edit;