import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./widgets/header/Heeader";
import Footer from "./widgets/footer/Footer";
import HomePage from "./HomePage";
import Deteil from "./widgets/deteil/Deteil";
import SectionPage from "./sectionPage/SectionPage";
import "./global.scss";
import "./burgerMenu.scss";

function App() {


  return (
    <div>
      <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/section" element={<SectionPage />} />
        <Route path="/detail/:id" element={<Deteil />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
