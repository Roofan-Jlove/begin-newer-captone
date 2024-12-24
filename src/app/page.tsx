import ChooseNpick from "@/components/ChooseNpick";
import Experience from "@/components/Experiance";
import FoodItems from "@/components/FoodItems";
import FoodyProduct from "@/components/FoodyProduct";
import Header from "@/components/Header";
import LandingHero from "@/components/LandingHero";
import MeetChef from "@/components/MeetChef";


export default function Home() {
  return (
    <main>
      <Header />      
      <LandingHero />      
      <FoodyProduct />
      <FoodItems />
      <Experience />
      <ChooseNpick />
      <MeetChef />
    </main>
    
  );
}
