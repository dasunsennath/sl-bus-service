// import logo from "./logo.png";
import "./style.css";
// import FormPage from "./Components/Form.Page";
// import Crop from "../Components/Crop.page";
import React, { useContext, useState } from "react";
import { FormContext } from "../Components/formcontex/formcontex";
import Buttonlist from "../Components/Pagination/Buttonlist";
import P1 from "../Components/Forms/Page1";
import P2 from "../Components/Forms/Page2";
import P3 from "../Components/Forms/Page3";
import Loader from "../Components/Loader/Loader";
import ResultPage from "../Components/Result.page";
import wave from "./SVG/wave.svg";

function App() {
  const { result, isLoading } = useContext(FormContext);
  const [page, setPage] = useState(1);
  return (
    <div className="main">
      {isLoading ? <Loader /> : ""}
      <header className="App-header App mt-3">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p className="fs-4 fw-bold">Bus Allocation prediction </p>
      </header>
      
      <div className="container box">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-12 col-md-12 anime imgbackground">
            {page === 1 ? (
              <P1 setPage={setPage} />
            ) : page === 2 ? (
              <P2 setPage={setPage} />
            ) : page === 3 ? (
              <P3 setPage={setPage} />
            ) : result ? (
              <ResultPage setPage={setPage} />
            ) : (
              ''
            )}
          </div>
        </div>

        {!result && (
          <div className="row justify-content-center mt-4 container w-100 mbot-4">
            <div className="col-lg-12 col-md-12 d-flex justify-content-center w-100 ">
              <Buttonlist page={page} setPage={setPage} totalPage={3} />
            </div>
          </div>
        )}
      </div>
      </div>
    
  );
}

export default App;
