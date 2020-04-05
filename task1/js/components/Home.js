import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Home.css'


const img1 = 'https://images-platform.99static.com/v-43Xvu9vpgnHf5OSsnl7gs5FF4=/500x500/top/smart/99designs-contests-attachments/7/7168/attachment_7168301';
const ambulanceUrl = 'https://5.imimg.com/data5/JA/KE/YX/SELLER-8229651/force-traveller-3350-wb-ac-cardiac-ambulance-500x500.png';
const img3 = 'https://az777500.vo.msecnd.net/images/2397/group-8080214.png';
const Home = () => (
  <div className="Home">
    <div className="container col-8 " />
    <br/>
    <br/>
<div className="container">
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
    <h1>Our Services</h1>
    <div className="row">
      <div className="col-11">
        <Link to="/homecare">
          <div className="row shadow-lg p-3 mb-5 bg-white rounded">

            <div className="col-4 ">
              <img className="service-image " width="200" height="200" src={img1}  alt="" />
            </div>
            <div className="m-1  col-8">
              <h2>Homecare</h2>
              <p>
                We offer nursing, physiotherapy and
                healthy home food cooking services.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
    <div className="row">
      <div className="col-11 ">
        <Link to="/concierge">

          <div className="row shadow-lg p-3 mb-5 bg-white rounded">
            <div className="col-4 ">
              <img className="service-image "width="200" height="200" src={ambulanceUrl} alt="" />
            </div>
            <div className="m-1  col-8">
              <h2>Concierge</h2>
              <p>
                We provide ambulance and hearse services within 20km  radius .
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
    <div className="row">
      <div className="col-11 mt-5">
        <Link to="/equipment">
          <div className="row  shadow-lg p-3 mb-5 bg-white rounded">
            <div className="col-4 ">
              <img className="service-image " width="200" height="200" src={img3} alt="" />
            </div>
            <div className="m-1  col-8">
              <h2>Equipment</h2>
              <p>
                Now, Oxygen Cylinders, pacemakers and wheelchairs can be booked online.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
</div>
  </div>
);

export default Home;