import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

const Footer = () => {
    return (
        <div className="w-full border-b  border-white bg-background text-white z-[100000] bg-black">
            <div className="flex flex-col-reverse p-6 gap-7 md:flex-row h-full items-center md:container justify-between">
                <div className="flex flex-row whitespace-nowrap items-center gap-3 md:gap-8 font-medium text-xs md:text-xl">
                    <a
                        href="https://bento.me/hackculture?fbclid=PAZXh0bgNhZW0CMTEAAaZ2G6RoLRg3D1yV6wZkOxZtfT3W2z5HO-Zt6qXQ-HXmDC6dtcH4Q3jAF-4_aem_2znBlczL_lVpW57ZFdtY4Q"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Join Community
                    </a>
                    <a
                        href="https://www.termsfeed.com/live/33515683-37c6-4f27-acd9-9ba55d07281b"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Privacy Policy
                    </a>
                    <a
                        href="https://tally.so/r/mYdgGd"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Organize Hackathon
                    </a>
                </div>
                <div className="flex items-center gap-4">
                    <a
                        href="https://www.linkedin.com/company/hackculture/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedInLogoIcon className="size-6" />
                    </a>
                    <a
                        href="https://www.instagram.com/hackculture.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <InstagramLogoIcon className="size-6" />
                    </a>
                    <a
                        href="https://x.com/Hack_Culture"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="x.png" className="size-6 scale-75" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
