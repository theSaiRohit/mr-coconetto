import AboutDesc from "./about-desc";
import AboutFaq from "./about-faq";
import { AboutProps } from "./about-interface";
import AboutMain from "./about-main";
// import AboutTestimonials from "./about-testimonials";
import Team from "./team";

export default function AboutContainer({ data }: { data: AboutProps }) {
  const { founders } = data;
  const { aboutData } = data;
  return (
    <>
      <AboutMain url={aboutData[0]?.backgroundImg.url ?? ""} />
      <AboutDesc
        desc={[
          aboutData[0]?.aboutDescription ?? "",
          aboutData[0]?.descriptionImg.url ?? "",
        ]}
      />
      <Team teamData={founders} />
      {/* <AboutTestimonials /> */}
      <AboutFaq collection={aboutData[0]?.faqsCollection.items ?? []} />
    </>
  );
}
