import { Icons } from "./icons";
import MobileNav from "./mobile-nav";

const Navbar = () => {
    return (
        <div className="h-24 flex items-center justify-between pr-8 max-w-[1400px] mx-auto">
            <Icons.logo />
            <div className="hidden md:flex text-muted justify-between gap-16 items-center font-medium text-xl">
                <a
                    className="cursor-pointer"
                    onClick={() =>
                        document.getElementById("builders")?.scrollIntoView({
                            behavior: "smooth",
                        })
                    }
                >
                    For Builders
                </a>
                <a
                    className="cursor-pointer"
                    onClick={() =>
                        document.getElementById("organizers")?.scrollIntoView({
                            behavior: "smooth",
                        })
                    }
                >
                    For Organizers
                </a>
                <a
                    className="cursor-pointer"
                    onClick={() =>
                        document.getElementById("about")?.scrollIntoView({
                            behavior: "smooth",
                        })
                    }
                >
                    About
                </a>
            </div>

            <div className="hidden md:block">
                <button className="border border-primary rounded-[10px] px-8 py-3">
                    Join Community
                </button>
            </div>

            <div className="md:hidden">
                <MobileNav />
            </div>
        </div>
    );
};

export default Navbar;
