import { Fragment } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>locofy-react-nextjs-project</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />

        <style
          dangerouslySetInnerHTML={{
            __html: `@import url("https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300;400;600;700;800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lexend+Peta:wght@600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lexend+Mega:wght@600&display=swap");
body {
  margin: 0;
  line-height: normal;
}
`,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
