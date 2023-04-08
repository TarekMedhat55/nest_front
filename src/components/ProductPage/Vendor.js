import { vendor } from "@/data";
import Image from "next/image";
import React from "react";
import Stars from "../Stars";
import { GrLocation } from "react-icons/gr";
import Link from "next/link";
const Vendor = () => {
  return (
    <div className="product-page-vendor">
      <div className="head d-flex align-items-center">
        <div className="logo">
          <Image src={vendor.image} alt={vendor.name} width={64} height={43} />
        </div>
        <div className="info ">
          <Link href="/shop">
            <h3>{vendor.name}</h3>
          </Link>
          <div className="stars">
            <Stars rating={vendor.ratings} reviews={vendor.reviews} />
          </div>
        </div>
      </div>
      <div className="details">
        <div className="location d-flex align-items-center">
          <Image
            src="/images/icon-location.svg"
            alt="location"
            width={16}
            height={17}
          />
          <p>
            address: <span>{vendor.address}</span>
          </p>
        </div>
        <div className="contact d-flex align-items-center">
          <Image
            src="/images/icon-contact.svg"
            alt="location"
            width={16}
            height={17}
          />
          <p>
            Contact Seller: <span>{vendor.contact}</span>
          </p>
        </div>
      </div>
      <div className="more-info d-flex align-items-center">
        <div className="rating">
          <span>Rating</span>
          <p>92%</p>
        </div>
        <div className="ship">
          <span>Ship on time</span>
          <p>100%</p>
        </div>
        <div className="chat">
          <span>Chat response</span>
          <p>89%</p>
        </div>
      </div>
      <div className="description">
        <p>{vendor.description}</p>
      </div>
    </div>
  );
};

export default Vendor;
