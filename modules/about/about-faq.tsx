import { useCallback, useRef } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { faqData } from "./about-data";

export default function AboutFaq() {
  const containerRef = useRef<any>(null);
  const faqMapper = useCallback((data: any, index: number) => {
    return (
      <div className="faq" key={index}>
        <div
          className="question"
          onClick={() => {
            // const target = container.children[index].classList
            const container = containerRef.current;
            console.log(container.children[index]);
          }}
        >
          <p>{data.question}</p>
          <MdExpandMore className="expand-svg" />
          <MdExpandLess className="collapse-svg" />
        </div>
        <p className={`answer _${index}`}>{data.answer}</p>
      </div>
    );
  }, []);
  return (
    <div className="faq-wrapper">
      <h2 className="faq-heading">FAQ&apos;s</h2>
      <div className="faq-container" ref={containerRef}>
        {faqData.map(faqMapper)}
      </div>
    </div>
  );
}
