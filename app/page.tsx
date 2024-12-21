import Byhazel from "@/components/home/Byhazel";
import FindaBoutique from "@/components/home/FindaBoutique";
import HazelTitle from "@/components/home/HazelTitle";
import HeroSectionslider from "@/components/home/HeroSectionslider";
import JointheClub from "@/components/home/JointheClub";
import PackagingEveryDetails from "@/components/home/PackagingEveryDetails";
import TimelessElegant from "@/components/home/TimelessElegant";

export const metadata = {
  title: "Hazel Fashion Store",
  description: "B2B and B2C eCommerce platform",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-USA",
    },
  },
  openGraph: {
    images: "/opengraph-image.jpg",
  },
};

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSectionslider />
      <TimelessElegant />
      <FindaBoutique />
      <PackagingEveryDetails />
      <Byhazel />
      <JointheClub />
      <HazelTitle />
    </div>
  );
}
