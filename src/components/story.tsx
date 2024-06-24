import StoryCard from "./story-card";
import { StorySvgs } from "./svgs/story-svgs";

const Story = () => {
    return (
        <div className="container p-24">
            <div className="flex flex-col gap-24">
                <h1 className="font-semibold text-6xl">Our Story</h1>
                <div className="flex gap-48">
                    <div className="w-5/12">
                        <div className="relative">
                            <img src="/story.png" className="relative"></img>
                            <div className="absolute max-w-2xl inset-y-[70%] inset-x-[70%]">
                                <StoryCard
                                    cardSvg={<StorySvgs.svg1 />}
                                    background="blue"
                                    heading="8000+"
                                    text="Builders"
                                    width={48}
                                />
                            </div>
                            <div className="absolute max-w-2xl inset-y-[90%] inset-x-[15%]">
                                <StoryCard
                                    cardSvg={<StorySvgs.svg3 />}
                                    background="green"
                                    heading="1000+"
                                    text="Ideas"
                                    headingColor="black"
                                    width={36}
                                />
                            </div>
                            <div className="absolute max-w-2xl -inset-y-[10%] inset-x-[95%]">
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
                    </div>
                    <div className="w-6/12 flex flex-col gap-24">
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
