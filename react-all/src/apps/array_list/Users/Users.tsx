// Pobierz użytkowników https://jsonplaceholder.typicode.com/users , wyświetl ich i każdemu dodaj możliwość jego usunięcia, do tego też powinien wystarczyć tylko 1 useState

import { useState } from "react";

interface User {
  id: number;
  name: string;
  username: string;
}
export const Users = () => {
  const [state, setState] = useState<User[]>([]);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div>       
      <div>
      <button onClick={fetchData}>Wyświetl dane użytkownika</button> 
        <ul> 
            {state.map((user) => ( 
                <li key={user.id}> 
                    {user.name} ({user.username}) 
                </li> 
            ))} 
        </ul> 
      </div>
    </div>
  );
};
