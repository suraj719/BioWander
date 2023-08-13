import React, { useState } from "react";
import "./home.css";
export default function Accommodations() {
  const [pl, setpl] = useState("");
  const [place,setplace] = useState("bali")
  return (
    <>
      <div>
        <div
          className="px-2"
          style={{
            position: "relative",
            textAlign: "center",
          }}
        >
          <img
            className="img-fluid rounded"
            src="../images/accm-1.jpg"
            alt="accom-bg"
            style={{
              height: "400px",
              width: "100%",
              filter: "brightness(0.7) contrast(0.7)",
              objectFit: "fill",
            }}
          />
          <div
            className="flex"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <input
              id="placeinp"
              className="rounded-pill px-3"
              placeholder="Enter location"
              type={"search"}
              style={{
                background: "transparent",
                color: "white",
                width: "300px",
                height: "50px",
                border: "2px solid white",
              }}
              onChange={(e) => setpl(e.target.value)}
            />
            <button
              className="ms-3 btn btn-danger rounded-pill fw-bold"
              style={{ width: "90px", height: "50px" }}
              onClick={()=>setplace(pl)}
            >
              Find
            </button>
          </div>
        </div>
      </div>
      <div className="my-4 mx-3">
        <p className="fs-3 fw-bold text-center text-decoration-underline">
        Eco-Friendly Hotels in {place}
        </p>
      </div>
      <div>
        <div className=" d-flex flex-wrap wrap lg-gap-0 gap-5 justify-content-evenly align-items-center">
          <div className="card" style={{ width: "20rem" }}>
            <img
              src="../images/hotel1.jpeg"
              className="card-img-top"
              alt="hotel-1"
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">The St. Regis Bali Resort</h5>
              <p className="card-text">Nusa Dua, Bali</p>
              <p>$50 per day</p>
              <button
                className="btn btn-success rounded-pill"
                style={{ width: "100%" }}
              >
                Reserve
              </button>
            </div>
          </div>

          <div className="card" style={{ width: "20rem" }}>
            <img
              src="../images/hotel2.jpg"
              className="card-img-top"
              alt="hotel-2"
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">Senetan Villas and Spa Resort</h5>
              <p className="card-text">PAYANGAN, Bali</p>
              <p>$69 per day</p>
              <button
                className="btn btn-success rounded-pill"
                style={{ width: "100%" }}
              >
                Reserve
              </button>
            </div>
          </div>

          <div className="card" style={{ width: "20rem" }}>
            <img
              src="../images/hotel3.jpg"
              className="card-img-top"
              alt="hotel-1"
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">SANGLUNG VILLAS</h5>
              <p className="card-text">KUBUTAMBAHAN</p>
              <p>$70 per day</p>
              <button
                className="btn btn-success rounded-pill"
                style={{ width: "100%" }}
              >
                Reserve
              </button>
            </div>
          </div>


          <div className="card" style={{ width: "20rem" }}>
            <img
              src="../images/hotel4.jpg"
              className="card-img-top"
              alt="hotel-1"
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">BIDADARI PRIVATE VILLAS & RETREAT</h5>
              <p className="card-text">UBUD,Bali</p>
              <p>$30 per day</p>
              <button
                className="btn btn-success rounded-pill"
                style={{ width: "100%" }}
              >
                Reserve
              </button>
            </div>
          </div>

          <div className="card" style={{ width: "20rem" }}>
            <img
              src="../images/hotel5.jpg"
              className="card-img-top"
              alt="hotel-1"
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">THE UDAYA RESORT AND SPA</h5>
              <p className="card-text">Ubud,Bali</p>
              <p>$60 per day</p>
              <button
                className="btn btn-success rounded-pill"
                style={{ width: "100%" }}
              >
                Reserve
              </button>
            </div>
          </div>

          <div className="card" style={{ width: "20rem" }}>
            <img
              src="../images/hotel6.jpg"
              className="card-img-top"
              alt="hotel-1"
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">VICEROY BALI</h5>
              <p className="card-text">Ubud,Bali</p>
              <p>$77 per day</p>
              <button
                className="btn btn-success rounded-pill"
                style={{ width: "100%" }}
              >
                Reserve
              </button>
            </div>
          </div>

          <div className="card" style={{ width: "20rem" }}>
            <img
              src="../images/hotel7.jpg"
              className="card-img-top"
              alt="hotel-1"
            />
            <div className="card-body">
              <h5 className="card-title fw-bold"> ANAPURI VILLAS</h5>
              <p className="card-text">Ketewel</p>
              <p>$100 per day</p>
              <button
                className="btn btn-success rounded-pill"
                style={{ width: "100%" }}
              >
                Reserve
              </button>
            </div>
          </div>


          <div className="card" style={{ width: "20rem" }}>
            <img
              src="../images/hotel8.jpg"
              className="card-img-top"
              alt="hotel-1"
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">THEANNA ECO VILLA AND SPA</h5>
              <p className="card-text">Canggu,Bali</p>
              <p>$120 per day</p>
              <button
                className="btn btn-success rounded-pill"
                style={{ width: "100%" }}
              >
                Reserve
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
