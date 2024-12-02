import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "./Card";
import Banner from "./Banner";
import Features from "./Features";
import bgCup from "../assets/images/more/1.png";
export default function Home() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div>
      <Banner></Banner>
      <Features></Features>
      <div
        className="w-full text-center py-12"
        style={{
          backgroundImage: `url(${bgCup})`,
          backgroundSize: "cover",
          backgroundPosition: "top left",
        }}
      >
        <h2 className="text-4xl font-extrabold mb-4">Our Popular Products</h2>
        <Link to="/addCoffee">
          <button className="btn bg-[#E3B577] text-white">Add Coffee</button>
        </Link>
        <div className="grid grid-cols-2 gap-6 w-4/5 mx-auto">
          {coffees.map((coffee) => (
            <Card
              key={coffee._id}
              coffees={coffees}
              setCoffees={setCoffees}
              coffee={coffee}
            ></Card>
          ))}
        </div>
      </div>
    </div>
  );
}

// https://i.ibb.co.com/kgdN61K/1.png
// https://i.ibb.co.com/hMStyqL/2.png
// https://i.ibb.co.com/gMBB2Jk/3.png
// https://i.ibb.co.com/nR2xShS/4.png
// https://i.ibb.co.com/8xRWBjh/5.png
// https://i.ibb.co.com/QHXPG9G/6.png
