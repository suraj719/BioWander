import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { auth, provider } from "../auth/Firebase";
import { signInWithPopup } from "firebase/auth";
import Loader from "./Loader";
import { Oval } from "react-loader-spinner";
export default function Post() {
  const { id } = useParams();
  const [isloading, setIsloading] = useState(false);
  const [load, setload] = useState(false);
  const [ans, setAns] = useState("");
  const [user, setuser] = useState([]);
  const [ques, setQues] = useState([]);
  const url = "https://biowanderbackend.onrender.com";
  useEffect(() => {
    auth.onAuthStateChanged((users) => {
      if (users) {
        setuser(users);
      } else {
        setuser("");
      }
    });
  }, []);
  const fetchdata = () => {
    setIsloading(true);
    fetch(`${url}/api/v1/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setQues(data.post);
        setIsloading(false);
      });
  };
  useEffect((id) => {
    fetchdata();
  }, []);


  const handlecomment = async () => {
    setload(true);
    if (user) {
      fetch(`${url}/api/v1/posts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          comment: ans,
          commentBy: user.displayName,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setQues(data.post);
          setAns("");
          setload(false);
        });
    } else {
      signInWithPopup(auth, provider).then((data) => {
        fetch(`${url}/api/v1/post/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            comment: ans,
            commentBy: data.user.displayName,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            // console.log(data)
            setQues(data.post);
            setAns("");
            setload(false);
          });
        // console.log(data.user)
        setuser(data.user);
        localStorage.setItem("email", data.user.email);
      });
    }
  };



  return (
    <>
      <div>
        {isloading ? (
          <>
            <div>
              <Loader />
            </div>
          </>
        ) : (
          <>
            <div className="d-flex justify-content-center">
              <div
                className="post-card rounded p-3 mt-5 "
                style={{ width: "70rem" }}
              >
                <p className="fs-4 fw-bold">{ques.title}</p>
                <p className="fw-semibold">{ques.description}</p>
                {ques.image ? (
                  <>
                    <img
                      src={ques.image}
                      alt="img"
                      className="img-fluid rounded"
                      style={{
                        height: "25rem",
                        width: "100%",
                      }}
                    />
                  </>
                ) : (
                  <></>
                )}
                <div className="mt-5">
                  <p className="fw-semibold fs-5">comments:</p>
                  <div className="d-flex flex-wrap wrap gap-3">
                    <input
                      className="px-3 rounded"
                      placeholder="add a comment"
                      type={"text"}
                      style={{ width: "50rem" }}
                      onChange={(e) => setAns(e.target.value)}
                    />
                    <div className="">
                      {load ? (
                        <>
                        <button className="btn btn-secondary px-3" disabled>
                          <div className="d-flex justify-content-center align-items-center">
                            <Oval
                              height={35}
                              width={35}
                              color="#0933eb"
                              wrapperStyle={{}}
                              wrapperClass=""
                              visible={true}
                              ariaLabel="oval-loading"
                              secondaryColor="#4fa94d"
                              strokeWidth={2}
                              strokeWidthSecondary={2}
                            />
                          </div>
                          </button>
                        </>
                      ) : (
                        <>
                            <button className="btn btn-primary px-3" onClick={handlecomment}>
                                Add
                            </button>
                        </>
                      )}
                    </div>
                  </div>
                  {ques.comments ? (
                    <>
                      <div>
                        {ques.comments.map((ans, index) => {
                          return (
                            <div key={index}>
                              <div>
                                <p className="fs-5">
                                  <span className="fw-bold me-2">
                                    {ans.commentBy}
                                  </span>
                                  {ans.comment}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
