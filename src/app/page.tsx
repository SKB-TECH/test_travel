import { HotelConatiner, Hero, SecondSection } from "@/components";

const MyComponent = async () => {
    return (
        <section className={"flex flex-col justify-between w-full gap-24 z-0"}>
            <Hero />
            <SecondSection />
            <HotelConatiner />
        </section>
    );
};

export default MyComponent;
