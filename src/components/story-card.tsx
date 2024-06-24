import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface StoryCardProps {
    cardSvg: ReactNode;
    background: string;
    headingColor?: string;
    text: string;
    heading: string;
    width: number;
}

const StoryCard: React.FC<StoryCardProps> = ({
    cardSvg,
    background,
    headingColor = "white",
    heading,
    text,
    width,
}) => {
    return (
        <div
            className={cn("rounded-[17.5px] grid grid-cols-2 auto-rows-auto", {
                "bg-primary-foreground": background === "blue",
                "bg-secondary-foreground": background === "green",
                "bg-accent": background === "yellow",
                "w-48": width === 48,
                "w-36": width === 36,
                "w-28": width === 28,
            })}
        >
            <div className="col-start-2 flex justify-end items-start pt-2 pr-2">
                {cardSvg}
            </div>
            <div className="pl-4 pb-4 pt-4 pr-2">
                <p
                    className={cn("font-semibold text-3xl", {
                        "text-primary": headingColor === "white",
                        "text-black": headingColor === "black",
                    })}
                >
                    {heading}
                </p>
                <p
                    className={cn("font-semibold text-lg", {
                        "text-primary-foreground":
                            background === "green" || background === "yellow",
                        "text-secondary-foreground": background === "blue",
                    })}
                >
                    {text}
                </p>
            </div>
        </div>
    );
};

export default StoryCard;
