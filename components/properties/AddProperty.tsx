"use client";
import React, { useEffect, useState } from "react";
import { FaPlus, FaRegSave, FaRegTrashAlt } from "react-icons/fa";

const AddProperty = () => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [property, setProperty] = useState({
    owner: "6",
    name: "Mountain View Retreat",
    type: "House",
    description: "Enjoy stunning mountain views from this spacious retreat.",
    location: {
      street: "600 Summit Drive",
      city: "Boulder",
      state: "CO",
      zipcode: "80301",
    },
    beds: 4,
    baths: 3,
    square_feet: 2400,
    amenities: [
      "Mountain View",
      "Hiking Trails Access",
      "Air Conditioning",
      "Smart TV",
      "Outdoor Grill/BBQ",
    ],
    rates: {
      weekly: 1000,
      monthly: 3800,
    },
    seller_info: {
      name: "Lisa Taylor",
      email: "lisa@gmail.com",
      phone: "303-555-5555",
    },
    images: ["a1.jpg", "a2.jpeg", "a3.webp"],
    is_featured: false,
    createdAt: "2024-01-09T00:00:00.000Z",
    updatedAt: "2024-01-09T00:00:00.000Z",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const [outerKey, innerKey] = name.split(".");
      setProperty(
        (prevField) =>
          ({
            ...prevField,
            [outerKey]: {
              //@ts-ignore
              ...prevField[outerKey],
              [innerKey]: value, // Use square brackets to set the dynamic key
            },
          } as any)
      ); // Type assertion here
    } else {
      setProperty((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAmenitiesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    const updatedAmenities = [...property.amenities];

    if (checked) {
      updatedAmenities.push(value);
    } else {
      const index = updatedAmenities.indexOf(value);
      if (index !== -1) {
        updatedAmenities.splice(index, 1);
      }
    }

    setProperty((prevState) => ({
      ...prevState,
      amenities: updatedAmenities,
    }));
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    const updatedImage = [...property.images];
    for (let file in files) {
      updatedImage.push(file);
    }

    setProperty((prevState) => ({ ...property, images: updatedImage }));
  };

  const handleSubmit = () => {
    console.log("Property:", property);
  };

  return (
    mounted && (
      <div className="mt-5 bg-white rounded-lg shadow">
        <div className="flex">
          <div className="flex items-center py-5 pl-5 overflow-hidden">
            <FaPlus className="mr-2" />

            <h1 className="inline text-2xl font-semibold leading-none">
              Add Property
            </h1>
          </div>
        </div>
        <form
          action="api/properties"
          method="POST"
          encType="multipart/form-data"
          className="px-5 pb-5"
        >
          <div className="mb-4">
            <input
              placeholder="Listing Name"
              className=" text-black w-full px-4 py-2.5 mt-2 text-base border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
              value={property.name}
              onChange={handleChange}
              name="name"
            />
          </div>
          <div>
            <select
              name="type"
              value={property.type}
              onChange={handleChange}
              className="text-black border-transparent text-sm rounded-lg bg-gray-200 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Property Type</option>
              <option value="Apartment">Apartment</option>
              <option value="Bongalow">Bongalow</option>
              <option value="House">House</option>
              <option value="Room">Room</option>
            </select>
          </div>
          <div className="my-3">
            <textarea
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Description (optional)"
              value={property.description}
              onChange={handleChange}
              name="description"
            ></textarea>
          </div>

          <div className="my-6">
            <h3 className="inline text-xl text-gray-500 font-semibold leading-none">
              Location
            </h3>
            <input
              value={property.location.zipcode}
              name="location.zipcode"
              onChange={handleChange}
              placeholder="Zip Code"
              className=" text-black w-full px-4 py-2.5 mt-2 text-base   border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            />
            <input
              value={property.location.street}
              name="location.street"
              onChange={handleChange}
              placeholder="Street"
              className=" text-black w-full px-4 py-2.5 mt-2 text-base   border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            />
            <div className="flex">
              <div className="flex-grow w-1/4 pr-2">
                <input
                  value={property.location.city}
                  name="location.city"
                  onChange={handleChange}
                  placeholder="City"
                  className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
              </div>
              <div className="flex-grow">
                <input
                  value={property.location.state}
                  name="location.state"
                  onChange={handleChange}
                  placeholder="State"
                  className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
              </div>
            </div>
          </div>
          {["Mountain View", "Hiking Trails Access", "Wifi"].map((item, i) => (
            <div key={i} className="flex items-center pt-3">
              <input
                checked={property.amenities.includes(item)}
                value={item}
                onChange={handleAmenitiesChange}
                type="checkbox"
                className="w-4 h-4 text-black bg-gray-300 border-none rounded-md focus:ring-transparent"
              />
              <label
                htmlFor="safeAdress"
                className="block ml-2 text-sm text-gray-900"
              >
                {item}
              </label>
            </div>
          ))}
        </form>
        <div className="px-5 py-5">
          <h3 className="inline text-xl text-gray-500 font-semibold leading-none">
            Upload Image
          </h3>
          <div className="mt-2">
            <input
              id="images"
              name="images"
              onChange={handleImageChange}
              className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              type="file"
              accept="image/*"
              multiple
            />
          </div>
        </div>

        <hr className="mt-4" />
        <div className="flex flex-row-reverse p-3">
          <div className="flex-initial pl-3">
            <button
              onClick={handleSubmit}
              className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-gray-600 rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out"
            >
              <FaRegSave style={{ fontSize: "20px" }} />
              <span className="pl-2 mx-1">Add Property</span>
            </button>
          </div>
          <div className="flex-initial">
            <button
              type="button"
              className="flex items-center px-5 py-2.5 font-medium tracking-wide text-black capitalize rounded-md  hover:bg-red-200 hover:fill-current hover:text-red-600  focus:outline-none  transition duration-300 transform active:scale-95 ease-in-out"
            >
              <FaRegTrashAlt style={{ fontSize: "20px" }} />

              <span className="pl-2 mx-1">Clear</span>
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default AddProperty;
