import { useCallback, useRef } from "react";
import { MdExpandMore } from "react-icons/md";
import { faqs } from "./about-interface";

export default function AboutFaq({ collection }: { collection: faqs[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const faqMapper = useCallback((data: faqs, index: number) => {
    return (
      <div className="faq" key={index}>
        <div
          className="question"
          onClick={() => {
            const container = containerRef.current;
            const answer = container?.children[index];
            answer?.classList.toggle("active");
          }}
        >
          <p className="question-para">{data.question}</p>
          <MdExpandMore className="faq-svg" />
        </div>
        <p className="answer">{data.answer}</p>
      </div>
    );
  }, []);
  return (
    <div className="faq-wrapper">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-container" ref={containerRef}>
        {collection.map(faqMapper)}
      </div>
    </div>
  );
}
