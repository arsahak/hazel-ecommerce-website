import Image from "next/image";

const HazelTitle = () => {
  return (
    <div className="bg-[#f2e3ec30] py-8">
      <div className="container ">
        <div className="relative h-[480px] md:h-[250px] flex justify-center items-center">
          {/* Background Image */}
          <Image
            src="/assets/home/title-bg.png"
            alt="home-banner"
            width={100}
            height={100}
            className="absolute inset-0 z-10 w-full h-full object-contain" // Ensures full image visibility
          />

          {/* Title Image */}
          <div className="relative z-20 flex justify-center items-center">
            <Image
              src="/assets/home/hazel-title.png"
              alt="home-title"
              priority
              width={500}
              height={400}
              className="w-[700px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HazelTitle;
