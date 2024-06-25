import { CompaniesSvgs } from "./svgs/companies-svgs";
import HeroBg from "./svgs/hero-bg";

const Companies = () => {
    return (
        <div className=" bg-background relative overflow-hidden">
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
                            Scout Innovative Solutions to your Business Problems
                            through Us
                        </h1>
                        <div className="text-center">
                            <p className="text-muted text-xl md:text-2xl leading-[1.5] line-clamp-2 font-normal">
                                Crowdsource Innovative solutions and adopt your
                            </p>
                            <p className="text-muted text-xl md:text-2xl leading-[1.5] line-clamp-2 font-normal">
                                developer products/APIs Through us
                            </p>
                        </div>

                        <button className="bg-primary text-background max-w-min whitespace-nowrap px-8 py-3 rounded-[10px] font-bold text-2xl">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Companies;
