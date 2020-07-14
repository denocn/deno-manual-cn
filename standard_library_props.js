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
    'pagePath': "standard_library.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "standard_library.html",
    'title': "标准库",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>标准库</h1>\n<p>Deno 提供一组标准模块，它们经过核心团队审计，保证能在 Deno 上工作。</p>\n<p>标准库地址：<a href="https://deno.land/std/">https://deno.land/std/</a></p>\n<h2 id="%E7%89%88%E6%9C%AC%E5%92%8C%E7%A8%B3%E5%AE%9A%E6%80%A7">版本和稳定性<a class="anchor" href="#%E7%89%88%E6%9C%AC%E5%92%8C%E7%A8%B3%E5%AE%9A%E6%80%A7">§</a></h2>\n<p>标准库尚不稳定，因此采用与 Deno 不同的版本号。每次 Deno 发布时，标准库也会一起发布。</p>\n<p>最新的发布请查阅 <a href="https://deno.land/std/">https://deno.land/std/</a> 或 <a href="https://deno.land/std/version.ts">https://deno.land/std/version.ts</a>。</p>\n<p>我们强烈建议：始终使用确定版本的标准库，以避免意外的改动。</p>\n<p>例如，连接到随时可能更改的主分支时可能会导致编译错误或意外行为：</p>\n<pre class="language-typescript"><code class="language-typescript"><span class="token comment">// 从 master 导入，这应当避免</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> copy <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"<a class="token url-link" href="https://deno.land/std/fs/copy.ts">https://deno.land/std/fs/copy.ts</a>"</span><span class="token punctuation">;</span>\n</code></pre>\n<p>更好的选择是使用不可变且不会更改的 std 库版本：</p>\n<pre class="language-typescript"><code class="language-typescript"><span class="token comment">// 从不可变的 std v0.50.0 导入</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> copy <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"<a class="token url-link" href="https://deno.land/std@0.50.0/fs/copy.ts">https://deno.land/std@0.50.0/fs/copy.ts</a>"</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="%E6%8E%92%E9%94%99-(troubleshooting)">排错 (Troubleshooting)<a class="anchor" href="#%E6%8E%92%E9%94%99-(troubleshooting)">§</a></h2>\n<p>标准库中的一些模块使用了不稳定的 Deno API。</p>\n<p>不用 <code>--unstable</code> 命令行选项运行这些模块会产生一些 TypeScript 错误，表示 <code>Deno</code> 命名空间中不存在一些 API：</p>\n<pre class="language-typescript"><code class="language-typescript"><span class="token comment">// main.ts</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> copy <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"<a class="token url-link" href="https://deno.land/std@0.50.0/fs/copy.ts">https://deno.land/std@0.50.0/fs/copy.ts</a>"</span><span class="token punctuation">;</span>\n\n<span class="token function">copy</span><span class="token punctuation">(</span><span class="token string">"log.txt"</span><span class="token punctuation">,</span> <span class="token string">"log-old.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<pre class="language-shell"><code class="language-shell">$ deno run --allow-read --allow-write main.ts\nCompile <a class="token url-link" href="file:///dev/deno/main.ts">file:///dev/deno/main.ts</a>\nDownload <a class="token url-link" href="https://deno.land/std@0.50.0/fs/copy.ts">https://deno.land/std@0.50.0/fs/copy.ts</a>\nDownload <a class="token url-link" href="https://deno.land/std@0.50.0/fs/ensure_dir.ts">https://deno.land/std@0.50.0/fs/ensure_dir.ts</a>\nDownload <a class="token url-link" href="https://deno.land/std@0.50.0/fs/_util.ts">https://deno.land/std@0.50.0/fs/_util.ts</a>\nerror: TS2339 <span class="token punctuation">[</span>ERROR<span class="token punctuation">]</span>: Property <span class="token string">\'utime\'</span> does not exist on <span class="token builtin class-name">type</span> <span class="token string">\'typeof Deno\'</span><span class="token builtin class-name">.</span>\n    await Deno.utime<span class="token punctuation">(</span>dest, statInfo.atime, statInfo.mtime<span class="token punctuation">)</span><span class="token punctuation">;</span>\n               ~~~~~\n    at <a class="token url-link" href="https://deno.land/std@0.50.0/fs/copy.ts:90:16">https://deno.land/std@0.50.0/fs/copy.ts:90:16</a>\n\nTS2339 <span class="token punctuation">[</span>ERROR<span class="token punctuation">]</span>: Property <span class="token string">\'utimeSync\'</span> does not exist on <span class="token builtin class-name">type</span> <span class="token string">\'typeof Deno\'</span><span class="token builtin class-name">.</span>\n    Deno.utimeSync<span class="token punctuation">(</span>dest, statInfo.atime, statInfo.mtime<span class="token punctuation">)</span><span class="token punctuation">;</span>\n         ~~~~~~~~~\n    at <a class="token url-link" href="https://deno.land/std@0.50.0/fs/copy.ts:101:10">https://deno.land/std@0.50.0/fs/copy.ts:101:10</a>\n</code></pre>\n<p>解决方法是加上 <code>--unstable</code> 选项：</p>\n<pre class="language-shell"><code class="language-shell">deno run --allow-read --allow-write --unstable main.ts\n</code></pre>\n<p>要确定哪些 API 是不稳定的，请查阅类型声明 <a href="https://github.com/denoland/deno/blob/master/cli/js/lib.deno.unstable.d.ts">lib.deno.unstable.d.ts</a></p>\n<p>这个问题会在不远的将来解决。如果您依赖的特定模块在没有该选项的情况下成功编译，则可以忽略该选项。</p>\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/main.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E7%89%88%E6%9C%AC%E5%92%8C%E7%A8%B3%E5%AE%9A%E6%80%A7">版本和稳定性</a></li><li><a href="#%E6%8E%92%E9%94%99-(troubleshooting)">排错 (Troubleshooting)</a></li></ol></nav>'
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
