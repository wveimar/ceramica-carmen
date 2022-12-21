import { gql, useQuery } from "@apollo/client";
import React from "react";
import Gallery from "../../components/gallery/Gallery";
import GalleryFrontPage from "../../components/galleryFrontPage/GalleryFrontPage";
import Loader from "../../components/loader/Loader";
import PageSection from "../../components/page-section/PageSection";

const PageGallery = ({ pageCode }) => {
  const { error, data } = useQuery(PAGE_GALLERY_QUERY, {
    variables: {
      where: { code_contains: pageCode },
    },
  });

  if (error && error.networkError) {
    return <p>Error: {error.networkError.result.errors[0].message}</p>;
  }
  if (!data) {
    return <Loader />
  }
  const [page] = data.simplePageCollection.items;

  console.log(page);

  return (
    <div style={{ marginTop: "4rem" }}>
      <GalleryFrontPage DataImages={page.imagesCollection.items} />
      <PageSection sectionCode="s1" code={`${pageCode}`}>
        <Gallery code={`gallery-${pageCode}`} />
      </PageSection>
    </div>
  );
};

export default PageGallery;

const PAGE_GALLERY_QUERY = gql`
  query simplePageCollection($where: SimplePageFilter) {
    simplePageCollection(where: $where) {
      items {
        name
        description
        image {
          url
        }
        imagesCollection {
          items {
            url
          }
        }
        hidenGallery
      }
    }
  }
`;
