import Banner from "./components/banner";
import Community from "./components/community";
import Companies from "./components/companies";
import Footer from "./components/footer";
import Hackathons from "./components/hackathons";
import Hero from "./components/hero";
import Logos from "./components/logos";
import MobileIcon from "./components/mobile-icon";
import Navbar from "./components/navbar";
import Story from "./components/outcomes";
import Stub from "./components/stub";
import HeroBg from "./components/svgs/hero-bg";

const App = () => {
    return (
        <div
            style={{ fontFamily: "Space Grotesk, Inter, sans serif" }}
            className="bg-foreground text-primary min-h-screen lg:block "
        >
            <div className="relative overflow-hidden">
                <HeroBg className="absolute pointer-events-none" />
                <Navbar />
                <Hero />
            </div>
            <div className="relative overflow-hidden">
                <HeroBg className="absolute pointer-events-none" />
                <MobileIcon />
            </div>
            <Logos />
            <Hackathons />
            <Stub />
            <Story />
            <Banner />
            <Community />
            <Companies />
            <Footer />
        </div>
    );
};

export default App;
