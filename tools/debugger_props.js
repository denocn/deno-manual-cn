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
    'pagePath': "tools/debugger.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "tools/debugger.html",
    'title': "调试器 (debugger)",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>调试器 (debugger)</h1>\n<p>Deno 支持 <a href="https://v8.dev/docs/inspector">V8 Inspector Protocol</a>.</p>\n<p>使用 Chrome Devtools 或其他支持该协议的客户端（比如 VSCode）能够调试 Deno 程序。</p>\n<p>要启用调试功能，用 <code>--inspect</code> 或 <code>--inspect-brk</code> 选项运行 Deno。</p>\n<p><code>--inspect</code> 选项允许在任何时间点连接调试器，而 <code>--inspect-brk</code> 选项会等待调试器连接，在第一行代码处暂停执行。</p>\n<h2 id="chrome-devtools">Chrome Devtools<a class="anchor" href="#chrome-devtools">§</a></h2>\n<p>让我们用 Chrome 开发者工具来调试一个程序，我们将使用来自 <code>std</code> 的 <a href="https://deno.land/std@v0.50.0/http/file_server.ts">file_server.ts</a>，这是一个静态文件服务。</p>\n<p>使用 <code>--inspect-brk</code> 选项，在第一行代码处暂停执行。</p>\n<pre class="language-shell"><code class="language-shell">$ deno run --inspect-brk --allow-read --allow-net <a class="token url-link" href="https://deno.land/std@v0.50.0/http/file_server.ts">https://deno.land/std@v0.50.0/http/file_server.ts</a>\nDebugger listening on ws://127.0.0.1:9229/ws/1e82c406-85a9-44ab-86b6-7341583480b1\nDownload <a class="token url-link" href="https://deno.land/std@v0.50.0/http/file_server.ts">https://deno.land/std@v0.50.0/http/file_server.ts</a>\nCompile <a class="token url-link" href="https://deno.land/std@v0.50.0/http/file_server.ts">https://deno.land/std@v0.50.0/http/file_server.ts</a>\n<span class="token punctuation">..</span>.\n</code></pre>\n<p>打开 <code>chrome://inspect</code>，点击 target 旁边的 <code>Inspect</code>。</p>\n<p><img src="../images/debugger1.jpg" alt="chrome://inspect"></p>\n<p>开发者工具加载所有模块时可能会等待几秒。</p>\n<p><img src="../images/debugger2.jpg" alt="Devtools opened"></p>\n<p>您可能注意到开发者工具暂停执行的地方不是 <code>file_server.ts</code>，而是 <code>_constants.ts</code> 的第一行。这是符合预期的行为，ES 模块在 V8 中执行的顺序如此。<code>_constants.ts</code> 是 <code>file_server.ts</code> 最深、最先的依赖，因此它会最先执行。</p>\n<p>在这时，所有源码在开发者工具中都可用。打开 <code>file_server.ts</code>，加一处断点，然后打开 &quot;Sources&quot; 面板，展开树：</p>\n<p><img src="../images/debugger3.jpg" alt="Open file_server.ts"></p>\n<p><em>仔细观察，您会发现每个文件都有重复的条目，一个是正常字体，另一个是斜体。前者是编译后的源文件（所以 <code>.ts</code> 文件会生成 JavaScript 源代码），后者是该文件的源映射 (source map)。</em></p>\n<p>下一步，在 <code>listenAndServe</code> 方法处加一个断点。</p>\n<p><img src="../images/debugger4.jpg" alt="Break in file_server.ts"></p>\n<p>添加断点后，开发者工具会自动打开源映射文件，让我们能在包含类型的实际源码中步进。</p>\n<p>现在我们已经设置了断点，在触发断点时，我们可以检查传入的请求，也可以继续执行脚本。点击恢复脚本执行的按钮即可，您可能需要点两次。</p>\n<p>当脚本继续运行时，让我们发送一个请求，看看开发者工具中发生了什么。</p>\n<pre class="language-autoit"><code class="language-autoit">$ curl http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">0.0</span><span class="token punctuation">.</span><span class="token number">0.0</span><span class="token punctuation">:</span><span class="token number">4500</span><span class="token operator">/</span>\n</code></pre>\n<p><img src="../images/debugger5.jpg" alt="Break in request handling"></p>\n<p>在这时，我们可以检查请求的内容，逐步调试代码。</p>\n<h2 id="vscode">VSCode<a class="anchor" href="#vscode">§</a></h2>\n<p>Deno 可以在 VSCode 中调试。</p>\n<p>插件的官方支持正在开发中 <a href="https://github.com/denoland/vscode_deno/issues/12">https://github.com/denoland/vscode_deno/issues/12</a></p>\n<p>我们也可以通过手动提供 <a href="https://code.visualstudio.com/docs/editor/debugging#_launch-configurations"><code>launch.json</code></a> 配置，来连接调试器：</p>\n<pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"0.2.0"</span><span class="token punctuation">,</span>\n  <span class="token property">"configurations"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Deno"</span><span class="token punctuation">,</span>\n      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"node"</span><span class="token punctuation">,</span>\n      <span class="token property">"request"</span><span class="token operator">:</span> <span class="token string">"launch"</span><span class="token punctuation">,</span>\n      <span class="token property">"cwd"</span><span class="token operator">:</span> <span class="token string">"${workspaceFolder}"</span><span class="token punctuation">,</span>\n      <span class="token property">"runtimeExecutable"</span><span class="token operator">:</span> <span class="token string">"deno"</span><span class="token punctuation">,</span>\n      <span class="token property">"runtimeArgs"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"run"</span><span class="token punctuation">,</span> <span class="token string">"--inspect-brk"</span><span class="token punctuation">,</span> <span class="token string">"-A"</span><span class="token punctuation">,</span> <span class="token string">"${file}"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token property">"port"</span><span class="token operator">:</span> <span class="token number">9229</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p><strong>注意</strong>：这将使用您打开的文件作为入口点；如果需要固定的入口点，请用脚本名称替换 <code>${file}</code>。</p>\n<p>让我们尝试一下本地源文件，创建 <code>server.ts</code>：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> serve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"<a class="token url-link" href="https://deno.land/std@v0.50.0/http/server.ts">https://deno.land/std@v0.50.0/http/server.ts</a>"</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token function">serve</span><span class="token punctuation">(</span><span class="token punctuation">{</span> port<span class="token operator">:</span> <span class="token number">8000</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"<a class="token url-link" href="http://localhost:8000/">http://localhost:8000/</a>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">for</span> <span class="token keyword">await</span> <span class="token punctuation">(</span><span class="token keyword">const</span> req <span class="token keyword">of</span> server<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  req<span class="token punctuation">.</span><span class="token method function property-access">respond</span><span class="token punctuation">(</span><span class="token punctuation">{</span> body<span class="token operator">:</span> <span class="token string">"Hello World\n"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>然后我们可以设置断点，运行已创建的配置：</p>\n<p><img src="../images/debugger7.jpg" alt="VSCode debugger"></p>\n<h2 id="jetbrains-ide">JetBrains IDE<a class="anchor" href="#jetbrains-ide">§</a></h2>\n<p>您可以使用 JetBrains IDE 来调试 Deno，右击您想要调试的文件，选择 <code>Debug \'Deno: &lt;file name&gt;\'</code>。这会创建一个没有权限设置的 运行/调试 配置，您可能需要更改 <code>Arguments</code> 字段来提供所需权限。</p>\n<h2 id="%E5%85%B6%E4%BB%96">其他<a class="anchor" href="#%E5%85%B6%E4%BB%96">§</a></h2>\n<p>实现 Devtools 协议的任何客户端都能连接 Deno 进程。</p>\n<h2 id="%E9%99%90%E5%88%B6">限制<a class="anchor" href="#%E9%99%90%E5%88%B6">§</a></h2>\n<p>开发者工具的支持仍不成熟，有一些功能是缺失的，或是有 bug 的：</p>\n<ul>\n<li>开发者工具控制台中的自动补全会让 Deno 进程退出。</li>\n<li>性能分析 (profiling) 和内存转储 (memory dump) 可能不正确。</li>\n</ul>\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/main.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#chrome-devtools">Chrome Devtools</a></li><li><a href="#vscode">VSCode</a></li><li><a href="#jetbrains-ide">JetBrains IDE</a></li><li><a href="#%E5%85%B6%E4%BB%96">其他</a></li><li><a href="#%E9%99%90%E5%88%B6">限制</a></li></ol></nav>'
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
