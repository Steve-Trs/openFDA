import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DrugDetail from "./component/DrugDetail";
import HomePage from "./pages/Homepage";
import SearchResult from "./pages/SearchResult";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/drug/:drug_id" element={<DrugDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
