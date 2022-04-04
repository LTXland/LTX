let LitElement, html, css;

import("https://esm.sh/lit").then(ex => {
    LitElement = ex.LitElement, html = ex.html, css = ex.css;
    class Article extends LitElement {
        static styles = css`
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
          `;
        
        async getArticle(){
            console.log(location.pathname);
            const article = await fetch(`https://api-ltx.deno.dev${location.pathname}`).then(res => res.text())
            this.shadowRoot.children[0].innerHTML = article;
        }

        render() {
            this.getArticle();
            return html`
            <div id="article"></div>
            `;
        }
    }
    customElements.get("wiki-article") || customElements.define("wiki-article", Article);
})