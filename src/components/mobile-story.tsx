import StoryCard from "./story-card";
import { StorySvgs } from "./svgs/story-svgs";

const MobileStory = () => {
    return (
        <div>
            <div className="relative md:hidden h-96 -translate-y-10">
                <div className="absolute max-w-2xl ">
                    <StoryCard
                        cardSvg={<StorySvgs.svg3 />}
                        background="green"
                        heading="1000+"
                        text="Ideas"
                        headingColor="black"
                        width={36}
                    />
                </div>
                <div className="absolute max-w-2xl inset-y-[29%] inset-x-[20%]">
                    <StoryCard
                        cardSvg={<StorySvgs.svg1 />}
                        background="blue"
                        heading="3000+"
                        text="Builders"
                        width={48}
                    />
                </div>
                <div className="absolute max-w-2xl inset-y-[60%] inset-x-[55%]">
                    <StoryCard
                        cardSvg={<StorySvgs.svg2 />}
                        background="yellow"
                        heading="20+"
                        text="Hackathons"
                        headingColor="black"
                        width={36}
                    />
                </div>
            </div>
        </div>
    )
}

export default MobileStory;
