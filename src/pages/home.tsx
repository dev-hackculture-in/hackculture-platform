import Hero from "../components/hero";
import HeroBg from "../components/svgs/hero-bg";
import Logos from "../components/logos";
import FeaturedHacks from "../components/featured-hacks";
import Stub from "../components/stub";
import Story from "../components/outcomes";
import Banner from "../components/banner";
import Companies from "../components/companies";

const Home = () => {
    return (
        <>
            <div className="relative overflow-hidden">
                <HeroBg className="absolute pointer-events-none" />
                <Hero />
            </div>
            <div className="relative overflow-hidden">
                <HeroBg className="absolute pointer-events-none" />
            </div>
            <Logos />
            <FeaturedHacks />
            <Stub />
            <Story />
            <Banner />
            <Companies />
        </>
    );
};

export default Home;
