import { login, userData } from "@/store/users/usersSlice";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalLayout from "./ModalLayout";

export default function LoginForm() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggle = ()=>{
        setIsModalOpen(prevState=> !prevState)
    }

    const users = useSelector(state => state.users);
    console.log(users);
    const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
   
    // Perform form validation
    if (!email || !password) {
      setErrorMessage("Please enter your email and password.");
      return;
    }

    try {
      // Submit the form data to the server

      const responses = await axios.post("https://staging-be-ecom.techserve4u.com/api/user/signin",{
        email, password
      })
     await dispatch(login(responses.data));
     console.log(responses.data?.token);
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${responses.data?.token}`
        }
      };
      const userResponse = await axios.post("https://staging-be-ecom.techserve4u.com/api/user/verify",{},config)
   
      dispatch(userData(userResponse.data.user))
      if (responses?.status===200) {
        toggle()
        return
      } else {
        // Display an error message
        setErrorMessage("Invalid email or password. Please try again.");
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
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="form-group">
      <button type="submit">Log in</button>
      </div>
      <div className="form-footer">
        <a href="/register">Don't have an account? Sign up here.</a>
      </div>
      <ModalLayout isModalOpen={isModalOpen} handleCancel={toggle} handleOk={toggle}>
        <div style={{display:'flex'}}>
            <div>
                <p>Name</p>
                <p>Email</p>
                <p>CreatedAt</p>
            </div>
            <div>
                <p>{users?.data?.name}</p>
                <p>{users?.data?.email}</p>
                <p>{new Date(users?.data?.createdAt).toLocaleDateString()}</p>
            </div>
        </div>
      </ModalLayout>
    </form>
  );
}
