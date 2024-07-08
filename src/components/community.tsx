import React from "react";
import CommunityCard from "./community-card";
import CommunityBg from "./svgs/community-bg";
import { CommunitySvgs } from "./svgs/community-svgs";

interface CommunityProps {}

const Community: React.FC<CommunityProps> = () => {
    return (
        <div className="bg-background py-12 md:py-24" id="builders">
            <div className="flex flex-col gap-16 md:gap-24">
                <div className="container md:px-24 text-center md:text-left font-semibold text-6xl leading-[1.36]">
                    <h1>A Collaborative Community</h1>
                    <h1>Where ideas turn into reality</h1>
                </div>
                <div className="relative">
                    <CommunityBg className="absolute w-full md:-inset-y-1/3 z-10" />
                    <div className="px-24 z-20 relative md:flex justify-around hidden">
                        <CommunityCard communitySvg={<CommunitySvgs.crown />} />
                        <CommunityCard
                            rotateDegrees={-6}
                            communitySvg={<CommunitySvgs.crown />}
                        />
                        <CommunityCard communitySvg={<CommunitySvgs.crown />} />
                        <CommunityCard
                            rotateDegrees={-6}
                            communitySvg={<CommunitySvgs.crown />}
                        />
                    </div>
                    <div className="flex justify-center z-20 relative md:hidden">
                        <CommunityCard communitySvg={<CommunitySvgs.crown />} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;
