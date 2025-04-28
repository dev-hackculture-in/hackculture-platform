const Community = () => {
    return (
        <div className="container p-8 md:p-24 text-center md:text-left" >
            <h1 className="font-semibold text-4xl md:text-8xl uppercase text-primary-foreground">Our</h1>
            <div className="flex flex-col md:flex-row items-center">
                <h2 className="font-semibold text-4xl md:text-8xl uppercase text-primary-foreground">Partners</h2>
                <button
              className="bg-primary-foreground text-white md:max-w-min whitespace-nowrap px-8 py-3 rounded-[10px] font-bold text-2xl md:mx-16"
              onClick={() => window.open("https://tally.so/r/w7Zp0z")}
            >
              Partner with Us
            </button>
            </div>

            <div className="grid grid-cols-3 gap-4 md:grid-cols-5 py-8">
                {Array.from({ length: 10 }, (_, i) => (
                    <div className="relative" key={i}>
          {/* Shadow Layer */}
          <div className="absolute top-2 left-2 w-full h-full bg-gray-800 rounded-3xl"></div>
          
          {/* Main Card */}
          <div className="relative bg-white w-full h-full rounded-3xl border-2 border-gray-200 p-8 flex flex-col items-center justify-center">
            {/* GitHub Logo */}
            <div className=" mb-4">
              <img src={`/community/${i+1}.png`} />
            </div>
          </div>
        </div>
                ))}
            </div>
        </div>
    );
};

export default Community;
