import { parse, stringify } from "https://deno.land/std@0.132.0/encoding/toml.ts";

const file = async (fp:string) => { const d = new TextDecoder("utf-8"); try { return d.decode(await Deno.readFile(fp))} catch { return d.decode(await Deno.readFile("./src/404.md")) }}

export const tomlParse = async (src: string) => {
    src = await file(src);
    const toml = parse(src), _string = stringify(toml);
    return toml
}

export const dates = async () => {
    let arr = [];
    for await(const f of Deno.readDir('./launches')) {
        if(!f.isFile) continue;
        arr.push(await tomlParse(`./launches/${f.name}`));
    }

    arr = arr.sort((a: { date?: string }, b: { date?: string }) => a.date! < b.date!? -1:1)

    return arr
}

export const toml = async () => {
    let launches = ``;
    const arr = await dates();
    let title, date, cover;
    for(const len in arr){
        const launch: {title? : string, date?: string, cover?: string, overview?: { vehicle?: string }} = arr[len];
        title = launch.title, date = launch.date, cover = launch.cover;
        launches = launches.concat('\n',`
        <div class="launch-card">
          <div class="launch-card-cover"><img src="${cover}" alt="${title}"></div>
          <div class="launch-card-title">${title}</div>
          <div class="launch-card-date">${date}</div>
        </div>
        `);
    }

    return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">

      <!-- Primary Meta Tags -->
      <title>Launches | LTX — your one stop shop for everything space</title>
      <meta name="title" content="Launches | LTX — your one stop shop for everything space">
      <meta name="description" content="Learn about everything from Mars to rocket engines, watch a launch from a bunch of different views, and more.">

      <!-- Open Graph / Facebook -->
      <meta property="og:type" content="website">
      <meta property="og:url" content="https://ltx.deno.dev/">
      <meta property="og:title" content="Launches | LTX — your one stop shop for everything space">
      <meta property="og:description" content="Learn about everything from Mars to rocket engines, watch a launch from a bunch of different views, and more.">
      <meta property="og:image" content="/bin/cover.svg">

      <!-- Twitter -->
      <meta property="twitter:card" content="summary_large_image">
      <meta property="twitter:url" content="https://ltx.deno.dev/">
      <meta property="twitter:title" content="Launches | LTX — your one stop shop for everything space">
      <meta property="twitter:description" content="Learn about everything from Mars to rocket engines, watch a launch from a bunch of different views, and more.">
      <meta property="twitter:image" content="/bin/cover.svg">

      <link rel="icon" href="/bin/logo.svg" type="image/svg+xml">

      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Roboto+Mono:ital@0;1&display=swap" rel="stylesheet" rel="preload" as="style">
      <style>
      html {
        background-color: #101010;
        scroll-behavior: smooth;
      }

      main {
          position: absolute;
          left: 0;
          top: 0;
          width: 100% !important;
          height: auto;
          min-height: 100%;

          overflow: hidden;

          display: grid; 
          grid-template-columns: 1fr; 
          grid-template-rows: 1fr 11fr; 
          gap: 0px 0px; 
          grid-template-areas: 
              "header"
              "content";


          background-color: #101010;
      }

      .header {
          grid-area: header;

          position: sticky;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;

          z-index: 1;

          background-color: #101010;
      }

      .content {
          grid-area: content;

          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;

          z-index: 0;

          overflow-y: scroll;
      }

      .content > :last-child {
        margin-bottom: 3rem;
      }

      #logo {
          user-select: none;

          position: absolute;
          top: 50%;
          left: 1.25rem;
          transform: translateY(-50%);
      }

      hr {
        border: none;
        height: 3px;
        background: #212121;
        margin-bottom: 2rem;
      }
      
      img {
        border-radius: 5px;
      }

      table {
        table-layout: fixed;
        width: max-content;
        max-width: 100%;
        box-sizing: border-box;
        border-collapse: collapse;
      }

      th {
        background-color: #151515;
      }

      table, th, td {
        width: 100%;
        border: 2px solid #696969;
        padding: 0.5rem;
      }

      pre, code {
        color: #e0e0e0;
        text-align: left;
        font-family: Roboto Mono;
        background-color: #151515;
        border-radius: 5px;
        word-wrap: break-word;
        white-space: pre-wrap;
      }

      pre {
        padding: 1rem;
      }

      .launch-list {
        display: grid; 
        grid-auto-columns: 1fr; 
        grid-auto-rows: min-content; 
        row-gap: 2em;

        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        height: max-content;
      }

      .launch-card {
        text-align: center;
      }

      @media only screen and (orientation: landscape) and (max-width: 1000px) {
          :root {
              --content-catchphrase: 2.5rem;
              --content-description: 1rem;
              --tagline: 0.65rem;
          }

          #logo {
              height: 65%;
          }

          .content {
            width: calc(100% - 4rem);
            padding-left: 2rem;
            padding-right: 2rem;
          }
          body {
            background: #101010;
            text-align: justify;
            font-size: 1.25rem;
          }
          h1 {
            color: #f0f0f0;
            font-family: Inter;
            font-size: 3.5rem;
          }

          h2 {
            color: #e0e0e0;
            font-family: Inter;
            font-size: 2.5rem;
          }

          h3 {
            color: #d0d0d0;
            font-family: Inter;
            font-size: 2.25rem;
          }

          h4, h5, h6 {
            color: #c4c4c4;
            font-family: Inter;
          }

          p, ul, ol, table, body {
            color: #c4c4c4;
            font-family: Inter;
          }

          blockquote {
            border-left: 2px solid #212121;
            margin: 2px 10px;
            padding: 2px 10px;
            font-family: Inter;
          }

          code, pre {
            font-size: 1.25rem;
          }

          img {
            max-width: calc(75% - 4rem);
          }
      }

      @media only screen and (orientation: portrait) and (max-width: 1000px) {
          :root {
              --content-catchphrase: 2.5rem;
              --content-description: 1rem;
              --tagline: 0.65rem;
          }

          #logo {
              height: 65%;
          }

          .content {
            width: calc(100% - 4rem);
            padding-left: 2rem;
            padding-right: 2rem;
          }
          body {
            background: #101010;
            text-align: justify;
            font-size: 1rem;
          }
          h1 {
            color: #f0f0f0;
            font-family: Inter;
            font-size: 2.5rem;
          }

          h2 {
            color: #e0e0e0;
            font-family: Inter;
            font-size: 2rem;
          }

          h3 {
            color: #d0d0d0;
            font-family: Inter;
            font-size: 1.75rem;
          }

          h4, h5, h6 {
            color: #c4c4c4;
            font-family: Inter;
          }

          p, ul, ol, table, body {
            color: #c4c4c4;
            font-family: Inter;
          }

          blockquote {
            border-left: 2px solid #212121;
            margin: 2px 10px;
            padding: 2px 10px;
            font-family: Inter;
          }

          code, pre {
            font-size: 1rem;
          }

          img {
            max-width: calc(100% - 4rem);
          }
      }

      @media only screen and (orientation: landscape) and (min-width: 1000px) {
          :root {
              --content-catchphrase: 4rem;
              --content-description: 1.5rem;
              --tagline: 1rem;
          }

          #logo {
              height: 50%;
          }

          .content {
            width: calc(100% - 4rem);
            padding-left: 2rem;
            padding-right: 2rem;
          }

          body {
            background: #101010;
            text-align: justify;
            font-size: 1.25rem;
          }
          h1 {
            color: #f0f0f0;
            font-family: Inter;
            font-size: 3.5rem;
          }

          h2 {
            color: #e0e0e0;
            font-family: Inter;
            font-size: 2.5rem;
          }

          h3 {
            color: #d0d0d0;
            font-family: Inter;
            font-size: 2.25rem;
          }

          h4, h5, h6 {
            color: #c4c4c4;
            font-family: Inter;
          }

          p, ul, ol, table, body {
            color: #c4c4c4;
            font-family: Inter;
          }

          blockquote {
            border-left: 2px solid #212121;
            margin: 2px 10px;
            padding: 2px 10px;
            font-family: Inter;
          }

          code, pre {
            font-size: 1.25rem;
          }

          img {
            max-width: calc(35% - 4rem);
          }
      }

      a {
        color: inherit;
        transition: color 100ms ease-in-out;
      }

      a:hover {
        color: #ff9a51;
      }

      br {
          user-select: none;
      }

      ::selection {
          background: #ff9a51;
          color: #101010;
      }

      ::-webkit-scrollbar {
        width: 0.75rem;
      }

      ::-webkit-scrollbar-track {
        background: #101010; 
      }
      
      ::-webkit-scrollbar-thumb {
        background: #c4c4c4;
        transition: background 100ms ease-in-out;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #ff9a51; 
      }
      </style>

      <link rel="modulepreload" as="script" href="/src/components/menu.mjs">
    </head>
    <body>
    <main>
      <div class="header">
        <a href="/"><img id="logo" src="/bin/logo.svg" draggable="false" /></a>
        <ltx-menu></ltx-menu>
      </div>
      <div class="content">
        <div class="launch-list">
            ${launches}
        </div>
      </div>
    </main>
    <script src="/src/components/menu.mjs" type="module"></script>
    </body>
    </html>
    `;
}
