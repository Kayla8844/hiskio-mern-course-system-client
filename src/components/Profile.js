import React from "react";
import { Link } from "react-router-dom";

const Profile = ({ currentUser, setCurrentUser }) => {
  return (
    <div style={{ padding: "3rem" }}>
      {!currentUser && (
        <div>
          <p> You must login first before getting your profile.</p>
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </div>
      )}
      {currentUser && (
        <div>
          <h1>In profile page.</h1>
          <header className="jumbotron">
            <h3>
              <strong>{currentUser.user.username}</strong>
            </h3>
          </header>
          <p>
            <strong>token: {currentUser.token}</strong>
          </p>
          <p>
            <strong>ID: {currentUser.user._id}</strong>
          </p>
          <p>
            <strong>Email: {currentUser.user.email}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default Profile;
