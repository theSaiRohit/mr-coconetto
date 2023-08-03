import Link from "next/link";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { MdWhatsapp } from "react-icons/md";

export default function SocialMedia() {
  return (
    <div className="links-container">
      <Link href="https://www.instagram.com/mr.coconetto/" className="link-svg">
        <AiOutlineInstagram />
      </Link>
      <Link href="https://www.facebook.com/MR.COCONETTO/" className="link-svg">
        <AiOutlineFacebook />
      </Link>
      <Link href="tel:+918700331212" className="link-svg">
        <MdWhatsapp />
      </Link>
    </div>
  );
}
