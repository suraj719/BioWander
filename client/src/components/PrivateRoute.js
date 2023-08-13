import React from "react"
import { Navigate } from "react-router-dom"
import { UserAuth } from "../contexts/AuthContext"

const PrivateRoute = ({ children }) => {
    const { currentUser } = UserAuth();
  
    if (!currentUser) {
      return <Navigate to='/posts' />;
    }
    return children;
  };
  
  export default PrivateRoute;