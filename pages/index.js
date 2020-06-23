import Component from "../component";

export default function Home() {
  return <Component />;
}

export const getStaticProps = async () => {
  const props = await Component.getInitializerProps();
  return {
    props,
  };
};
