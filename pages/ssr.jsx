import Head from "next/head";

const ssr = ({ name }) => {
  return (
    <div>
      <Head>
        <title>Server Side Rendering - {name}</title>
      </Head>
      <div className="content">
        <h2>{name}</h2>
        <p>This page is Rendering with SSG (Server Side Rendering)</p>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const data = await fetch(
    "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8"
  );
  const json = await data.json();

  return {
    props: {
      name: json[0].name,
    },
  };
}

export default ssr;
