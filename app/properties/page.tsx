import React from "react";
import PropertyCard from "@/components/properties/PropertyCard";
import { fetchProperties } from "@/utils/request";

const page = async () => {
  const properties = await fetchProperties();

  properties.sort((a: { createdAt: Date }, b: { createdAt: Date }) => {
    const dateA: Date = new Date(a.createdAt);
    const dateB: Date = new Date(b.createdAt);

    return dateB.getTime() - dateA.getTime();
  });
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
            <div className="bg-primary-500 mb-6 pb-1 w-2/12">
              <form className="max-w-sm mx-auto">
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select an option
                </label>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Sort By:</option>
                  <option value="ASC">Ascending States</option>
                  <option value="DSC">Descending</option>
                </select>
              </form>
            </div>
          </div>
        </div>
        <div className="-mx-3 flex flex-wrap mb-12">
          {properties.length > 0
            ? properties.map((item: any, i: number) => (
                <PropertyCard key={i} item={item} />
              ))
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
