import React, { useState } from "react";
import { useHistory } from "react-router";
import AuthService from "../services/auth";

const LoginComponent = (props) => {
  let { setCurrentUser } = props;

  const history = useHistory();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [message, setMessage] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = (e) => {
    AuthService.login(email, password)
      .then((res) => {
        console.log(res.data);
        if (res.data.token) {
          localStorage.setItem("user", JSON.stringify(res.data));
        }

        window.alert(
          "Login successfully, you are redirected to the profile page."
        );
        setCurrentUser(AuthService.getCurrentUser());
        history.push("/profile");
      })
      .catch((err) => {
        console.log(err.response);
        setMessage(err.response.data);
      });
  };

  return (
    <div style={{ padding: "3rem" }} className="col-md-12">
      <div>
        {message && (
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        )}
        <div className="form-group">
          <label htmlFor="username">Email</label>
          <input
            onChange={handleChangeEmail}
            type="text"
            className="form-control"
            name="email"
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChangePassword}
            type="password"
            className="form-control"
            name="password"
          />
        </div>
        <br />
        <div className="form-group">
          <button onClick={handleLogin} className="btn btn-primary btn-block">
            <span>Login</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
