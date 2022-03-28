let LitElement, html, css;

import("https://esm.sh/lit").then(ex => {
    LitElement = ex.LitElement, html = ex.html, css = ex.css;
    class LatestLaunch extends LitElement {

        static styles = css`
            .card {
                border: 3px solid #212121;
                border-radius: 10px;
                height: auto;
                position: relative;
                left: 50%;
                transform: translateX(-50%);
            }

            /* Desktop Portrait */
            @media only screen and (orientation: landscape) and (max-width: 1000px) {
                :root {
                    --content-catchphrase: 2.5rem;
                    --content-description: 1rem;
                    --tagline: 0.75rem;
                }

                #logo {
                    height: 65%;
                }

                .card {
                    width: 90%;
                }
            }

            /* Mobile Portrait */
            @media only screen and (orientation: portrait) and (max-width: 1000px) {
                :root {
                    --content-catchphrase: 2.5rem;
                    --content-description: 1rem;
                    --tagline: 0.75rem;
                }

                #logo {
                    height: 65%;
                }
            }

            /* Desktop Landscape */
            @media only screen and (orientation: landscape) and (min-width: 1000px) {
                :root {
                    --content-catchphrase: 4rem;
                    --content-description: 1.5rem;
                    --tagline: 1.25rem;
                }

                #logo {
                    height: 50%;
                }
            }
        `;

        launches() {
            fetch("/proxy/https://api-ltx.deno.dev/launches")
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                })
        }

        render() {
            this.launches();
            return html`
            <div class="card">
                t
            </div>
            `;
        }
    }
    customElements.get("latest-launch-card") || customElements.define("latest-launch-card", LatestLaunch);
})