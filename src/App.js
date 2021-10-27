import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignUp from './Components/SignUp';
import './index.css'
import { Form } from 'react-bootstrap';
import LoginPage from './Components/LoginPage';

export default function App() {


  return (
  <Router>
   {/* <SignUp /> */}
  

   <LoginPage />

  </Router>
  );
}




