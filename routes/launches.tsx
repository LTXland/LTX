/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h, Head, PageProps } from "../client_deps.ts";
import { Handlers } from "../server_deps.ts";
import Header from "../islands/Header.tsx";

export const handler: Handlers<Record<string, undefined> | undefined> = {
  async GET(_, ctx) {
    const resp = await fetch(`https://api-ltx.deno.dev/launches`);
    if (resp.status === 404) {
      return ctx.render(undefined);
    }
    const launches: Record<string, undefined> = await resp.json();
    return ctx.render(launches);
  },
};

export default function Launches({ data }: PageProps<Record<string, undefined>>) {
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
        {data !== undefined ? data.map((item: Record<string, undefined>, index: number) => (
          <div class="box">
            <div class="content">
            {index === 0 ? <div class="tag">LATEST</div> : null}
              <div class="body">
                { index === 0 ? <img src={item.cover} class="launch-cover" /> : null}
                <div class="launch-title">{item.title}</div>
                <div class="launch-net">NET {item.date}</div>
              </div>
            </div>
        </div>
        )) : ""}
      </div>
    </main>
  );
}