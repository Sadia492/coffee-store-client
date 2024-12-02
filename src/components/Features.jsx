import React from "react";
import coffeeMug from "../assets/images/icons/1.png";
import two from "../assets/images/icons/2.png";
import three from "../assets/images/icons/3.png";
import four from "../assets/images/icons/4.png";
export default function Features() {
  return (
    <div className="bg-[#ECEAE3] py-6">
      <div className="w-4/5 mx-auto flex justify-center items-center gap-6">
        <div>
          <img src={coffeeMug} alt="" />
          <h4 className="text-2xl font-bold">Awesome Aroma</h4>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>

        <div>
          <img src={two} alt="" />
          <h4 className="text-2xl font-bold">High Quality</h4>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div>
          <img src={three} alt="" />
          <h4 className="text-2xl font-bold">Pure Grades</h4>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div>
          <img src={four} alt="" />
          <h4 className="text-2xl font-bold">Proper Roasting</h4>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
      </div>
    </div>
  );
}
