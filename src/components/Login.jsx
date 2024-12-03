import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

export default function Login() {
  const { signInUser, user, setUser } = useContext(authContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("hello");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const data = { email, password };
    console.log(data);

    signInUser(email, password).then((result) => {
      console.log(result.user);
      //   setUser(result.user);
      navigate(location?.state ? location?.state : "/");
      const lastSignInTime = result?.user?.metadata?.lastSignInTime;
      //   setUser({ ...result.user, time: lastSignInTime });
      const data = { email, lastSignInTime };
      console.log(data);
      fetch("https://coffee-store-server-seven-rho.vercel.app/users", {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            //   setUser((prev) => ({ ...prev, time: lastSignInTime }));
            // const updatedData = user
            setUser(result.user);
          }
          console.log(data);
        });
    });
  };
  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#D2B48C]">Login</button>
          </div>
          <p className="text-center">
            Don't Have an account? Please{" "}
            <Link to="/register" className="text-red-500 font-bold">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
