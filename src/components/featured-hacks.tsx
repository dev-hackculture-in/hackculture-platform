import { useRef } from "react";

interface Hackathon {
    id: number;
    title: string;
    date: string;
    location: string;
    imageUrl: string;
    mode: string;
    registrationUrl: string;
}

const hackathons: Hackathon[] = [
    {
        id: 1,
        title: 'The Lam Research Challenge 2025',
        date: 'Jul 7th - Aug 10th',
        location: 'Bangalore',
        imageUrl: '/featured/lrc.jpg', // We will use a simple gray box for now
        mode: 'Hybrid',
        registrationUrl: 'https://tinyurl.com/LAMHCC',
    },
    {
        id: 2,
        title: 'HSBC Hiring Hackathon 2025',
        date: 'Jul 27th',
        location: 'Hyderabad',
        imageUrl: '/featured/hsbc.jpg',
        mode: 'Offline',
        registrationUrl: 'https://tinyurl.com/TUHSBC',
    },
    {
        id: 3,
        title: 'Ai for good hackathon 2025',
        date: 'Jul 7th - Aug 4th',
        location: 'Hyderabad',
        imageUrl: '/featured/aifg.jpg',
        mode: 'Hybrid',
        registrationUrl: 'https://tinyurl.com/TAI4G',
    },
    {
        id: 4,
        title: 'She Builds Hackathon',
        date: 'Aug 1st',
        location: 'Greater Noida',
        imageUrl: '/featured/sheb.jpg',
        mode: 'Offline',
        registrationUrl: 'https://shebuilds.hackculture.in/',
    },
];

const HackathonCard = ({ hackathon }: { hackathon: Hackathon }) => {
    return (
        <div className="relative h-full">
            <div className="absolute top-2 left-2 w-full h-full bg-black rounded-2xl"></div>
            <div className="relative bg-[#4D44F8] rounded-2xl p-4 text-white flex flex-col h-full">
                <div className="rounded-lg h-52 mb-4 overflow-hidden">
                    <img src={hackathon.imageUrl} alt={hackathon.title} className="w-full h-full object-cover object-top" />
                </div>
                <div className="flex justify-between items-center text-sm mb-2">
                    <span>{hackathon.mode}</span>
                    <span>{hackathon.date}</span>
                </div>
                <hr className="border-gray-400" />
                <h3 className="text-2xl font-bold my-2">{hackathon.title}</h3>
                <div className="flex-grow" />
                <div className="flex justify-between items-center mt-4">
                    <div>
                        <span className="text-sm">{hackathon.location}</span>
                    </div>
                    <a href={hackathon.registrationUrl} target="_blank" rel="noopener noreferrer">
                        <button className="bg-white text-[#4D44F8] font-bold py-2 px-6 rounded-lg">
                            Know More
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

const FeaturedHacks = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 320; // Corresponds to w-80
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="py-12">
            <div className="container mx-auto px-4 relative">
                <h2 className="text-5xl font-bold mb-8 text-center ">
                    Featured Hackathons
                </h2>
                <div
                    ref={scrollContainerRef}
                    className="grid grid-cols-1 justify-items-center gap-8 md:flex md:overflow-x-auto md:space-x-8 md:pb-4 scroll-smooth"
                >
                    {hackathons.map((hackathon) => (
                        <div key={hackathon.id} className="w-11/12 md:w-80 md:flex-shrink-0">
                            <HackathonCard hackathon={hackathon} />
                        </div>
                    ))}
                </div>
                <div className="hidden md:block">
                    <button
                        onClick={() => scroll('left')}
                        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#4D44F8] text-white rounded-full p-2 z-10"
                        aria-label="Scroll left"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#4D44F8] text-white rounded-full p-2 z-10"
                        aria-label="Scroll right"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedHacks;
