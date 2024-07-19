import { Typewriter } from "react-simple-typewriter";
import { default as HeroSvg } from "./svgs/hero";

const Hero = () => {
    return (
        <div className="container relative py-10 md:py-24">
            <div className="md:px-24 text-center md:text-left">
                <div className="max-w-3xl flex flex-col gap-8 md:gap-16">
                    <div className="flex flex-col gap-5">
                        <h1 className="font-bold text-4xl md:text-6xl tracking-tight">
                            Build Innovative{" "}
                            <span className="text-secondary-foreground underline underline-offset-8 block md:inline h-8">
                                <Typewriter
                                    words={["Solutions", "Products", "Things"]}
                                    loop={0}
                                />
                            </span>
                        </h1>
                        <h1 className="font-bold text-4xl md:text-6xl tracking-tight">
                            Through Hackathons
                        </h1>
                    </div>

                    <div
                        className="flex flex-col gap-8"
                        style={{ fontFamily: "Inter, sans serif" }}
                    >
                        <div>
                            <p className="text-muted text-xl md:text-2xl leading-[1.5]">
                                Solve the Right use cases with Right Builders
                            </p>
                            <p className="text-muted text-xl md:text-2xl leading-[1.5]">
                                across the globe, collaborating to innovate and
                            </p>
                            <p className="text-muted text-xl md:text-2xl leading-[1.5]">
                                make a real impact
                            </p>
                        </div>

                        <button
                            className="bg-primary text-background md:max-w-min whitespace-nowrap px-8 py-3 rounded-[10px] font-bold text-2xl"
                            onClick={() =>
                                window.open("https://tally.so/r/w7Zp0z")
                            }
                        >
                            Build Now!
                        </button>
                    </div>
                </div>
                <div className="md:block absolute inset-x-1/2 inset-y-0 hidden">
                    <HeroSvg className="max-w-2xl -z-50" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
