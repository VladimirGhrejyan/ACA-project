import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import UsersList from "./pages/UsersList";
import SignIn from "./pages/login/SignIn";
import CreateAccount from "./pages/registration/CreateAccount";

function App() {
  return (
    <>
      <header className="header1">
        <Link to="/">Home </Link>
        <Link to="/blog">Blog </Link>
        <Link to="/about">About </Link>
        <Link to="/userslist">Users </Link>
        <Link to="/signin">Sign In </Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/userslist" element={<UsersList />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/registor" element={<CreateAccount />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;
