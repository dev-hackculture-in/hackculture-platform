const ScoutHero = () => {
  return (
    <div className="md:container px-3 relative py-10 md:py-16">
      <div className="flex flex-col gap-y-32">
        <div className="flex flex-col justify-center items-center text-center">
          <div className="bg-gradient-to-r from-primary-foreground to-black text-white py-2 px-4 rounded-full inline-block mb-6">
            <p className="text-xs md:text-base font-medium">
              Limited Early Access - Innovation Leaders Only ⚡️
            </p>
          </div>
          <h1 className="font-bold text-3xl md:text-6xl tracking-tight">
            Your AI Copilot for{" "}
          </h1>
          <h1 className="font-bold text-3xl md:text-6xl tracking-tight">
            Innovation Management
          </h1>
          <div>
            <div className="py-4 md:py-8">
              <p className=" text-sm md:text-2xl leading-[1.5] max-w-4xl">
                Discover, connect, and collaborate with breakthrough startups/
                scaleups/ academia using AI agents. From intelligent scouting to
                automated outreach - revolutionize how you find innovation
                solutions.
              </p>
            </div>
            <div>
              <button
                className="bg-black text-white py-3 md:py-4 px-8 md:px-12 rounded-lg font-bold text-lg md:text-xl hover:bg-gray-800 transition-colors"
                onClick={() => window.open("https://tally.so/r/wzR16a")}
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="font-bold text-3xl md:text-6xl tracking-tight">
            Why Innovation Leaders
          </h1>
          <h1 className="font-bold text-3xl md:text-6xl tracking-tight">
            Choose HackCulture Scout
          </h1>
          <div>
            <div className="py-4 md:py-8 text-center flex justify-center items-center">
              <p className=" text-sm md:text-2xl leading-[1.5] max-w-2xl">
                From startup discovery to partnership success - powered by
                intelligent AI agents
              </p>
            </div>
            <div>
              <div className="grid grid-cols-1 gap-12 md:grid-cols-3 p-8">
                {[
                  {
                    title: "AI-Powered Startup Scouting",
                    height: "h-60",
                    text: "black",
                    desc: "Our AI agents continuously scan global startup ecosystems, identifying companies that match your specific innovation needs and strategic objectives.",
                    circle: false,
                    bg: "accent",
                  },
                  {
                    title: "Automated Intelligent Outreach",
                    height: "h-60",
                    text: "white",
                    desc: "Our AI agent scouts and scrap relevant contacts and do the automated outreach for the solution providers.",
                    circle: false,
                    bg: "primary-foreground",
                  },
                  {
                    title: "Innovation Management Hub",
                    height: "h-60",
                    text: "black",
                    desc: "Track partnerships, manage relationships, and measure innovation ROI — all in one intelligent platform designed for innovation leaders.",
                    circle: false,
                    bg: "secondary-foreground",
                  },
                ].map((box, i) => (
                  <div
                    key={i}
                    className={`${box.height} bg-${box.bg} text-${box.text} rounded-xl p-6 relative flex flex-col justify-between`}
                  >
                    <div className="flex flex-col">
                      <h1 className="text-2xl md:text-3xl font-bold mb-4 leading-tight pr-12">
                        {box.title}
                      </h1>
                      <p className="text-sm md:text-base font-light leading-relaxed">
                        {box.desc}
                      </p>
                    </div>

                    {/* Arrow Icon */}
                    <div className="absolute top-6 right-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoutHero;
