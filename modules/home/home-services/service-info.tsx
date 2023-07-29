import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

export default function ServiceInfo({ dataObj }: { dataObj: any }) {
  return (
    <div className="service-info-container">
      <h2 className="service-heading">{dataObj?.cardHeading}</h2>
      <p className="service-desc">{dataObj?.desc}</p>
      <div className="services-cta">
        <Link href="/" className="default-btn">
          <span className="btn-span">Book now</span>
          <FaChevronRight className="arrow-right" />
        </Link>
        <Link href="/" className="default-btn">
          <span className="btn-span">Know More</span>
          <FaChevronRight className="arrow-right" />
        </Link>
      </div>
    </div>
  );
}
