import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./styles/style.css";

function App() {
  return <div className="App">
    <Header />
    <Routes>
      <Route path="/Exodus-Crypto-Page" element={<Home />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
    <Footer />
  </div>;
}

export default App;
