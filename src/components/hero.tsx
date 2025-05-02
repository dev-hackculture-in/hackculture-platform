import { Icons } from "./icons";

const Hero = () => {
  return (
    <div className="md:container px-5 relative py-10 md:py-16">
      <div className="flex flex-col md:flex-row">
        <div className="md:px-24 text-left">
          <div className="max-w-3xl flex flex-col gap-8">
            <div className="flex flex-col whitespace-nowrap">
              <h1 className="font-bold text-4xl md:text-6xl tracking-tight">
                Fastrack Open{" "}
              </h1>
              <h1 className="font-bold text-4xl md:text-6xl tracking-tight">
                Innovation Through{" "}
              </h1>
              <h1 className="font-bold text-4xl md:text-6xl tracking-tight text-primary-foreground">
                Hackathons
              </h1>
            </div>

            <div>
              <p className=" text-md md:text-2xl leading-[1.5]">
                Solve the Right use cases with Right 
              </p>
              <p className=" text-md md:text-2xl leading-[1.5]">
              Builders across the globe, collaborating 
              </p>
              <p className=" text-md md:text-2xl leading-[1.5]">
              to innovate and make a real impact
              </p>
            </div>

            <button
              className="bg-primary-foreground hidden md:block text-white md:max-w-min whitespace-nowrap px-8 py-3 rounded-[10px] font-bold text-2xl"
              onClick={() => window.open("https://tally.so/r/w7Zp0z")}
            >
              Get in Touch
            </button>

            <div className="flex py-4 gap-6">
              <div className="flex flex-col gap-4">
                <Icons.code className="size-12" />
                <div>
                  <h1 className="font-extrabold text-2xl md:text-4xl">20+</h1>
                  <h3 className="font-medium text-md">Hackathons</h3>
                </div>
              </div>
              <div className="mx-1 border-r-2 border-black"></div>
              <div className="flex flex-col gap-4">
                <Icons.people className="size-12" />
                <div>
                  <h1 className="font-extrabold text-2xl md:text-4xl">3000+</h1>
                  <h3 className="font-medium text-md">Builders</h3>
                </div>
              </div>
              <div className="mx-1 border-r-2 border-black"></div>
              <div className="flex flex-col gap-4">
                <Icons.bulb className="size-12" />
                <div>
                  <h1 className="font-extrabold text-2xl md:text-4xl">1000+</h1>
                  <h3 className="font-medium text-md">Ideas</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-x-8 md:gap-x-16 max-w-4xl mx-auto">
            <div className="flex items-center justify-center">
              <div className="relative w-56 md:w-64 pt-4 pb-6">
                <div className="absolute bottom-0 right-0 h-3/6 w-full rounded-3xl border-2 border-black -translate-y-2 -translate-x-4"></div>

                <div className="relative z-10 rounded-3xl bg-primary-foreground p-4 md:p-6">
                  <div className="flex mb-6">
                    <div className="border border-white rounded-full w-10 h-10"></div>
                    <div className="border border-white rounded-full w-10 h-10 -ml-2"></div>
                    <div className="border border-white rounded-full w-10 h-10 -ml-2"></div>
                    <div className="bg-white rounded-full w-10 h-10 -ml-2 flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">
                        01
                      </span>
                    </div>
                  </div>

                  {/* Pill */}
                  <div className="bg-white rounded-full w-16 h-6 mb-2 md:mb-4"></div>

                  {/* Text content */}
                  <div className="space-y-6">
                    <p className="text-lg md:text-2xl text-white">For Corporates</p>

                    <h2 className="text-xl md:text-3xl font-bold text-white">Build with us</h2>

                    <button className="bg-white text-primary-foreground py-1 md:py-3 px-6 rounded-lg w-full font-bold">
                    Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div className="relative w-44 md:w-64 pt-4 pb-6">
                {/* Shadow element - positioned behind the card */}
                <div className="absolute bottom-0 right-0 h-3/6 w-full rounded-3xl bg-black -translate-y-2 -translate-x-4"></div>

                {/* Main card */}
                <div className="relative z-10 rounded-3xl bg-secondary-foreground p-4 md:p-6">
                  {/* Top circles */}
                  <div className="flex mb-6">
                    <div className="border border-black rounded-full w-10 h-10"></div>
                    <div className="border border-black rounded-full w-10 h-10 -ml-2"></div>
                    <div className="border border-black rounded-full w-10 h-10 -ml-2"></div>
                    <div className="bg-black rounded-full w-10 h-10 -ml-2 flex items-center justify-center">
                      <span className="text-secondary-foreground font-bold">
                        02
                      </span>
                    </div>
                  </div>

                  {/* Pill */}
                  <div className="bg-black rounded-full w-16 h-6 mb-2 md:mb-4"></div>

                  {/* Text content */}
                  <div className="space-y-6">
                    <p className="text-lg md:text-2xl">For Builders</p>

                    <h2 className="text-xl md:text-3xl font-bold">Find Use Cases</h2>

                    <button className="bg-black text-white py-1 md:py-3 px-6 rounded-lg w-full font-bold">
                      Build Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative w-44 md:w-64 pt-4 pb-6">
                <div className="absolute bottom-0 right-0 h-3/6 w-full rounded-3xl border-2 border-black -translate-y-2 -translate-x-4"></div>

                <div className="relative z-10 rounded-3xl bg-accent p-4 md:p-6">
                  <div className="flex mb-6">
                    <div className="border border-black rounded-full w-10 h-10"></div>
                    <div className="border border-black rounded-full w-10 h-10 -ml-2"></div>
                    <div className="border border-black rounded-full w-10 h-10 -ml-2"></div>
                    <div className="bg-black rounded-full w-10 h-10 -ml-2 flex items-center justify-center">
                      <span className="text-accent font-bold">
                        03
                      </span>
                    </div>
                  </div>

                  {/* Pill */}
                  <div className="bg-black rounded-full w-16 h-6 mb-2 md:mb-4"></div>

                  {/* Text content */}
                  <div className="space-y-6">
                    <p className="text-lg md:text-2xl text-black">For Universities</p>

                    <h2 className="text-xl md:text-3xl font-bold text-black">Partner for your hackathons</h2>

                    <button className="bg-black text-white py-1 md:py-3 px-6 rounded-lg w-full font-bold">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
