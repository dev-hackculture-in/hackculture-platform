import { CompaniesSvgs } from "./svgs/companies-svgs";
import HeroBg from "./svgs/hero-bg";

const Companies = () => {
    return (
        <div className=" bg-background relative overflow-hidden">
            <HeroBg className="absolute" />
            <div className="container p-24 relative">
                <div className="bg-foreground opacity-100 rounded-[10px] px-24 py-16">
                    <div className="absolute w-36 inset-x-[85%] inset-y-[75%]">
                        <CompaniesSvgs.svg1 />
                    </div>
                    <div className="absolute w-36 inset-12">
                        <CompaniesSvgs.svg2 />
                    </div>
                    <div className="flex flex-col gap-12 items-center">
                        <div className="bg-primary-foreground rounded-[10px] px-20 py-3">
                            <h1 className="font-semibold text-2xl">
                                FOR COMPANIES
                            </h1>
                        </div>
                        <h1 className="font-semibold text-5xl tracking-tight leading-[1.46] text-center">
                            Scout Innovative Solutions to your Business Problems
                            through Us
                        </h1>
                        <div className="text-center">
                            <p className="text-muted text-2xl leading-[1.5] line-clamp-2 font-normal">
                                Crowdsource Innovative solutions and adopt your
                            </p>
                            <p className="text-muted text-2xl leading-[1.5] line-clamp-2 font-normal">
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
