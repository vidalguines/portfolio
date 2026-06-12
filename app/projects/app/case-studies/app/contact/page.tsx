'use client'

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <div style={{ padding: 40 }}>
      <h1>Work With Me</h1>

      <p>
        I collaborate on high-impact engineering systems, advisory,
        and AI-integrated solutions.
      </p>

      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <textarea placeholder="Project details" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
