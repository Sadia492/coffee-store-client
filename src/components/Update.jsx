import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaArrowLeft } from "react-icons/fa";
export default function Update() {
  const navigate = useNavigate();
  const loadedCoffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } =
    loadedCoffee;
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const coffee = { name, chef, supplier, taste, category, details, photo };

    fetch(`https://coffee-store-server-seven-rho.vercel.app/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffee),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "Successfully updated the coffee",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      })
      .catch((error) => {
        console.error("Error occurred:", error);
      });
  };

  return (
    <div className="bg-[#F4F3F0] px-24 py-12">
      <button
        onClick={() => navigate(-1)}
        className="text-2xl items-center justify-center flex"
      >
        <FaArrowLeft />
        Back To Home
      </button>
      <h1 className="font-extrabold text-3xl text-center">Update Coffee</h1>
      <p className="text-center">
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      <div className="card  w-full ">
        <form
          onSubmit={handleSubmit}
          className="card-body grid grid-cols-2 gap-6"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              placeholder="Enter coffee name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Chef</span>
            </label>
            <input
              type="text"
              name="chef"
              defaultValue={chef}
              placeholder="Enter coffee chef"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <input
              type="text"
              defaultValue={supplier}
              name="supplier"
              placeholder="Enter coffee supplier"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <input
              type="text"
              name="taste"
              defaultValue={taste}
              placeholder="Enter coffee taste"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              defaultValue={category}
              name="category"
              placeholder="Enter coffee category"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input
              type="text"
              defaultValue={details}
              name="details"
              placeholder="Enter coffee details"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              defaultValue={photo}
              name="photo"
              placeholder="Enter photo URL"
              className="input input-bordered  w-full"
              required
            />
          </div>

          <div className="form-control mt-6 col-span-2">
            <button className="btn bg-[#D2B48C]">Update Coffee</button>
          </div>
        </form>
      </div>
    </div>
  );
}
