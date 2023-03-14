import { useState } from "react";
import axios from "axios";

const AuthPage = (props) => {
  const [username, setUsername] = useState();
  const [secret, setSecret] = useState();
  const [email, setEmail] = useState();
  const [first_name, setFirstName] = useState();
  const [last_name, setLastName] = useState();

  const onAuth = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login/", { username, secret })
      .then((r) => props.onAuth({ ...r.data, secret })) 
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  const onSignup = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signup/", {
        username,
        secret,
        email,
        first_name,
        last_name,
      })
      .then((r) => props.onAuth({ ...r.data, secret })) 
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  return (
    <div className="authentication-page">
      <div className="form-container">
        <form onSubmit={onAuth} className="auth-form">
          <div className="title">Login</div>
          <div className="input-container">
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="secret"
            placeholder="Password"
            onChange={(e) => setSecret(e.target.value)}
          />

          </div>
          
          <button type="submit">LOG IN</button>
        </form>

        <form onSubmit={onSignup} className="signup-form">
          <div className="title">or Sign Up</div>
          <div className="input-container"> 
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="secret"
            placeholder="Password"
            onChange={(e) => setSecret(e.target.value)}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            name="first_name"
            placeholder="First name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last name"
            onChange={(e) => setLastName(e.target.value)}
          />

          </div>
          <button type="submit">SIGN UP</button>
        </form>
      </div>

    </div>
  );
};

export default AuthPage;
