import { useState } from "react";

function Timer() {
    const [isPaused, setIsPaused] = useState(true);

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
            <div className="container my-5 d-flex justify-content-center">
                <button
                    type="button"
                    className="btn btn-lg mx-2 btn-outline-light controls"
                    onClick={() => setIsPaused(!isPaused)}
                >
                    {!isPaused ? (
                        <i className="bi bi-play-fill"></i>
                    ) : (
                        <i className="bi bi-pause-fill"></i>
                    )}
                </button>
                <button
                    type="button"
                    className="btn btn-lg mx-2 btn-outline-light controls"
                >
                    <i className="bi bi-stop-fill"></i>
                </button>
            </div>
        </>
    );
}

export default Timer;
