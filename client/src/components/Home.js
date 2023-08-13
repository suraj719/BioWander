import React from "react";
import "./home.css";
export default function Home() {
  return (
    <div className="">
      <div
        className="p d-flex flex-wrap justify-content-around align-items-center pb-5"
        style={{ backgroundColor: "#F4F6F5" }}
      >
        <div className="home-imgcnt px-2" style={{marginTop:"-7px"}}>
          <img
            className="mt-3 rounded img-fluid"
            src="../images/home1.jpg"
            alt="home-tb"
            style={{ height: "650px",
             width: "100rem" ,
             objectFit:"fill",
             filter:"brightness(0.8)"
            }}
          />
          <div className="home-imgtxt">
            <div className="home-text">
              <p className="txt-1">EXPLORE!</p>
              <p>CONSERVE!!</p>
              <p className="txt-2 text-dark">CONNECT !!!</p>
            </div>
            <p className="fw-semibold fs-6">
              BioWander, Discover the Nature Responsibly!
            </p>
          </div>
        </div>
      </div>
      {/* <Products /> */}
    </div>
  );
}
