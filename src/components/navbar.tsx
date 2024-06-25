import { Icons } from "./icons";

const Navbar = () => {
    return (
        <div className="h-24 flex items-center justify-between pr-8 max-w-[1400px] mx-auto">
            <Icons.logo />
            <div className="hidden md:flex text-muted justify-between gap-16 items-center font-medium text-xl">
                <a className="cursor-pointer">Sponsor Events</a>
                <a className="cursor-pointer">About</a>
            </div>

            <div className="hidden md:block">
                <button className="border border-primary rounded-[10px] px-8 py-3">
                    Join Community
                </button>
            </div>

            <div className="md:hidden">
                <Icons.menu className="size-8" />
            </div>
        </div>
    );
};

export default Navbar;
