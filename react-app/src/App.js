import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer"
import { authenticate } from "./store/session";

function App() {
  // const user = useSelector(state => state.session.user)
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Main />
      <Footer />
      {/* <Switch>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route> */}
        {/* <ProtectedRoute path="/users" exact={true} >
          <UsersList/>
        </ProtectedRoute> */}
        {/* <ProtectedRoute path="/users/:userId" exact={true} >
          <User />
        </ProtectedRoute> */}
        {/* <ProtectedRoute path="/" exact={true} >
          <h1>My Home Page</h1>
        </ProtectedRoute>
      </Switch> */}
    </BrowserRouter>
  );
}

export default App;
