import Layout from "@/components/Layout";
import Paginate from "@/components/Pagination";
import VendorList from "@/components/Vendors/VendorList";
import { vendors } from "@/data";
import React from "react";
import { BsFillGridFill, BsList, BsSearch } from "react-icons/bs";
import Select from "react-select";

const Vendors = () => {
  const options = [
    { value: "createdAt", label: "Recommended" },
    { value: "-price", label: "price: high to low" },
    { value: "+price", label: "price: low to high" },
    { value: "+name", label: "name: a to z" },
    { value: "-name", label: "name: z to a" },
  ];
  return (
    <Layout title="vendors - Nest">
      <section className="vendors-page section">
        <div className="container-fluid">
          <div className="head">
            <div className="search ">
              <h2 className="">vendors List</h2>
              <div className="form-search">
                <form>
                  <input
                    type="text"
                    name="vendors"
                    placeholder="search vendors by name"
                  />
                  <button type="submit">
                    <BsSearch />
                  </button>
                </form>
              </div>
            </div>
            <div className="vendor-filter d-flex align-items-center justify-content-between">
              <div className="left">
                <h5>
                  We have <span>{vendors.length} </span>vendors now
                </h5>
              </div>
              <div className="right d-flex align-items-center">
                <div className="vendor-select d-flex align-items-center">
                  <h5>sort by:</h5>
                  <Select
                    options={options}
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        textTransform: "capitalize",
                        color: "#253d4e",
                        boxShadow: "none",
                        width: "200px",
                        outline: "none",
                      }),
                    }}
                  />
                </div>
                <div className="vendor-show">
                  <span>
                    <BsFillGridFill />
                  </span>
                  <span>
                    <BsList />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="vendors-body">
            {vendors.map((vendor) => (
              <VendorList key={vendor._id} vendor={vendor} />
            ))}
          </div>
          {/***pagination */}
          <Paginate pageCount={3} />
        </div>
      </section>
    </Layout>
  );
};

export default Vendors;
