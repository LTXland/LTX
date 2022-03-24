## Contributing
---
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

If you'd like to contribute to the core, it is necessary to understand HTML and CSS, [Deno](https://deno.land) (and [TypeScript](https://typescriptlang.org)), [Markdown](https://daringfireball.net/projects/markdown/), and basic Git and Github processes.

Once you're done editing your code, please [make a pull request](https://github.com/LTXland/LTX/compare). That's all there is to it! One of the core contributors will review your PR within a day or two, and will either merge it or leave a comment.