/** @jsx h */

import { h, Head } from "../client_deps.ts";

export default function Header(props: { active: string }) {
  const items = [
    {
      name: "HOME",
      href: "/",
    },
    {
      name: "LAUNCHES",
      href: "/launches",
    },
    {
      name: "STREAMS",
      href: "/streams",
    },
    {
      name: "GITHUB",
      href: "https://github.com/LTXland",
      external: true
    },
  ];

  return (
    <div class="header">
      <Head>
        <link rel="stylesheet" href="./index.css" />
      </Head>
      <img src="./logo.svg" alt="LTX" class="logo" />
      <div class="links">
        {items.map((item) => (
          <a href={item.href} class={props.active == item.href ? "active" : ""}>
            {item.name} {item.external ? <span class="arrow">↗️</span> : null}
          </a>
        ))}
      </div>
    </div>
  );
}