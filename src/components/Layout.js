import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Next.js Login and Registration Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-lZXPtsgZwCImQ2dWm5n7sY9XO+sAKdd2QsWXd+fu0D6l0Kw/X/+GbkIMgmLIRvI3qzXrMqQu8rI0aPeOEt2Sw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="stylesheet" href="/styles/global.css" />
      </Head>
      <main>{children}</main>
    </>
  );
}
