import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Resume from "./Components/Resume";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
