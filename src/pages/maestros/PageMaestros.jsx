import React from "react";
import { gql, useQuery } from "@apollo/client";

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

  console.log(data)

  return <div>maestros</div>;
};

export default PageMaestros;

const PAGE_MAESTROS_QUERY = gql`
  query simplePageCollection($where: SimplePageFilter) {
    simplePageCollection(where: $where) {
      items {
        name
        description
      }
    }
  }
`;
