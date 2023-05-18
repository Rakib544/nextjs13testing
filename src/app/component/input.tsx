"use client";

import { useState } from "react";

export default function TestInput() {
  const [name, setName] = useState("Rakib");
  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <p>{name}</p>
    </div>
  );
}
