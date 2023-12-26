import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MissionImagesUpload from "./pages/MissionImagesUpload/MissionImagesUpload";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/" Component={MissionImagesUpload}></Route>
        </Routes>
      </BrowserRouter>
      <MissionImagesUpload />
    </div>
  );
}

export default App;
