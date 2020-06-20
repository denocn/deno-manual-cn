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
    'pagePath': "tools/dependency_inspector.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "tools/dependency_inspector.html",
    'title': "依赖检查器",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>依赖检查器</h1>\n<p><code>deno info [URL]</code> 会列出 ES 模块和它的所有依赖。</p>\n<pre class="language-shell"><code class="language-shell">deno info <a class="token url-link" href="https://deno.land/std@0.52.0/http/file_server.ts">https://deno.land/std@0.52.0/http/file_server.ts</a>\nDownload <a class="token url-link" href="https://deno.land/std@0.52.0/http/file_server.ts">https://deno.land/std@0.52.0/http/file_server.ts</a>\n<span class="token punctuation">..</span>.\nlocal: /Users/deno/Library/Caches/deno/deps/https/deno.land/5bd138988e9d20db1a436666628ffb3f7586934e0a2a9fe2a7b7bf4fb7f70b98\ntype: TypeScript\ncompiled: /Users/deno/Library/Caches/deno/gen/https/deno.land/std@0.52.0/http/file_server.ts.js\nmap: /Users/deno/Library/Caches/deno/gen/https/deno.land/std@0.52.0/http/file_server.ts.js.map\ndeps:\n<a class="token url-link" href="https://deno.land/std@0.52.0/http/file_server.ts">https://deno.land/std@0.52.0/http/file_server.ts</a>\n  ├─┬ <a class="token url-link" href="https://deno.land/std@0.52.0/path/mod.ts">https://deno.land/std@0.52.0/path/mod.ts</a>\n  │ ├─┬ <a class="token url-link" href="https://deno.land/std@0.52.0/path/win32.ts">https://deno.land/std@0.52.0/path/win32.ts</a>\n  │ │ ├── <a class="token url-link" href="https://deno.land/std@0.52.0/path/_constants.ts">https://deno.land/std@0.52.0/path/_constants.ts</a>\n  │ │ ├─┬ <a class="token url-link" href="https://deno.land/std@0.52.0/path/_util.ts">https://deno.land/std@0.52.0/path/_util.ts</a>\n  │ │ │ └── <a class="token url-link" href="https://deno.land/std@0.52.0/path/_constants.ts">https://deno.land/std@0.52.0/path/_constants.ts</a>\n  │ │ └─┬ <a class="token url-link" href="https://deno.land/std@0.52.0/testing/asserts.ts">https://deno.land/std@0.52.0/testing/asserts.ts</a>\n  │ │   ├── <a class="token url-link" href="https://deno.land/std@0.52.0/fmt/colors.ts">https://deno.land/std@0.52.0/fmt/colors.ts</a>\n  │ │   └── <a class="token url-link" href="https://deno.land/std@0.52.0/testing/diff.ts">https://deno.land/std@0.52.0/testing/diff.ts</a>\n  │ ├─┬ <a class="token url-link" href="https://deno.land/std@0.52.0/path/posix.ts">https://deno.land/std@0.52.0/path/posix.ts</a>\n  │ │ ├── <a class="token url-link" href="https://deno.land/std@0.52.0/path/_constants.ts">https://deno.land/std@0.52.0/path/_constants.ts</a>\n  │ │ └── <a class="token url-link" href="https://deno.land/std@0.52.0/path/_util.ts">https://deno.land/std@0.52.0/path/_util.ts</a>\n  │ ├─┬ <a class="token url-link" href="https://deno.land/std@0.52.0/path/common.ts">https://deno.land/std@0.52.0/path/common.ts</a>\n  │ │ └── <a class="token url-link" href="https://deno.land/std@0.52.0/path/separator.ts">https://deno.land/std@0.52.0/path/separator.ts</a>\n  │ ├── <a class="token url-link" href="https://deno.land/std@0.52.0/path/separator.ts">https://deno.land/std@0.52.0/path/separator.ts</a>\n  │ ├── <a class="token url-link" href="https://deno.land/std@0.52.0/path/interface.ts">https://deno.land/std@0.52.0/path/interface.ts</a>\n  │ └─┬ <a class="token url-link" href="https://deno.land/std@0.52.0/path/glob.ts">https://deno.land/std@0.52.0/path/glob.ts</a>\n  │   ├── <a class="token url-link" href="https://deno.land/std@0.52.0/path/separator.ts">https://deno.land/std@0.52.0/path/separator.ts</a>\n  │   ├── <a class="token url-link" href="https://deno.land/std@0.52.0/path/_globrex.ts">https://deno.land/std@0.52.0/path/_globrex.ts</a>\n  │   ├── <a class="token url-link" href="https://deno.land/std@0.52.0/path/mod.ts">https://deno.land/std@0.52.0/path/mod.ts</a>\n  │   └── <a class="token url-link" href="https://deno.land/std@0.52.0/testing/asserts.ts">https://deno.land/std@0.52.0/testing/asserts.ts</a>\n  ├─┬ <a class="token url-link" href="https://deno.land/std@0.52.0/http/server.ts">https://deno.land/std@0.52.0/http/server.ts</a>\n  │ ├── <a class="token url-link" href="https://deno.land/std@0.52.0/encoding/utf8.ts">https://deno.land/std@0.52.0/encoding/utf8.ts</a>\n  │ ├─┬ <a class="token url-link" href="https://deno.land/std@0.52.0/io/bufio.ts">https://deno.land/std@0.52.0/io/bufio.ts</a>\n  │ │ ├─┬ <a class="token url-link" href="https://deno.land/std@0.52.0/io/util.ts">https://deno.land/std@0.52.0/io/util.ts</a>\n  │ │ │ ├── <a class="token url-link" href="https://deno.land/std@0.52.0/path/mod.ts">https://deno.land/std@0.52.0/path/mod.ts</a>\n  │ │ │ └── <a class="token url-link" href="https://deno.land/std@0.52.0/encoding/utf8.ts">https://deno.land/std@0.52.0/encoding/utf8.ts</a>\n  │ │ └── <a class="token url-link" href="https://deno.land/std@0.52.0/testing/asserts.ts">https://deno.land/std@0.52.0/testing/asserts.ts</a>\n  │ ├── <a class="token url-link" href="https://deno.land/std@0.52.0/testing/asserts.ts">https://deno.land/std@0.52.0/testing/asserts.ts</a>\n  │ ├─┬ <a class="token url-link" href="https://deno.land/std@0.52.0/async/mod.ts">https://deno.land/std@0.52.0/async/mod.ts</a>\n  │ │ ├── <a class="token url-link" href="https://deno.land/std@0.52.0/async/deferred.ts">https://deno.land/std@0.52.0/async/deferred.ts</a>\n  │ │ ├── <a class="token url-link" href="https://deno.land/std@0.52.0/async/delay.ts">https://deno.land/std@0.52.0/async/delay.ts</a>\n  │ │ └─┬ <a class="token url-link" href="https://deno.land/std@0.52.0/async/mux_async_iterator.ts">https://deno.land/std@0.52.0/async/mux_async_iterator.ts</a>\n  │ │   └── <a class="token url-link" href="https://deno.land/std@0.52.0/async/deferred.ts">https://deno.land/std@0.52.0/async/deferred.ts</a>\n  │ └─┬ <a class="token url-link" href="https://deno.land/std@0.52.0/http/_io.ts">https://deno.land/std@0.52.0/http/_io.ts</a>\n  │   ├── <a class="token url-link" href="https://deno.land/std@0.52.0/io/bufio.ts">https://deno.land/std@0.52.0/io/bufio.ts</a>\n  │   ├─┬ <a class="token url-link" href="https://deno.land/std@0.52.0/textproto/mod.ts">https://deno.land/std@0.52.0/textproto/mod.ts</a>\n  │   │ ├── <a class="token url-link" href="https://deno.land/std@0.52.0/io/util.ts">https://deno.land/std@0.52.0/io/util.ts</a>\n  │   │ ├─┬ <a class="token url-link" href="https://deno.land/std@0.52.0/bytes/mod.ts">https://deno.land/std@0.52.0/bytes/mod.ts</a>\n  │   │ │ └── <a class="token url-link" href="https://deno.land/std@0.52.0/io/util.ts">https://deno.land/std@0.52.0/io/util.ts</a>\n  │   │ └── <a class="token url-link" href="https://deno.land/std@0.52.0/encoding/utf8.ts">https://deno.land/std@0.52.0/encoding/utf8.ts</a>\n  │   ├── <a class="token url-link" href="https://deno.land/std@0.52.0/testing/asserts.ts">https://deno.land/std@0.52.0/testing/asserts.ts</a>\n  │   ├── <a class="token url-link" href="https://deno.land/std@0.52.0/encoding/utf8.ts">https://deno.land/std@0.52.0/encoding/utf8.ts</a>\n  │   ├── <a class="token url-link" href="https://deno.land/std@0.52.0/http/server.ts">https://deno.land/std@0.52.0/http/server.ts</a>\n  │   └── <a class="token url-link" href="https://deno.land/std@0.52.0/http/http_status.ts">https://deno.land/std@0.52.0/http/http_status.ts</a>\n  ├─┬ <a class="token url-link" href="https://deno.land/std@0.52.0/flags/mod.ts">https://deno.land/std@0.52.0/flags/mod.ts</a>\n  │ └── <a class="token url-link" href="https://deno.land/std@0.52.0/testing/asserts.ts">https://deno.land/std@0.52.0/testing/asserts.ts</a>\n  └── <a class="token url-link" href="https://deno.land/std@0.52.0/testing/asserts.ts">https://deno.land/std@0.52.0/testing/asserts.ts</a>\n</code></pre>\n<p>依赖检查器对本地或远程的任意 ES 模块都有效。</p>\n<h1>缓存位置</h1>\n<p><code>deno info</code> 可以用来显示与缓存位置有关的信息：</p>\n<pre class="language-shell"><code class="language-shell">deno info\nDENO_DIR location: <span class="token string">"/Users/deno/Library/Caches/deno"</span>\nRemote modules cache: <span class="token string">"/Users/deno/Library/Caches/deno/deps"</span>\nTypeScript compiler cache: <span class="token string">"/Users/deno/Library/Caches/deno/gen"</span>\n</code></pre>\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/main.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol></ol></nav>'
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
