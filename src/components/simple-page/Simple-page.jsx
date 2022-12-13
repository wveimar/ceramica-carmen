import React from "react";
import { gql, useQuery } from "@apollo/client";

function SimplePage({ code }) {
  if (!code) {
    return <p>No Code!</p>;
  }
  const { error, data } = useQuery(SIMPLE_PAGE_QUERY, {
    variables: {
      where: { code_contains: code },
    },
  });

  if (error && error.networkError) {
    return <p>Error: {error.networkError.result.errors[0].message}</p>;
  }
  if (!data) {
    return <p>No Data!</p>;
  }
  const [page] = data.simplePageCollection.items;

  console.log(code);
  
  return (
    <div className="div">
      <img width="100%" height="400px" src={page && page.image.url}></img>
      <h2>{page && page.title}</h2>
      <p
        style={{
          textAlign: "justify",
          margin: "3rem 3rem 3rem 3rem",
        }}
      >
        {page && page.description}
      </p>
    </div>
  );
}

export default SimplePage;

const SIMPLE_PAGE_QUERY = gql`
  query simplePageCollection($where: SimplePageFilter) {
    simplePageCollection(where: $where) {
      items {
        code
        name
        title
        description
        image {
          url
        }
      }
    }
  }
`;
