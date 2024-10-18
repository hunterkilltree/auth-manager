import { useState } from "react";
import { User } from "./@type/user";
import { Button, TextInput } from "@hunterkilltree/ui-lib";

function App() {
  // Define initial user state
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [id]: value, // Update the respective field based on the input id
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("User submitted:", user);
    // Add logic to handle login here, e.g., send data to an API
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <form className="flex w-60 flex-col gap-4" onSubmit={handleSubmit}>
        <TextInput
          id="email" // Match the id to the User property
          type="email"
          placeholder="name@email.com"
          sizing="sm"
          required
          value={user.email} // Bind the input value to the state
          onChange={handleChange} // Update state on change
        />
        <TextInput
          id="password" // Match the id to the User property
          type="password"
          placeholder="password"
          sizing="sm"
          required
          value={user.password} // Bind the input value to the state
          onChange={handleChange} // Update state on change
        />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}

export default App;
