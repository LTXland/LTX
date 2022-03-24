[![](https://ltx.deno.dev/bin/cover.svg)](https://ltx.deno.dev)

![build](https://img.shields.io/github/workflow/status/LTXland/ltx/Deno?color=ff9a51) ![license](https://img.shields.io/github/license/LTXland/ltx?color=ff9a51) ![stars](https://img.shields.io/github/stars/LTXland/ltx?color=ff9a51) ![issues](https://img.shields.io/github/issues/LTXland/ltx?color=ff9a51) ![issues](https://img.shields.io/tokei/lines/github/LTXland/ltx?color=ff9a51)

---

### Tools

- **streams** — watch a launch from a bunch of different views
- **launch schedule** — figure out when the next launch is
- **wiki** — learn about everything from Mars to SpaceX's special alloy
- and more! if you have a tool you want to use, [make an issue](https://github.com/LTXland/ltx/issues/new)!

## Contributing
Welcome to the LTX Contributor Community! Below is a simple guide on how to get started contributing to LTX - whether it's the wiki, the launch schedule, or even the core project!

### Getting Started
LTX is built with [Deno](https://deno.land) as the backend. First things first: download Deno!

[[Download](https://deno.land/#installation)]

Once you've done that, it's time to clone the project. You can do that by running these commands:

```
git clone https://github.com/LTXland/LTX

cd LTX
```

Once you're in the `/LTX` folder, run the development server using this command:

```
deno run -A --watch main.ts
```

The server is started! Open [localhost:8000](http://localhost:8000) and now you can start editing files; just refresh the page in your browser to see your edits!

### Wiki
The wiki is an important tool; it holds a ton of information about everything space - that's why LTX is "your one stop shop for everything space"! 

If you don't know how to write [Markdown](https://daringfireball.net/projects/markdown/), take a few minutes to look over the [cheat sheet](https://www.markdownguide.org/cheat-sheet/). Once you have the basic format, take a look at the [wiki article template](https://github.com/LTXland/LTX/blob/main/wiki/template.md?plain=1).

You can get started by navigating to `/wiki` in your folder *and* in your browser. Find/make the article you want, and start writing! As mentioned above, please follow the wiki article template to maintain the LTX wiki format. If you would like a UI element improved, please [make an issue](https://github.com/LTXland/LTX/issues/new).

### Core
Everything that is the backbone of LTX is located in `/src`. 

If you'd like to contribute to the core, it is necessary to understand [Deno](https://deno.land) (and [TypeScript](https://typescriptlang.org)), [Markdown](https://daringfireball.net/projects/markdown/), and basic Git and Github processes.

Once you're done editing your code, please [make a pull request](https://github.com/LTXland/LTX/compare).

Finally, **thank you for contributing!**

*made with ♡ for space. [Copyright (c) 2022 the LTX authors](https://github.com/LTXland/ltx/blob/main/LICENSE)*