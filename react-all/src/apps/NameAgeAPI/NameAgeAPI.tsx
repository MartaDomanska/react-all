import { FormEvent, useState } from "react";

const API_URL = "https://api.agify.io/?name=";

export const NameAgeAPI = () => {
  const [name, setName] = useState("Ania");
  const [age, setAge] = useState(36);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch(API_URL + name)
      .then((res) => res.json())
      .then((data) => setAge(data.age));
  };
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 64 }}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <button style={{ width: "100%" }}>Submit</button>
      </form>
      <h1>{age}</h1>
    </div>
  );
};
