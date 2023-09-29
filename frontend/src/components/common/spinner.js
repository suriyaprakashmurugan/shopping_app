import React from "react";

const Spinner = ({ loading }) => {
  return (
    <>
      {loading == true ? (
        <div className="spin d-flex justify-content-center align-items-center">
          <div className="bg-light p-3 rounded">
            <div className="spinner-border text-danger">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Spinner;
