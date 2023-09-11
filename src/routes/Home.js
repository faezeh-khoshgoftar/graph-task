import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  const { user: currentUser } = useSelector((state) => state.auth);

  return (
    <>
      {!currentUser ? <Navigate to="/login" /> : <Navigate to="/dashboard" />}
    </>
  );
}

export default Home;
