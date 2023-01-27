import React from "react";
import classes from "./LoginForm.module.css";
import Button from "../UI/Button";
import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginActions } from "../../store/loginSlice";

const LoginForm = () => {
  const [showLogin, setShowLogin] = useState(true);
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const history = useHistory();

  const dispatch = useDispatch();

  const toggleLoginHandler = () => {
    setShowLogin((prevState) => !prevState);
  };

  const loginHandler = (event) => {
    event.preventDefault();
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCGrWYfJ8-J0lKKcrW96Cg_BuncbFin8k4";
    if (!showLogin) {
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: usernameInputRef.current.value,
          password: passwordInputRef.current.value,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (!res.ok) {
            return res.json().then((err) => {
              let errorMessage = "Something went wrong";
              if (err.error && err.error.message) {
                errorMessage = err.error.message;
              }
              throw new Error(errorMessage);
            });
          } else {
            return res.json();
          }
        })
        .then((data) => {
          alert("Account created. Please click on login");
        })
        .catch((err) => alert(err.message));
    } else {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCGrWYfJ8-J0lKKcrW96Cg_BuncbFin8k4`;
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: usernameInputRef.current.value,
          password: passwordInputRef.current.value,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (!res.ok) {
            return res.json().then((err) => {
              let errorMessage = "Something went wrong";
              if (err.error && err.error.message) {
                errorMessage = err.error.message;
              }
              throw new Error(errorMessage);
            });
          } else {
            return res.json();
          }
        })
        .then((data) => {
          dispatch(loginActions.loginHandler(data.idToken));
          history.replace("/shop");
        })
        .catch((err) => alert(err.message));
    }
  };

  return (
    <form className={classes.form} onSubmit={loginHandler}>
      <h2>{showLogin ? "Login" : "Signup"}</h2>
      <div className={classes.input}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" ref={usernameInputRef} required />
      </div>
      <div className={classes.input}>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" ref={passwordInputRef} required />
      </div>
      <div className={classes.actions}>
        <Button type="submit">{showLogin ? "Login" : "Create Account"}</Button>
        <button
          type="button"
          className={classes.btn}
          onClick={toggleLoginHandler}
        >
          {showLogin ? "Signup" : "Login"}
        </button>
      </div>
    </form>
  );
};
export default React.memo(LoginForm);
