"use client";

import { FormEvent } from "react";

export default function Home() {
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <main>
      <h1>Website</h1>
      <p>Please submit your inquiry to start procurement process.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inquiry">Inquiry</label>
        <input name="inquiry" id="inquiry" type="file" />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
