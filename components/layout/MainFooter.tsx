import Link from "next/link";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";

const footerData = [
  {
    title: "Explore Hazel.com",
    list: [
      { subTitle: "Ready-To-Wear", slug: "ready-to-wear" },
      { subTitle: "Cashmere", slug: "cashmere" },
      { subTitle: "The Classics", slug: "the-classics" },
      { subTitle: "Iconic Signatures", slug: "iconic-signatures" },
      { subTitle: "New Arrivals", slug: "new-arrivals" },
      { subTitle: "Next Up", slug: "next-up" },
      { subTitle: "Always At HAZEL", slug: "always-at-hazel" },
      { subTitle: "Better Choice", slug: "better-choice" },
    ],
  },
  {
    title: "Online Services",
    list: [
      { subTitle: "Help", slug: "help" },
      { subTitle: "Shipping And Delivery", slug: "shipping-and-delivery" },
      { subTitle: "Orders And Returns", slug: "orders-and-returns" },
      { subTitle: "Size Guide", slug: "size-guide" },
      { subTitle: "Care Guide", slug: "care-guide" },
      { subTitle: "Magazine", slug: "magazine" },
      { subTitle: "Your Favourites", slug: "your-favourites" },
      { subTitle: "Gift Card", slug: "gift-card" },
    ],
  },
  {
    title: "Boutique Services",
    list: [
      { subTitle: "Boutique Services", slug: "boutique-services" },
      { subTitle: "Find A Boutique", slug: "find-a-boutique" },
      { subTitle: "Book An Appointment", slug: "book-an-appointment" },
      { subTitle: "Become A Retailer", slug: "become-a-retailer" },
      { subTitle: "Corporate Enquiries", slug: "corporate-enquiries" },
      { subTitle: "External Link", slug: "external-link" },
    ],
  },
  {
    title: "The House of Hazel",
    list: [
      { subTitle: "About Us", slug: "about-us" },
      { subTitle: "Careers", slug: "careers" },
      { subTitle: "Legal", slug: "legal" },
      { subTitle: "Vision", slug: "vision" },
      { subTitle: "Contact Us", slug: "contact-us" },
    ],
  },
];

const MainFooter = () => {
  return (
    <div className="bg-[#E6E5E0]">
      <div className="container py-10 md:py-20">
        <div className="flex justify-between items-start">
          {footerData?.map((section, index) => (
            <div key={index} className="">
              <h3 className="text-2xl font-semibold mb-5 uppercase font-aviano-regular">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.list.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={"/"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        "font-outfit-sans font-normal text-lg hover:underline pb-1"
                      }
                    >
                      {item.subTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between w-full space-x-10 mt-6">
          <hr className="h-px my-8 bg-gray-400 border-0 w-[40%]" />
          <div className="flex items-center justify-between space-x-2 w-[10%]">
            <FaXTwitter className="size-5 font-black" />
            <GrInstagram className="size-5 font-black" />
            <FaLinkedin className="size-5 font-black" />
            <FaFacebookSquare className="size-5 font-black" />
          </div>
          <hr className="h-px my-8 bg-gray-400 border-0 w-[40%]" />
        </div>
        <div className="flex items-center justify-between font-aviano-regular uppercase">
          <h2>COPYRIGHT © HAZEL Norway. ALL RIGHTS RESERVED.</h2>
          <div className="flex items-center justify-between space-x-5">
            <Link href={"/privacy-policy"} className="hover:underline">
              <h2>Privacy Policy</h2>
            </Link>
            <Link href={"/cookie-policy"} className="hover:underline">
              <h2>Cookie Policy</h2>
            </Link>
            <Link href={"/terms-and-conditions"} className="hover:underline">
              <h2>Terms and Conditions</h2>
            </Link>
          </div>
        </div>
        <div className="font-aviano-regular uppercase text-center mt-24">
          <h2 className="text-2xl font-semibold mb-3">DISCOVER NExT</h2>
          <h2 className="text-4xl font-semibold">Explore Collect</h2>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
