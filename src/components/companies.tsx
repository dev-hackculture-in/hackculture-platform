import { CompaniesSvgs } from "./svgs/companies-svgs";
import HeroBg from "./svgs/hero-bg";

const Companies = () => {
    return (
        <div
            className="bg-background relative overflow-hidden pb-20"
            id="organizers"
        >
            <HeroBg className="absolute" />
            <div className="container md:p-24 p-8 relative">
                <div className="bg-foreground opacity-100 rounded-[10px] px-8 py-4 md:px-24 md:py-16">
                    <div className="absolute w-24 md:w-36 inset-x-[75%] md:inset-x-[85%] inset-y-[87%] md:inset-y-[75%]">
                        <CompaniesSvgs.svg1 />
                    </div>
                    <div className="absolute w-24 md:w-36 inset-2 md:inset-12">
                        <CompaniesSvgs.svg2 />
                    </div>
                    <div className="flex flex-col gap-12 items-center py-10 md:py-0">
                        <div className="bg-primary-foreground rounded-[10px] px-8 md:px-20 py-3">
                            <h1 className="font-semibold text-2xl whitespace-nowrap">
                                FOR COMPANIES
                            </h1>
                        </div>
                        <h1 className="font-semibold text-4xl md:text-5xl tracking-tight leading-[1.46] text-center">
                            Find creative solutions to your business challenges
                            with us
                        </h1>
                        <div
                            className="text-center"
                            style={{
                                fontFamily: "Inter, sans serif",
                            }}
                        >
                            <p className="text-muted text-xl md:text-2xl leading-[1.5] line-clamp-2 font-normal">
                                Crowdsource cutting-edge solutions and
                            </p>
                            <p className="text-muted text-xl md:text-2xl leading-[1.5] line-clamp-2 font-normal">
                                integrate your developer tools with us
                            </p>
                        </div>

                        <button
                            className="bg-primary text-background max-w-min whitespace-nowrap px-8 py-3 rounded-[10px] font-bold text-2xl"
                            onClick={() =>
                                window.open("https://tally.so/r/mYdgGd")
                            }
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Companies;
