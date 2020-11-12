import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "title": "代码格式化",
        "link": "tools/formatter.html"
    },
    'next': {
        "title": "文档生成器",
        "link": "tools/documentation_generator.html"
    },
    config: { "root": "/", ...projectConfig },
    'pagePath': "tools/bundler.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "tools/bundler.html",
    'title': "打包",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>打包</h1>\n<p><code>deno bundle [URL]</code> 将输出一个单独的 JavaScript 文件，其中包含了它的所有依赖。</p>\n<p>示例：</p>\n<pre class="language-autoit"><code class="language-autoit"><span class="token operator">></span> deno bundle https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>deno<span class="token punctuation">.</span>land<span class="token operator">/</span>std<span class="token operator">/</span>examples<span class="token operator">/</span>colors<span class="token punctuation">.</span>ts colors<span class="token punctuation">.</span>bundle<span class="token punctuation">.</span>js\nBundling <span class="token string">"colors.bundle.js"</span>\nEmitting bundle <span class="token keyword">to</span> <span class="token string">"colors.bundle.js"</span>\n<span class="token number">9.2</span> kB emitted<span class="token punctuation">.</span>\n</code></pre>\n<p>如果您忽略了输出文件参数，打包文件将输出到 stdout。</p>\n<p>这个打包文件能够像其他任何模块一样在 Deno 中运行。</p>\n<pre class="language-autoit"><code class="language-autoit">deno run colors<span class="token punctuation">.</span>bundle<span class="token punctuation">.</span>js\n</code></pre>\n<p>打包文件是一个自包含 (self contained) 的 ES 模块，其中的任何导出仍然可用。</p>\n<p>举个例子，如果主模块是这样的：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">export</span> <span class="token punctuation">{</span> foo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./foo.js"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token string">"bar"</span><span class="token punctuation">;</span>\n</code></pre>\n<p>它可以像这样被导入：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> foo<span class="token punctuation">,</span> bar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./lib.bundle.js"</span><span class="token punctuation">;</span>\n</code></pre>\n<p>打包文件也可以在浏览器中被加载，它是一个自包含的 ES 模块，因此 <code>type</code> 属性 (attribute) 必须设置为 <code>&quot;module&quot;</code>。</p>\n<p>示例：</p>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>website.bundle.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n</code></pre>\n<p>除了直接加载，它也可以从其他模块导入。</p>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword module">import</span> <span class="token imports"><span class="token operator">*</span> <span class="token keyword module">as</span> website</span> <span class="token keyword module">from</span> <span class="token string">"website.bundle.js"</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n</code></pre>'
        } }),
    'head': React.createElement("link", { href: "/favicon.svg", rel: "icon", type: "image/svg+xml" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u6253\u5305"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p><code>deno bundle [URL]</code> 将输出一个单独的 JavaScript 文件，其中包含了它的所有依赖。</p>\n<p>示例：</p>\n<pre class="language-autoit"><code class="language-autoit"><span class="token operator">></span> deno bundle https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>deno<span class="token punctuation">.</span>land<span class="token operator">/</span>std<span class="token operator">/</span>examples<span class="token operator">/</span>colors<span class="token punctuation">.</span>ts colors<span class="token punctuation">.</span>bundle<span class="token punctuation">.</span>js\nBundling <span class="token string">"colors.bundle.js"</span>\nEmitting bundle <span class="token keyword">to</span> <span class="token string">"colors.bundle.js"</span>\n<span class="token number">9.2</span> kB emitted<span class="token punctuation">.</span>\n</code></pre>\n<p>如果您忽略了输出文件参数，打包文件将输出到 stdout。</p>\n<p>这个打包文件能够像其他任何模块一样在 Deno 中运行。</p>\n<pre class="language-autoit"><code class="language-autoit">deno run colors<span class="token punctuation">.</span>bundle<span class="token punctuation">.</span>js\n</code></pre>\n<p>打包文件是一个自包含 (self contained) 的 ES 模块，其中的任何导出仍然可用。</p>\n<p>举个例子，如果主模块是这样的：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">export</span> <span class="token punctuation">{</span> foo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./foo.js"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token string">"bar"</span><span class="token punctuation">;</span>\n</code></pre>\n<p>它可以像这样被导入：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> foo<span class="token punctuation">,</span> bar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./lib.bundle.js"</span><span class="token punctuation">;</span>\n</code></pre>\n<p>打包文件也可以在浏览器中被加载，它是一个自包含的 ES 模块，因此 <code>type</code> 属性 (attribute) 必须设置为 <code>&quot;module&quot;</code>。</p>\n<p>示例：</p>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>website.bundle.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n</code></pre>\n<p>除了直接加载，它也可以从其他模块导入。</p>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword module">import</span> <span class="token imports"><span class="token operator">*</span> <span class="token keyword module">as</span> website</span> <span class="token keyword module">from</span> <span class="token string">"website.bundle.js"</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n</code></pre>'
        } }),
    'toc': null,
    'author': "迷渡",
    'contributors': [
        "迷渡"
    ],
    'date': "2020-11-12T01:44:32.000Z",
    'updated': null,
    'excerpt': "deno bundle [URL] 将输出一个单独的 JavaScript 文件，其中包含了它的所有依赖。 示例： > deno bundle https://deno.land/std/examples/colors.ts colors.bundle.js Bundling \"colors.bundle.js\" Emitting bundle to \"colors...",
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
