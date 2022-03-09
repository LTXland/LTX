// deno-lint-ignore-file no-case-declarations
import { serve } from "https://deno.land/std@0.128.0/http/server.ts";
import { Marked } from "https://deno.land/x/markdown@v2.0.0/mod.ts";

async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const path = url.pathname, _params = new URLSearchParams(url.search);
  const route = (route:string) => { const regexRoute = new RegExp(route, "gmi"); if(regexRoute.test(path)){ return path } else { return null }}
  const file = async (fp:string) => { const d = new TextDecoder("utf-8"); return d.decode(await Deno.readFile(fp))}

  let tr, rb, ct = "";

  switch(path){
    case '/':
      tr = true, rb = await file("./src/index.html"), ct = "text/html; charset=UTF-8";
      break;
    
    case route('/info/.'):
      const mdPath = path.replace("/info/", "").replace(".md", "");
      tr = true, rb = `
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@700&family=Inter&display=swap" rel="stylesheet">
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
              font-family: Archivo;
              font-size: 4rem;
            }

            h2 {
              color: #e0e0e0;
              font-family: Archivo;
              font-size: 3rem;
            }

            h3 {
              color: #d0d0d0;
              font-family: Archivo;
              font-size: 2rem;
            }

            h4, h5, h6 {
              color: #c4c4c4;
              font-family: Archivo;
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
              font-family: Archivo;
              font-size: 3rem;
            }
    
            h2 {
              color: #e0e0e0;
              font-family: Archivo;
              font-size: 2.5rem;
            }
    
            h3 {
              color: #d0d0d0;
              font-family: Archivo;
              font-size: 1.75rem;
            }
    
            h4, h5, h6 {
              color: #c4c4c4;
              font-family: Archivo;
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
        ${Marked.parse(await file(`./md/${mdPath}.md`)).content}
      </body>
      `, ct = "text/html; charset=UTF-8";
      break;

    default:
      tr = true, rb = "404", ct = "text/html; charset=UTF-8";
  }

  let res;

  if(tr){
    res = new Response(rb, { headers: { "content-type": ct } });
  } else {
    res = Response.redirect(rb, 302);
  }
  return res;
}

await serve(handler);