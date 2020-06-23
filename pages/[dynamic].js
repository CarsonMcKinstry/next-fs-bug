import React from "react";
import Component from "../component";

export default () => {
  return <Component />;
};

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          dynamic: "foo",
        },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps = async () => {
  const props = await Component.getInitializerProps();

  return {
    props,
  };
};
