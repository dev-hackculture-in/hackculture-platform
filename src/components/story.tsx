import MobileStory from "./mobile-story";
import StoryCard from "./story-card";
import { StorySvgs } from "./svgs/story-svgs";

const Story = () => {
    return (
        <div className="container p-8 md:p-24 text-center md:text-left">
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
                            We're more than just a hackathon company— we're a
                            catalyst for innovation.
                        </p>
                        <p className="text-muted text-2xl leading-[1.5] font-normal">
                            Every Use-Case and Problem should be solved by the
                            right Builder and We do that through Hackathons and
                            Challenges. Connecting the right Builder to the
                            right opportunity across the Globe.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Story;
