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
    'pagePath': "examples/subprocess.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "examples/subprocess.html",
    'title': "运行子进程",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>运行子进程</h1>\n<p><a href="https://doc.deno.land/https/github.com/denoland/deno/releases/latest/download/lib.deno.d.ts#Deno.run">API 参考手册</a></p>\n<p>示例：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token comment">// 创建子进程</span>\n<span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token method function property-access">run</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  cmd<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"echo"</span><span class="token punctuation">,</span> <span class="token string">"hello"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 等待完成</span>\n<span class="token keyword">await</span> p<span class="token punctuation">.</span><span class="token method function property-access">status</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>运行</p>\n<pre class="language-shell"><code class="language-shell">$ deno run --allow-run ./subprocess_simple.ts\nhello\n</code></pre>\n<p><code>window.onload</code> 被赋值为一个函数，它将会在主脚本加载后被调用，和浏览器的 <a href="https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload">onload</a> 一样，可以用于主入口点。</p>\n<p>默认情况下，当您调用 <code>Deno.run()</code> 时，子进程将继承父进程的标准流。如果您想要和子进程通信，可以使用 <code>&quot;piped&quot;</code> 选项。</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">const</span> fileNames <span class="token operator">=</span> <span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token property-access">args</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token method function property-access">run</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  cmd<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">"deno"</span><span class="token punctuation">,</span>\n    <span class="token string">"run"</span><span class="token punctuation">,</span>\n    <span class="token string">"--allow-read"</span><span class="token punctuation">,</span>\n    <span class="token string">"<a class="token url-link" href="https://deno.land/std/examples/cat.ts">https://deno.land/std/examples/cat.ts</a>"</span><span class="token punctuation">,</span>\n    <span class="token spread operator">...</span>fileNames<span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  stdout<span class="token operator">:</span> <span class="token string">"piped"</span><span class="token punctuation">,</span>\n  stderr<span class="token operator">:</span> <span class="token string">"piped"</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> code <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> p<span class="token punctuation">.</span><span class="token method function property-access">status</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">(</span>code <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> rawOutput <span class="token operator">=</span> <span class="token keyword">await</span> p<span class="token punctuation">.</span><span class="token method function property-access">output</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">await</span> <span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token property-access">stdout</span><span class="token punctuation">.</span><span class="token method function property-access">write</span><span class="token punctuation">(</span>rawOutput<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> rawError <span class="token operator">=</span> <span class="token keyword">await</span> p<span class="token punctuation">.</span><span class="token method function property-access">stderrOutput</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> errorString <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token maybe-class-name">TextDecoder</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">decode</span><span class="token punctuation">(</span>rawError<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>errorString<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token method function property-access">exit</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>运行</p>\n<pre class="language-shell"><code class="language-shell">$ deno run --allow-run ./subprocess.ts <span class="token operator">&lt;</span>somefile<span class="token operator">></span>\n<span class="token punctuation">[</span>file content<span class="token punctuation">]</span>\n\n$ deno run --allow-run ./subprocess.ts non_existent_file.md\n\nUncaught NotFound: No such <span class="token function">file</span> or directory <span class="token punctuation">(</span>os error <span class="token number">2</span><span class="token punctuation">)</span>\n    at DenoError <span class="token punctuation">(</span>deno/js/errors.ts:22:5<span class="token punctuation">)</span>\n    at maybeError <span class="token punctuation">(</span>deno/js/errors.ts:41:12<span class="token punctuation">)</span>\n    at handleAsyncMsgFromRust <span class="token punctuation">(</span>deno/js/dispatch.ts:27:17<span class="token punctuation">)</span>\n</code></pre>\n'
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
