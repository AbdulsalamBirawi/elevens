import { Button } from "../src/components/UI/atoms";
import { MapComponent } from "../src/components/UI/molecules";
import {
  AboutUsSection,
  ChooseUsSection,
  ContactInfo,
  Footer,
  GallerySection,
  HeroSection,
  Navbar,
} from "../src/components/UI/organisms";
import Image from "next/image";
import Image2 from "../src/assets/Background-01-01.png";

export default function Home() {
  const data = [
    { id: 1, name: "Marker 1", latitude: 0, longitude: 0 },
    { id: 2, name: "Marker 2", latitude: 1, longitude: 1 },
    // Add more markers as needed
  ];
  return (
    <div className="relative  ">
      <div className="w-full h-full absolute z-0">
        <Image src={Image2} fill objectFit="cover" alt="a" />
      </div>
      <Navbar sectionId="contactUs" solid={false} />
      <HeroSection />
      <AboutUsSection />
      <GallerySection />
      <ChooseUsSection />
      <ContactInfo />
      <Footer />
    </div>
  );
}
