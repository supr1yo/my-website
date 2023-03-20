import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
		    <Route path='/about' element={<About />} />
      </ Routes>
    </BrowserRouter>
  );
};

export default App;
