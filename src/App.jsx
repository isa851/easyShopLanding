import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Header from "./widgets/header/Heeader";
import Footer from "./widgets/footer/Footer";
import HomePage from "./HomePage";
import Deteil from "./widgets/deteil/Deteil";
import SectionPage from "./sectionPage/SectionPage";
import "./global.scss";
import "./burgerMenu.scss";
import { Suspense } from "react";

function App() {

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Header /> 
      <Suspense  fallback={"loading..."}>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/section" element={<SectionPage  goBack={goBack}/>} />
        <Route path="/detail/:id" element={<Deteil   goBack={goBack}/>} />
      </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
