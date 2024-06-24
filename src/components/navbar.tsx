import { Icons } from "./icons";

const Navbar = () => {
    return (
        <div className="h-24 flex items-center justify-between container">
            <Icons.logo />

            <div className="text-muted flex justify-between gap-16 items-center font-medium text-xl">
                <a className="cursor-pointer">Sponsor Events</a>
                <a className="cursor-pointer">About</a>
            </div>

            <div>
                <button className="border border-primary rounded-[10px] px-8 py-3">
                    Join Community
                </button>
            </div>
        </div>
    );
};

export default Navbar;
