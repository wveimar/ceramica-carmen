import React from "react";
import { gql, useQuery } from "@apollo/client";
import Image from "../../components/image/Image";
import PageSection from "../../components/page-section/PageSection";
import GridPosts from "../../components/grid-posts/GridPosts";
import GridCards from "../../components/grid-cards/GridCards";


const PageMaestros = ({ pageCode }) => {
  const { error, data } = useQuery(PAGE_MAESTROS_QUERY, {
    variables: {
      where: { code_contains: pageCode },
    },
  });

  if (error && error.networkError) {
    return <p>Error: {error.networkError.result.errors[0].message}</p>;
  }
  if (!data) {
    return <p>No Data!</p>;
  }
  const [image] = data.simplePageCollection.items;
  console.log(data);

  return <div>
    <Image description={image.description} url={image.image.url} />

    <PageSection sectionCode="s1" code={pageCode}>
    <GridCards variant="card-link" code={`${pageCode}-s1`} />
    </PageSection>
    </div>;
};

export default PageMaestros;

const PAGE_MAESTROS_QUERY = gql`
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
