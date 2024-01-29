import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "./Pages/Start";
import AboutMe from "./Pages/AboutMe";
import Menu from "./Components/Menu";

function AppRoutes() {
  return (
    <BrowserRouter>
    <Menu></Menu>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/sobre-mim" element={<AboutMe />} />
        <Route path="*" element={<>Error!</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
