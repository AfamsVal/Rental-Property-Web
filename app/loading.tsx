import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
};

const LoadingPage = ({ loading }: { loading: boolean }) => {
  return (
    <div className="py-24">
      <ClipLoader
        color="rgb(234 88 12)"
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default LoadingPage;
