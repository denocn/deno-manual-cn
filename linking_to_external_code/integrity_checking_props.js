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
    'pagePath': "linking_to_external_code/integrity_checking.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "linking_to_external_code/integrity_checking.html",
    'title': "完整性检查与锁定文件",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>完整性检查与锁定文件</h1>\n<h2 id="%E4%BB%8B%E7%BB%8D">介绍<a class="anchor" href="#%E4%BB%8B%E7%BB%8D">§</a></h2>\n<p>假设您的模块依赖于远程模块 <code>https://some.url/a.ts</code>。当第一次编译您的模块时，<code>a.ts</code> 被下载、编译、缓存。它将保持这样，直到您在一个新的机器上运行您的模块（生产环境？）或是重新加载缓存（例如通过 <code>deno cache --reload</code>）。但当 <code>https://some.url/a.ts</code> 的内容变化时会发生什么？这将导致您的生产模块使用了和本地模块不同的依赖。Deno 的解决方法是使用完整性检查与锁定文件。</p>\n<h2 id="%E7%BC%93%E5%AD%98%E4%B8%8E%E9%94%81%E5%AE%9A%E6%96%87%E4%BB%B6">缓存与锁定文件<a class="anchor" href="#%E7%BC%93%E5%AD%98%E4%B8%8E%E9%94%81%E5%AE%9A%E6%96%87%E4%BB%B6">§</a></h2>\n<p>Deno 可以使用一个较小的 JSON 文件存储和检查模块的子资源完整性。</p>\n<p>使用 <code>--lock=lock.json</code> 启用和指定锁文件检查。</p>\n<p>要更新或创建锁，可以使用 <code>--lock=lock.json --lock-write</code>。<code>--lock=lock.json</code> 告诉 Deno 要使用哪个锁文件，<code>--lock-write</code> 用来向锁文件输出依赖的哈希值。 （<code>--lock-write</code> 必须和 <code>--lock</code> 一起使用）</p>\n<p>一个锁文件可能看起来像这样，针对依赖项存储文件的哈希值：</p>\n<pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"https://deno.land/std@v0.50.0/textproto/mod.ts"</span><span class="token operator">:</span> <span class="token string">"3118d7a42c03c242c5a49c2ad91c8396110e14acca1324e7aaefd31a999b71a4"</span><span class="token punctuation">,</span>\n  <span class="token property">"https://deno.land/std@v0.50.0/io/util.ts"</span><span class="token operator">:</span> <span class="token string">"ae133d310a0fdcf298cea7bc09a599c49acb616d34e148e263bcb02976f80dee"</span><span class="token punctuation">,</span>\n  <span class="token property">"https://deno.land/std@v0.50.0/async/delay.ts"</span><span class="token operator">:</span> <span class="token string">"35957d585a6e3dd87706858fb1d6b551cb278271b03f52c5a2cb70e65e00c26a"</span><span class="token punctuation">,</span>\n   ...\n<span class="token punctuation">}</span>\n</code></pre>\n<p>一个典型的工作流看起来像这样：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token comment">// 向 "src/deps.ts" 添加一个新的依赖，在别处使用。</span>\n<span class="token keyword">export</span> <span class="token punctuation">{</span> xyz <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"<a class="token url-link" href="https://unpkg.com/xyz-lib@v0.9.0/lib.ts">https://unpkg.com/xyz-lib@v0.9.0/lib.ts</a>"</span><span class="token punctuation">;</span>\n</code></pre>\n<pre class="language-shell"><code class="language-shell"><span class="token comment"># 创建或更新锁文件 "lock.json"</span>\ndeno cache --lock<span class="token operator">=</span>lock.json --lock-write src/deps.ts\n\n<span class="token comment"># 在提交时包含这一变化</span>\n<span class="token function">git</span> <span class="token function">add</span> -u lock.json\n<span class="token function">git</span> commit -m <span class="token string">"feat: Add support for xyz using xyz-lib"</span>\n<span class="token function">git</span> push\n</code></pre>\n<p>另一台机器上的合作者刚刚把项目克隆下来：</p>\n<pre class="language-shell"><code class="language-shell"><span class="token comment"># 下载、缓存并检查项目的依赖</span>\ndeno cache -r --lock<span class="token operator">=</span>lock.json src/deps.ts\n\n<span class="token comment"># 在这完成之后，您可以安心开发了</span>\ndeno <span class="token builtin class-name">test</span> --allow-read src\n</code></pre>\n<h2 id="%E8%BF%90%E8%A1%8C%E6%97%B6%E9%AA%8C%E8%AF%81">运行时验证<a class="anchor" href="#%E8%BF%90%E8%A1%8C%E6%97%B6%E9%AA%8C%E8%AF%81">§</a></h2>\n<p>像上面的缓存一样，您也可以在使用 <code>deno run</code> 子命令时配合<code>--lock=lock.json</code> 选项，从而在运行期间验证所有被锁定的模块的完整性。请记住，这只会针对先前添加到 <code>lock.json</code> 文件中的依赖项进行验证。新的依赖项将被缓存，但不会被检验。</p>\n<p>您也可以通过使用 <code>--cached-only</code> 选项来要求远程依赖都已经被缓存。</p>\n<pre class="language-shell"><code class="language-shell">deno run --lock<span class="token operator">=</span>lock.json --cached-only mod.ts\n</code></pre>\n<p>如果依赖树中有尚未缓存的 mod.ts 依赖项，此操作将失败。</p>\n<!-- TODO - Add detail on dynamic imports -->\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/main.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E4%BB%8B%E7%BB%8D">介绍</a></li><li><a href="#%E7%BC%93%E5%AD%98%E4%B8%8E%E9%94%81%E5%AE%9A%E6%96%87%E4%BB%B6">缓存与锁定文件</a></li><li><a href="#%E8%BF%90%E8%A1%8C%E6%97%B6%E9%AA%8C%E8%AF%81">运行时验证</a></li></ol></nav>'
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
