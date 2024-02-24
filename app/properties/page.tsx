import Image from "next/image";
import React from "react";
import properties from "@/properties.json";
import PropertyCard from "@/components/properties/PropertyCard";

const page = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap items-center mb-6">
          <div className="px-4 w-full md:w-10/12">
            <h2 className="font-medium mb-1 text-primary-500 text-xl">
              Our Top Cars
            </h2>
            <h3 className="capitalize font-bold mb-4 text-4xl text-gray-900">
              Cars for all your needs
            </h3>
            <div className="bg-primary-500 mb-6 pb-1 w-2/12"></div>
          </div>
        </div>
        <div className="-mx-3 flex flex-wrap mb-12">
          {properties.length > 0
            ? properties.map((item, i) => <PropertyCard key={i} item={item} />)
            : "No Properties Found!"}
        </div>
        <div className="text-center">
          <a
            href="#"
            className="bg-primary-500 hover:bg-primary-600 inline-block px-6 py-2 text-white"
          >
            View All Cars
          </a>
        </div>
      </div>
    </section>
  );
};

export default page;
