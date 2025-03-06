// import "./asserts/css/style.css"
import "./componets/asserts/css/style.css"
// import "../componets/asserts/css/style.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./componets/partials/Navbar";
import Home from "./componets/Home";
import Footer from "./componets/partials/Footer";
import FormPage from "./componets/FormPage";

function App() {
  return (
    <>
    <BrowserRouter>
     {/* <Navbar/> */}
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/query" element={<FormPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
