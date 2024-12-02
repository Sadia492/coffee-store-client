import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaPen } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export default function Card({ coffee, coffees, setCoffees }) {
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://coffee-store-server-seven-rho.vercel.app/coffees/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remaining = coffees.filter((coffee) => coffee._id !== id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="">
      <div className="card card-side bg-base-100 justify-between p-4 items-center text-start shadow-xl">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>

        <div className="flex-grow">
          <h2>
            <span className="font-bold">Name:</span> {name}
          </h2>
          <p>
            <span className="font-bold">Chef:</span> {chef}
          </p>
          <p>
            <span className="font-bold">Price:</span> 890 taka
          </p>
        </div>
        <div className="">
          <div className="join join-vertical gap-4">
            <button className="btn rounded-md bg-[#D2B48C] text-white">
              <FaEye />
            </button>
            <Link to={`/coffees/${_id}`}>
              <button className="btn rounded-md bg-black text-white">
                <FaPen />
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn rounded-md bg-red-600 text-white"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
