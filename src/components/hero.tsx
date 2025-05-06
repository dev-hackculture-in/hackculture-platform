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
              A platform to source the  
              </p>
              <p className=" text-md md:text-2xl leading-[1.5]">
              right solutions & talent for the
              </p>
              <p className=" text-md md:text-2xl leading-[1.5]">
               most pressing problems of your organization
              </p>
            </div>

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-16 max-w-4xl mx-auto p-6">
            <div className="flex items-center justify-start">
              <div className="relative w-56 md:w-64 pt-4 pb-6">
                <div className="absolute bottom-0 right-0 h-3/6 w-full rounded-3xl border-2 border-black -translate-y-2 -translate-x-4"></div>

                <div className="relative z-10 rounded-3xl bg-primary-foreground p-4 md:p-6">
                  

                  {/* Text content */}
                  <div className="space-y-6">
                    <p className="text-xl md:text-3xl font-bold text-white">For <br />Organizers</p>

                    <hr />

                    <h2 className="text-lg md:text-2xl text-white">Companies,<br/> Universities &<br/> Communities
                    </h2>

                    <button className="bg-white text-primary-foreground py-1 md:py-3 px-6 rounded-lg w-full font-bold" onClick={() => window.open("https://tally.so/r/w4q7er")}>
                    Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <div className="relative w-56 md:w-64 pt-4 pb-6">
                {/* Shadow element - positioned behind the card */}
                <div className="absolute bottom-0 right-0 h-3/6 w-full rounded-3xl bg-black -translate-y-2 -translate-x-4"></div>

                {/* Main card */}
                <div className="relative z-10 rounded-3xl bg-secondary-foreground p-4 md:p-6">
                  {/* Top circles */}
                  

                  {/* Text content */}
                  <div className="space-y-6">
                    <p className="text-xl md:text-3xl font-bold">For <br /> Builders</p>

                    <hr className="border-black"/>

                    <h2 className="text-lg md:text-2xl">Students,<br/> Startups &<br/> Innovators
                    </h2>

                    <button className="bg-black text-white py-1 md:py-3 px-6 rounded-lg w-full font-bold" onClick={() => window.open("https://tally.so/r/w7Zp0z")}>
                      Build Now
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
