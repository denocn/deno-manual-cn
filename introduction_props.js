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
                    "getting_started/command_line_interface.md",
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
                "link": "testing.md",
                "children": [
                    "testing/assertions.md"
                ]
            },
            {
                "link": "tools.md",
                "children": [
                    "tools/debugger.md",
                    "tools/script_installer.md",
                    "tools/formatter.md",
                    "tools/bundler.md",
                    "tools/documentation_generator.md",
                    "tools/dependency_inspector.md",
                    "tools/linter.md"
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
    'pagePath': "introduction.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "introduction.html",
    'title': "介绍",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>介绍</h1>\n<blockquote>\n<p><a href="https://github.com/Nugine/deno-manual-cn/" rel="noopener noreferrer" target="_blank" style="display:inline-flex;align-items:center"><span style="margin-right:1em">deno-manual-cn</span><img alt="GitHub stars" src="https://img.shields.io/github/stars/Nugine/deno-manual-cn?style=social"> </a></p>\n<p>此版本更新于 2020 年 7 月 12 日 <a href="https://github.com/denoland/deno/tree/871f9255e37b4d2e63439c84da8e9bed6b388034">deno @ 871f925</a></p>\n</blockquote>\n<p>Deno 是一个 JavaScript/TypeScript 的运行时，默认使用安全环境执行代码，有着卓越的开发体验。</p>\n<p>Deno 建立在 V8、Rust 和 Tokio 的基础上。</p>\n<h2 id="%E5%8A%9F%E8%83%BD%E4%BA%AE%E7%82%B9">功能亮点<a class="anchor" href="#%E5%8A%9F%E8%83%BD%E4%BA%AE%E7%82%B9">§</a></h2>\n<ul>\n<li>\n<p>默认安全。外部代码没有文件系统、网络、环境的访问权限，除非显式开启。</p>\n</li>\n<li>\n<p>支持开箱即用的 TypeScript 的环境。</p>\n</li>\n<li>\n<p>只分发一个独立的可执行文件 (<code>deno</code>)。</p>\n</li>\n<li>\n<p>有着内建的工具箱，比如一个依赖信息查看器 (<code>deno info</code>) 和一个代码格式化工具 (<code>deno fmt</code>)。</p>\n</li>\n<li>\n<p>有一组经过审计的 <a href="https://github.com/denoland/deno/tree/master/std">标准模块</a>，保证能在 Deno 上工作。</p>\n</li>\n<li>\n<p>脚本代码能被打包为一个单独的 JavaScript 文件。</p>\n</li>\n</ul>\n<h2 id="%E5%93%B2%E5%AD%A6">哲学<a class="anchor" href="#%E5%93%B2%E5%AD%A6">§</a></h2>\n<p>Deno 旨在为现代程序员提供高效、安全的脚本环境。</p>\n<p>它将始终作为单个可执行文件分发，并且该可执行文件将能运行任何 Deno 程序。给定一个 Deno 程序的 URL，您应该能够用压缩后不超过 15 MB 的 Deno 可执行文件运行它。</p>\n<p>Deno 明确地承担了运行时和包管理器的角色。它使用标准的浏览器兼容协议(URL)来加载模块。</p>\n<p>对于过去用 bash 或 python 编写的工具脚本来说，Deno 是一个优秀的替代品。</p>\n<h2 id="%E7%9B%AE%E6%A0%87">目标<a class="anchor" href="#%E7%9B%AE%E6%A0%87">§</a></h2>\n<ul>\n<li>\n<p>只分发一个独立的可执行文件 (<code>deno</code>)。</p>\n</li>\n<li>\n<p>默认安全。外部代码没有文件系统、网络、环境的访问权限，除非显式开启。</p>\n</li>\n<li>\n<p>浏览器兼容：完全用 JavaScript 编写且不使用全局<code>Deno</code>命名空间(或功能测试)的程序是 Deno 程序的子集，应该能够直接在现代浏览器中运行而无需更改。</p>\n</li>\n<li>\n<p>提供内置工具来提升开发体验，比如单元测试、代码格式化、代码检查。</p>\n</li>\n<li>\n<p>不把 V8 的概念泄露到用户空间。</p>\n</li>\n<li>\n<p>能够高效地提供 HTTP 服务</p>\n</li>\n</ul>\n<h2 id="%E4%B8%8E-node.js-%E7%9A%84%E6%AF%94%E8%BE%83">与 Node.js 的比较<a class="anchor" href="#%E4%B8%8E-node.js-%E7%9A%84%E6%AF%94%E8%BE%83">§</a></h2>\n<ul>\n<li>\n<p>Deno 不使用 <code>npm</code>，而是使用 URL 或文件路径引用模块。</p>\n</li>\n<li>\n<p>Deno 在模块解析算法中不使用 <code>package.json</code>。</p>\n</li>\n<li>\n<p>Deno 中的所有异步操作返回 promise，因此 Deno 提供与 Node 不同的 API。</p>\n</li>\n<li>\n<p>Deno 需要显式指定文件、网络和环境权限。</p>\n</li>\n<li>\n<p>当未捕获的错误发生时，Deno 总是会异常退出。</p>\n</li>\n<li>\n<p>使用 ES 模块，不支持 <code>require()</code>。第三方模块通过 URL 导入。</p>\n<pre class="language-javascript"><code class="language-javascript"><span class="token keyword module">import</span> <span class="token operator">*</span> <span class="token keyword module">as</span> log <span class="token keyword module">from</span> <span class="token string">"<a class="token url-link" href="https://deno.land/std/log/mod.ts">https://deno.land/std/log/mod.ts</a>"</span><span class="token punctuation">;</span>\n</code></pre>\n</li>\n</ul>\n<h2 id="%E5%85%B6%E4%BB%96%E5%85%B3%E9%94%AE%E8%A1%8C%E4%B8%BA">其他关键行为<a class="anchor" href="#%E5%85%B6%E4%BB%96%E5%85%B3%E9%94%AE%E8%A1%8C%E4%B8%BA">§</a></h2>\n<ul>\n<li>\n<p>远程代码在第一次运行时获取并缓存，直到代码通过 <code>--reload</code> 选项运行。（所以它在飞机上也能工作）</p>\n</li>\n<li>\n<p>从远程 URL 加载的模块或文件应当是不可变且可缓存的。</p>\n</li>\n</ul>\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/main.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E5%8A%9F%E8%83%BD%E4%BA%AE%E7%82%B9">功能亮点</a></li><li><a href="#%E5%93%B2%E5%AD%A6">哲学</a></li><li><a href="#%E7%9B%AE%E6%A0%87">目标</a></li><li><a href="#%E4%B8%8E-node.js-%E7%9A%84%E6%AF%94%E8%BE%83">与 Node.js 的比较</a></li><li><a href="#%E5%85%B6%E4%BB%96%E5%85%B3%E9%94%AE%E8%A1%8C%E4%B8%BA">其他关键行为</a></li></ol></nav>'
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
                    "text": "命令行界面",
                    "link": "getting_started/command_line_interface.html"
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
                    "text": "WebAssembly 支持",
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
            "children": [
                {
                    "text": "断言",
                    "link": "testing/assertions.html"
                }
            ],
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
                },
                {
                    "text": "Linter",
                    "link": "tools/linter.html"
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
                    "text": "文件系统事件",
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
