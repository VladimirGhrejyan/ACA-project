import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import UsersList from "./pages/UsersList";
import SignIn from "./pages/login/SignIn";
import CreateAccount from "./pages/registration/CreateAccount";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />
          <Route path="userslist" element={<UsersList />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="registor" element={<CreateAccount />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
