import { useCallback } from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

export default function ServiceInfo({
  dataArr,
  activeIndex,
}: {
  dataArr: any[];
  activeIndex: number;
}) {
  const mapper = useCallback(
    (item: any, key: number) => {
      return (
        <div
          className={`text-container ${
            activeIndex === key ? "active" : "inactive"
          }`}
          key={key}
        >
          <h3 className="service-heading">{item?.cardHeading}</h3>
          <p className="service-desc">{item?.desc}</p>
        </div>
      );
    },
    [activeIndex]
  );
  return (
    <div className="service-info-container">
      <div className="texts-wrapper">{dataArr.map(mapper)}</div>
      <div className="services-cta">
        <Link href={`/products/category-num-here`} className="default-btn">
          <span className="btn-span">Book now</span>
          <FaChevronRight className="arrow-right" />
        </Link>
        <Link href={`/products/category-num-here`} className="default-btn">
          <span className="btn-span">Know More</span>
          <FaChevronRight className="arrow-right" />
        </Link>
      </div>
    </div>
  );
}
