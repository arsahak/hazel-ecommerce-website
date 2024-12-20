import Image from "next/image";

const TimelessElegant = () => {
  return (
    <div className="bg-white">
      <div className="container py-10 md:py-20">
        <div className="relative h-[480px] md:h-[450px] flex justify-center items-center">
          {/* Background Image */}
          <Image
            src="/assets/home/title-bg.png"
            alt="home-banner"
            width={100}
            height={100}
            className="absolute inset-0 z-10 w-full h-full object-contain"
          />

          {/* Title Image */}
          <div className="relative z-20 text-center font-outfit-sans uppercase ">
            <h2 className="text-7xl font-semibold text-gray-800 tracking-wide mt-8">
              TIMELESS
            </h2>
            <h2 className="text-9xl font-bold text-black  mt-2 -mb-8">
              ELEGANT
            </h2>
            <p
              className="text-[170px] font-extrabold text-transparent uppercase underline decoration-transparent"
              style={{
                WebkitTextStroke: "2px black", // Outline text
                WebkitTextFillColor: "transparent", // Transparent fill
                textDecoration: "underline", // Explicit underline
                textDecorationColor: "transparent", // Transparent underline color
                textUnderlineOffset: "5px", // Adjust underline position if needed
              }}
            >
              SOPHISTICATED
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelessElegant;
