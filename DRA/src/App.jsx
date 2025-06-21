import React, { useState } from "react";

const App = () => {
  const [inputs, setInputs] = useState({ basic: "", ta: "", da: "", hra: "", });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const calculate = () => {
    const basic = parseFloat(inputs.basic) || 0;
    const ta    = parseFloat(inputs.ta)    || 0;
    const da    = parseFloat(inputs.da)    || 0;
    const hra   = parseFloat(inputs.hra)   || 0;

    const total = basic + ta + da + hra;

    let tax = 0;
    if (total >= 80000) {
      tax = total * 0.20;
    } else if (total >= 50000) {
      tax = total * 0.15;
    } else if (total >= 30000) {
      tax = total * 0.10;
    }
  

    setResult({ total, tax });
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Salary & Tax Calculator</h2>

      {["basic", "ta", "da", "hra"].map((field) => (
        
        <label key={field} style={{ display: "block", margin: "8px 0" }}>
          {field.toUpperCase()}:
          <input type="number"  name={field}  value={inputs[field]} onChange={handleChange} style={{ marginLeft: 10 }} />
        </label>
      ))}

      <button onClick={calculate} style={{ marginTop: 10 }}>
        Calculate
      </button>

      {result && (
        <div style={{ marginTop: 20 }}>
          <p><strong>Total Salary:</strong> ₹{result.total.toFixed(2)}</p>
          <p><strong>Tax:</strong> ₹{result.tax.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};


export default App;
