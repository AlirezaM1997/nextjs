import Head from "next/head";
import React from "react";

const Csr = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState(null);
  const [isError, setIsError] = React.useState(false);

  const getAllData = async () => {
    setIsLoading(true);
    try {
      const data = await fetch(
        "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8"
      );
      const json = await data.json();
      setData(json);
    } catch (e) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  React.useEffect(() => {
    getAllData();
    return () => {
      setData(null);
    };
  }, []);

  return (
    <div>
      <Head>
        {!data && <title>Server Side Rendering</title>}
        {data && !isError && <title>Server Side Rendering - {data.name}</title>}
      </Head>
      <div className="content">
        {isLoading && <h2>Loading...</h2>}
        {isError && <h2>Oops, something went wrong!</h2>}
        {data && !isError && (
          <>
            <h2>{data[0].name}</h2>
            <p>This page is Rendering with SSG (Server Side Rendering)</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Csr;
