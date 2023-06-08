import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "pages/Layout";
import Home from "pages/Home";
import NoPage from "pages/NoPage";
import Teletubbies from "pages/Teletubbies";
import Buildings from "pages/Buildings";
import NFTSListPage from "pages/NFTs";
import "./App.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/teletubbies" element={<Teletubbies />} />
            <Route path="/nfts" element={<NFTSListPage />} />
            <Route path="/buildings" element={<Buildings />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
