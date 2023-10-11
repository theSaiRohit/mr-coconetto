import { GetStaticProps } from "next";
import Head from "next/head";
import { GQLClient } from "@/clients";
import { aboutPageInfo, founders } from "@/gql/queries";
import AboutContainer from "@/modules/about";
import type {
  AboutPageQueryInterface,
  AboutProps,
  FoundersInterface,
} from "@/modules/about/about-interface";

export const getStaticProps: GetStaticProps = async () => {
  const foundersData = await GQLClient.request<FoundersInterface>(founders);
  const aboutDesc: AboutPageQueryInterface = await GQLClient.request(
    aboutPageInfo
  );
  return {
    props: {
      founders: foundersData?.foundersCollection.items,
      aboutData: aboutDesc?.aboutPageInfoCollection.items,
    },
    revalidate: 6 * 60 * 60,
  };
};

export default function About(props: AboutProps) {
  return (
    <section id="about" aria-label="About Mr Coconetto">
      <Head>
        <title>Mr Coconetto | About</title>
        <meta name="description" content="hello world" />
      </Head>
      <AboutContainer data={props} />
    </section>
  );
}
