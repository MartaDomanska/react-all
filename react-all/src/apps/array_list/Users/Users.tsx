import { useState, useEffect } from 'react';
import './App.css';

interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
}

function App() {
  const [state, setState] = useState<Users[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const jsonData = await response.json();
      setState(jsonData);
    };
    fetchData();
  }, []);

  const removeUser = (user: object) => {
    setState(state.filter((el) => el !== user));
  };

  return (
    <>
      <div>
        <ul>
          {state.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email})
              <button
                onClick={() => {
                  removeUser(user);
                }}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
