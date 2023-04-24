import { signUp } from "@/store/users/usersSlice";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
const dispatch = useDispatch()
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Perform form validation
    if (!email || !password || !name) {
      setErrorMessage("Please enter a valid email and password, and name");
      return;
    }
    try {
      // Submit the form data to the server
      const response = await axios.post("https://staging-be-ecom.techserve4u.com/api/user/signup",{
        email, password,name
      })

      dispatch(signUp(email))
      if (response.status===200) {
        // Redirect to the login page
        window.location.href = "/verifyOtp";
      } else {
        // Display an error message
        setErrorMessage("Unable to register. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && (
        <div className="alert alert-danger">{errorMessage}</div>
      )}
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="form-group">
        <button type="submit">Register</button>
      </div>
      <div className="form-footer">
        <a href="/login">Already have an account? Log in here.</a>
      </div>
    </form>
  );
}
