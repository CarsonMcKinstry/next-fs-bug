import React from "react";

const Component = () => {
  return <div></div>;
};

Component.getInitializerProps = async () => {
  const foo = await import("./foo");
  foo.bar();
  return {
    foo: "bar",
  };
};

export default Component;
