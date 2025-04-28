const Outcomes = () => {
  return (
    <div className="container p-8 md:p-24 text-center md:text-left" id="about">
      <div className="flex flex-col gap-16 md:gap-16">
        <div>
          <h1 className="font-semibold text-4xl md:text-8xl uppercase">
            Outcomes
          </h1>
          <h2 className="font-semibold text-2xl md:text-4xl uppercase">
            that we drive!
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
          {[
            {
              title: "Idea sourcing",
              width: "md:col-span-3",
              height: "h-60",
              text: "black",
              desc: "Discover and refine high-impact use case and Source right ideas from our ecosystem",
              circle: false,
              bg: "accent",
            },
            {
              title: "Startup Sourcing",
              width: "md:col-span-2",
              height: "h-60",
              text: "black",
              desc: "Identify relevant startups/solution provider",
              circle: false,
              bg: "secondary-foreground",
            },
            {
              title: "Hackathons",
              width: "md:col-span-2",
              height: "h-60",
              text: "white",
              desc: "Conduct End-to-End hackathons to drive innovation and engage with best talents",
              circle: false,
              bg: "primary-foreground",
            },
            {
              title: "Solutions Co-creation",
              width: "md:col-span-3",
              height: "h-60",
              text: "white",
              desc: "Execute rapid proof-of-concepts (PoCs) &  Match startups to your specific needs",
              circle: false,
              bg: "black",
            },
          ].map((box, i) => (
            <div
              key={i}
              className={`${box.width} ${box.height} bg-${box.bg} text-${box.text} rounded-xl p-8 relative`}
            >
                <div className="flex flex-col">
            <h1 className="text-4xl font-bold mb-4 max-w-56">{box.title}</h1>
            <p className="text-2xl font-light">{box.desc}</p>
          </div>
          
          {/* Arrow Icon */}
          <div className="absolute top-6 right-6">
        {(i === 1 || i===2 )&& <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
        </svg>}

            {(i === 3 || i===0) && <div className="flex mb-6">
      <div className={`border border-${box.text} rounded-full w-10 h-10`}></div>
      <div className={`border border-${box.text} rounded-full w-10 h-10 -ml-2`}></div>
      <div className={`border border-${box.text} rounded-full w-10 h-10 -ml-2`}></div>
      <div className={`bg-${box.text} text-${box.bg} rounded-full w-10 h-10 -ml-2 flex items-center justify-center`}>
        <span className="text-primary-foreground font-bold">
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-${box.bg}`}>
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
        </span>
      </div>
    </div>}
          </div>

          

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Outcomes;
