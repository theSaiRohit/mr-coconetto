import HomeContainer from "@/modules/home";
import Head from "next/head";

export default function Home() {
  return (
    <section id="home" aria-label="home">
      <Head>
        <title>Mr Coconetto | Home</title>
        <meta name="description" content="hello world" />
      </Head>
      <HomeContainer />
    </section>
  );
}
