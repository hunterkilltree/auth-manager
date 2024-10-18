import React from "react";
import { Button, TextInput } from "@hunterkilltree/ui-lib";

function App() {
  return (
    <form className="flex max-w-md flex-col gap-4 content-center">
      <TextInput
        id="email1"
        type="email"
        placeholder="name@email.com"
        required
      />
      <TextInput
        id="password1"
        type="password"
        placeholder="password"
        required
      />
      <Button type="submit">Login</Button>
    </form>
  );
}

export default App;
