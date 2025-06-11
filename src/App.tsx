import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/home";
import Scout from "./pages/scout";

const App = () => {
    return (
        <div
            style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
            className="bg-foreground text-primary min-h-screen"
        >
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/scout" element={<Scout />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
};

export default App;
