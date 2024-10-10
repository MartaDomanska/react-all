interface User {
  id: number;
  body: string;
}

async function fetchUsers(): Promise<User[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
}

// export const UserList = async () => {
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const data = await fetchUsers();
//         setUsers(data);
//       } catch (error) {
//         setError(error.message);
//       }
//     }
//     fetchData();
//   }, []);
//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       {users.map((user) => (
//         <div key={user.id}>
//           <p>{user.body}</p>
//         </div>
//       ))}
//     </div>
//   );
// };
