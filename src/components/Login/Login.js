import React, { useState } from "react";
import "./Login.css";
import img1 from "../../Images/Group 2.png";
import img2 from "../../Images/Group 573.png";
import firebase from "firebase";
import { auth } from "../firebase";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectBooker } from "../../features/bookerSlice";
import { login, selectUser } from "../../features/userSlice";

function Login() {
  //     const [user, setUser] = useContext(userContext);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const booker = useSelector(selectBooker);
  const [newUser, setNewUser] = useState(false);
  const provider = new firebase.auth.GoogleAuthProvider();
  const history = useHistory();
  const location = useLocation();
  console.log(location.state);
  const { from } = location.state || { from: { pathname: "/" } };

  //   const history = useHistory();
  //   const location = useLocation();

  //   const { from } = location.state || { from: { pathname: "/" } };
  //   const provider = new firebase.auth.GoogleAuthProvider();
  //   const fbProvider = new firebase.auth.FacebookAuthProvider();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    if (user?.password === user?.confirmedPassword) {
      auth
        .createUserWithEmailAndPassword(user?.email, user?.password)
        .then((res) => {
          history.push("/");
        })
        .catch(function (error) {
          // Handle Errors here.

          alert(error.message);
          // ...
        });
    } else if (user?.password !== user?.confirmedPassword) {
      alert("Your passwords do not match");
    }
    if (!newUser) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user?.email, user?.password)
        .then(() => history.push("/"))
        .catch(function (error) {
          // Handle Errors here.
          alert(error.message);
          // ...
        });
    }
  };

  const handleGoogleSignIn = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        history.push("/");
        // history.replace(from);
        // if (booker) {
        //   console.log(from);
        //   history.replace(from);
        //   // history.push("/bookings");
        // } else {
        //   history.push("/");
        // }

        // The signed-in user info.
        // var { displayName, email } = result.user;
        // setUser({ name: displayName, email: email });
        // history.replace(from);
        // // ...
      })
      .catch(function (error) {
        // Handle Errors here.
        alert(error.message);
      });
  };

  // const handleFbSignIn = () => {
  //   auth
  //     .signInWithPopup(fbProvider)
  //     .then(function (result) {
  //       // The signed-in user info.
  //       var { displayName, email } = result.user;
  //       setUser({ name: displayName, email: email });
  //       history.replace(from);
  //       // ...
  //     })
  //     .catch(function (error) {
  //       // Handle Errors here.
  //       alert(error.message);

  //       // ...
  //     });
  // };
  return (
    <div className="login">
      <div className="login__form">
        <form action="">
          <h2>{newUser ? "Create an account" : "Login"}</h2>
          {newUser && (
            <input
              type="text"
              placeholder="Full Name"
              onBlur={(e) =>
                dispatch(
                  login({
                    ...user,
                    displayName: e.target.value,
                  })
                )
              }
              required
            />
          )}

          <input
            type="email"
            placeholder="Email"
            onBlur={(e) =>
              dispatch(
                login({
                  ...user,
                  email: e.target.value,
                })
              )
            }
            required
          />
          <input
            type="password"
            placeholder="Password"
            onBlur={(e) =>
              dispatch(
                login({
                  ...user,
                  password: e.target.value,
                })
              )
            }
            required
          />
          {newUser && (
            <input
              type="password"
              placeholder="Confirm Password"
              onBlur={(e) =>
                dispatch(
                  login({
                    ...user,
                    confirmedPassword: e.target.value,
                  })
                )
              }
              required
            />
          )}
          <button onClick={handleSubmit}>
            {newUser ? "Create an account" : "Login"}
          </button>
          <small>
            {newUser ? "already have an account?" : "don't have an account?"}{" "}
            <span
              className="newUser__toggler"
              onClick={() => setNewUser(!newUser)}
            >
              {newUser ? "Login" : "create an account"}
            </span>{" "}
          </small>
        </form>
      </div>
      <div className="login__divider">
        <hr />
        <p>Or</p>
        <hr />
      </div>
      <div className="login__buttons">
        <button onClick={handleGoogleSignIn}>
          <img src={img2} alt="" /> Continue with Google
        </button>

        <br />
        <button>
          <img src={img1} alt="" /> Continue with Facebook
        </button>
      </div>
    </div>
  );
}

export default Login;
// onClick={handleSubmit}
// onClick={handleFbSignIn}
// onClick={handleGoogleSignIn}
