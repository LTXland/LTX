let LitElement, html, css;

import { until } from "https://esm.sh/lit/directives/until.js";

import("https://esm.sh/lit").then(ex => {
    LitElement = ex.LitElement, html = ex.html, css = ex.css;
    class LatestLaunch extends LitElement {

        static styles = css`
            .card {
                border: 3px solid #212121;
                border-radius: 10px;
                height: max-content;
                position: relative;
                left: 50%;
                transform: translateX(-50%);
            }

            .card-cover img {
                position: absolute;
                width: 100%;
                height: min-content;
                z-index: 0;
            }

            .card-content {
                position: absolute;
                background-color: #212121;
                z-index: 2;
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

                .card {
                    width: 85%;
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

                .card {
                    width: 65%;
                }
            }
        `;

        async launches() {
            const latest = await fetch("/proxy/https://api-ltx.deno.dev/launches")
                .then(res => res.json())
                .then(res => {
                    return res
                })
            
            return html`
            <div class="card-cover">
                <div class="card-content">
                    <div class="card-content-title">${latest.title}</div>
                </div>
                <img src="${latest.cover ? latest.cover : "https://via.placeholder.com/1920x1080/212121/e0e0e0.webp"}" alt="cover">
            </div>
            `
        }

        render() {
            this.launches();
            return html`
            <div class="card">
                ${until(this.launches(), html`loading`)}
            </div>
            `;
        }
    }
    customElements.get("latest-launch-card") || customElements.define("latest-launch-card", LatestLaunch);
})