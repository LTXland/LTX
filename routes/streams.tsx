/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h, Head, PageProps } from "../client_deps.ts";
import { Handlers } from "../server_deps.ts";
import Header from "../islands/Header.tsx";

export const handler: Handlers<Record<string, undefined> | undefined> = {
  async GET(_, ctx) {
    const resp = await fetch(`https://api-ltx.deno.dev/streams`);
    if (resp.status === 404) {
      return ctx.render(undefined);
    }
    const streams: Record<string, undefined> = await resp.json();
    return ctx.render(streams);
  },
};

export default function Streams({ data }: PageProps<Record<string, undefined>>) {
  return (
    <main>
      <Head>
        <title>Streams — LTX</title>
        <meta name="title" content="Streams — LTX"/>
        <meta name="description" content="Watch the latest views from around the cape, Boca Chica, and more."/>
        <link rel="stylesheet" href="./index.css" />
      </Head>
      <div class="header">
        <Header active="/streams"></Header>
      </div>
      <div class="x">
        <div class="box">
          <div class="content">
            <div class="stream-embed">
              <iframe
                src={data.main}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        <div class="box">
          <div class="content">
            <div class="stream-embed">
              <iframe
                src={data.side.one}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        <div class="box">
          <div class="content">
            <div class="stream-embed">
              <iframe
                src={data.side.two}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        <div class="box">
          <div class="content">
            <div class="stream-embed">
              <iframe
                src={data.side.three}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        <div class="box">
          <div class="content">
            <div class="stream-embed">
              <iframe
                src={data.side.four}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
