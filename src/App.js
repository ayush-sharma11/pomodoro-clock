import { useState } from "react";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Navbar from "./components/Navbar";
import Timer from "./components/Timer";

function App() {
    const [isPaused, setIsPaused] = useState(true);

    const [isBreak, setIsBreak] = useState(false);

    if (isBreak === true) {
        document.documentElement.style.setProperty("--body-color", "#80FFA2");
    } else {
        document.documentElement.style.setProperty("--body-color", "#87CEEB");
    }

    return (
        <>
            <Navbar isBreak={isBreak} />
            <div className="container" style={{ height: "10rem" }}></div>
            <Timer isBreak={isBreak} />

            <div className="control-container container my-5 d-flex justify-content-center">
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
                    onClick={() => setIsBreak(!isBreak)}
                >
                    <i className="bi bi-stop-fill"></i>
                </button>
            </div>
        </>
    );
}

export default App;
