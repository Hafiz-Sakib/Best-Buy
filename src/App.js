import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
      {/* <Route path="/" element={<Home />} /> */}
    </Routes>
  );
}

export default App;
