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
    'pagePath': "tools/linter.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "tools/linter.html",
    'title': "Linter",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Linter</h1>\n<p>Deno 附带了 JavaScript 和 TypeScript 的内置 linter。</p>\n<p><strong>注意：linter 是一个新功能，仍然不稳定，因此需要 <code>--unstable</code> 选项</strong></p>\n<pre class="language-shell"><code class="language-shell"><span class="token comment"># 检查当前目录树内所有 JS/TS 文件</span>\ndeno lint --unstable\n<span class="token comment"># 检查特定文件</span>\ndeno lint --unstable myfile1.ts myfile2.ts\n</code></pre>\n<h2 id="%E5%8F%AF%E7%94%A8%E8%A7%84%E5%88%99">可用规则<a class="anchor" href="#%E5%8F%AF%E7%94%A8%E8%A7%84%E5%88%99">§</a></h2>\n<ul>\n<li><code>ban-ts-comment</code></li>\n<li><code>ban-untagged-ignore</code></li>\n<li><code>constructor-super</code></li>\n<li><code>for-direction</code></li>\n<li><code>getter-return</code></li>\n<li><code>no-array-constructor</code></li>\n<li><code>no-async-promise-executor</code></li>\n<li><code>no-case-declarations</code></li>\n<li><code>no-class-assign</code></li>\n<li><code>no-compare-neg-zero</code></li>\n<li><code>no-cond-assign</code></li>\n<li><code>no-debugger</code></li>\n<li><code>no-delete-var</code></li>\n<li><code>no-dupe-args</code></li>\n<li><code>no-dupe-keys</code></li>\n<li><code>no-duplicate-case</code></li>\n<li><code>no-empty-character-class</code></li>\n<li><code>no-empty-interface</code></li>\n<li><code>no-empty-pattern</code></li>\n<li><code>no-empty</code></li>\n<li><code>no-ex-assign</code></li>\n<li><code>no-explicit-any</code></li>\n<li><code>no-func-assign</code></li>\n<li><code>no-misused-new</code></li>\n<li><code>no-namespace</code></li>\n<li><code>no-new-symbol</code></li>\n<li><code>no-obj-call</code></li>\n<li><code>no-octal</code></li>\n<li><code>no-prototype-builtins</code></li>\n<li><code>no-regex-spaces</code></li>\n<li><code>no-setter-return</code></li>\n<li><code>no-this-alias</code></li>\n<li><code>no-this-before-super</code></li>\n<li><code>no-unsafe-finally</code></li>\n<li><code>no-unsafe-negation</code></li>\n<li><code>no-with</code></li>\n<li><code>prefer-as-const</code></li>\n<li><code>prefer-namespace-keyword</code></li>\n<li><code>require-yield</code></li>\n<li><code>triple-slash-reference</code></li>\n<li><code>use-isnan</code></li>\n<li><code>valid-typeof</code></li>\n</ul>\n<h2 id="%E5%BF%BD%E7%95%A5%E6%8C%87%E4%BB%A4">忽略指令<a class="anchor" href="#%E5%BF%BD%E7%95%A5%E6%8C%87%E4%BB%A4">§</a></h2>\n<h3 id="%E6%96%87%E4%BB%B6">文件<a class="anchor" href="#%E6%96%87%E4%BB%B6">§</a></h3>\n<p>要忽略整个文件，<code>// deno-lint-ignore-file</code> 指令应该置于文件顶部。</p>\n<pre class="language-ts"><code class="language-ts"><span class="token comment">// deno-lint-ignore-file</span>\n\n<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>必须在第一个语句或声明之前放置忽略指令：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token comment">// Copyright 2020 the Deno authors. All rights reserved. MIT license.</span>\n\n<span class="token doc-comment comment">/**\n * Some JS doc\n **/</span>\n\n<span class="token comment">// deno-lint-ignore-file</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">{</span> bar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./bar.js"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h3 id="%E8%AF%8A%E6%96%AD-(diagnostics)">诊断 (Diagnostics)<a class="anchor" href="#%E8%AF%8A%E6%96%AD-(diagnostics)">§</a></h3>\n<p>要忽略某些诊断，<code>// deno-lint-ignore &lt;codes ...&gt;</code> 指令应该置于违规行之前。必须指定要忽略的规则名称。</p>\n<pre class="language-ts"><code class="language-ts"><span class="token comment">// deno-lint-ignore no-explicit-any</span>\n<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// deno-lint-ignore no-explicit-any explicit-function-return-type</span>\n<span class="token class-name"><span class="token keyword">function</span></span> <span class="token function">bar</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>为了与 ESLint 兼容，<code>deno lint</code> 也支持 <code>// eslint-ignore-next-line</code> 指令。像 <code>// deno-lint-ignore</code> 一样，这也需要指定忽略的规则名称。</p>\n<pre class="language-ts"><code class="language-ts"><span class="token comment">// eslint-ignore-next-line no-empty</span>\n<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n<span class="token comment">// eslint-ignore-next-line @typescript-eslint/no-explicit-any</span>\n<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre>\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/main.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E5%8F%AF%E7%94%A8%E8%A7%84%E5%88%99">可用规则</a></li><li><a href="#%E5%BF%BD%E7%95%A5%E6%8C%87%E4%BB%A4">忽略指令</a><ol><li><a href="#%E6%96%87%E4%BB%B6">文件</a></li><li><a href="#%E8%AF%8A%E6%96%AD-(diagnostics)">诊断 (Diagnostics)</a></li></ol></li></ol></nav>'
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
