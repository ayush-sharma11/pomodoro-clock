import "./App.css";

import Navbar from "./components/Navbar";
import TimeSelector from "./components/TimeSelector";

function App() {
    return (
        <>
            <Navbar />
            <div className="container" style={{ height: "10rem" }}></div>
            <TimeSelector />
        </>
    );
}

export default App;
