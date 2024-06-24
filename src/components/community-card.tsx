import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CommunityCardProps {
    rotateDegrees?: 6 | -6;
    communitySvg: ReactNode
}

const CommunityCard: React.FC<CommunityCardProps> = ({rotateDegrees = 6, communitySvg}) => {
    return (
        <div className="flex flex-col gap-4 max-w-[10rem]">
            <div className="relative">
                <img src="/community.png" className={cn("", {
                    "rotate-6": rotateDegrees === 6,
                    "-rotate-6": rotateDegrees === -6
                })} />
                <div className="absolute inset-x-[75%] inset-y-[-15%] size-20">
                {communitySvg}
                </div>
            </div>
            <div className="text-center">
                <div className="bg-accent my-2 rounded-[6px]">
                    <p className="font-semibold text-lg text-black">
                        Arpit Yadav
                    </p>
                </div>
                <p className="text-primary-foreground font-semibold">
                    I'm building
                </p>
                <p className="font-semibold">
                    Sustainability Solutions For Google
                </p>
            </div>
        </div>
    );
};

export default CommunityCard;
