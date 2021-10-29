import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from './Components/SignUp';
import LoginPage from './Components/LoginPage';
import Dashboard from './Components/Dashboard';
import './index.css'

export default function App() {
  const [token, setToken] = useState('')

  const updateState = () => {
    console.log('User info updated')
    const getToken = localStorage.getItem('token')

    if (getToken) {
      setToken(getToken)
    }
  }
  useEffect(updateState, [])


  return (
    <Router>
      <Switch>
        <Route exact path='/SignUp'><SignUp token={token} setToken={setToken} /></Route>
        <Route exact path='/Dashboard'><Dashboard token={token} setToken={setToken} /></Route>
        <Route exact path='/Login'><LoginPage token={token} setToken={setToken} /></Route>
      </Switch>
    </Router>
  );
}




