import React, { Component } from "react";
import "./App.css";
import Home from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";

import { AuthProvider } from "./contexts/AuthContext";
class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/signin" element={<SigninPage />} exact />
            <Route path="/signup" element={<SignupPage />} exact />
          </Routes>
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
