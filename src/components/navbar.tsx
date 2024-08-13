import { Icons } from "./icons";
import MobileNav from "./mobile-nav";

const Navbar = () => {
    return (
        <div className="h-24 flex items-center justify-between pr-8 max-w-[1400px] mx-auto">
            <a href="/">
                <Icons.logo className="cursor-pointer" />
            </a>

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
                <button
                    className="border border-primary rounded-[10px] px-8 py-3"
                    onClick={() =>
                        window.open(
                            "https://bento.me/hackculture?fbclid=PAZXh0bgNhZW0CMTEAAaZ2G6RoLRg3D1yV6wZkOxZtfT3W2z5HO-Zt6qXQ-HXmDC6dtcH4Q3jAF-4_aem_2znBlczL_lVpW57ZFdtY4Q"
                        )
                    }
                >
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
