import Image from "next/image";
import { BsArrowRight, BsSendArrowUpFill, BsTelephone } from "react-icons/bs";
import { IoMailUnreadOutline } from "react-icons/io5";

const FindaBoutique = () => {
  return (
    <div className="bg-white ">
      <div className="container py-10 md:py-20">
        <div className="flex flex-col-reverse md:flex-row items-center md:space-x-6">
          <div className="w-[100%] md:w-[35%]">
            <div className="font-outfit-sans">
              <h2 className="text-3xl md:text-5xl font-bold uppercase leading-[30px] md:leading-[50px] tracking-wider text-center md:text-left mt-4 md:mt-0">
                FINDA
                <br /> BOUTIQUE
              </h2>
            </div>
            <div className="font-aviano-regular mt-8 text-center md:text-left">
              <h2 className="text-4xl font-semibold uppercase ">Showroom</h2>
              <h2 className="text-xl font-semibold mt-3 ">
                bygboy all, no-2548 oslo
              </h2>
            </div>
            <div className="flex items-center space-x-2 mt-8 justify-center md:justify-start">
              <h2 className="text-xl font-semibold font-aviano-regular  uppercase">
                Show on Google maps
              </h2>
              <BsSendArrowUpFill className="text-black size-5 cursor-pointer hover:text-gray-800" />
            </div>
            <h2 className="text-xl font-semibold font-aviano-regular  uppercase  mt-5 text-center md:text-left">
              Opening hours
            </h2>

            <div className="flex justify-center md:justify-start">
              <div className="relative overflow-x-auto mt-2">
                <table className="w-full text-lg text-left rtl:text-right text-black ">
                  <tbody>
                    <tr className="">
                      <td className="pr-20 py-1">Monday - Friday</td>
                      <td className=" py-1">10am - 7pm</td>
                    </tr>
                    <tr className="">
                      <td className="py-1">Saturday</td>
                      <td className="py-1">10am - 7pm</td>
                    </tr>
                    <tr className="">
                      <td className="py-1">Sunday</td>
                      <td className="py-1">Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <h2 className="text-xl font-semibold font-aviano-regular  uppercase  mt-5 text-center md:text-left">
              Contact us
            </h2>
            <div className="flex justify-center md:justify-start">
              <div className="flex items-center  space-x-16 mt-4">
                <div className="flex items-center space-x-2 cursor-pointer">
                  <BsTelephone className="size-5 text-black" />
                  <p className="font-aviano-regular">Phone</p>
                </div>
                <div className="flex items-center space-x-2 cursor-pointer">
                  <IoMailUnreadOutline className="size-6 text-black" />
                  <p className="font-aviano-regular">Email</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%] md:w-[65%] relative md:top-32">
            <div className="flex items-center justify-center md:justify-end md:space-x-3 mb-5 cursor-pointer">
              <h2 className="text-xl font-semibold font-aviano-regular  uppercase underline-offset-8 underline">
                Explore all Boutiques
              </h2>
              <BsArrowRight className="size-6" />
            </div>

            <Image
              className="w-full h-auto transition-all duration-700 ease-in-out"
              width={1000}
              height={1000}
              src={
                "/assets/home/abstract-store-with-futuristic-concept-architecture.jpg"
              }
              alt={`Gallery Image}`}
              priority
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindaBoutique;
