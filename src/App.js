import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"

import { useAuth } from './shared/hooks/auth-hook';


import { AuthContext } from "./shared/context/auth-context"
import Homepage from './shared/notLoggedIn/Homepage';
import HomeScreen from './loggedIn/pages/HomeScreen';


const App = () => {

  const { token, login, logout, userId } = useAuth();

  let routes

  if (token) {
    routes = (
      <Switch>
        <Route path="/home">
          <HomeScreen />
        </Route>
        <Redirect to="/home" />
      </Switch>
    )

  } else {
    routes = (
      <Switch>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    )
  }


  return (
    <AuthContext.Provider
      value={{ isLoggedIn: !!token, token: token, userId: userId, login: login, logout: logout }}
    >

      <Router>
        {routes}
      </Router>

    </AuthContext.Provider>
  )
}

export default App
