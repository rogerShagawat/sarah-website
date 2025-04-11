import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>You took a wrong turn...</p>
      <Link to="/">Click here to return to the home page.</Link>
    </div>
  );
}

export default NotFound;
