import projectConfig from '/pagic.config.js';
export default {
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
    'pagePath': "standard_library.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "standard_library.html",
    'title': "标准库",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>标准库</h1>\n<p>Deno 提供一组标准模块，它们经过核心团队审计，保证能在 Deno 上工作。</p>\n<p>标准库地址：<a href="https://deno.land/std/">https://deno.land/std/</a></p>\n<h2 id="%E7%89%88%E6%9C%AC%E5%92%8C%E7%A8%B3%E5%AE%9A%E6%80%A7">版本和稳定性<a class="anchor" href="#%E7%89%88%E6%9C%AC%E5%92%8C%E7%A8%B3%E5%AE%9A%E6%80%A7">§</a></h2>\n<p>标准库尚不稳定，因此采用与 Deno 不同的版本号。每次 Deno 发布时，标准库也会一起发布。</p>\n<p>最新的发布请查阅 <a href="https://deno.land/std/">https://deno.land/std/</a> 或 <a href="https://deno.land/std/version.ts">https://deno.land/std/version.ts</a>。</p>\n<p>我们强烈建议：始终使用确定版本的标准库，以避免意外的改动。</p>\n<p>例如，连接到随时可能更改的主分支时可能会导致编译错误或意外行为：</p>\n<pre class="language-typescript"><code class="language-typescript"><span class="token comment">// 从 master 导入，这应当避免</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> copy <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"<a class="token url-link" href="https://deno.land/std/fs/copy.ts">https://deno.land/std/fs/copy.ts</a>"</span><span class="token punctuation">;</span>\n</code></pre>\n<p>更好的选择是使用不可变且不会更改的 std 库版本：</p>\n<pre class="language-typescript"><code class="language-typescript"><span class="token comment">// 从不可变的 std v0.50.0 导入</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> copy <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"<a class="token url-link" href="https://deno.land/std@0.50.0/fs/copy.ts">https://deno.land/std@0.50.0/fs/copy.ts</a>"</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="%E6%8E%92%E9%94%99-(troubleshooting)">排错 (Troubleshooting)<a class="anchor" href="#%E6%8E%92%E9%94%99-(troubleshooting)">§</a></h2>\n<p>标准库中的一些模块使用了不稳定的 Deno API。</p>\n<p>不用 <code>--unstable</code> 命令行选项运行这些模块会产生一些 TypeScript 错误，表示 <code>Deno</code> 命名空间中不存在一些 API：</p>\n<pre class="language-typescript"><code class="language-typescript"><span class="token comment">// main.ts</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> copy <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"<a class="token url-link" href="https://deno.land/std@0.50.0/fs/copy.ts">https://deno.land/std@0.50.0/fs/copy.ts</a>"</span><span class="token punctuation">;</span>\n\n<span class="token function">copy</span><span class="token punctuation">(</span><span class="token string">"log.txt"</span><span class="token punctuation">,</span> <span class="token string">"log-old.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<pre class="language-shell"><code class="language-shell">$ deno run --allow-read --allow-write main.ts\nCompile <a class="token url-link" href="file:///dev/deno/main.ts">file:///dev/deno/main.ts</a>\nDownload <a class="token url-link" href="https://deno.land/std@0.50.0/fs/copy.ts">https://deno.land/std@0.50.0/fs/copy.ts</a>\nDownload <a class="token url-link" href="https://deno.land/std@0.50.0/fs/ensure_dir.ts">https://deno.land/std@0.50.0/fs/ensure_dir.ts</a>\nDownload <a class="token url-link" href="https://deno.land/std@0.50.0/fs/_util.ts">https://deno.land/std@0.50.0/fs/_util.ts</a>\nerror: TS2339 <span class="token punctuation">[</span>ERROR<span class="token punctuation">]</span>: Property <span class="token string">\'utime\'</span> does not exist on <span class="token builtin class-name">type</span> <span class="token string">\'typeof Deno\'</span><span class="token builtin class-name">.</span>\n    await Deno.utime<span class="token punctuation">(</span>dest, statInfo.atime, statInfo.mtime<span class="token punctuation">)</span><span class="token punctuation">;</span>\n               ~~~~~\n    at <a class="token url-link" href="https://deno.land/std@0.50.0/fs/copy.ts:90:16">https://deno.land/std@0.50.0/fs/copy.ts:90:16</a>\n\nTS2339 <span class="token punctuation">[</span>ERROR<span class="token punctuation">]</span>: Property <span class="token string">\'utimeSync\'</span> does not exist on <span class="token builtin class-name">type</span> <span class="token string">\'typeof Deno\'</span><span class="token builtin class-name">.</span>\n    Deno.utimeSync<span class="token punctuation">(</span>dest, statInfo.atime, statInfo.mtime<span class="token punctuation">)</span><span class="token punctuation">;</span>\n         ~~~~~~~~~\n    at <a class="token url-link" href="https://deno.land/std@0.50.0/fs/copy.ts:101:10">https://deno.land/std@0.50.0/fs/copy.ts:101:10</a>\n</code></pre>\n<p>解决方法是加上 <code>--unstable</code> 选项：</p>\n<pre class="language-shell"><code class="language-shell">deno run --allow-read --allow-write --unstable main.ts\n</code></pre>\n<p>要确定哪些 API 是不稳定的，请查阅类型声明 <a href="https://github.com/denoland/deno/blob/master/cli/js/lib.deno.unstable.d.ts">lib.deno.unstable.d.ts</a></p>\n<p>这个问题会在不远的将来解决。如果您依赖的特定模块在没有该选项的情况下成功编译，则可以忽略该选项。</p>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E7%89%88%E6%9C%AC%E5%92%8C%E7%A8%B3%E5%AE%9A%E6%80%A7">版本和稳定性</a></li><li><a href="#%E6%8E%92%E9%94%99-(troubleshooting)">排错 (Troubleshooting)</a></li></ol></nav>'
        } })
};
