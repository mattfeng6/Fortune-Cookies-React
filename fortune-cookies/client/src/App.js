import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Db } from "./pages/db";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fortunes" element={<Db />} />
      </Routes>
    </>
  );
}

export default App;
