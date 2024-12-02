import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
export default function Details() {
  const navigate = useNavigate();

  const data = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } = data;

  return (
    <div className="w-4/5 mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="text-2xl items-center justify-center flex"
      >
        <FaArrowLeft />
        Back To Home
      </button>
      <div className="flex  bg-[#F5F4F1] justify-center items-center mt-12 py-12">
        <div className="flex-1 w-full flex justify-center items-center">
          <img src={photo} alt="" />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl mb-6 font-extrabold">Niceties</h2>
          <div>
            <h2>
              <span className="font-bold">Name:</span> {name}
            </h2>
            <h2>
              <span className="font-bold">Chef:</span> {chef}
            </h2>
            <h2>
              <span className="font-bold">Supplier:</span> {supplier}
            </h2>
            <h2>
              <span className="font-bold">Taste:</span> {taste}
            </h2>
            <h2>
              <span className="font-bold">Category:</span> {category}
            </h2>
            <h2>
              <span className="font-bold">Details:</span> {details}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
