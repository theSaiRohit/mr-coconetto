import AboutDesc from "./about-desc";
import AboutFaq from "./about-faq";
import AboutMain from "./about-main";
// import AboutTestimonials from "./about-testimonials";
import Team from "./team";

export default function AboutContainer() {
  return (
    <>
      <AboutMain />
      <AboutDesc />
      <Team />
      {/* <AboutTestimonials /> */}
      <AboutFaq />
    </>
  );
}
