import Image from "next/image";
import Stars from "../Stars";
import Link from "next/link";
import { HiArrowSmRight } from "react-icons/hi";
const VendorList = ({ vendor }) => {
  return (
    <div className="vendor-content">
      <div className="vendor-image">
        <Link href="/vendors">
          <Image
            src={vendor.image}
            alt={vendor.name}
            width={144}
            height={144}
          />
        </Link>
      </div>
      <div className="vendor-date">
        <p>
          since <span>{vendor.date}</span>
        </p>
      </div>
      <div className="vendor-head d-flex align-items-center justify-content-between">
        <div className="title">
          <Link href="/vendors">
            <h4>{vendor.name}</h4>
          </Link>
          <Stars reviews={3} rating={3.4} />
        </div>
        <div className="vendor-products">
          <p>
            {vendor.products} <span>products</span>
          </p>
        </div>
      </div>
      <div className="vendor-content-body ">
        <ul>
          <li className="d-flex">
            <Image
              src="/images/icon-location.svg"
              alt="location"
              width={16}
              height={17}
            />
            <p>
              <strong>address: </strong>
              <span>{vendor.address}</span>
            </p>
          </li>
          <li className="d-flex mt-2">
            <Image
              src="/images/icon-contact.svg"
              alt="location"
              width={16}
              height={17}
            />
            <p>
              <strong> Contact Seller:</strong> <span>{vendor.contact}</span>
            </p>
          </li>
        </ul>
      </div>
      <div className="vendors-link">
        <Link href="/vendors">
          visit store <HiArrowSmRight />
        </Link>
      </div>
    </div>
  );
};

export default VendorList;
