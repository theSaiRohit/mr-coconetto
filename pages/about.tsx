import Head from "next/head";
import AboutContainer from "@/modules/about";

export default function About() {
  return (
    <section id="about" aria-label="About Mr Coconetto">
      <Head>
        <title>Mr Coconetto | About</title>
        <meta name="description" content="hello world" />
      </Head>
      <AboutContainer />
    </section>
  );
}
