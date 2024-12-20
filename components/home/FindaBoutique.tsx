import Image from "next/image";
import { BsArrowRight, BsSendArrowUpFill, BsTelephone } from "react-icons/bs";
import { IoMailUnreadOutline } from "react-icons/io5";

const FindaBoutique = () => {
  return (
    <div className="bg-white ">
      <div className="container py-10 md:py-20">
        <div className="flex items-center space-x-6">
          <div className="w-[35%]">
            <div className="font-outfit-sans">
              <h2 className="text-5xl font-bold uppercase leading-[50px]">
                FINDA
                <br /> BOUTIQUE
              </h2>
            </div>
            <div className="font-aviano-regular mt-8">
              <h2 className="text-4xl font-semibold uppercase ">Showroom</h2>
              <h2 className="text-xl font-semibold mt-3 ">
                bygboy all, no-2548 oslo
              </h2>
            </div>
            <div className="flex items-center space-x-2 mt-8">
              <h2 className="text-xl font-semibold font-aviano-regular  uppercase">
                Show on Google maps
              </h2>
              <BsSendArrowUpFill className="text-black size-5" />
            </div>
            <h2 className="text-xl font-semibold font-aviano-regular  uppercase  mt-5">
              Opening hours
            </h2>

            <div className="relative overflow-x-auto mt-2">
              <table className="w-full text-lg text-left rtl:text-right text-black ">
                <tbody>
                  <tr className="">
                    <td className="py-1">Monday - Friday</td>
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
            <h2 className="text-xl font-semibold font-aviano-regular  uppercase  mt-5">
              Contact us
            </h2>
            <div className="flex items-center space-x-16 mt-4">
              <div className="flex items-center space-x-2">
                <BsTelephone className="size-5 text-black" />
                <p className="font-aviano-regular">Phone</p>
              </div>
              <div className="flex items-center space-x-2">
                <IoMailUnreadOutline className="size-6 text-black" />
                <p className="font-aviano-regular">Email</p>
              </div>
            </div>
          </div>
          <div className="w-[65%] relative top-32">
            <div className="flex items-center justify-end space-x-3 mb-5">
              <h2 className="text-xl font-semibold font-aviano-regular  uppercase">
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
