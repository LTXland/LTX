import { Marked } from "https://deno.land/x/markdown@v2.0.0/mod.ts";

const file = async (fp:string) => { const d = new TextDecoder("utf-8"); return d.decode(await Deno.readFile(fp))}

export const md = async (src: string) => {
    return `
    <head>
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter&family=Roboto+Mono:ital@0;1&display=swap" rel="stylesheet">
      <style>
        @media only screen and (min-width: 600px) {
          html {
            padding-left: 2rem;
            padding-right: 2rem;
            padding-bottom: 2rem;
          }
          body {
            background: #101010;
            text-align: justify;
            font-size: 1.25rem;
          }
          h1 {
            color: #f0f0f0;
            font-family: Archivo Black;
            font-size: 4rem;
          }

          h2 {
            color: #e0e0e0;
            font-family: Archivo Black;
            font-size: 3rem;
          }

          h3 {
            color: #d0d0d0;
            font-family: Archivo Black;
            font-size: 2rem;
          }

          h4, h5, h6 {
            color: #c4c4c4;
            font-family: Archivo Black;
          }

          p, ul, ol, table, body {
            color: #c4c4c4;
            font-family: Inter;
          }

          table {
            border-color: #212121;
          }

          blockquote {
            border-left: 2px solid #212121;
            margin: 2px 10px;
            padding: 2px 10px;
            font-family: Inter;
          }

          code {
            color: #e0e0e0;
          }

          a { 
            color: #FF9A51;
          }
        }

        @media only screen and (max-width: 600px) {
          html {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
            padding-bottom: 0.75rem;
          }
          body {
            background: #101010;
            text-align: justify;
            font-size: 1.25rem;
          }
          h1 {
            color: #f0f0f0;
            font-family: Archivo Black;
            font-size: 3rem;
          }
  
          h2 {
            color: #e0e0e0;
            font-family: Archivo Black;
            font-size: 2.5rem;
          }
  
          h3 {
            color: #d0d0d0;
            font-family: Archivo Black;
            font-size: 1.75rem;
          }
  
          h4, h5, h6 {
            color: #c4c4c4;
            font-family: Archivo Black;
          }
  
          p, ul, ol, table, body {
            color: #c4c4c4;
            font-family: Inter;
            font-size: 1.25rem;
          }
  
          table {
            border-color: #212121;
          }
  
          blockquote {
            border-left: 2px solid #212121;
            margin: 2px 10px;
            padding: 2px 10px;
            font-family: Inter;
            font-size: 1.25rem;
          }
  
          code {
            color: #e0e0e0;
            font-size: 1.25rem;
          }
  
          a { 
            color: #FF9A51;
          }
        }
      </style>
    </head>
    <body>
      ${Marked.parse(await file(`./wiki/${src}.md`)).content}
    </body>
    `;
}