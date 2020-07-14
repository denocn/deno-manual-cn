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
    'pagePath': "getting_started/permissions.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "getting_started/permissions.html",
    'title': "权限",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>权限</h1>\n<p>默认情况下，Deno是安全的。因此 Deno 模块没有文件、网络或环境的访问权限，除非您为它授权。在命令行参数中为 deno 进程授权后才能访问安全敏感的功能。</p>\n<p>在以下示例中，<code>mod.ts</code> 只被授予文件系统的只读权限。它无法对其进行写入，或执行任何其他对安全性敏感的操作。</p>\n<pre class="language-shell"><code class="language-shell">deno run --allow-read mod.ts\n</code></pre>\n<h2 id="%E6%9D%83%E9%99%90%E5%88%97%E8%A1%A8">权限列表<a class="anchor" href="#%E6%9D%83%E9%99%90%E5%88%97%E8%A1%A8">§</a></h2>\n<p>以下权限是可用的：</p>\n<ul>\n<li><strong>-A, --allow-all</strong> 允许所有权限，这将禁用所有安全限制。</li>\n<li><strong>--allow-env</strong> 允许环境访问，例如读取和设置环境变量。</li>\n<li><strong>--allow-hrtime</strong> 允许高精度时间测量，高精度时间能够在计时攻击和特征识别中使用。</li>\n<li><strong>--allow-net=&lt;allow-net&gt;</strong> 允许网络访问。您可以指定一系列用逗号分隔的域名，来提供域名白名单。</li>\n<li><strong>--allow-plugin</strong> 允许加载插件。请注意：这是一个不稳定功能。</li>\n<li><strong>--allow-read=&lt;allow-read&gt;</strong> 允许读取文件系统。您可以指定一系列用逗号分隔的目录或文件，来提供文件系统白名单。</li>\n<li><strong>--allow-run</strong> 允许运行子进程。请注意，子进程不在沙箱中运行，因此没有与 deno 进程相同的安全限制，请谨慎使用。</li>\n<li><strong>--allow-write=&lt;allow-write&gt;</strong> 允许写入文件系统。您可以指定一系列用逗号分隔的目录或文件，来提供文件系统白名单。</li>\n</ul>\n<h2 id="%E6%9D%83%E9%99%90%E7%99%BD%E5%90%8D%E5%8D%95">权限白名单<a class="anchor" href="#%E6%9D%83%E9%99%90%E7%99%BD%E5%90%8D%E5%8D%95">§</a></h2>\n<p>Deno 还允许您使用白名单控制权限的粒度。</p>\n<p>这是一个用白名单限制文件系统访问权限的示例，仅允许访问 <code>/usr</code> 目录，但它会在尝试访问 <code>/etc</code> 目录时失败。</p>\n<pre class="language-shell"><code class="language-shell">$ deno run --allow-read<span class="token operator">=</span>/usr <a class="token url-link" href="https://deno.land/std/examples/cat.ts">https://deno.land/std/examples/cat.ts</a> /etc/passwd\nerror: Uncaught PermissionDenied: <span class="token builtin class-name">read</span> access to <span class="token string">"/etc/passwd"</span>, run again with the --allow-read flag\n► <span class="token variable">$deno</span>$/dispatch_json.ts:40:11\n    at DenoError <span class="token punctuation">(</span><span class="token variable">$deno</span>$/errors.ts:20:5<span class="token punctuation">)</span>\n    <span class="token punctuation">..</span>.\n</code></pre>\n<p>改为 <code>/etc</code> 目录，赋予正确的权限，再试一次：</p>\n<pre class="language-shell"><code class="language-shell">deno run --allow-read<span class="token operator">=</span>/etc <a class="token url-link" href="https://deno.land/std/examples/cat.ts">https://deno.land/std/examples/cat.ts</a> /etc/passwd\n</code></pre>\n<p><code>--allow-write</code> 也一样，代表写入权限。</p>\n<h2 id="%E7%BD%91%E7%BB%9C%E8%AE%BF%E9%97%AE">网络访问<a class="anchor" href="#%E7%BD%91%E7%BB%9C%E8%AE%BF%E9%97%AE">§</a></h2>\n<p><em>fetch.ts</em>:</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"<a class="token url-link" href="https://deno.land/">https://deno.land/</a>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>这是一个设置 host 或 url 白名单的示例：</p>\n<pre class="language-shell"><code class="language-shell">deno run --allow-net<span class="token operator">=</span>github.com,deno.land fetch.ts\n</code></pre>\n<p>如果 <code>fetch.ts</code> 尝试与其他域名建立网络连接，那么这个进程将会失败。</p>\n<p>允许访问任意地址：</p>\n<pre class="language-shell"><code class="language-shell">deno run --allow-net fetch.ts\n</code></pre>\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/main.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E6%9D%83%E9%99%90%E5%88%97%E8%A1%A8">权限列表</a></li><li><a href="#%E6%9D%83%E9%99%90%E7%99%BD%E5%90%8D%E5%8D%95">权限白名单</a></li><li><a href="#%E7%BD%91%E7%BB%9C%E8%AE%BF%E9%97%AE">网络访问</a></li></ol></nav>'
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
