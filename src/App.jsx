import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Header from "./widgets/header/Heeader";
import Footer from "./widgets/footer/Footer";
import HomePage from "./HomePage";
import Deteil from "./widgets/deteil/Deteil";
import SectionPage from "./sectionPage/SectionPage";
import "./global.scss";
import "./burgerMenu.scss";

function App() {

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Header /> 
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/section" element={<SectionPage  goBack={goBack}/>} />
        <Route path="/detail/:id" element={<Deteil   goBack={goBack}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
