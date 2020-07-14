import { toc } from "./toc.js";
export default {
    srcDir: ".",
    ignore: [
        /\/public\//,
        /\/\.github\//,
        /\/\.git\//,
        /\/\.vscode\//,
        /\/LICENSE/,
        /\/pagic\.config\.ts/,
        /\/toc\.ts/,
    ],
    theme: "docs",
    plugins: ["sidebar", "script", "ga"],
    title: "Deno 手册",
    sidebar: toc,
    nav: [
        {
            text: "GitHub",
            link: "https://github.com/denocn/deno_manual",
        },
        {
            text: "社区",
            link: "http://deno.js.cn",
        },
    ],
    ga: {
        id: "UA-123999279-4",
    },
};
