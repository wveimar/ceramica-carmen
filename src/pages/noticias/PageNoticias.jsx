import React from "react";
import { gql, useQuery } from "@apollo/client";
import Image from "../../components/image/Image";
import PageSection from "../../components/page-section/PageSection";
import GridCards from "../../components/grid-cards/GridCards";
import Loader from "../../components/loader/Loader";

const PageNoticias = ({ pageCode }) => {
  const { error, data } = useQuery(PAGE_NOTICIAS_QUERY, {
    variables: {
      where: { code_contains: pageCode },
    },
  });

  if (error && error.networkError) {
    return <p>Error: {error.networkError.result.errors[0].message}</p>;
  }
  if (!data) {
    return <Loader />;
  }
  const [image] = data.simplePageCollection.items;

  return (
    <div>
      <Image description={image.description} url={image.image.url} />
      <PageSection sectionCode="s1" code={pageCode}>
        <GridCards variant="card-link" code={`${pageCode}-s1`} />
      </PageSection>
    </div>
  );
};

export default PageNoticias;

const PAGE_NOTICIAS_QUERY = gql`
  query simplePageCollection($where: SimplePageFilter) {
    simplePageCollection(where: $where) {
      items {
        name
        description
        image {
          url
        }
      }
    }
  }
`;
