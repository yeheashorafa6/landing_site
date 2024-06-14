import About from "@/components/About/About";
import Brands from "@/components/Brands/Brands";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import News from "@/components/News/News";
import States from "@/components/States/States";
import Steps from "@/components/Steps/Steps";
import Testimonials from "@/components/Testimonials/Testimonials";
import Works from "@/components/Works/Works";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">

      {/* HERO SECTION */}
      <Hero/>
      {/* == HERO SECTION == */}

      {/* STEPS SECTION */}
      <Steps/>
      {/* == STEPS SECTION == */}

      {/* ABOUT SECTION */}
      <About/>
      {/* == ABOUT SECTION == */}

      {/* TESTIMONIALS SECTION */}
      <Testimonials/>
      {/* == TESTIMONIALS SECTION == */}

      {/* BRANDS SECTION */}
      <Brands/>
      {/* == BRANDS SECTION == */}

      {/* WORKS SECTION */}
      <Works/>
      {/* == WORKS SECTION == */}

      {/* STATES SECTION */}
      <States/>
      {/* == STATES SECTION == */}

      {/* NEWS SECTION */}
      <News/>
      {/* == NEWS SECTION == */}

       {/* CONTACT SECTION */}
       <Contact/>
      {/* == CONTACT SECTION == */}
    </div>
  );
}
