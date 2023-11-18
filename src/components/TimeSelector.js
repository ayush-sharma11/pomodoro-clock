import React from "react";

function TimeSelector() {
    return (
        <>
            <div
                className="circle d-flex justify-content-center align-items-center"
                style={{
                    backgroundColor: "#3BB0DE",
                    width: "14rem",
                    height: "14rem",
                    borderRadius: "7rem",
                    border: "0.25rem solid white",
                    margin: "auto",
                }}
            >
                <p
                    className="montserrat-regular-400 my-0 text-light"
                    style={{ fontSize: "2.5rem" }}
                >
                    25:00
                </p>
            </div>
            <div className="container my-3 d-flex justify-content-center">
                <button type="button" className="btn btn-outline-light">
                    <i className="bi bi-play-fill"></i>
                </button>
            </div>
        </>
    );
}

export default TimeSelector;
