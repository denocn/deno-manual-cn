import Ga from '/_ga.js';
export default {
    'config': {
        "srcDir": ".",
        "publicDir": "public",
        "ignore": [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        "base": "/",
        "theme": "docs",
        "plugins": [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
        ],
        "watch": false,
        "serve": false,
        "port": 8000,
        "title": "Deno 手册",
        "sidebar": [
            "README.md",
            "introduction.md",
            {
                "link": "getting_started.md",
                "children": [
                    "getting_started/installation.md",
                    "getting_started/setup_your_environment.md",
                    "getting_started/first_steps.md",
                    "getting_started/permissions.md",
                    "getting_started/typescript.md",
                    "getting_started/webassembly.md"
                ]
            },
            {
                "link": "runtime.md",
                "children": [
                    "runtime/stability.md",
                    "runtime/program_lifecycle.md",
                    "runtime/compiler_apis.md",
                    "runtime/workers.md"
                ]
            },
            {
                "link": "linking_to_external_code.md",
                "children": [
                    "linking_to_external_code/reloading_modules.md",
                    "linking_to_external_code/integrity_checking.md",
                    "linking_to_external_code/proxies.md",
                    "linking_to_external_code/import_maps.md"
                ]
            },
            {
                "link": "standard_library.md"
            },
            {
                "link": "testing.md"
            },
            {
                "link": "tools.md",
                "children": [
                    "tools/debugger.md",
                    "tools/script_installer.md",
                    "tools/formatter.md",
                    "tools/bundler.md",
                    "tools/documentation_generator.md",
                    "tools/dependency_inspector.md"
                ]
            },
            {
                "link": "embedding_deno.md"
            },
            {
                "link": "contributing.md",
                "children": [
                    "contributing/building_from_source.md",
                    "contributing/development_tools.md",
                    "contributing/style_guide.md",
                    "contributing/architecture.md"
                ]
            },
            {
                "link": "examples.md",
                "children": [
                    "examples/unix_cat.md",
                    "examples/file_server.md",
                    "examples/tcp_echo.md",
                    "examples/subprocess.md",
                    "examples/permissions.md",
                    "examples/os_signals.md",
                    "examples/file_system_events.md",
                    "examples/testing_if_main.md"
                ]
            }
        ],
        "nav": [
            {
                "text": "GitHub",
                "link": "https://github.com/denocn/deno_manual"
            },
            {
                "text": "社区",
                "link": "http://deno.js.cn"
            }
        ],
        "ga": {
            "id": "UA-123999279-4"
        }
    },
    'pagePath': "linking_to_external_code.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "linking_to_external_code.html",
    'title': "与外部代码连接",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>与外部代码连接</h1>\n<p>在 <a href="./getting_started.html">入门</a> 章节中，我们看到 Deno 能够从 URL 执行脚本。像浏览器中的 JavaScript 一样，Deno 可以从 URL 直接导入代码库。</p>\n<p>这个示例使用 URL 来导入一个断言库：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> assertEquals <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"<a class="token url-link" href="https://deno.land/std/testing/asserts.ts">https://deno.land/std/testing/asserts.ts</a>"</span><span class="token punctuation">;</span>\n\n<span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">,</span> <span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token string">"world"</span><span class="token punctuation">,</span> <span class="token string">"world"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Asserted! 🎉"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>尝试运行一下：</p>\n<pre class="language-shell"><code class="language-shell">$ deno run test.ts\nCompile <a class="token url-link" href="file:///mnt/f9/Projects/github.com/denoland/deno/docs/test.ts">file:///mnt/f9/Projects/github.com/denoland/deno/docs/test.ts</a>\nDownload <a class="token url-link" href="https://deno.land/std/testing/asserts.ts">https://deno.land/std/testing/asserts.ts</a>\nDownload <a class="token url-link" href="https://deno.land/std/fmt/colors.ts">https://deno.land/std/fmt/colors.ts</a>\nDownload <a class="token url-link" href="https://deno.land/std/testing/diff.ts">https://deno.land/std/testing/diff.ts</a>\nAsserted<span class="token operator">!</span> 🎉\n</code></pre>\n<p>对于这个程序，我们不需要提供 <code>--allow-net</code> 选项。当它访问网络时，Deno 运行时有着特殊权限来下载模块并缓存到磁盘。</p>\n<p>Deno 在一个特殊目录缓存了远程模块，该路径可以被 <code>$DENO_DIR</code> 指定，如果没有指定，默认为系统缓存目录。下一次运行这个程序时无需下载。如果这个程序没有改动，它不会被再次编译。</p>\n<p>系统缓存目录默认为：</p>\n<ul>\n<li>Linux/Redox: <code>$XDG_CACHE_HOME/deno</code> or <code>$HOME/.cache/deno</code></li>\n<li>Windows: <code>%LOCALAPPDATA%/deno</code> (<code>%LOCALAPPDATA%</code> = <code>FOLDERID_LocalAppData</code>)</li>\n<li>macOS: <code>$HOME/Library/Caches/deno</code></li>\n</ul>\n<p>如果失败，该路径设置为 <code>$HOME/.deno</code>。</p>\n<h2 id="faq">FAQ<a class="anchor" href="#faq">§</a></h2>\n<h3 id="%E5%A6%82%E4%BD%95%E5%AF%BC%E5%85%A5%E7%89%B9%E5%AE%9A%E7%89%88%E6%9C%AC%EF%BC%9F">如何导入特定版本？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E5%AF%BC%E5%85%A5%E7%89%B9%E5%AE%9A%E7%89%88%E6%9C%AC%EF%BC%9F">§</a></h3>\n<p>只需在 URL 中指定版本。举个例子，这个 URL 指定了要运行的版本 <code>https://unpkg.com/liltest@0.0.5/dist/liltest.js</code>。</p>\n<h3 id="%E5%88%B0%E5%A4%84%E5%AF%BC%E5%85%A5-url-%E4%BC%BC%E4%B9%8E%E5%BE%88%E9%BA%BB%E7%83%A6">到处导入 URL 似乎很麻烦<a class="anchor" href="#%E5%88%B0%E5%A4%84%E5%AF%BC%E5%85%A5-url-%E4%BC%BC%E4%B9%8E%E5%BE%88%E9%BA%BB%E7%83%A6">§</a></h3>\n<blockquote>\n<p>如果其中一个 URL 链接到一个完全不同的库版本，该怎么办？</p>\n</blockquote>\n<blockquote>\n<p>在大型项目中到处维护 URL 是否容易出错？</p>\n</blockquote>\n<p>解决办法是在一个中心化的 <code>deps.ts</code> 中重新导出所依赖的外部库，它和 Node 的 <code>package.json</code> 具有相同的作用。</p>\n<p>举个例子，您正在一个大型项目中使用一个断言库，您可以创建一个 <code>deps.ts</code> 文件来导出第三方代码，而不是到处导入 <code>&quot;https://deno.land/std/testing/asserts.ts&quot;</code>。</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">export</span> <span class="token punctuation">{</span>\n  assert<span class="token punctuation">,</span>\n  assertEquals<span class="token punctuation">,</span>\n  assertStrContains<span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"<a class="token url-link" href="https://deno.land/std/testing/asserts.ts">https://deno.land/std/testing/asserts.ts</a>"</span><span class="token punctuation">;</span>\n</code></pre>\n<p>在这个项目中，您可以从 <code>deps.ts</code> 导入，避免对相同的 URL 产生过多引用。</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> assertEquals<span class="token punctuation">,</span> runTests<span class="token punctuation">,</span> test <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./deps.ts"</span><span class="token punctuation">;</span>\n</code></pre>\n<p>这种设计避免了由包管理软件、集中的代码存储库和多余的文件格式所产生的大量复杂性。</p>\n<h3 id="%E5%A6%82%E4%BD%95%E4%BF%A1%E4%BB%BB%E5%8F%AF%E8%83%BD%E6%9B%B4%E6%94%B9%E7%9A%84-url%EF%BC%9F">如何信任可能更改的 URL？<a class="anchor" href="#%E5%A6%82%E4%BD%95%E4%BF%A1%E4%BB%BB%E5%8F%AF%E8%83%BD%E6%9B%B4%E6%94%B9%E7%9A%84-url%EF%BC%9F">§</a></h3>\n<p>使用 <code>--lock</code> 命令行选项，通过一个锁文件 (lock file)，您可以确保从一个 URL 下载的代码和初始开发时一样。更多信息请看 <a href="./linking_to_external_code/integrity_checking.html">这里</a>。</p>\n<h3 id="%E5%A6%82%E6%9E%9C%E4%BE%9D%E8%B5%96%E5%AE%95%E6%9C%BA%E6%80%8E%E4%B9%88%E5%8A%9E%EF%BC%9F%E6%BA%90%E4%BB%A3%E7%A0%81%E5%B0%86%E4%B8%8D%E5%86%8D%E5%8F%AF%E7%94%A8%E3%80%82">如果依赖宕机怎么办？源代码将不再可用。<a class="anchor" href="#%E5%A6%82%E6%9E%9C%E4%BE%9D%E8%B5%96%E5%AE%95%E6%9C%BA%E6%80%8E%E4%B9%88%E5%8A%9E%EF%BC%9F%E6%BA%90%E4%BB%A3%E7%A0%81%E5%B0%86%E4%B8%8D%E5%86%8D%E5%8F%AF%E7%94%A8%E3%80%82">§</a></h3>\n<p>像上面一样，这是 <em>任何</em> 远程依赖系统都要面对的问题。</p>\n<p>依赖外部服务在开发时很方便，但在生产环境很脆弱。生产级软件总是应该打包 (vendor) 所有依赖。</p>\n<p>在 Node 中，这需要将 <code>node_modules</code> 检入版本控制系统。</p>\n<p>在 Deno 中，这需要在运行时将 <code>$DENO_DIR</code> 指向项目内的目录，同样把依赖检入版本控制系统。</p>\n<pre class="language-shell"><code class="language-shell"><span class="token comment"># 下载依赖</span>\n<span class="token assign-left variable">DENO_DIR</span><span class="token operator">=</span>./deno_dir deno cache src/deps.ts\n\n<span class="token comment"># 确保需要缓存的任何命令都设置了 `DENO_DIR` 变量</span>\n<span class="token assign-left variable">DENO_DIR</span><span class="token operator">=</span>./deno_dir deno <span class="token builtin class-name">test</span> src\n\n<span class="token comment"># 将缓存目录检入版本控制</span>\n<span class="token function">git</span> <span class="token function">add</span> -u deno_dir\n<span class="token function">git</span> commit\n</code></pre>\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/main.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#faq">FAQ</a><ol><li><a href="#%E5%A6%82%E4%BD%95%E5%AF%BC%E5%85%A5%E7%89%B9%E5%AE%9A%E7%89%88%E6%9C%AC%EF%BC%9F">如何导入特定版本？</a></li><li><a href="#%E5%88%B0%E5%A4%84%E5%AF%BC%E5%85%A5-url-%E4%BC%BC%E4%B9%8E%E5%BE%88%E9%BA%BB%E7%83%A6">到处导入 URL 似乎很麻烦</a></li><li><a href="#%E5%A6%82%E4%BD%95%E4%BF%A1%E4%BB%BB%E5%8F%AF%E8%83%BD%E6%9B%B4%E6%94%B9%E7%9A%84-url%EF%BC%9F">如何信任可能更改的 URL？</a></li><li><a href="#%E5%A6%82%E6%9E%9C%E4%BE%9D%E8%B5%96%E5%AE%95%E6%9C%BA%E6%80%8E%E4%B9%88%E5%8A%9E%EF%BC%9F%E6%BA%90%E4%BB%A3%E7%A0%81%E5%B0%86%E4%B8%8D%E5%86%8D%E5%8F%AF%E7%94%A8%E3%80%82">如果依赖宕机怎么办？源代码将不再可用。</a></li></ol></li></ol></nav>'
        } }),
    'sidebar': [
        {
            "text": "Deno 中文手册",
            "link": "index.html"
        },
        {
            "text": "介绍",
            "link": "introduction.html"
        },
        {
            "link": "getting_started.html",
            "children": [
                {
                    "text": "安装",
                    "link": "getting_started/installation.html"
                },
                {
                    "text": "设置您的环境",
                    "link": "getting_started/setup_your_environment.html"
                },
                {
                    "text": "第一步",
                    "link": "getting_started/first_steps.html"
                },
                {
                    "text": "权限",
                    "link": "getting_started/permissions.html"
                },
                {
                    "text": "使用 TypeScript",
                    "link": "getting_started/typescript.html"
                },
                {
                    "text": "WASM 支持",
                    "link": "getting_started/webassembly.html"
                }
            ],
            "text": "入门"
        },
        {
            "link": "runtime.html",
            "children": [
                {
                    "text": "稳定性",
                    "link": "runtime/stability.html"
                },
                {
                    "text": "程序生命周期",
                    "link": "runtime/program_lifecycle.html"
                },
                {
                    "text": "编译器 API",
                    "link": "runtime/compiler_apis.html"
                },
                {
                    "text": "Worker",
                    "link": "runtime/workers.html"
                }
            ],
            "text": "运行时"
        },
        {
            "link": "linking_to_external_code.html",
            "children": [
                {
                    "text": "重新加载特定的模块",
                    "link": "linking_to_external_code/reloading_modules.html"
                },
                {
                    "text": "完整性检查与锁定文件",
                    "link": "linking_to_external_code/integrity_checking.html"
                },
                {
                    "text": "代理（Proxies）",
                    "link": "linking_to_external_code/proxies.html"
                },
                {
                    "text": "导入映射（Import maps）",
                    "link": "linking_to_external_code/import_maps.html"
                }
            ],
            "text": "与外部代码连接"
        },
        {
            "link": "standard_library.html",
            "text": "标准库"
        },
        {
            "link": "testing.html",
            "text": "测试"
        },
        {
            "link": "tools.html",
            "children": [
                {
                    "text": "调试器 (debugger)",
                    "link": "tools/debugger.html"
                },
                {
                    "text": "脚本安装器",
                    "link": "tools/script_installer.html"
                },
                {
                    "text": "代码格式化",
                    "link": "tools/formatter.html"
                },
                {
                    "text": "打包",
                    "link": "tools/bundler.html"
                },
                {
                    "text": "文档生成器",
                    "link": "tools/documentation_generator.html"
                },
                {
                    "text": "依赖检查器",
                    "link": "tools/dependency_inspector.html"
                }
            ],
            "text": "内置工具"
        },
        {
            "link": "embedding_deno.html",
            "text": "嵌入式 Deno"
        },
        {
            "link": "contributing.html",
            "children": [
                {
                    "text": "从源码构建",
                    "link": "contributing/building_from_source.html"
                },
                {
                    "text": "测试和工具",
                    "link": "contributing/development_tools.html"
                },
                {
                    "text": "Deno 风格指南",
                    "link": "contributing/style_guide.html"
                },
                {
                    "text": "内部细节",
                    "link": "contributing/architecture.html"
                }
            ],
            "text": "贡献"
        },
        {
            "link": "examples.html",
            "children": [
                {
                    "text": "Unix cat",
                    "link": "examples/unix_cat.html"
                },
                {
                    "text": "文件服务器",
                    "link": "examples/file_server.html"
                },
                {
                    "text": "TCP echo",
                    "link": "examples/tcp_echo.html"
                },
                {
                    "text": "运行子进程",
                    "link": "examples/subprocess.html"
                },
                {
                    "text": "检查与放弃权限",
                    "link": "examples/permissions.html"
                },
                {
                    "text": "处理系统信号",
                    "link": "examples/os_signals.html"
                },
                {
                    "link": "examples/file_system_events.html"
                },
                {
                    "text": "测试当前文件是否为主程序",
                    "link": "examples/testing_if_main.html"
                }
            ],
            "text": "示例"
        }
    ],
    'ga': React.createElement(Ga, { id: "UA-123999279-4" })
};
