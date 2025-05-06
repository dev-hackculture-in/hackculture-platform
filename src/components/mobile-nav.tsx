import { useState } from "react";
import { Icons } from "./icons";
import { cn } from "@/lib/utils";

const MobileNav = () => {
    const [showNav, setShowNav] = useState(false);

    // const onNavClick = (href: string) => {
    //     setShowNav(false);
    //     document.getElementById(href)?.scrollIntoView({
    //         behavior: "smooth",
    //     });
    // };

    return (
        <div>
            <div className="bg-primary-foreground rounded-full text-white cursor-pointer p-2">            <Icons.menu
                className="size-8 "
                onClick={() => setShowNav((prev) => !prev)}
            />
            </div>

            <div
                className={cn(
                    "bg-primary-foreground text-white",
                    showNav ? "showMenuNav" : "hideMenuNav"
                )}
            >
                <div
                    className="absolute top-0 right-0 p-8"
                    onClick={() => setShowNav(false)}
                >
                    <svg
                        className="h-8 w-8 bg-primary-foreground rounded-full text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </div>
                <ul className="flex flex-col items-center justify-between min-h-[250px] text-3xl">
                    <li className="border-b border-gray-400 my-8 uppercase">
                        <a
                            className="cursor-pointer"
                            onClick={() => window.open("https://tally.so/r/w7Zp0z")}
                        >
                            For Builders
                        </a>
                    </li>
                    <li className="border-b border-gray-400 my-8 uppercase">
                        <a
                            className="cursor-pointer"
                            onClick={() => window.open("https://tally.so/r/w4q7er")}
                        >
                            For Organizers
                        </a>
                    </li>
                    <li className="border-b border-gray-400 my-8 uppercase">
                        <a
                            className="cursor-pointer"
                            onClick={() => window.open(
                                "https://bento.me/hackculture?fbclid=PAZXh0bgNhZW0CMTEAAaZ2G6RoLRg3D1yV6wZkOxZtfT3W2z5HO-Zt6qXQ-HXmDC6dtcH4Q3jAF-4_aem_2znBlczL_lVpW57ZFdtY4Q"
                            )}
                        >
                            Join Community
                        </a>
                    </li>
                </ul>
            </div>
            <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1000000000;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
        </div>
    );
};

export default MobileNav;
