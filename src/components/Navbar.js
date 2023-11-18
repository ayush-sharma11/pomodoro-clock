import React from "react";

function Navbar() {
    return (
        <>
            <nav
                className="navbar"
                style={{ height: "6rem", backgroundColor: "#87CEEB" }}
            >
                <div className="container-fluid d-flex align-items-center justify-content-center">
                    <span className="navbar-brand" style={{ margin: "auto" }}>
                        <h1 className="montserrat-regular-400 text-light my-0">
                            Pomodoro Clock
                        </h1>
                    </span>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
