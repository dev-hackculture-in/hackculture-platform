import BannerContent from "./svgs/banner-content";

const Banner = () => {
    return (
        <div className="w-full bg-background relative object-contain">
            {/* <BannerSvg className="" /> */}
            {/* <div className="flex w-full items-center absolute top-1/2 rotate-3">
                <Carousel
                    plugins={[
                        Autoplay({
                            delay: 2000,
                        }),
                    ]}
                >
                    <CarouselContent className="">
                        <CarouselItem className="basis-1/3">
                            {" "}
                            <div className="flex justify-center items-center">
                                <BannerSvgs.innovate className="" />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="basis-1/3">
                            <div className="">
                                <BannerSvgs.shape1 className="" />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="basis-1/3">
                            <div className="">
                                <BannerSvgs.build />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="basis-1/3">
                            <div className="0">
                                <BannerSvgs.shape2 className="" />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="basis-1/3">
                            <div className="2">
                                <BannerSvgs.shape3 />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="basis-1/3">
                            <div className="6">
                                <BannerSvgs.solve />
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div> */}
            <BannerContent />
        </div>
    );
};

export default Banner;
