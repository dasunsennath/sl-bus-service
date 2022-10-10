
import './Result.page.css';
import { FormContext } from "./formcontex/formcontex";
import { useContext } from 'react';

const ResultPage = ({setPage}) => {
    const { result, SetResult} = useContext(FormContext);

   const onclickhandler = () => {
        setPage(4);
        SetResult(null);
    } 
  return (
    <div className="container">
      <div className="row justify-content-center ">
        <div className="col-lg-12 col-md-12  col-sm-12 justify-content-center text-center">
            <p className="text-center fs-2 fw-bold mt-3 m-bot">{result.title} </p>
            <p className={"text-center fts-5 fw-bold m-bot "+ result.color}>{result.final_H2MPX_score}%</p>
        </div>
      </div>
      <div className="row justify-content-center ">
        <div className="col-lg-5 col-md-6  col-sm-6 justify-content-center text-center ms-2">
            <img src={result.final_image_link} alt="result" className="img-fluid rounded" />
        </div>
        <div className="col-lg-8 col-md-12  col-sm-12 justify-content-center text-center d-flex align-items-center mt-4">
            <p className="text-center fs-5">{result.description} </p>
        </div>
      </div>

      <div className="row justify-content-center mt-4">
        <div className="col-lg-12 col-md-12  col-sm-12 justify-content-center text-center">
        <button type="button" class="btn btn-primary" onClick={()=>window.location.pathname="/"}>Retry with new details</button>
        </div>
        <div className="col-lg-12 col-md-12  col-sm-12 justify-content-center text-center mt-4 mb-4">
        <button type="button" class="btn btn-outline-primary"onClick={onclickhandler} >Retry with new image</button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
