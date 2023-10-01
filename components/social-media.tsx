import { Ref, forwardRef } from "react";
import Link from "next/link";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { MdWhatsapp } from "react-icons/md";

function SocialMedia(_: unknown, ref: Ref<HTMLDivElement>) {
  return (
    <div className="links-container" ref={ref}>
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

export default forwardRef(SocialMedia);
