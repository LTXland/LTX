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
        <div class="box" id="cover">
          <div class="content">
            <div class="title">LTXland</div>
            <div class="description">Your one stop shop for everything space.</div>
          </div>
        </div>
        <div class="box">
          <div class="content">
            <div class="tag">ABOUT</div>
            <div class="body">
              Built by the community for the community on <a href="https://github.com/LTXland">GitHub</a>, LTX is the first open source rocket launch coverage website. Join the community on <a href="https://discord.gg/Zma3aV9Zdm">Discord</a> to get involved with launch parties, chat with other space fans, and coordinate development with fellow developers.
              <br/>
              <br/>
              <a href="https://github.com/LTXland">GitHub</a> / <a href="https://discord.gg/Zma3aV9Zdm">Discord</a> / <a href="https://twitter.com/LTXland">Twitter</a> / <a href="mailto:mail@ltx.land">Email</a>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="content">
            <div class="tag">SOURCE</div>
            <div class="body">
              <a href="https://github.com/LTXland/LTX">View the source on GitHub</a>. Eventually the core repositories will be moved to Sourcehut and <i>mirrored</i> to GitHub, but the contributor repositories will remain.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
