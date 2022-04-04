const App = {
  native: false,
  routes: {
    "/": "./src/index.html",
    "/launches": "./src/launches.html",
    "/streams": "./src/streams.html",
    "/wiki": "./src/wiki.html",
    "/wiki/.": "./src/article.html",
    "/about": "./src/about.md",

    "/src/components/article.mjs": "./src/components/article.mjs",
    "/src/components/menu.mjs": "./src/components/menu.mjs",
    "/src/components/searchbar.mjs": "./src/components/searchbar.mjs",
    "src/components/latest-launch-card.mjs": "./src/components/latest-launch-card.mjs",

    "/bin/logo.svg": "./bin/logo.svg",
    "/bin/menu.svg": "./bin/menu.svg",
    "/bin/more_vert_white_48dp.svg": "./bin/more_vert_white_48dp.svg",
    "/bin/starship-diagram-back.svg": "./bin/starship-diagram-back.svg",
    "/bin/cover.svg": "./bin/cover.svg",

    "/robots.txt": "./bin/robots.txt",

    "/discord": "https://discord.gg/Zma3aV9Zdm",
    "/github": "https://github.com/LTXland"
  }
}

import Crate from "https://deno.land/x/crate@v1.2.0/mod.ts";

const crate = new Crate();
crate.serve(App);