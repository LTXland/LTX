import { assert } from "https://deno.land/std@0.126.0/testing/asserts.ts";

Deno.test({
    name: "/ responds with html",
    async fn() {
        const result = await fetch(`https://ltx.deno.dev`);
        const contentType = result.headers.get("Content-Type");
        assert(contentType);
        assert(contentType.includes("text/html"));
        await result.body?.cancel();
    },
});

/*Deno.test({
    name: "/launches responds with html",
    async fn() {
        const result = await fetch(`https://ltx.deno.dev/launches`);
        const contentType = result.headers.get("Content-Type");
        assert(contentType);
        assert(contentType.includes("text/html; charset=UTF-8"));
        await result.body?.cancel();
    },
});

Deno.test({
    name: "/streams responds with html",
    async fn() {
        const result = await fetch(`https://ltx.deno.dev/streams`);
        const contentType = result.headers.get("Content-Type");
        assert(contentType);
        assert(contentType.includes("text/html; charset=UTF-8"));
        await result.body?.cancel();
    },
});

Deno.test({
    name: "/about responds with html",
    async fn() {
        const result = await fetch(`https://ltx.deno.dev/about`);
        const contentType = result.headers.get("Content-Type");
        assert(contentType);
        assert(contentType.includes("text/html; charset=UTF-8"));
        await result.body?.cancel();
    },
});

Deno.test({
    name: "/wiki responds with html",
    async fn() {
        const result = await fetch(`https://ltx.deno.dev/wiki`);
        const contentType = result.headers.get("Content-Type");
        assert(contentType);
        assert(contentType.includes("text/html; charset=UTF-8"));
        await result.body?.cancel();
    },
});

Deno.test({
    name: "/wiki/template responds with html",
    async fn() {
        const result = await fetch(`https://ltx.deno.dev/wiki/template`);
        const contentType = result.headers.get("Content-Type");
        assert(contentType);
        assert(contentType.includes("text/html; charset=UTF-8"));
        await result.body?.cancel();
    },
});

Deno.test({
    name: "/wiki/template.md responds with html",
    async fn() {
        const result = await fetch(`https://ltx.deno.dev/wiki/template.md`);
        const contentType = result.headers.get("Content-Type");
        assert(contentType);
        assert(contentType.includes("text/html; charset=UTF-8"));
        await result.body?.cancel();
    },
});*/