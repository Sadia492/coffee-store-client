import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import Banner from "./Banner";

export default function Home() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div>
      <Banner></Banner>
      <h2>Coffee</h2>
      <div className="grid grid-cols-2 gap-6">
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
  );
}
