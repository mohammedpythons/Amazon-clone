import React ,{ useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./Header";
import Home from './Home'
import Checkout from "./Checkout"
import Login from "./Login"
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase"
import { Unsubscribe } from "@material-ui/icons";
function App() {
  const [{user}, dispatch] = useStateValue();
  // it runs based on a given condition with useEffect()
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        // the user is not logged in
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    });

    return () => {
      // Any cleanup operations go here...
      unsubscribe();

    }
  }, [])


  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
          <Header />
          <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
