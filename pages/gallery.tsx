import { GetStaticProps } from "next";
import Head from "next/head";
import { GQLClient } from "@/clients";
import { galleryItems } from "@/gql/queries";
import Gallery from "@/modules/gallery";
import { galImageData } from "@/modules/gallery/gallery-interface";

export const getStaticProps: GetStaticProps = async () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const galleryData: any = await GQLClient.request(galleryItems);
  return {
    props: { data: galleryData?.galleryCollection?.items },
    revalidate: 6 * 60 * 60,
  };
};

export default function gallery({ data }: { data: galImageData[] }) {
  return (
    <section id="gallery" aria-label="gallery">
      <Head>
        <title>Mr Coconetto | Gallery</title>
        <meta name="description" content="hello world" />
      </Head>
      <Gallery gdata={data ?? []} />
    </section>
  );
}
