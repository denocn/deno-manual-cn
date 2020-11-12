import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "title": "文件服务器",
        "link": "examples/file_server.html"
    },
    'next': {
        "title": "运行子进程",
        "link": "examples/subprocess.html"
    },
    config: { "root": "/", ...projectConfig },
    'pagePath': "examples/tcp_echo.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "examples/tcp_echo.html",
    'title': "TCP echo",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>TCP echo</h1>\n<p>这个示例是一个 TCP echo 服务，接收 8080 端口的连接，把接收到的任何数据返回给客户端。</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">const</span> hostname <span class="token operator">=</span> <span class="token string">"0.0.0.0"</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> port <span class="token operator">=</span> <span class="token number">8080</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> listener <span class="token operator">=</span> Deno<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token punctuation">{</span> hostname<span class="token punctuation">,</span> port <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Listening on </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>hostname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>port<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">for</span> <span class="token keyword">await</span> <span class="token punctuation">(</span><span class="token keyword">const</span> conn <span class="token keyword">of</span> listener<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Deno<span class="token punctuation">.</span><span class="token function">copy</span><span class="token punctuation">(</span>conn<span class="token punctuation">,</span> conn<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>当这个程序启动时，它会抛出一个没有网络权限的错误。</p>\n<pre class="language-shell"><code class="language-shell">$ deno run <a class="token url-link" href="https://deno.land/std/examples/echo_server.ts">https://deno.land/std/examples/echo_server.ts</a>\nerror: Uncaught PermissionDenied: network access to <span class="token string">"0.0.0.0:8080"</span>, run again with the --allow-net flag\n► <span class="token variable">$deno</span>$/dispatch_json.ts:40:11\n    at DenoError <span class="token punctuation">(</span><span class="token variable">$deno</span>$/errors.ts:20:5<span class="token punctuation">)</span>\n    <span class="token punctuation">..</span>.\n</code></pre>\n<p>为了安全，Deno 不允许程序访问网络，除非显式赋予权限。使用一个命令行选项来允许程序访问网络：</p>\n<pre class="language-shell"><code class="language-shell">deno run --allow-net <a class="token url-link" href="https://deno.land/std/examples/echo_server.ts">https://deno.land/std/examples/echo_server.ts</a>\n</code></pre>\n<p>尝试用 netcat 向它发送数据。</p>\n<pre class="language-shell"><code class="language-shell">$ <span class="token function">nc</span> localhost <span class="token number">8080</span>\nhello world\nhello world\n</code></pre>\n<p>像示例 <code>cat.ts</code> 一样，<code>copy()</code> 函数不会产生不必要的内存拷贝。它从内核接收数据包，然后发送回去，就这么简单。</p>'
        } }),
    'head': React.createElement("link", { href: "/favicon.svg", rel: "icon", type: "image/svg+xml" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "TCP echo"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>这个示例是一个 TCP echo 服务，接收 8080 端口的连接，把接收到的任何数据返回给客户端。</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">const</span> hostname <span class="token operator">=</span> <span class="token string">"0.0.0.0"</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> port <span class="token operator">=</span> <span class="token number">8080</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> listener <span class="token operator">=</span> Deno<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token punctuation">{</span> hostname<span class="token punctuation">,</span> port <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Listening on </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>hostname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>port<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">for</span> <span class="token keyword">await</span> <span class="token punctuation">(</span><span class="token keyword">const</span> conn <span class="token keyword">of</span> listener<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Deno<span class="token punctuation">.</span><span class="token function">copy</span><span class="token punctuation">(</span>conn<span class="token punctuation">,</span> conn<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>当这个程序启动时，它会抛出一个没有网络权限的错误。</p>\n<pre class="language-shell"><code class="language-shell">$ deno run <a class="token url-link" href="https://deno.land/std/examples/echo_server.ts">https://deno.land/std/examples/echo_server.ts</a>\nerror: Uncaught PermissionDenied: network access to <span class="token string">"0.0.0.0:8080"</span>, run again with the --allow-net flag\n► <span class="token variable">$deno</span>$/dispatch_json.ts:40:11\n    at DenoError <span class="token punctuation">(</span><span class="token variable">$deno</span>$/errors.ts:20:5<span class="token punctuation">)</span>\n    <span class="token punctuation">..</span>.\n</code></pre>\n<p>为了安全，Deno 不允许程序访问网络，除非显式赋予权限。使用一个命令行选项来允许程序访问网络：</p>\n<pre class="language-shell"><code class="language-shell">deno run --allow-net <a class="token url-link" href="https://deno.land/std/examples/echo_server.ts">https://deno.land/std/examples/echo_server.ts</a>\n</code></pre>\n<p>尝试用 netcat 向它发送数据。</p>\n<pre class="language-shell"><code class="language-shell">$ <span class="token function">nc</span> localhost <span class="token number">8080</span>\nhello world\nhello world\n</code></pre>\n<p>像示例 <code>cat.ts</code> 一样，<code>copy()</code> 函数不会产生不必要的内存拷贝。它从内核接收数据包，然后发送回去，就这么简单。</p>'
        } }),
    'toc': null,
    'author': "迷渡",
    'contributors': [
        "迷渡"
    ],
    'date': "2020-11-12T01:44:32.000Z",
    'updated': null,
    'excerpt': "这个示例是一个 TCP echo 服务，接收 8080 端口的连接，把接收到的任何数据返回给客户端。 const hostname = \"0.0.0.0\"; const port = 8080; const listener = Deno.listen({ hostname, port }); console.log(`Listening on ${...",
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
