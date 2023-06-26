import React from "react";
import "./Login.css";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt=""
        />

        <button
          onClick={() => navigate("/signin")}
          className="loginScreen__button"
        >
          Sign In
        </button>
        <div className="loginScreen__gradient" />
      </div>

      <div className="loginScreen__body">
        <h1>Unlimited movies, TV shows and more</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div className="loginScreen__input">
          <form>
            <input type="email" placeholder="Email Address" />
            <button
              onClick={() => navigate("/signin")}
              className="loginScreen__getStarted"
            >
              GET STARTED
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
