import { Link } from "react-router-dom";
import { Icons } from "./icons";
import MobileNav from "./mobile-nav";

const Navbar = () => {
    return (
        <div className="h-24 flex items-center justify-between px-4 max-w-[1400px] mx-auto">
            <a href="/">
                <Icons.logo className="cursor-pointer" />
            </a>

            <div className="hidden md:block w-full h-px bg-black mx-12" />

            <div className="hidden md:flex justify-between gap-16 items-center font-medium text-xl whitespace-nowrap">

                <Link
                    to="/scout"
                    className="cursor-pointer font-bold bg-gradient-to-r from-primary-foreground to-black bg-clip-text text-transparent"
                >
                    Scout
                </Link>

                <a
                    className="cursor-pointer"
                    onClick={() =>
                        window.open("https://tally.so/r/w7Zp0z")
                    }
                >
                    For Builders
                </a>
                <a
                    className="cursor-pointer"
                    onClick={() =>
                        window.open("https://tally.so/r/w4q7er")
                    }
                >
                    For Organizers
                </a>
                <a
                            className="cursor-pointer"
                            onClick={() =>
                                window.open(
                                    "https://bento.me/hackculture?fbclid=PAZXh0bgNhZW0CMTEAAaZ2G6RoLRg3D1yV6wZkOxZtfT3W2z5HO-Zt6qXQ-HXmDC6dtcH4Q3jAF-4_aem_2znBlczL_lVpW57ZFdtY4Q"
                                )
                            }
                        >
                            Join Community
                        </a>
            </div>

            {/* <div className="hidden md:block">
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
            </div> */}

            <div className="md:hidden">
                <MobileNav />
            </div>
        </div>
    );
};

export default Navbar;
