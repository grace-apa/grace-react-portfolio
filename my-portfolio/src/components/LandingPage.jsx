import React from "react";
import '../index.css' 
import me from '../images/me.png'
import 'bootstrap/dist/css/bootstrap.min.css';


const LandingPage = () => {
  return (
<div>
<div className="p-5 mb-4 bg-body-tertiary rounded-3 abstractBackground">
      <div className="container-fluid py-5">
        <div className="text-center">
          <img
            src={me}
            className="rounded"
            alt="personal portfolio photo"
          />
        </div>
        <h1 className="display-5 fw-bold fullName">Grace Apantaku</h1>
        <button className="btn btn-primary btn-lg button" type="button">
          Freelance Frontend Developer
        </button>
      </div>
    </div>
</div>
  )
};


export default LandingPage;