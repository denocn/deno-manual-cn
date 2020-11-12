import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "title": "TCP echo",
        "link": "examples/tcp_echo.html"
    },
    'next': {
        "title": "检查与放弃权限",
        "link": "examples/permissions.html"
    },
    config: { "root": "/", ...projectConfig },
    'pagePath': "examples/subprocess.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "examples/subprocess.html",
    'title': "运行子进程",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>运行子进程</h1>\n<p><a href="https://doc.deno.land/https/github.com/denoland/deno/releases/latest/download/lib.deno.d.ts#Deno.run">API 参考手册</a></p>\n<p>示例：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token comment">// 创建子进程</span>\n<span class="token keyword">const</span> p <span class="token operator">=</span> Deno<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  cmd<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"echo"</span><span class="token punctuation">,</span> <span class="token string">"hello"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 等待完成</span>\n<span class="token keyword">await</span> p<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>运行</p>\n<pre class="language-shell"><code class="language-shell">$ deno run --allow-run ./subprocess_simple.ts\nhello\n</code></pre>\n<p><code>window.onload</code> 被赋值为一个函数，它将会在主脚本加载后被调用，和浏览器的 <a href="https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload">onload</a> 一样，可以用于主入口点。</p>\n<p>默认情况下，当您调用 <code>Deno.run()</code> 时，子进程将继承父进程的标准流。如果您想要和子进程通信，可以使用 <code>&quot;piped&quot;</code> 选项。</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">const</span> fileNames <span class="token operator">=</span> Deno<span class="token punctuation">.</span>args<span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> p <span class="token operator">=</span> Deno<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  cmd<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">"deno"</span><span class="token punctuation">,</span>\n    <span class="token string">"run"</span><span class="token punctuation">,</span>\n    <span class="token string">"--allow-read"</span><span class="token punctuation">,</span>\n    <span class="token string">"<a class="token url-link" href="https://deno.land/std/examples/cat.ts">https://deno.land/std/examples/cat.ts</a>"</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>fileNames<span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  stdout<span class="token operator">:</span> <span class="token string">"piped"</span><span class="token punctuation">,</span>\n  stderr<span class="token operator">:</span> <span class="token string">"piped"</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> code <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> p<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">(</span>code <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> rawOutput <span class="token operator">=</span> <span class="token keyword">await</span> p<span class="token punctuation">.</span><span class="token function">output</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">await</span> Deno<span class="token punctuation">.</span>stdout<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>rawOutput<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> rawError <span class="token operator">=</span> <span class="token keyword">await</span> p<span class="token punctuation">.</span><span class="token function">stderrOutput</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> errorString <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TextDecoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span>rawError<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>errorString<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nDeno<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>运行</p>\n<pre class="language-shell"><code class="language-shell">$ deno run --allow-run ./subprocess.ts <span class="token operator">&lt;</span>somefile<span class="token operator">></span>\n<span class="token punctuation">[</span>file content<span class="token punctuation">]</span>\n\n$ deno run --allow-run ./subprocess.ts non_existent_file.md\n\nUncaught NotFound: No such <span class="token function">file</span> or directory <span class="token punctuation">(</span>os error <span class="token number">2</span><span class="token punctuation">)</span>\n    at DenoError <span class="token punctuation">(</span>deno/js/errors.ts:22:5<span class="token punctuation">)</span>\n    at maybeError <span class="token punctuation">(</span>deno/js/errors.ts:41:12<span class="token punctuation">)</span>\n    at handleAsyncMsgFromRust <span class="token punctuation">(</span>deno/js/dispatch.ts:27:17<span class="token punctuation">)</span>\n</code></pre>'
        } }),
    'head': React.createElement("link", { href: "/favicon.svg", rel: "icon", type: "image/svg+xml" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u8FD0\u884C\u5B50\u8FDB\u7A0B"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p><a href="https://doc.deno.land/https/github.com/denoland/deno/releases/latest/download/lib.deno.d.ts#Deno.run">API 参考手册</a></p>\n<p>示例：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token comment">// 创建子进程</span>\n<span class="token keyword">const</span> p <span class="token operator">=</span> Deno<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  cmd<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"echo"</span><span class="token punctuation">,</span> <span class="token string">"hello"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 等待完成</span>\n<span class="token keyword">await</span> p<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>运行</p>\n<pre class="language-shell"><code class="language-shell">$ deno run --allow-run ./subprocess_simple.ts\nhello\n</code></pre>\n<p><code>window.onload</code> 被赋值为一个函数，它将会在主脚本加载后被调用，和浏览器的 <a href="https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload">onload</a> 一样，可以用于主入口点。</p>\n<p>默认情况下，当您调用 <code>Deno.run()</code> 时，子进程将继承父进程的标准流。如果您想要和子进程通信，可以使用 <code>&quot;piped&quot;</code> 选项。</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">const</span> fileNames <span class="token operator">=</span> Deno<span class="token punctuation">.</span>args<span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> p <span class="token operator">=</span> Deno<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  cmd<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">"deno"</span><span class="token punctuation">,</span>\n    <span class="token string">"run"</span><span class="token punctuation">,</span>\n    <span class="token string">"--allow-read"</span><span class="token punctuation">,</span>\n    <span class="token string">"<a class="token url-link" href="https://deno.land/std/examples/cat.ts">https://deno.land/std/examples/cat.ts</a>"</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>fileNames<span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  stdout<span class="token operator">:</span> <span class="token string">"piped"</span><span class="token punctuation">,</span>\n  stderr<span class="token operator">:</span> <span class="token string">"piped"</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> code <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> p<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">(</span>code <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> rawOutput <span class="token operator">=</span> <span class="token keyword">await</span> p<span class="token punctuation">.</span><span class="token function">output</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">await</span> Deno<span class="token punctuation">.</span>stdout<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>rawOutput<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> rawError <span class="token operator">=</span> <span class="token keyword">await</span> p<span class="token punctuation">.</span><span class="token function">stderrOutput</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> errorString <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TextDecoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span>rawError<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>errorString<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nDeno<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>运行</p>\n<pre class="language-shell"><code class="language-shell">$ deno run --allow-run ./subprocess.ts <span class="token operator">&lt;</span>somefile<span class="token operator">></span>\n<span class="token punctuation">[</span>file content<span class="token punctuation">]</span>\n\n$ deno run --allow-run ./subprocess.ts non_existent_file.md\n\nUncaught NotFound: No such <span class="token function">file</span> or directory <span class="token punctuation">(</span>os error <span class="token number">2</span><span class="token punctuation">)</span>\n    at DenoError <span class="token punctuation">(</span>deno/js/errors.ts:22:5<span class="token punctuation">)</span>\n    at maybeError <span class="token punctuation">(</span>deno/js/errors.ts:41:12<span class="token punctuation">)</span>\n    at handleAsyncMsgFromRust <span class="token punctuation">(</span>deno/js/dispatch.ts:27:17<span class="token punctuation">)</span>\n</code></pre>'
        } }),
    'toc': null,
    'author': "迷渡",
    'contributors': [
        "迷渡"
    ],
    'date': "2020-11-12T01:44:32.000Z",
    'updated': null,
    'excerpt': "API 参考手册 示例： // 创建子进程 const p = Deno.run({ cmd: [\"echo\", \"hello\"], }); // 等待完成 await p.status(); 运行 $ deno run --allow-run ./subprocess_simple.ts hello window.onload 被赋值为一个函数，它将会在...",
    'cover': undefined,
    'sidebar': [
        {
            "title": "Deno 中文手册",
            "link": "index.html",
            "pagePath": "README.md"
        },
        {
            "title": "介绍",
            "link": "introduction.html",
            "pagePath": "introduction.md"
        },
        {
            "link": "getting_started.html",
            "children": [
                {
                    "title": "安装",
                    "link": "getting_started/installation.html",
                    "pagePath": "getting_started/installation.md"
                },
                {
                    "title": "设置您的环境",
                    "link": "getting_started/setup_your_environment.html",
                    "pagePath": "getting_started/setup_your_environment.md"
                },
                {
                    "title": "第一步",
                    "link": "getting_started/first_steps.html",
                    "pagePath": "getting_started/first_steps.md"
                },
                {
                    "title": "命令行界面",
                    "link": "getting_started/command_line_interface.html",
                    "pagePath": "getting_started/command_line_interface.md"
                },
                {
                    "title": "权限",
                    "link": "getting_started/permissions.html",
                    "pagePath": "getting_started/permissions.md"
                },
                {
                    "title": "使用 TypeScript",
                    "link": "getting_started/typescript.html",
                    "pagePath": "getting_started/typescript.md"
                },
                {
                    "title": "WebAssembly 支持",
                    "link": "getting_started/webassembly.html",
                    "pagePath": "getting_started/webassembly.md"
                }
            ],
            "title": "入门",
            "pagePath": "getting_started.md"
        },
        {
            "link": "runtime.html",
            "children": [
                {
                    "title": "稳定性",
                    "link": "runtime/stability.html",
                    "pagePath": "runtime/stability.md"
                },
                {
                    "title": "程序生命周期",
                    "link": "runtime/program_lifecycle.html",
                    "pagePath": "runtime/program_lifecycle.md"
                },
                {
                    "title": "编译器 API",
                    "link": "runtime/compiler_apis.html",
                    "pagePath": "runtime/compiler_apis.md"
                },
                {
                    "title": "Worker",
                    "link": "runtime/workers.html",
                    "pagePath": "runtime/workers.md"
                }
            ],
            "title": "运行时",
            "pagePath": "runtime.md"
        },
        {
            "link": "linking_to_external_code.html",
            "children": [
                {
                    "title": "重新加载特定的模块",
                    "link": "linking_to_external_code/reloading_modules.html",
                    "pagePath": "linking_to_external_code/reloading_modules.md"
                },
                {
                    "title": "完整性检查与锁定文件",
                    "link": "linking_to_external_code/integrity_checking.html",
                    "pagePath": "linking_to_external_code/integrity_checking.md"
                },
                {
                    "title": "代理（Proxies）",
                    "link": "linking_to_external_code/proxies.html",
                    "pagePath": "linking_to_external_code/proxies.md"
                },
                {
                    "title": "导入映射（Import maps）",
                    "link": "linking_to_external_code/import_maps.html",
                    "pagePath": "linking_to_external_code/import_maps.md"
                }
            ],
            "title": "与外部代码连接",
            "pagePath": "linking_to_external_code.md"
        },
        {
            "link": "standard_library.html",
            "title": "标准库",
            "pagePath": "standard_library.md"
        },
        {
            "link": "testing.html",
            "children": [
                {
                    "title": "断言",
                    "link": "testing/assertions.html",
                    "pagePath": "testing/assertions.md"
                }
            ],
            "title": "测试",
            "pagePath": "testing.md"
        },
        {
            "link": "tools.html",
            "children": [
                {
                    "title": "调试器 (debugger)",
                    "link": "tools/debugger.html",
                    "pagePath": "tools/debugger.md"
                },
                {
                    "title": "脚本安装器",
                    "link": "tools/script_installer.html",
                    "pagePath": "tools/script_installer.md"
                },
                {
                    "title": "代码格式化",
                    "link": "tools/formatter.html",
                    "pagePath": "tools/formatter.md"
                },
                {
                    "title": "打包",
                    "link": "tools/bundler.html",
                    "pagePath": "tools/bundler.md"
                },
                {
                    "title": "文档生成器",
                    "link": "tools/documentation_generator.html",
                    "pagePath": "tools/documentation_generator.md"
                },
                {
                    "title": "依赖检查器",
                    "link": "tools/dependency_inspector.html",
                    "pagePath": "tools/dependency_inspector.md"
                },
                {
                    "title": "Linter",
                    "link": "tools/linter.html",
                    "pagePath": "tools/linter.md"
                }
            ],
            "title": "内置工具",
            "pagePath": "tools.md"
        },
        {
            "link": "embedding_deno.html",
            "title": "嵌入式 Deno",
            "pagePath": "embedding_deno.md"
        },
        {
            "link": "contributing.html",
            "children": [
                {
                    "title": "从源码构建",
                    "link": "contributing/building_from_source.html",
                    "pagePath": "contributing/building_from_source.md"
                },
                {
                    "title": "测试和工具",
                    "link": "contributing/development_tools.html",
                    "pagePath": "contributing/development_tools.md"
                },
                {
                    "title": "Deno 风格指南",
                    "link": "contributing/style_guide.html",
                    "pagePath": "contributing/style_guide.md"
                },
                {
                    "title": "内部细节",
                    "link": "contributing/architecture.html",
                    "pagePath": "contributing/architecture.md"
                }
            ],
            "title": "贡献",
            "pagePath": "contributing.md"
        },
        {
            "link": "examples.html",
            "children": [
                {
                    "title": "Unix cat",
                    "link": "examples/unix_cat.html",
                    "pagePath": "examples/unix_cat.md"
                },
                {
                    "title": "文件服务器",
                    "link": "examples/file_server.html",
                    "pagePath": "examples/file_server.md"
                },
                {
                    "title": "TCP echo",
                    "link": "examples/tcp_echo.html",
                    "pagePath": "examples/tcp_echo.md"
                },
                {
                    "title": "运行子进程",
                    "link": "examples/subprocess.html",
                    "pagePath": "examples/subprocess.md"
                },
                {
                    "title": "检查与放弃权限",
                    "link": "examples/permissions.html",
                    "pagePath": "examples/permissions.md"
                },
                {
                    "title": "处理系统信号",
                    "link": "examples/os_signals.html",
                    "pagePath": "examples/os_signals.md"
                },
                {
                    "title": "文件系统事件",
                    "link": "examples/file_system_events.html",
                    "pagePath": "examples/file_system_events.md"
                },
                {
                    "title": "测试当前文件是否为主程序",
                    "link": "examples/testing_if_main.html",
                    "pagePath": "examples/testing_if_main.md"
                }
            ],
            "title": "示例",
            "pagePath": "examples.md"
        }
    ]
};
