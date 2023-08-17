import Head from "next/head";
import Contact from "@/modules/contact";

export default function ContactUs() {
  return (
    <section id="contact" aria-label="contact">
      <Head>
        <title>Mr Coconetto | Contact</title>
        <meta name="description" content="hello world" />
      </Head>
      <Contact />
    </section>
  );
}
