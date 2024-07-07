import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

const Logos = () => {
    return (
        <div className="py-4 bg-background">
            <Carousel
                opts={{
                    loop: true,
                }}
                plugins={[AutoScroll({ playOnInit: true })]}
            >
                <CarouselContent>
                    {Array.from({ length: 7 }).map((_, index) => (
                        <CarouselItem
                            key={index}
                            className="basis-1/2 md:basis-1/4"
                        >
                            <div className="flex justify-center items-center h-24">
                                <img src={`/logos/logo-${index + 1}.png`} />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
};

export default Logos;
