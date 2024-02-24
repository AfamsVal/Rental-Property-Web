import Image from "next/image";
import React from "react";

const PropertyCard = ({ item }: any) => {
  return (
    <div className="p-3 w-full md:w-6/12 lg:w-4/12">
      <div className="bg-white border shadow-md text-gray-500">
        <a href="#">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            // width={300}
            // height={200}
            className="h-full w-full object-cover"
            src={`/images/properties/${item?.images[0]}`}
            alt="Property one"
          />
        </a>
        <div className="p-6">
          <h4 className="font-bold mb-2 text-gray-900 text-xl">
            <a href="#" className="hover:text-gray-500">
              {item.name}
            </a>
          </h4>
          <p className="mb-2 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <hr className="border-gray-200 my-4" />
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center py-1 space-x-1">
              <span>4.9</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="1.125em"
                height="1.125em"
                className="text-primary-500"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"></path>
                </g>
              </svg>
              <span>(546 reviews)</span>
            </div>
            <p className="font-bold text-gray-900">$45/day</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
