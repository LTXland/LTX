/** @jsx h */
import { h, Head } from "../client_deps.ts";
import Header from "../islands/Header.tsx";

export default function Launches() {
  return (
    <main>
      <Head>
        <title>Launches — LTX</title>
        <meta name="title" content="Launches — LTX"/>
        <meta name="description" content="View the latest rocket launch schedule."/>
        <link rel="stylesheet" href="./index.css" />
      </Head>
      <div class="header">
        <Header active="/launches"></Header>
      </div>
      <div class="x">
        <div class="box" id="cover">
          <div class="content">
            <div class="tag">LATEST</div>
            <div class="body">
                Testing
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
