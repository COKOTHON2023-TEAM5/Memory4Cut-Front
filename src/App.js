import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import GroupGenerator from "./pages/groupGenrator/GroupGenerator";
import MissionImagesUpload from "./pages/MissionImagesUpload/MissionImagesUpload";
import Mission from "./pages/Mission/Mission";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/GroupGenerator" Component={GroupGenerator}></Route>
          <Route path="/Mission" Component={Mission}></Route>
          <Route
            path="/MissionImagesUpload"
            Component={MissionImagesUpload}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
