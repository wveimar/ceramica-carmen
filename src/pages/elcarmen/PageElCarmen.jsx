import { gql, useQuery } from "@apollo/client";
import React from "react";
import Image from "../../components/image/Image";
import PageSection from "../../components/page-section/PageSection";

const PageElCarmen = ({ pageCode }) => {
  const { error, data } = useQuery(PAGE_EL_CARMEN_QUERY, {
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

  return (
    <div style={{ marginTop: "4rem" }}>
      <Image description={image.description} url={image.image.url} />
      <PageSection sectionCode="s1" code={`${pageCode}`}>
        
      </PageSection>
    </div>
  );
};

export default PageElCarmen;

const PAGE_EL_CARMEN_QUERY = gql`
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
