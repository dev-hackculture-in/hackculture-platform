import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CommunityCardProps {
    communitySvg: ReactNode;
    index: number;
    name: string;
    desc: string;
}

const CommunityCard: React.FC<CommunityCardProps> = ({
    communitySvg,
    index,
    name,
    desc,
}) => {
    return (
        <div className="flex flex-col gap-4 max-w-[10rem]">
            <div className="relative">
                <img
                    src={`/community/community-${index + 1}.png`}
                    className={cn("rounded-[32px] shadow-lg", {
                        "rotate-6": (index + 1) % 2 !== 0,
                        "-rotate-6": (index + 1) % 2 === 0,
                    })}
                />
                <div className="absolute inset-x-[75%] inset-y-[-5%] size-16">
                    {communitySvg}
                </div>
            </div>
            <div className="text-center">
                <div
                    className={cn("my-2 rounded-[6px]", {
                        "bg-accent": (index + 1) % 2 === 0,
                        "bg-secondary-foreground": (index + 1) % 2 !== 0,
                    })}
                >
                    <p className="font-semibold text-lg text-black">{name}</p>
                </div>
                <p className="text-primary-foreground font-semibold">
                    I'm building
                </p>
                <p className="font-semibold">{desc}</p>
            </div>
        </div>
    );
};

export default CommunityCard;
