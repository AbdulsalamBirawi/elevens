import { Button } from "../src/components/UI/atoms";
import {
  AboutUsSection,
  ChooseUsSection,
  ContactInfo,
  Footer,
  GallerySection,
  HeroSection,
  Navbar,
} from "../src/components/UI/organisms";

export default function Home() {
  return (
    <div className=" h-[200vh] ">
      <Navbar solid={false} />
      <HeroSection />
      <AboutUsSection />
      <GallerySection />
      <ChooseUsSection />
      <ContactInfo />
      <Footer />
    </div>
  );
}
