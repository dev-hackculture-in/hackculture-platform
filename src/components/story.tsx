import { Typewriter } from "react-simple-typewriter";
import MobileStory from "./mobile-story";
import StoryCard from "./story-card";
import { StorySvgs } from "./svgs/story-svgs";

const Story = () => {
    return (
        <div
            className="container p-8 md:p-24 text-center md:text-left"
            id="about"
        >
            <div className="flex flex-col gap-16 md:gap-24">
                <h1 className="font-semibold text-6xl">Our Story</h1>
                <div className="md:flex md:gap-48">
                    <div className="md:w-5/12">
                        <div className="relative">
                            <img src="/story.png" className="relative" />
                            <div className="hidden md:block">
                                <div className="absolute max-w-2xl md:inset-y-[70%] md:inset-x-[70%]">
                                    <StoryCard
                                        cardSvg={<StorySvgs.svg1 />}
                                        background="blue"
                                        heading="8000+"
                                        text="Builders"
                                        width={48}
                                    />
                                </div>
                                <div className="absolute max-w-2xl md:inset-y-[90%] md:inset-x-[15%]">
                                    <StoryCard
                                        cardSvg={<StorySvgs.svg3 />}
                                        background="green"
                                        heading="1000+"
                                        text="Ideas"
                                        headingColor="black"
                                        width={36}
                                    />
                                </div>
                                <div className="absolute max-w-2xl md:-inset-y-[10%] md:inset-x-[95%]">
                                    <StoryCard
                                        cardSvg={<StorySvgs.svg2 />}
                                        background="yellow"
                                        heading="200+"
                                        text="Hackathons"
                                        headingColor="black"
                                        width={36}
                                    />
                                </div>
                            </div>
                            <MobileStory />
                        </div>
                    </div>
                    <div className="md:w-6/12 flex flex-col gap-8 md:gap-24">
                        <p className="text-4xl leading-[1.5] font-normal">
                            Our mission extends beyond hackathons; we're
                            dedicated to tailoring solutions just for you
                        </p>
                        <p className="text-muted text-2xl leading-[1.5] font-normal break-words">
                            Our platform connects passionate builders with
                            real-world use cases through dynamic <br />
                            <span className="">
                                <Typewriter
                                    words={["hackathons", "hackerhouses"]}
                                    loop={0}
                                />
                            </span>
                            , ensuring every solution finds its right Builder.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Story;
