import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { auth, provider } from "../auth/Firebase";
import { signInWithPopup, signOut } from "firebase/auth";
export default function Navbar() {
  const [user, setuser] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((users) => {
      if (users) {
        setuser(users);
      } else {
      }
    });
  }, [user]);
  const handlesignIn = () => {
    signInWithPopup(auth, provider).then((data) => {
      setuser(data.user);
      localStorage.setItem("email", data.user.email);
    });
  };
  const handlelogout = async () => {
    await signOut(auth);
    setuser("");
    localStorage.removeItem("email");
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary px-4 mb-2"
        style={{
          boxShadow: "0 2px 4px rgba(0,0,0,.08), 0 4px 12px rgba(0,0,0,.08)",
        }}
      >
        <div className="container-fluid">
          <div className="navbar-bran d-flex align-items-center">
            <Link to={"/"}>
              <p
                className="fw-bold text-dark fs-4"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                {/* <img
                  className="me"
                  src=""
                  alt="logo"
                  style={{ width: "2.5rem", marginTop: "-10px" }}
                ></img> */}
                <span>BioWander</span>
              </p>
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav gap-4 ms-auto mb-lg-0">
              <li className="nav-item nav-link">
                <Link to="/accommodations">Accommodations</Link>
              </li>
              <li className="nav-item nav-link">
                <Link to="/calculator">Calculate</Link>
              </li>
              <li className="nav-item nav-link">
                <Link to="/operators">Operators</Link>
              </li>
              <li className="nav-item nav-link">
                <Link to="/tips">Travel Tips</Link>
              </li>
              <li className="nav-item nav-link">
                <Link to="/posts">Posts</Link>
              </li>
              <li className="nav-item nav-link align-self-cente">
                <div className="fw-bold" 
                style={{ marginTop:"-5px"}}
                >
                  {user === "" ? (
                    <>
                        <button
                          onClick={handlesignIn}
                          className="btn fw-semibold"
                        >
                          SignIn
                        </button>
                    </>
                  ) : (
                    <>
                      <button onClick={handlelogout} className="btn fw-semibold">
                        log out
                      </button>
                    </>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
