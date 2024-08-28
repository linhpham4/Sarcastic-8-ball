import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import Ball from "./component/Ball/Ball";
import Input from "./component/Input/Input";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
