"use client";
import AddProperty from "@/components/properties/AddProperty";
import React from "react";

const page = () => {
  return (
    <div className="flex bg-gray-100 py-10">
      <div className="m-auto">
        <div>
          <AddProperty />
        </div>
      </div>
    </div>
  );
};

export default page;
