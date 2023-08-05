import { useCallback, useRef, useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { faqData } from "./about-data";

export default function AboutFaq() {
  const containerRef = useRef<any>(null);
  const [isActive, setIsActive] = useState(false);
  const faqMapper = useCallback(
    (data: any, index: number) => {
      return (
        <div className="faq" key={index}>
          <div
            className="question"
            onClick={() => {
              // const target = container.children[index].classList
              const container = containerRef.current;
              setIsActive(true);
              console.log(container.children[index], isActive);
            }}
          >
            <p>{data.question}</p>
            {isActive ? (
              <MdExpandLess className="collapse-svg" />
            ) : (
              <MdExpandMore className="expand-svg" />
            )}
          </div>
          <p className={`answer _${index}`}>{data.answer}</p>
        </div>
      );
    },
    [isActive]
  );
  return (
    <div className="faq-wrapper">
      <h2 className="faq-heading">FAQ&apos;s</h2>
      <div className="faq-container" ref={containerRef}>
        {faqData.map(faqMapper)}
      </div>
    </div>
  );
}
