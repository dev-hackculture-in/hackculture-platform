import React from "react";
import CommunityCard from "./community-card";
import CommunityBg from "./svgs/community-bg";
import { CommunitySvgs } from "./svgs/community-svgs";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

interface CommunityProps {}

const names = [
    "Harsha Srinivas",
    "Nippu Naresh",
    "Rahul Khatri",
    "Ratheesh M",
    "Sparsh Rao",
];
const descs = [
    "AI-Enabled IOT Solutions for sustainable industries",
    '"I, Saras", a GenAI tool for UPSC and competitive exam preparation',
    "AuraX, transforming stores into accurate AR visualisations.",
    "A high-tech, precision-engineered, cost-effective jetboards.",
    "AI powered NeatProcess platform for FMCG brands",
];
const svgs = [
    <CommunitySvgs.crown />,
    <CommunitySvgs.twinkle />,
    <CommunitySvgs.misc />,
    <CommunitySvgs.stars />,
    <CommunitySvgs.thunder />,
];

const Community: React.FC<CommunityProps> = () => {
    return (
        <div className="bg-background py-12 md:py-24" id="builders">
            <div className="flex flex-col gap-16 md:gap-24">
                <div className="container md:px-24 text-center md:text-left font-semibold text-4xl md:text-6xl leading-[1.36]">
                    <h1>A Collaborative Community</h1>
                    <h1>Where ideas turn into reality</h1>
                </div>
                <div className="relative">
                    <CommunityBg className="absolute w-full inset-y-16 md:-inset-y-1/4 z-1" />
                    <div className="z-20">
                        <Carousel
                            opts={{
                                loop: true,
                                watchDrag: false,
                            }}
                            plugins={[AutoScroll({ playOnInit: true })]}
                        >
                            <CarouselContent className="py-4">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <CarouselItem
                                        key={index}
                                        className="md:basis-1/3"
                                    >
                                        <CommunityCard
                                            index={index}
                                            name={names[index]}
                                            desc={descs[index]}
                                            communitySvg={svgs[index]}
                                        />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;
