import ScoutHero from "@/components/scout-hero";
import HeroBg from "@/components/svgs/hero-bg";

const Scout = () => {
    return (
        <>
            <div className="relative overflow-hidden">
                <HeroBg className="absolute pointer-events-none" />
                <ScoutHero />
            </div>
        </>
    );
};

export default Scout;
