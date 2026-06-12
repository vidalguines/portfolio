'use client'

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Electrical Engineering Expert</h1>
      <h2>Systems • Reliability • AI-Driven Engineering</h2>

      <p>
        I build systems that replicate how elite engineers think:
        diagnosing failures under uncertainty, modeling trade-offs,
        and making high-stakes decisions.
      </p>

      <div style={{ marginTop: 20 }}>
        <a href="/demos">▶ View Live Systems</a>
      </div>
    </main>
  );
}
