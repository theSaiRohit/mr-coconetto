import type { AppProps } from "next/app";
import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/styles.scss";
import SocialMedia from "@/components/social-media";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <SocialMedia />
      <Footer />
    </>
  );
}
