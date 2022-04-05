/** @jsx h */
import { h, Head } from "../client_deps.ts";

/* Routes */
import Header from "../islands/Header.tsx";

export default function Home() {
  return (
    <main>
      <Head>
        <title>LTX — your one stop shop for everything space</title>
        <meta name="title" content="LTX — your one stop shop for everything space"/>
        <meta name="description" content="Learn about everything from Mars to rocket engines, watch a launch from a bunch of different views, and more."/>

        <link rel="stylesheet" href="/index.css" />
      </Head>
      <Header active="/" />
    </main>
  );
}
