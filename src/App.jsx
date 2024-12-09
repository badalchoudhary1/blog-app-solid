// import UserList from './userlist'; // Use a relative path



// function App() {
//   const users = [
//     { id: 1, name: "John Doe", email: "john@example.com" },
//     { id: 2, name: "Jane Smith", email: "jane@example.com" },
//     { id: 3, name: "Sam Wilson", email: "sam@example.com" },
//   ];

//   return (
//     <div>
//       <h1>User Directory</h1>
//       {/* Pass the list of users as props to UserList */}
//       <UserList users={users} />
//     </div>
//   );
// }




// import { createSignal } from "solid-js"; 


// function App() {
//   const [userRole, setUserRole] = createSignal("guest"); 

//   return (
//     <div>
//       <button onClick={() => setUserRole("guest")}>Set Guest</button>
//       <button onClick={() => setUserRole("user")}>Set User</button>
//       <button onClick={() => setUserRole("admin")}>Set Admin</button>

//       <Show when={userRole() === "admin"}>
//         <p>Welcome Admin! You have full access.</p>
//       </Show>
//       <Show when={userRole() === "user"}>
//         <p>Welcome User! You have limited access.</p>
//       </Show>
//       <Show when={userRole() === "guest"}>
//         <p>Welcome Guest! Please log in for more options.</p>
//       </Show>
//     </div>
//   );
// }

// import { createSignal } from "solid-js";

// function App() {
//   const [loggedIn, setLoggedIn] = createSignal(false);

//   return (
//     <div>
//       <button onClick={() => setLoggedIn(!loggedIn())}>
//         {loggedIn() ? "Log Out" : "Log In"}
//       </button>
//       <p>{loggedIn() ? "Welcome back, user!" : "Please log in to continue."}</p>
//     </div>
//   );
// }

// export default App;


// import { createSignal } from "solid-js";

// function App() {
//   const [items, setItems] = createSignal(["Apple", "Banana", "Cherry"]);

//   return (
//     <div>
//       <h3>Fruits List:</h3>
//       <ul>
//         <For each={items()}>{(item, index) => <li>{index() + 1}. {item}</li>}</For>
//       </ul>
//       <button onClick={() => setItems([...items(), "Mango"])}>Add Mango</button>
//     </div>
//   );
// }

// export default App;

// function App() {
//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent page reload
//     alert("Form submitted!");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" placeholder="Enter your name" />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default App;



import { createStore } from "solid-js/store";

function App() {
  const [user, setUser] = createStore({
    name: "John Doe",
    address: { city: "New York", zip: "10001" },
  });

  const updateCity = () => setUser("address", "city", "Los Angeles");

  return (
    <div>
      <h1>Name: {user.name}</h1>
      <p>City: {user.address.city}</p>
      <button onClick={updateCity}>Move to Los Angeles</button>
    </div>
  );
}

export default App;
