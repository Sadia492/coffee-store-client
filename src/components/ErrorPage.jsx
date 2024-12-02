import React from "react";
import imageError from "../assets/images/404/404.gif";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="text-center flex justify-center items-center">
        <button
          onClick={() => navigate(-1)}
          className="text-2xl items-center justify-center flex"
        >
          <FaArrowLeft />
          Back To Home
        </button>
      </div>
      <div className="flex justify-center items-center">
        <img src={imageError} alt="" />
      </div>
    </div>
  );
}
