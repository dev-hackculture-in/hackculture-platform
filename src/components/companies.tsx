import { CompaniesSvgs } from "./svgs/companies-svgs";

const Companies = () => {
    return (
        <div
            className="bg-primary-foreground relative overflow-hidden md:pb-20"
            id="organizers"
        >
            <div className="container md:p-24 p-8 relative">
                <div className="bg-black opacity-100 rounded-[10px] px-8 py-4 md:px-24 md:py-16">
                    <div className="absolute w-24 md:w-36 inset-x-[75%] md:inset-x-[85%] inset-y-[87%] md:inset-y-[75%]">
                        <CompaniesSvgs.svg1 />
                    </div>
                    <div className="absolute w-24 md:w-36 inset-2 md:inset-12">
                        <CompaniesSvgs.svg2 />
                    </div>
                    <div className="flex flex-col gap-12 items-center py-10 md:py-0">
                        <div className="bg-primary-foreground rounded-[10px] px-8 md:px-20 py-3">
                            <h1 className="font-semibold text-white text-sm md:text-2xl whitespace-nowrap">
                                For Future Ready Companies
                            </h1>
                        </div>
                        <h1 className="font-semibold text-4xl md:text-5xl tracking-tight leading-[1.46] text-center max-w-[49rem] text-white">
                        Scout Innovative solutions to your business problem through Startups, Academia and Innovators
                        </h1>
                        <button
                            className="bg-white text-black max-w-min whitespace-nowrap px-8 py-3 rounded-[10px] font-bold text-2xl"
                            onClick={() =>
                                window.open("https://tally.so/r/w4q7er")
                            }
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Companies;
