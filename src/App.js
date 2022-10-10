import logo from "./logo.png";
import "./App.css";
// import FormPage from "./Components/Form.Page";

import HomePage from "./Pages/HomePage";
import FormPage from "./Pages/FormPage";
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/form" element={<FormPage />} />

    </Routes>
   
  );
}

export default App;
