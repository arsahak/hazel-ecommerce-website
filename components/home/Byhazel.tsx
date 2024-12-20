import Image from "next/image";
import HomeProductSlider from "../shared/HomeProductSilder";

const Byhazel = () => {
  const images = [
    "/assets/home/image-one.jpg",
    "/assets/home/image-two.jpg",
    "/assets/home/image-three.jpg",
    "/assets/home/image-four.jpg",
  ];
  return (
    <div className="bg-[#f2e3ec30] ">
      <div className="container py-10 md:py-20">
        <div className="font-aviano-regular ">
          <div className="">
            <h2 className="text-4xl font-semibold uppercase ">@byhazel</h2>
            <h2 className="text-xl font-semibold mt-3 uppercase ">
              {` If you weare’em, flaunt’em. Remember to tag us to get featured.
              That’s @BYHAZEL`}
            </h2>
          </div>
          <h2 className="text-xl font-normal mt-6 font-outfit-sans">
            Filter by category
          </h2>
          <div className="flex items-center space-x-3 my-6 font-outfit-sans">
            <button className="bg-white border border-black text-lg rounded pl-4 py-2 placeholder-gray-600  outline-none hover:bg-[#9B8573] hover:text-white px-4 hover:border-[#9B8573]">
              All
            </button>
            <button className="bg-white border border-black text-lg rounded pl-4 py-2 placeholder-gray-600  outline-none hover:bg-[#9B8573] hover:text-white px-4 hover:border-[#9B8573]">
              Selvage/Dry to worn
            </button>
            <button className="bg-white border border-black text-lg rounded pl-4 py-2 placeholder-gray-600  outline-none hover:bg-[#9B8573] hover:text-white px-4 hover:border-[#9B8573]">
              Women
            </button>
            <button className="bg-white border border-black text-lg rounded pl-4 py-2 placeholder-gray-600  outline-none hover:bg-[#9B8573] hover:text-white px-4 capitalize hover:border-[#9B8573]">
              Worn-ins
            </button>
          </div>
        </div>
        <div className="flex space-x-6">
          <div className="w-[32%]">
            <HomeProductSlider />
          </div>
          <div className="w-[67%] ">
            <div className="grid grid-cols-2 items-start gap-6">
              <div className="">
                <Image
                  className="w-full h-auto transition-all duration-700 ease-in-out"
                  width={1000}
                  height={1000}
                  src={"/assets/home/image-one.jpg"}
                  alt={`Gallery Image}`}
                  priority
                  quality={100}
                />
              </div>
              <div className="">
                <Image
                  className="w-full h-auto transition-all duration-700 ease-in-out"
                  width={1000}
                  height={1000}
                  src={"/assets/home/image-two.jpg"}
                  alt={`Gallery Image}`}
                  priority
                  quality={100}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 items-start gap-6 mt-6">
              <div className="-mt-20">
                <Image
                  className="w-full h-auto transition-all duration-700 ease-in-out"
                  width={1000}
                  height={1000}
                  src={"/assets/home/image-three.jpg"}
                  alt={`Gallery Image}`}
                  priority
                  quality={100}
                />
              </div>
              <div className="">
                <Image
                  className="w-full h-auto transition-all duration-700 ease-in-out"
                  width={1000}
                  height={1000}
                  src={"/assets/home/image-four.jpg"}
                  alt={`Gallery Image}`}
                  priority
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Byhazel;
