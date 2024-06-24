import { default as HeroSvg } from "./svgs/hero";

const Hero = () => {
    return (
        <div className="container relative py-24">
            <div className="px-24">
                <div className="max-w-3xl flex flex-col gap-16">
                    <div className="flex flex-col gap-5">
                        <h1 className="font-bold text-6xl tracking-tight leading-[1.46]">
                            Build Innovative{" "}
                            <span className="text-secondary-foreground underline underline-offset-8">
                                Solutions
                            </span>{" "}
                            Through Hackathons
                        </h1>
                    </div>

                    <div className="flex flex-col gap-8">
                        <div>
                            <p className="text-muted text-2xl leading-[1.5]">
                                Solve the Right use cases with Right Builders
                            </p>
                            <p className="text-muted text-2xl leading-[1.5]">
                                Across the globe. It's Time to Build Yours!
                            </p>
                        </div>

                        <button className="bg-primary text-background max-w-min whitespace-nowrap px-8 py-3 rounded-[10px] font-bold text-2xl">
                            Build Now!
                        </button>
                    </div>
                </div>
                <div className="absolute inset-x-1/2 inset-y-0">
                    <HeroSvg className="max-w-2xl -z-50" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
