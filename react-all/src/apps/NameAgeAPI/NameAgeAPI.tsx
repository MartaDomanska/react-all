import { FormEvent, useState } from "react";

const API_URL = "https://api.agify.io/?name=";

export const NameAgeAPI = () => {
  const [name, setName] = useState("Ania");
  const [age, setAge] = useState(36);
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState("Loading...");
  const [showForm, setShowForm] = useState(true);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setShowForm(false);
    fetch(API_URL + name)
      .then((res) => res.json())
      .then((data) => setAge(data.age));
    setIsLoading(false);
    setText(text);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 64 }}>
      {showForm ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
          <button style={{ width: "100%" }} disabled={isLoading}>
            Submit
          </button>
        </form>
      ) : null}

      {showForm ? <h1>{age}</h1> : null}
      {!showForm ? <h1>{text}</h1> : null}
    </div>
  );
};
