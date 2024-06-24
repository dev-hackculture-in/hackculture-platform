import React from "react";
import CommunityCard from "./community-card";
import CommunityBg from "./svgs/community-bg";
import { CommunitySvgs } from "./svgs/community-svgs";

interface CommunityProps {}

const Community: React.FC<CommunityProps> = () => {
    return (
        <div className="bg-background py-24">
            <div className="flex flex-col gap-24">
                <div className="container px-24 font-semibold text-6xl leading-[1.36]">
                    <h1>A Dynamic Community</h1>
                    <h1>Where Visionaries Shape Tomorrow</h1>
                </div>
                <div className="relative">
                    <CommunityBg className="absolute w-full -inset-y-1/3 z-10" />
                    <div className="px-24 z-20 relative flex justify-around">
                        <CommunityCard communitySvg={<CommunitySvgs.crown />}/>
                        <CommunityCard rotateDegrees={-6} communitySvg={<CommunitySvgs.crown />}/>
                        <CommunityCard communitySvg={<CommunitySvgs.crown />}/>
                        <CommunityCard rotateDegrees={-6} communitySvg={<CommunitySvgs.crown />}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;
