import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import UsersList from "./pages/UsersList";
import LogIn from "./pages/login/LogIn";
import CreateAccount from "./pages/registration/CreateAccount";
import Layout from "./components/Layout";
import RequireAuth from "./hoc/RequireAuth";
import {AuthProvider} from './hoc/AuthProvider'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<RequireAuth><About /></RequireAuth>} />
          <Route path="userslist" element={ <RequireAuth><UsersList /></RequireAuth> } />
          <Route path="*" element={<NotFound />} />
          <Route path="login" element={<LogIn />} />
          <Route path="registor" element={<CreateAccount />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App;
