// import React, { useEffect, useState } from "react";
// import { FaImage } from "react-icons/fa6";
// import { Oval } from "react-loader-spinner";
// import { Link, useNavigate } from "react-router-dom";
// import { auth } from "../auth/Firebase";
// function CreatePost() {
//   const navigate = useNavigate();
//   const [img, setImg] = useState();
//   const [user, setuser] = useState("");
//   const [desc, setDesc] = useState("");
//   const [title, setTitle] = useState("");
//   const [isloading, setIsloading] = useState(false);
//   const url = "https://biowanderbackend.onrender.com";
//   useEffect(() => {
//     auth.onAuthStateChanged((users) => {
//       if (users) {
//         setuser(users);
//       } else {
//       }
//     });
//   }, [user]);
//   const handleask = async (e) => {
//     e.preventDefault();
//     try {
//       setIsloading(true);
//       if (img) {
//         var reader = new FileReader();
//         reader.readAsDataURL(img.target.files[0]);
//         reader.onload = async () => {
//           await fetch(`${url}/api/v1/questions`, {
//             method: "POST",
//             crossDomain: true,
//             headers: {
//               "Content-Type": "application/json",
//               Accept: "application/json",
//               "Access-Control-Allow-Origin": "*",
//             },
//             body: JSON.stringify({
//               image: reader.result,
//               title: title,
//               description: desc,
//               name: user.displayName,
//             }),
//           }).then((res) => {
//             setIsloading(false);
//             navigate("/questions");
//           });
//         };
//         reader.onerror = (error) => {
//           console.log("err: ", error);
//         };
//       } else {
//         await fetch(`${url}/api/v1/questions`, {
//           method: "POST",
//           crossDomain: true,
//           headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//             "Access-Control-Allow-Origin": "*",
//           },
//           body: JSON.stringify({
//             title: title,
//             description: desc,
//             name: user.displayName,
//           }),
//         }).then((res) => {
//           navigate("/questions");
//           setIsloading(false);
//         });
//       }
//       // setIsloading(false);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <>
//       <div>
//         <button
//           type="button"
//           className="btn btn-primary"
//           data-bs-toggle="modal"
//           data-bs-target="#exampleModal"
//         >
//           Launch demo modal
//         </button>

//         <div
//           className="modal fade"
//           id="exampleModal"
//           tabindex="-1"
//           aria-labelledby="exampleModalLabel"
//           aria-hidden="true"
//         >
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h1 className="modal-title fs-5" id="exampleModalLabel">
//                   Create Post
//                 </h1>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   data-bs-dismiss="modal"
//                   aria-label="Close"
//                 ></button>
//               </div>
//               <div className="modal-body">
//                 <form className="" >
//                   <input type={"text"} className="rounded border-1 px-3" placeholder="Title"  style={{width:"100%"}}/> <br/>
//                   <input type={"text"} className="rounded mt-2 px-3" placeholder="Caption" style={{width:"100%"}}/><br />
//                   <input
//                           type="file"
//                           id="img-upload"
//                           className="float-end"
//                           onChange={(e) => setImg(e)}
//                           style={{ display: "none" }}
//                         />
//                         <label className="float-end fs-4" htmlFor="img-upload" style={{cursor:"pointer"}}>
//                           <FaImage></FaImage>
//                         </label>
//                 </form>
//               </div>
//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   className="btn btn-secondary"
//                   data-bs-dismiss="modal"
//                 >
//                   Close
//                 </button>
//                 <button type="button" className="btn btn-primary">
//                   post
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default CreatePost;
