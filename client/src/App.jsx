import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LagosBar from "./pages/LagosBar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/the-lagos-bar" element={<LagosBar />} />
      </Routes>
    </>
  );
}

export default App;
