import { useCallback, useEffect, useRef } from "react";
import type { AppProps } from "next/app";
import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/styles.scss";
import SocialMedia from "@/components/social-media";

export default function App({ Component, pageProps }: AppProps) {
  const footerRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  const obvrOpts = useRef<IntersectionObserverInit>({
    threshold: 0.25,
  });

  const obvrCallback = useCallback<IntersectionObserverCallback>((entries) => {
    if (socialRef.current) {
      if (entries[0]?.isIntersecting) {
        socialRef.current.classList.add("hidden");
        socialRef.current.classList.remove("visible");
      } else {
        socialRef.current.classList.add("visible");
        socialRef.current.classList.remove("hidden");
      }
    }
  }, []);

  useEffect(() => {
    if (footerRef.current) {
      const footerIntersection = new IntersectionObserver(
        obvrCallback,
        obvrOpts.current
      );
      footerIntersection.observe(footerRef.current);
      return () => {
        footerIntersection.disconnect();
      };
    }
    return;
  }, [obvrCallback]);

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <SocialMedia ref={socialRef} />
      <Footer ref={footerRef} />
    </>
  );
}
