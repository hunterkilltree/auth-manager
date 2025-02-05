import { useState } from "react";
import { User } from "../../@type/user";
import LocalStorageHelper from "../../utils/helpers/LocalStorageHelper";
import ConstantHelper from "../../utils/constants/ConstantHelper";
import {
  Button,
  TextInput,
  FloatingLabel,
  Datepicker,
} from "@hunterkilltree/ui-lib";
import { useNavigate } from "react-router-dom";
import RouteConstant from "../../utils/constants/RouteConstant";

function LoginForm() {
  const navigate = useNavigate();
  // Define initial user state
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
  });

  const [salary, setSalary] = useState<string>("");
  const [tax, setTax] = useState<string>("");
  const [netSalary, setNetSalary] = useState<string>("");

  // const [salary, setSalary] = useState<number>(0);
  // const [tax, setTax] = useState<number>(0);
  // const [netSalary, setNetSalary] = useState<number>(0);

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
    setSalary(value);
  };

  const handleChangeTax = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTax(value);
  };

  const handleCalculateNetSalary = () => {
    const numericSalary = Number(salary) || 0;
    const numericTax = Number(tax) || 0;

    const netSalary = (
      numericSalary -
      (numericSalary * numericTax) / 100
    ).toFixed(2); // Convert to string with 2 decimal places
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
      <Datepicker
        autoHide
        language="en"
        showClearButton
        showTodayButton
        theme={{}}
      />
      <div className="flex w-60 flex-col gap-4">
        <h3>Calculate Net Salary</h3>
        <FloatingLabel
          color="default"
          label="Salary"
          sizing="sm"
          variant="outlined"
          value={salary} // Bind the input value to the state
          onChange={handleChangeSalary} // Update state on change
        />
        <FloatingLabel
          color="default"
          label="Tax"
          sizing="sm"
          variant="outlined"
          value={tax} // Bind the input value to the state
          onChange={handleChangeTax} // Update state on change
        />
        <Button onClick={handleCalculateNetSalary}>Calculate</Button>
        <p>Net Salary: {netSalary}</p>

        <h3>Calculate profile rate (%)</h3>
        <p> TODO</p>

        <h3>Calculate earn profit from bank</h3>
        <p> TODO</p>
      </div>
      <form className="flex w-60 flex-col gap-4" onSubmit={handleSubmit}>
        <h3>Login Form</h3>
        <TextInput
          id="email" // Match the id to the User property
          type="email"
          placeholder="name@email.com"
          sizing="md"
          value={user.email} // Bind the input value to the state
          onChange={handleChange} // Update state on change
        />
        <TextInput
          id="password" // Match the id to the User property
          type="password"
          placeholder="password"
          sizing="md"
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
