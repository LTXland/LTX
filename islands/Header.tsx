/** @jsx h */

import { h, useState } from "../client_deps.ts";

export default function Header(props: { active: string }) {
  const [open, setOpen] = useState(false);

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
    {
      name: "Github",
      href: "https://github.com/LTXland/LTX",
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
      <div class="menu-toggle" onClick={() => setOpen(!open)}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
      </div>
      {open && (
      <div id="menu-content">
        <div id="menu-links">
          {items.map((item) => (
            <div>
              <a href={item.href} class={props.active == item.href ? "active" : ""}>
                {item.name}
              </a>
            </div>
          ))}
        </div>
      </div>)}
    </header>
  );
}