/** @jsx h */
import { h, Head } from "../client_deps.ts";
import Header from "../islands/Header.tsx";

export default function Home() {
  return (
    <main>
      <Head>
        <title>LTX — Your one stop shop for everything space.</title>
        <meta name="title" content="LTX — Your one stop shop for everything space."/>
        <meta name="description" content="Built by the community for the community on GitHub, LTX is the first open source rocket launch coverage website. Join the community on Discord to get involved with launch parties, chat with other space fans, and coordinate development with fellow developers."/>
        <link rel="stylesheet" href="./index.css" />
      </Head>
      <div class="header">
        <Header active="/"></Header>
      </div>
      <div class="x">
        <div class="box">
          <div class="content">
            <div>
              LTXland
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
