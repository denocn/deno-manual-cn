import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "text": "稳定性",
        "link": "runtime/stability.html"
    },
    'next': {
        "text": "编译器 API",
        "link": "runtime/compiler_apis.html"
    },
    'sidebar': [
        {
            "text": "Deno 中文手册",
            "link": "index.html",
            "pagePath": "README.md"
        },
        {
            "text": "介绍",
            "link": "introduction.html",
            "pagePath": "introduction.md"
        },
        {
            "link": "getting_started.html",
            "children": [
                {
                    "text": "安装",
                    "link": "getting_started/installation.html",
                    "pagePath": "getting_started/installation.md"
                },
                {
                    "text": "设置您的环境",
                    "link": "getting_started/setup_your_environment.html",
                    "pagePath": "getting_started/setup_your_environment.md"
                },
                {
                    "text": "第一步",
                    "link": "getting_started/first_steps.html",
                    "pagePath": "getting_started/first_steps.md"
                },
                {
                    "text": "命令行界面",
                    "link": "getting_started/command_line_interface.html",
                    "pagePath": "getting_started/command_line_interface.md"
                },
                {
                    "text": "权限",
                    "link": "getting_started/permissions.html",
                    "pagePath": "getting_started/permissions.md"
                },
                {
                    "text": "使用 TypeScript",
                    "link": "getting_started/typescript.html",
                    "pagePath": "getting_started/typescript.md"
                },
                {
                    "text": "WebAssembly 支持",
                    "link": "getting_started/webassembly.html",
                    "pagePath": "getting_started/webassembly.md"
                }
            ],
            "text": "入门",
            "pagePath": "getting_started.md"
        },
        {
            "link": "runtime.html",
            "children": [
                {
                    "text": "稳定性",
                    "link": "runtime/stability.html",
                    "pagePath": "runtime/stability.md"
                },
                {
                    "text": "程序生命周期",
                    "link": "runtime/program_lifecycle.html",
                    "pagePath": "runtime/program_lifecycle.md"
                },
                {
                    "text": "编译器 API",
                    "link": "runtime/compiler_apis.html",
                    "pagePath": "runtime/compiler_apis.md"
                },
                {
                    "text": "Worker",
                    "link": "runtime/workers.html",
                    "pagePath": "runtime/workers.md"
                }
            ],
            "text": "运行时",
            "pagePath": "runtime.md"
        },
        {
            "link": "linking_to_external_code.html",
            "children": [
                {
                    "text": "重新加载特定的模块",
                    "link": "linking_to_external_code/reloading_modules.html",
                    "pagePath": "linking_to_external_code/reloading_modules.md"
                },
                {
                    "text": "完整性检查与锁定文件",
                    "link": "linking_to_external_code/integrity_checking.html",
                    "pagePath": "linking_to_external_code/integrity_checking.md"
                },
                {
                    "text": "代理（Proxies）",
                    "link": "linking_to_external_code/proxies.html",
                    "pagePath": "linking_to_external_code/proxies.md"
                },
                {
                    "text": "导入映射（Import maps）",
                    "link": "linking_to_external_code/import_maps.html",
                    "pagePath": "linking_to_external_code/import_maps.md"
                }
            ],
            "text": "与外部代码连接",
            "pagePath": "linking_to_external_code.md"
        },
        {
            "link": "standard_library.html",
            "text": "标准库",
            "pagePath": "standard_library.md"
        },
        {
            "link": "testing.html",
            "children": [
                {
                    "text": "断言",
                    "link": "testing/assertions.html",
                    "pagePath": "testing/assertions.md"
                }
            ],
            "text": "测试",
            "pagePath": "testing.md"
        },
        {
            "link": "tools.html",
            "children": [
                {
                    "text": "调试器 (debugger)",
                    "link": "tools/debugger.html",
                    "pagePath": "tools/debugger.md"
                },
                {
                    "text": "脚本安装器",
                    "link": "tools/script_installer.html",
                    "pagePath": "tools/script_installer.md"
                },
                {
                    "text": "代码格式化",
                    "link": "tools/formatter.html",
                    "pagePath": "tools/formatter.md"
                },
                {
                    "text": "打包",
                    "link": "tools/bundler.html",
                    "pagePath": "tools/bundler.md"
                },
                {
                    "text": "文档生成器",
                    "link": "tools/documentation_generator.html",
                    "pagePath": "tools/documentation_generator.md"
                },
                {
                    "text": "依赖检查器",
                    "link": "tools/dependency_inspector.html",
                    "pagePath": "tools/dependency_inspector.md"
                },
                {
                    "text": "Linter",
                    "link": "tools/linter.html",
                    "pagePath": "tools/linter.md"
                }
            ],
            "text": "内置工具",
            "pagePath": "tools.md"
        },
        {
            "link": "embedding_deno.html",
            "text": "嵌入式 Deno",
            "pagePath": "embedding_deno.md"
        },
        {
            "link": "contributing.html",
            "children": [
                {
                    "text": "从源码构建",
                    "link": "contributing/building_from_source.html",
                    "pagePath": "contributing/building_from_source.md"
                },
                {
                    "text": "测试和工具",
                    "link": "contributing/development_tools.html",
                    "pagePath": "contributing/development_tools.md"
                },
                {
                    "text": "Deno 风格指南",
                    "link": "contributing/style_guide.html",
                    "pagePath": "contributing/style_guide.md"
                },
                {
                    "text": "内部细节",
                    "link": "contributing/architecture.html",
                    "pagePath": "contributing/architecture.md"
                }
            ],
            "text": "贡献",
            "pagePath": "contributing.md"
        },
        {
            "link": "examples.html",
            "children": [
                {
                    "text": "Unix cat",
                    "link": "examples/unix_cat.html",
                    "pagePath": "examples/unix_cat.md"
                },
                {
                    "text": "文件服务器",
                    "link": "examples/file_server.html",
                    "pagePath": "examples/file_server.md"
                },
                {
                    "text": "TCP echo",
                    "link": "examples/tcp_echo.html",
                    "pagePath": "examples/tcp_echo.md"
                },
                {
                    "text": "运行子进程",
                    "link": "examples/subprocess.html",
                    "pagePath": "examples/subprocess.md"
                },
                {
                    "text": "检查与放弃权限",
                    "link": "examples/permissions.html",
                    "pagePath": "examples/permissions.md"
                },
                {
                    "text": "处理系统信号",
                    "link": "examples/os_signals.html",
                    "pagePath": "examples/os_signals.md"
                },
                {
                    "text": "文件系统事件",
                    "link": "examples/file_system_events.html",
                    "pagePath": "examples/file_system_events.md"
                },
                {
                    "text": "测试当前文件是否为主程序",
                    "link": "examples/testing_if_main.html",
                    "pagePath": "examples/testing_if_main.md"
                }
            ],
            "text": "示例",
            "pagePath": "examples.md"
        }
    ],
    config: { "root": "/", ...projectConfig },
    'pagePath': "runtime/program_lifecycle.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "runtime/program_lifecycle.html",
    'title': "程序生命周期",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>程序生命周期</h1>\n<p>Deno 支持浏览器兼容的生命周期事件 <code>load</code> 和 <code>unload</code>。您可以使用这些事件在程序中提供用于安装 (setup) 和清理 (cleanup) 的代码。</p>\n<p><code>load</code> 事件的侦听器 (listener) 可以是异步 (async) 的，将被等待 (await)。<code>unload</code> 事件的监听器需要是同步的。这两项事件都不能被取消。</p>\n<p>示例：</p>\n<p><strong>main.ts</strong></p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token string">"./imported.ts"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> <span class="token maybe-class-name">Event</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">got </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>e<span class="token punctuation">.</span><span class="token keyword">type</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> event in event handler (main)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token dom variable">window</span><span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span><span class="token string">"load"</span><span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token dom variable">window</span><span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span><span class="token string">"unload"</span><span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token dom variable">window</span><span class="token punctuation">.</span><span class="token property-access">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> <span class="token maybe-class-name">Event</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">got </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>e<span class="token punctuation">.</span><span class="token keyword">type</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> event in onload function (main)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token dom variable">window</span><span class="token punctuation">.</span><span class="token property-access">onunload</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> <span class="token maybe-class-name">Event</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">got </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>e<span class="token punctuation">.</span><span class="token keyword">type</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> event in onunload function (main)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"log from main script"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p><strong>imported.ts</strong></p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> <span class="token maybe-class-name">Event</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">got </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>e<span class="token punctuation">.</span><span class="token keyword">type</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> event in event handler (imported)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token dom variable">window</span><span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span><span class="token string">"load"</span><span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token dom variable">window</span><span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span><span class="token string">"unload"</span><span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token dom variable">window</span><span class="token punctuation">.</span><span class="token property-access">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> <span class="token maybe-class-name">Event</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">got </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>e<span class="token punctuation">.</span><span class="token keyword">type</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> event in onload function (imported)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token dom variable">window</span><span class="token punctuation">.</span><span class="token property-access">onunload</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> <span class="token maybe-class-name">Event</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">got </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>e<span class="token punctuation">.</span><span class="token keyword">type</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> event in onunload function (imported)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"log from imported script"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>注意，您可以同时使用 <code>window.addEventListener</code> 和 <code>window.onload</code> / <code>window.onunload</code> 来定义事件的处理程序。它们之间有一个主要的区别，让我们运行示例：</p>\n<pre class="language-shell"><code class="language-shell">$ deno run main.ts\nlog from imported script\nlog from main script\ngot load event <span class="token keyword">in</span> onload <span class="token keyword">function</span> <span class="token punctuation">(</span>main<span class="token punctuation">)</span>\ngot load event <span class="token keyword">in</span> event handler <span class="token punctuation">(</span>imported<span class="token punctuation">)</span>\ngot load event <span class="token keyword">in</span> event handler <span class="token punctuation">(</span>main<span class="token punctuation">)</span>\ngot unload event <span class="token keyword">in</span> onunload <span class="token keyword">function</span> <span class="token punctuation">(</span>main<span class="token punctuation">)</span>\ngot unload event <span class="token keyword">in</span> event handler <span class="token punctuation">(</span>imported<span class="token punctuation">)</span>\ngot unload event <span class="token keyword">in</span> event handler <span class="token punctuation">(</span>main<span class="token punctuation">)</span>\n</code></pre>\n<p>所有通过 <code>window.addEventListener</code> 添加的侦听器都被运行，但是在 <code>main.ts</code> 中定义的 <code>window.onload</code> 和 <code>window.onunload</code> 覆盖了 <code>imported.ts</code> 中定义的处理程序。</p>\n<p>换句话说，您可以注册多个 <code>window.addEventListener</code> <code>&quot;load&quot;</code> 或\n<code>&quot;unload&quot;</code> 事件，但只有最后加载的 <code>window.onload</code> 或 <code>window.onunload</code> 事件将被执行。</p>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': null
};
