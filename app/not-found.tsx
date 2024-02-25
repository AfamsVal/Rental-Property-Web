import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(135deg, #CCC 35%, #FFF 100%)",
      }}
      className="gradient text-gray-900 min-h-screen flex items-center"
    >
      <div className="container mx-auto p-4 flex flex-wrap items-center">
        <div className="w-full md:w-1/2 mx-auto text-center md:text-left p-4 space-y-8">
          <div className="text-6xl font-medium">404</div>
          <div className="text-xl md:text-3xl font-medium mb-4">
            Oops. This page has gone missing.
          </div>
          <div className="text-lg mb-8">
            You may have mistyped the address or the page may have moved.
          </div>
          <div>
            <Link
              href="/"
              className="border border-gray-900 hover:bg-gray-100 rounded p-4"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
