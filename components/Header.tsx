/** @jsx h */

import { h, Head } from "../deps.ts";

export default function Header(props: { active: string }) {
  const items = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Launches",
      href: "/launches",
    },
    {
      name: "Streams",
      href: "/streams",
    },

    {
      name: "Wiki",
      href: "/wiki",
    },
  ];

  return (
    <header>
      <a href="/">
        <img id="logo" src="/logo.svg" alt="LTX logo" draggable={false} />
      </a>
      <div id="links">
        {items.map((item) => (
          <div>
            <a href={item.href} class={props.active == item.href ? "active" : ""}>
              {item.name}
            </a>
          </div>
        ))}
      </div>
      <div id="github">
        <a href="https://github.com/LTXland/LTX">
          Github
        </a>
      </div>
    </header>
  );
}