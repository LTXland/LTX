import { parse, stringify } from "https://deno.land/std@0.132.0/encoding/toml.ts";

const file = async (fp:string) => { const d = new TextDecoder("utf-8"); try { return d.decode(await Deno.readFile(fp))} catch { return d.decode(await Deno.readFile("./src/404.md")) }}

export const toml = async (src: string) => {
    src = await file(src);
    const toml = parse(src), string = stringify(toml);
    return `${string}`
}

export const tomlDate = async (src: string) => {
    src = await file(src);
    const toml = parse(src);
    return new Date(`${toml.date}`)
}

export const dates = async () => {
    const arr = [];
    for await(const f of Deno.readDir('./launches')) {
        if(!f.isFile) continue;
        arr.push(await tomlDate(`./launches/${f.name}`));
    }

    return arr.sort((a: Date, b: Date) => +a - +b)
}