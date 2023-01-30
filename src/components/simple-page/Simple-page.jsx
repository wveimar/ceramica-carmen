import React from "react";
import { gql, useQuery } from "@apollo/client";
import GalleryFrontPage from "../galleryFrontPage/GalleryFrontPage";
import Loader from "../loader/Loader";
import "./simple-page.css";

function SimplePage({ code }) {
  if (!code) {
    return <Loader />;
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
    return <Loader />;
  }
  const [page] = data.simplePageCollection.items;

  console.log(page);

  return (
    <div>
      {page.hidenGallery ? (
        <img width="100%" height="70vh" src={page && page.image.url}></img>
      ) : (
        <GalleryFrontPage DataImages={page.imagesCollection.items} />
      )}
      <h2>{page && page.title}</h2>
      <div>
        <p className="text">{page && page.description}</p>
      </div>
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
