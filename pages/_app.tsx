import type { AppProps } from "next/app";
import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/styles.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
