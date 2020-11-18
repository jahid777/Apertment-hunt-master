
import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/Home/HomePage/HomePage";
import Bookings from "./components/Bookings/Bookings";
import ApartmentDetails from "./components/ApartmentDetails/ApartmentDetails";
import NavBar from "./components/Home/Nav/NavBar";
import Login from "./components/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { useEffect } from "react";
import { auth } from "./components/firebase";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is", authUser);
      if (authUser) {
        //loged in
        dispatch(
          login({
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        //logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <HomePage></HomePage>
        </Route>
        <Route path="/login">
          <NavBar />
          <Login />
        </Route>
        <Route path="/details/:details">
          <NavBar />
          <ApartmentDetails />
        </Route>
        <Route path="/bookings">
          <Bookings></Bookings>
        </Route>
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>
        <Route path="*"></Route>
      </Switch>
    </Router>
  );
}


export default App;