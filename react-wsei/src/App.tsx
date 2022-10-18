import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FC } from "react";
import { GlobalStyle } from "./components/style/global";

import { Layout } from "./components/common/layout";
import { HomePage } from "./components/routes/home/home";
import { LoginPage } from "./components/routes/login/login";
import { RegisterPage } from "./components/routes/register/register";

export const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<HomePage />} />
          </Routes>
        </Layout>
        {/* <div>
        <Link to="/">Home</Link>
        <Link to="login">Login</Link>
        <Link to="register">Register</Link>
      </div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes> */}
      </BrowserRouter>
    </>
  );
};

export default App;
