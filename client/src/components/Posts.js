import React, { useEffect, useState } from "react";
import { FaImage } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Loader from "./Loader";
import { auth } from "../auth/Firebase";

export default function Posts() {
  const navigate = useNavigate();

  const [questions, setques] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [img, setImg] = useState();
  const [user, setuser] = useState("");
  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");
  const url = "https://biowanderbackend.onrender.com";
  const fetchdata = () => {
    setIsloading(true);
    fetch(`${url}/api/v1/posts`)
      .then((res) => res.json())
      .then((data) => {
        setques(data.posts);
        setIsloading(false);
      });
  };
  useEffect(() => {
    fetchdata();
  }, []);

  useEffect(() => {
    auth.onAuthStateChanged((users) => {
      if (users) {
        setuser(users);
      } else {
      }
    });
  }, [user]);
  const handlesave = async (e) => {
    e.preventDefault();
    try {
      if (img) {
        var reader = new FileReader();
        reader.readAsDataURL(img.target.files[0]);
        reader.onload = async () => {
          await fetch(`${url}/api/v1/posts`, {
            method: "POST",
            crossDomain: true,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
              image: reader.result,
              title: title,
              description: desc,
              name: user.displayName,
            }),
          }).then((res) => {
            navigate("/posts");
          });
        };
        reader.onerror = (error) => {
          console.log("err: ", error);
        };
      } else {
        await fetch(`${url}/api/v1/posts`, {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            title: title,
            description: desc,
            name: user.displayName,
          }),
        }).then((res) => {
          console.log(res);
          navigate("/posts");
        });
      }
      // setIsloading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <div className="mt-">
          {isloading ? (
            <>
              <div className="w-full h-full">
                <Loader />
              </div>
            </>
          ) : (
            <>
              <div className="d-flex justify-content-end me-5">
                <button className=" btn btn-success rounded">
                  <Link
                    to="/createpost"
                    style={{ color: "white" }}
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    create post
                  </Link>
                </button>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Create Post
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <form className="">
                          <input
                            required
                            type={"text"}
                            className="rounded border-1 px-3"
                            placeholder="Title"
                            style={{ width: "100%" }}
                            onChange={(e) => setTitle(e.target.value)}
                          />{" "}
                          <br />
                          <input
                            required
                            type={"text"}
                            className="rounded mt-2 px-3"
                            placeholder="Caption"
                            style={{ width: "100%" }}
                            onChange={(e) => setDesc(e.target.value)}
                          />
                          <br />
                          <input
                            type="file"
                            id="img-upload"
                            className="float-end"
                            onChange={(e) => setImg(e)}
                            style={{ display: "none" }}
                          />
                          <label
                            className="float-end fs-4"
                            htmlFor="img-upload"
                            style={{ cursor: "pointer" }}
                          >
                            <FaImage></FaImage>
                          </label>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={handlesave}
                        >
                          post
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2 d-flex flex-column flex-wrap wrap align-items-center gap-3">
                {questions.map((post, index) => {
                  return (
                    <div
                      key={index}
                      className="border border-1 rounded px-2 post-card"
                      style={{ width: "70rem" }}
                    >
                      <Link to={`/posts/${post._id}`}>
                        <p className="fw-bold fs-4">{post.title}</p>
                      </Link>
                      <p className="fs-6 fw-semibold">{post.description}</p>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </>
    // <div className=" w-full h-100 ">
    //   <div className="flex h-full ">
    //     {/* All questions field */}

    //     <div className="w-full">
    //       <div className="w-4/5 m-auto  p-4 flex flex-col gap-16 ">
    //         {isloading ? (
    //           <>
    //             <div className="w-full h-full">
    //                 <Loader />
    //             </div>
    //           </>
    //         ) : (
    //           <>
    //             <div className="flex flex-col gap-6 text-white overflow-x-none min-h-[70vh]">
    //               {questions.map((post,index) => {
    //                 return (
    //                   <div key={index}>
    //                     <div
    //                       className="border-t flex gap-2 px-4 py-2 flex-col"
    //                       style={{
    //                         overflow: "hidden",
    //                         textOverflow: "ellipsis",
    //                         whiteSpace: "nowrap",
    //                         width: "60rem",
    //                       }}
    //                     >
    //                       <Link to={`/posts/${post._id}`}>
    //                         <p className="text-2xl font-bold">{post.title}</p>
    //                       </Link>
    //                       <p className="text-ellipsis line-clamp-1">
    //                         {post.description}
    //                       </p>
    //                     </div>
    //                   </div>
    //                 );
    //               })}
    //             </div>
    //           </>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
