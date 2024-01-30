import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import AboutMe from "./pages/AboutMe";
import Menu from "./components/Menu";
import Footer from "components/Footer";
import DefaultPage from "components/DefaultPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Start />} />
          <Route path="sobre-mim" element={<AboutMe />} />
        </Route>
        <Route path="*" element={<>Error!</>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
