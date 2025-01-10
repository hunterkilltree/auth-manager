import { useState } from "react";
import { User } from "../../@type/user";
import LocalStorageHelper from "../../utils/helpers/LocalStorageHelper";
import ConstantHelper from "../../utils/constants/ConstantHelper";
import { Button, TextInput } from "@hunterkilltree/ui-lib";
import { useNavigate } from "react-router-dom";
import RouteConstant from "../../utils/constants/RouteConstant";

function LoginForm() {
  const navigate = useNavigate();
  // Define initial user state
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
  });

  const [salary, setSalary] = useState<number>(0);
  const [tax, setTax] = useState<number>(0);
  const [netSalary, setNetSalary] = useState<number>(0);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [id]: value, // Update the respective field based on the input id
    }));
  };

  const handleChangeSalary = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSalary(Number(value));
  };

  const handleChangeTax = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTax(Number(value));
  };

  const handleCalculateNetSalary = () => {
    const netSalary = salary - (salary * tax) / 100;
    setNetSalary(netSalary);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("User submitted:", user);
    // Add logic to handle login here, e.g., send data to an API
    const authToken: string = "123456789";
    // Storage user data in local storage to further login
    LocalStorageHelper.setLocalStorageItem(
      ConstantHelper.USER_TOKEN,
      authToken
    );

    // Redirect to profile page
    navigate(RouteConstant.PROFILE);
  };

  return (
    <div className="flex h-screen justify-center gap-4">
      <div className="flex w-60 flex-col gap-4">
        <h3>Calculate Net Salary</h3>
        <TextInput
          id="salary" // Match the id to the User property
          type="salary"
          placeholder="Your salary"
          sizing="sm"
          required
          value={salary} // Bind the input value to the state
          onChange={handleChangeSalary} // Update state on change
        />
        <TextInput
          id="tax" // Match the id to the User property
          type="tax"
          placeholder="Your tax"
          sizing="sm"
          required
          value={tax} // Bind the input value to the state
          onChange={handleChangeTax} // Update state on change
        />
        <Button onClick={handleCalculateNetSalary}>Calculate</Button>
        <p>Net Salary: {netSalary}</p>
      </div>
      <form className="flex w-60 flex-col gap-4" onSubmit={handleSubmit}>
        <h3>Login Form</h3>
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

export default LoginForm;
