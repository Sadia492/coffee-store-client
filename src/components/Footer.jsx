import React from "react";
import logo from "../assets/images/more/logo1.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-base-200 py-12">
      <div className="w-4/5 mx-auto flex gap-12 items-start">
        <div className="space-y-3">
          <div>
            <img className="w-20" src={logo} alt="" />
          </div>
          <h2 className="text-3xl font-extrabold">Espresso Emporium</h2>
          <p>
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          <div className="flex gap-2">
            <FaFacebook></FaFacebook>
            <FaTwitter></FaTwitter>
            <FaInstagramSquare></FaInstagramSquare>
            <FaLinkedin></FaLinkedin>
          </div>
          <h2 className="text-3xl font-extrabold">Get in Touch</h2>
          <p className="flex gap-2">
            <FaPhoneAlt></FaPhoneAlt>+88 01533 333 333
          </p>
          <p className="flex gap-2">
            <FaEnvelope></FaEnvelope>info@gmail.com
          </p>
          <p className="flex gap-2">
            <FaLocationDot></FaLocationDot>72, Wall street, King Road, Dhaka
          </p>
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-extrabold">Contact With Us</h2>
          <div className="flex flex-col gap-6 mt-4">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full"
            />
            <textarea
              placeholder="Message"
              className="textarea textarea-bordered textarea-lg w-full "
            ></textarea>
            <button className="btn btn-outline self-start rounded-full">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
