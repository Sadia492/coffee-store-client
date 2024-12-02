import React from "react";
import bannerImg from "../assets/images/more/3.png";
export default function Banner() {
  return (
    <div
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full text-white px-20 py-48 flex "
    >
      <div className="flex-1"></div>
      <div className="space-y-4">
        <h1 className="text-6xl">Would you like a Cup of Delicious Coffee?</h1>
        <p className="w-4/5">
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
          moments and make them memorable.
        </p>
        <button className="btn bg-[#E3B577]">Learn More</button>
      </div>
    </div>
  );
}
