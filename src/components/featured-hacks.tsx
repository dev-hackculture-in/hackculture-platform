
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
        date: 'Jul 7 - Aug 1',
        location: 'Bangalore',
        imageUrl: '/featured/lrc.jpg', // We will use a simple gray box for now
        mode: 'Hybrid',
        registrationUrl: 'https://tinyurl.com/LAMHCC',
    },
    {
        id: 2,
        title: 'HSBC Hiring Hackathon 2025',
        date: 'Jul 7 - Aug 7',
        location: 'Hyderabad',
        imageUrl: '/featured/hsbc.jpg',
        mode: 'Hybrid',
        registrationUrl: 'https://tinyurl.com/TUHSBC',
    },
    {
        id: 3,
        title: 'Ai for good hackathon 2025',
        date: 'Jul 7 - Aug 4',
        location: 'Hyderabad',
        imageUrl: '/featured/aifg.jpg',
        mode: 'Hybrid',
        registrationUrl: 'https://tinyurl.com/TAI4G',
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
                            Register Now
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

const FeaturedHacks = () => {
    return (
        <div className="py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold mb-8 text-center ">
                    Featured Hackathons
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {hackathons.map((hackathon) => (
                        <HackathonCard key={hackathon.id} hackathon={hackathon} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedHacks;
