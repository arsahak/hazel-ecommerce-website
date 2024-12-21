import Byhazel from "@/components/home/Byhazel";
import FindaBoutique from "@/components/home/FindaBoutique";
import HazelTitle from "@/components/home/HazelTitle";
import HeroSectionslider from "@/components/home/HeroSectionslider";
import JointheClub from "@/components/home/JointheClub";
import PackagingEveryDetails from "@/components/home/PackagingEveryDetails";
import TimelessElegant from "@/components/home/TimelessElegant";

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
