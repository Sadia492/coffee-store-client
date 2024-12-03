import React, { useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

export default function Dashboard() {
  const loadedData = useLoaderData();
  const [users, setUsers] = useState(loadedData);
  const handleDelete = (id) => {
    console.log(id);
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
        fetch(`https://coffee-store-server-seven-rho.vercel.app/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            const remaining = users.filter((user) => user._id !== id);
            setUsers(remaining);
          });
      }
    });
  };

  return (
    <div className="w-4/5 mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="text-xl font-bold">Name</th>
              <th className="text-xl font-bold">Email</th>
              <th className="text-xl font-bold">Time</th>
              <th className="text-xl font-bold">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((single, idx) => (
              <tr key={single._id} className="hover">
                <th>{idx + 1}</th>
                <td>{single.name}</td>
                <td>{single.email}</td>
                <td>
                  {single.lastSignInTime ? single.lastSignInTime : single.time}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(single._id)}
                    className="bg-red-500 text-white p-3"
                  >
                    <FaTrash></FaTrash>
                  </button>
                  <button className="bg-black ml-2 text-white p-3">
                    <FaPen></FaPen>
                  </button>
                </td>
              </tr>
            ))}
            {/* row 2 */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
