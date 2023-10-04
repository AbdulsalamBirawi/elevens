import { Button } from "../src/components/UI/atoms";
import {
  AboutUsSection,
  GallerySection,
  HeroSection,
  Navbar,
} from "../src/components/UI/organisms";

export default function Home() {
  return (
    <div className=" h-[200vh] ">
      <HeroSection />
      <AboutUsSection />
      <GallerySection />
    </div>
  );
}
