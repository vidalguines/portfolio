'use client'

import { useState } from "react";
import axios from "axios";

export default function Demos() {
  const [result, setResult] = useState(null);

  const runDiagnosis = async () => {
    const res = await axios.post("https://your-faultlens-api.onrender.com/diagnose", {
      observations: [
        { parameter: "temperature", value: 85 },
        { parameter: "voltage_drop", value: 5 }
      ]
    });

    setResult(res.data);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Live Engineering Systems</h1>

      <button onClick={runDiagnosis}>
        Run Fault Diagnosis
      </button>

      {result && (
        <pre>{JSON.stringify(result, null, 2)}</pre>
      )}
    </div>
  );
}
