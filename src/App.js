import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Navbar from "./components/Navbar";
import Timer from "./components/Timer";

function App() {
    return (
        <>
            <Navbar />
            <div className="container" style={{ height: "10rem" }}></div>
            <Timer />
        </>
    );
}

export default App;
