import type { PropsWithChildren } from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

interface DefaultButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
  btnType?: "button" | "submit" | "reset";
  children?: React.ReactNode;
}

export default function DefaultButton({
  href,
  onClick = () => void 0,
  className,
  btnType = "button",
  children,
}: PropsWithChildren<DefaultButtonProps>) {
  const buttonContent = (
    <>
      {typeof children === "string" ? (
        <span className="btn-span">{children}</span>
      ) : (
        children
      )}
      <FaChevronRight className="arrow-right" />
    </>
  );
  return href ? (
    <Link
      href={href}
      className={`default-btn${className ? ` ${className}` : ""}`}
      onClick={onClick}
    >
      {buttonContent}
    </Link>
  ) : (
    <button
      className={`default-btn${className ? ` ${className}` : ""}`}
      type={btnType}
      onClick={onClick}
    >
      {buttonContent}
    </button>
  );
}
