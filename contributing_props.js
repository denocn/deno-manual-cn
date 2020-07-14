import Ga from '/_ga.js';
import projectConfig from '/pagic.config.js';
export default {
    'ga': React.createElement(Ga, { id: "UA-123999279-4" }),
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
    config: { "srcDir": "src", "publicDir": "public", "base": "/", ...projectConfig },
    'pagePath': "contributing.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "contributing.html",
    'title': "贡献",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>贡献</h1>\n<ul>\n<li>\n<p>阅读 <a href="./style-guide.zh-CN.html">风格指南</a>.</p>\n</li>\n<li>\n<p>请不要让 <a href="https://deno.land/benchmarks.html">性能测试</a> 变糟。</p>\n</li>\n<li>\n<p>在 <a href="https://discord.gg/deno">社区聊天室</a> 获取帮助。</p>\n</li>\n<li>\n<p>如果您将要在某个 issue 下做些工作，在那之前请先在 issue 中提示一下。</p>\n</li>\n<li>\n<p>请在论坛上保持专业。我们遵循 Rust 的<a href="https://www.rust-lang.org/policies/code-of-conduct">行为准则</a> (Code of conduct)。有问题请向 ry 发邮件(ry@tinyclouds.org)。</p>\n</li>\n</ul>\n<h2 id="%E5%BC%80%E5%8F%91">开发<a class="anchor" href="#%E5%BC%80%E5%8F%91">§</a></h2>\n<p>从源码构建的步骤在 <a href="./contributing/building_from_source.html">这里</a></p>\n<h2 id="%E5%8F%91%E8%B5%B7%E4%B8%80%E4%B8%AA-pull-request">发起一个 Pull Request<a class="anchor" href="#%E5%8F%91%E8%B5%B7%E4%B8%80%E4%B8%AA-pull-request">§</a></h2>\n<p>在提交之前，请确认以下步骤：</p>\n<ol>\n<li>存在一个相关 issue，并且 PR 文本中引用了它。</li>\n<li>有覆盖这些变化的测试。</li>\n<li>确保 <code>cargo test</code> 通过。</li>\n<li>使用 <code>./tools/format.py</code> 格式化代码。</li>\n<li>确保 <code>./tools/lint.py</code> 通过。</li>\n</ol>\n<h2 id="third_party-%E7%9A%84%E6%94%B9%E5%8A%A8"><code>third_party</code> 的改动<a class="anchor" href="#third_party-%E7%9A%84%E6%94%B9%E5%8A%A8">§</a></h2>\n<p><a href="https://github.com/denoland/deno_third_party"><code>deno_third_party</code></a> 包含了大部分 Deno 依赖的外部代码，所以我们在任何时候都知道我们在运行什么。我们用一些手动操作和私有脚本来维护它，要做出改动，您可能需要联系 @ry 或 @piscisaureus。</p>\n<h2 id="%E5%A2%9E%E5%8A%A0-ops">增加 Ops<a class="anchor" href="#%E5%A2%9E%E5%8A%A0-ops">§</a></h2>\n<p>Ops 又称“绑定” (bindings)。</p>\n<p>我们非常担心在添加新 API 时会出错。在向 Deno 添加 Op 时，应该研究其他平台上的对应接口。请列出如何在 Go、Node、Rust 和 Python 中完成此功能。</p>\n<p>例如，参考 <code>deno.rename()</code> 是如何在\n<a href="https://github.com/denoland/deno/pull/671">PR #671</a> 中提出并添加的。</p>\n<h2 id="%E5%8F%91%E5%B8%83">发布<a class="anchor" href="#%E5%8F%91%E5%B8%83">§</a></h2>\n<p>以往发布的所做更改的总结在 <a href="https://github.com/denoland/deno/releases">这里</a>。</p>\n<h2 id="api-%E6%96%87%E6%A1%A3">API 文档<a class="anchor" href="#api-%E6%96%87%E6%A1%A3">§</a></h2>\n<p>公开 API 的文档很重要，我们希望它与代码内联。这有助于确保代码和文档紧密结合在一起。</p>\n<h3 id="%E5%88%A9%E7%94%A8-jsdoc">利用 JSDoc<a class="anchor" href="#%E5%88%A9%E7%94%A8-jsdoc">§</a></h3>\n<p>所有通过 <code>deno</code> 模块以及 global/<code>window</code> 命名空间公开的 API 和类型都应该有 JSDoc 文档。该文档经过解析并可供 TypeScript 编译器使用，因此易于在下游提供。JSDoc 块就在它们应用的语句之前，并以 <code>/** doc */</code> 表示。例如：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token doc-comment comment">/** A simple JSDoc comment */</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">FOO</span> <span class="token operator">=</span> <span class="token string">"foo"</span><span class="token punctuation">;</span>\n</code></pre>\n<p>更多信息位于 <a href="https://jsdoc.app/">https://jsdoc.app/</a></p>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E5%BC%80%E5%8F%91">开发</a></li><li><a href="#%E5%8F%91%E8%B5%B7%E4%B8%80%E4%B8%AA-pull-request">发起一个 Pull Request</a></li><li><a href="#third_party-%E7%9A%84%E6%94%B9%E5%8A%A8">third_party 的改动</a></li><li><a href="#%E5%A2%9E%E5%8A%A0-ops">增加 Ops</a></li><li><a href="#%E5%8F%91%E5%B8%83">发布</a></li><li><a href="#api-%E6%96%87%E6%A1%A3">API 文档</a><ol><li><a href="#%E5%88%A9%E7%94%A8-jsdoc">利用 JSDoc</a></li></ol></li></ol></nav>'
        } })
};
