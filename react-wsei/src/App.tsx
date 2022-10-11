import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/routes/home/home";
import { FC } from "react";
import { Login } from "./components/routes/login/login";

export const App: FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="login">Login</Link>
        <Link to="/">Home</Link>
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
