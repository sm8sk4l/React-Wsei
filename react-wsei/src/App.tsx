import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FC } from "react";
import { GlobalStyle } from "./components/style/global";

import { Nav } from "./components/common/nav";
import { Layout } from "./components/common/layout";
import { HomePage } from "./components/routes/home/home";
import { LoginPage } from "./components/routes/login/login";
import { RegisterPage } from "./components/routes/register/register";

export const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Nav />
        <Layout>
          <Routes>
            <Route index element={<HomePage />} />
            <Route index element={<LoginPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
