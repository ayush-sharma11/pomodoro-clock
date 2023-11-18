function Timer(props) {
    return (
        <>
            <div
                className="circle d-flex justify-content-center align-items-center"
                style={{
                    backgroundColor:
                        props.isBreak === true ? "#4DFF7C" : "#3BB0DE",
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
                    {!props.isBreak ? "25:00" : "5:00"}
                </p>
            </div>
        </>
    );
}

export default Timer;
