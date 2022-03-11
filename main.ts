// deno-lint-ignore-file no-case-declarations
import { serve, ConnInfo } from "https://deno.land/std@0.128.0/http/server.ts"
import { createReporter } from "https://deno.land/x/g_a@0.1.2/mod.ts";
const ga = createReporter();

import { md } from "./src/markdown.ts";

async function handler(req: Request, conn: ConnInfo): Promise<Response> {
  const url = new URL(req.url);
  const path = url.pathname, _params = new URLSearchParams(url.search);
  const route = (route:string) => { const regexRoute = new RegExp(route, "gmi"); if(regexRoute.test(path)){ return path } else { return null }}
  const file = async (fp:string) => { const d = new TextDecoder("utf-8"); return d.decode(await Deno.readFile(fp))}

  let tr, rb, ct = "";

  switch(path){
    // paths
    case '/':
      tr = true, rb = await file("./src/index.html"), ct = "text/html; charset=UTF-8";
      break;
    case '/launches':
      tr = true, rb = `<a href="/"><- back</a>`, ct = "text/html; charset=UTF-8";
      break;
    case '/streams':
      tr = true, rb = `<a href="/"><- back</a>`, ct = "text/html; charset=UTF-8";
      break;
    case '/about':
      tr = true, rb = `<a href="/"><- back</a>`, ct = "text/html; charset=UTF-8";
      break;
    case '/wiki':
      tr = true, rb = `<a href="/"><- back</a>`, ct = "text/html; charset=UTF-8";
      break;
    case route('/wiki/.'):
      const mdPath = path.replace("/wiki/", "").replace(".md", "");
      tr = true, rb = md(mdPath), ct = "text/html; charset=UTF-8";
      break;

    // bin
    case '/bin/logo.svg':
      tr = true, rb = await file("./bin/logo.svg"), ct = "image/svg+xml";
      break;
    case '/bin/menu.svg':
      tr = true, rb = await file("./bin/menu.svg"), ct = "image/svg+xml";
      break;
    case '/bin/starship-diagram-back.svg':
      tr = true, rb = await file("./bin/starship-diagram-back.svg"), ct = "image/svg+xml";
      break;

    default:
      tr = true, rb = "404", ct = "text/html; charset=UTF-8";
  }

  let res;

  if(tr){
    res = new Response(await rb, { headers: { "content-type": ct } });
    ga(req, conn, res!, performance.now());
  } else {
    res = Response.redirect(await rb, 302);
  }
  return res!;
}

await serve(handler);