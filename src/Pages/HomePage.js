import Passenger from "../SVG Components/passenger.svg";
import BusOwner from "../SVG Components/City-driver.svg";
import { Link } from "react-router-dom";
import './style.css';

function HomePage() {
  return (
    <div className="main">
      <div class="container">
      <div class="row justify-content-center text-center mt-5">
        <h1>SL bus Service</h1> 
      </div>
        <div class="row justify-content-center mt-5">
          <div class="col-lg-4 col-md-5 col-ms-12 mt-3">
          <Link to={'form'} className="defual">  <div class="card">
              <div class="card-body text-center">
                <img
                  src={Passenger}
                  class="card-img-top"
                  width={300}
                  height={400}
                  alt="Passenger"
                />
                <h2>Passenger</h2>
              </div>
            </div>
            </Link>
          </div>
          <div class="col-lg-4 col-md-5 col-ms-12 mt-3">
            <div class="card">
              <div class="card-body text-center">
                <img
                  src={BusOwner}
                  class="card-img-top"
                  width={300}
                  height={400}
                  alt="Passenger"
                />
                <h2>Bus Owner</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
