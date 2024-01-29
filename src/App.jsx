import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Admin from "./pages/Admin";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
