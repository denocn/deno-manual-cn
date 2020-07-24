import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "text": "第一步",
        "link": "getting_started/first_steps.html"
    },
    'next': {
        "text": "权限",
        "link": "getting_started/permissions.html"
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
    config: { "srcDir": "src", "publicDir": "public", "base": "/", ...projectConfig },
    'pagePath': "getting_started/command_line_interface.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "getting_started/command_line_interface.html",
    'title': "命令行界面",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>命令行界面</h1>\n<p>Deno 是一个命令行程序。到目前为止，看过这些示例后，您应该熟悉了一些简单的命令，并且已经了解了 shell 的基本用法。</p>\n<p>这是查看主要帮助文档的几种方法：</p>\n<pre class="language-shell"><code class="language-shell"><span class="token comment"># 使用子命令</span>\ndeno <span class="token builtin class-name">help</span>\n\n<span class="token comment"># 使用短选项 —— 输出和上面一样</span>\ndeno -h\n\n<span class="token comment"># 使用长选项 —— 输出更加详细</span>\ndeno --help\n</code></pre>\n<p>Deno 的 CLI 是基于子命令的。上面的帮助命令应该显示了一个子命令列表，例如 <code>deno bundle</code>。</p>\n<p>要查看特定于子命令的帮助，您可以参考以下示例：</p>\n<pre class="language-shell"><code class="language-shell">deno <span class="token builtin class-name">help</span> bundle\ndeno bundle -h\ndeno bundle --help\n</code></pre>\n<p>各个子命令的详细指南在 <a href="../tools.html">这里</a>。</p>\n<h2 id="%E8%84%9A%E6%9C%AC%E6%9D%A5%E6%BA%90">脚本来源<a class="anchor" href="#%E8%84%9A%E6%9C%AC%E6%9D%A5%E6%BA%90">§</a></h2>\n<p>Deno 可以从多个来源获取脚本，一个文件名，一个 URL，或者是 &quot;-&quot;，表示从标准输入读取，在与其他应用集成时很有用。</p>\n<pre class="language-shell"><code class="language-shell">deno run main.ts\ndeno run <a class="token url-link" href="https://mydomain.com/main.ts">https://mydomain.com/main.ts</a>\n<span class="token function">cat</span> main.ts <span class="token operator">|</span> deno run -\n</code></pre>\n<h2 id="%E8%84%9A%E6%9C%AC%E5%8F%82%E6%95%B0">脚本参数<a class="anchor" href="#%E8%84%9A%E6%9C%AC%E5%8F%82%E6%95%B0">§</a></h2>\n<p>通过在脚本名称后指定参数，您可以将用户空间参数传递给要运行的脚本，这些参数与 Deno 运行时选项区分开。</p>\n<pre class="language-shell"><code class="language-shell">deno run main.ts a b -c --quiet\n</code></pre>\n<pre class="language-ts"><code class="language-ts"><span class="token comment">// main.ts</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token property-access">args</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [ "a", "b", "-c", "--quiet" ]</span>\n</code></pre>\n<p><strong>请注意，在脚本名称之后传递的所有内容都将作为脚本参数传递，而不会用作 Deno 运行时选项。</strong></p>\n<p>这将导致以下陷阱：</p>\n<pre class="language-shell"><code class="language-shell"><span class="token comment"># 正常情况：我们给 net_client.ts 授予网络权限。</span>\ndeno run --allow-net net_client.ts\n\n<span class="token comment"># 错误情况：--allow-net 传递为 Deno.args，引发网络权限错误。</span>\ndeno run net_client.ts --allow-net\n</code></pre>\n<p>有人认为这打破了常规：</p>\n<blockquote>\n<p>一个非位置选项的解析方式会根据位置变化。</p>\n</blockquote>\n<p>然而：</p>\n<ol>\n<li>这是区分运行时选项和脚本参数的最合乎逻辑的方法。</li>\n<li>这是区分运行时选项和脚本参数的最符合人体工程学的方法。</li>\n<li>实际上，这和其他流行的运行时具有相同的行为。\n<ul>\n<li>试试 <code>node -c index.js</code> 和 <code>node index.js -c</code>，第一个只会根据 <code>-c</code> 选项对 <code>index.js</code> 做语法检查，而第二个会 <em>执行</em> <code>index.js</code>，将 <code>-c</code> 传递为 <code>require(&quot;process&quot;).argv</code>。</li>\n</ul>\n</li>\n</ol>\n<hr>\n<p>下面是在相关的子命令之间共享的逻辑选项组。</p>\n<h2 id="%E5%AE%8C%E6%95%B4%E6%80%A7%E9%80%89%E9%A1%B9">完整性选项<a class="anchor" href="#%E5%AE%8C%E6%95%B4%E6%80%A7%E9%80%89%E9%A1%B9">§</a></h2>\n<p>影响可以将资源下载到缓存的命令：<code>deno cache</code>，<code>deno run</code> 和 <code>deno test</code>.</p>\n<pre class="language-autoit"><code class="language-autoit"><span class="token operator">-</span><span class="token operator">-</span>lock <span class="token operator">&lt;</span>FILE<span class="token operator">></span>    检查指定的锁文件\n<span class="token operator">-</span><span class="token operator">-</span>lock<span class="token operator">-</span>write     写入锁文件，和 <span class="token operator">-</span><span class="token operator">-</span>lock 一起使用\n</code></pre>\n<p>更多信息在 <a href="../linking_to_external_code/integrity_checking.html">这里</a>。</p>\n<h2 id="%E7%BC%93%E5%AD%98%E5%92%8C%E7%BC%96%E8%AF%91%E9%80%89%E9%A1%B9">缓存和编译选项<a class="anchor" href="#%E7%BC%93%E5%AD%98%E5%92%8C%E7%BC%96%E8%AF%91%E9%80%89%E9%A1%B9">§</a></h2>\n<p>影响可以增加缓存的命令：<code>deno cache</code>，<code>deno run</code> 和 <code>deno test</code>.</p>\n<p>以及影响模块解析、编译配置等的选项。</p>\n<pre class="language-autoit"><code class="language-autoit"><span class="token operator">-</span><span class="token operator">-</span>config <span class="token operator">&lt;</span>FILE<span class="token operator">></span>               加载 tsconfig<span class="token punctuation">.</span>json 配置文件\n<span class="token operator">-</span><span class="token operator">-</span>importmap <span class="token operator">&lt;</span>FILE<span class="token operator">></span>            不稳定的<span class="token punctuation">:</span> 加载导入映射文件\n<span class="token operator">-</span><span class="token operator">-</span>no<span class="token operator">-</span>remote                   不要解析远程模块\n<span class="token operator">-</span><span class="token operator">-</span>reload<span class="token operator">=</span><span class="token operator">&lt;</span>CACHE_BLOCKLIST<span class="token operator">></span>    重新加载源代码缓存（重新编译 TypeScript）\n<span class="token operator">-</span><span class="token operator">-</span>unstable                    启用不稳定 API\n</code></pre>\n<h2 id="%E8%BF%90%E8%A1%8C%E6%97%B6%E9%80%89%E9%A1%B9">运行时选项<a class="anchor" href="#%E8%BF%90%E8%A1%8C%E6%97%B6%E9%80%89%E9%A1%B9">§</a></h2>\n<p>影响可以运行用户代码的命令：<code>deno run</code> 和 <code>deno test</code>.</p>\n<h3 id="%E6%9D%83%E9%99%90%E9%80%89%E9%A1%B9">权限选项<a class="anchor" href="#%E6%9D%83%E9%99%90%E9%80%89%E9%A1%B9">§</a></h3>\n<p><a href="./permissions.html#%E6%9D%83%E9%99%90%E5%88%97%E8%A1%A8">这里</a> 列出了所有权限选项。</p>\n<h3 id="%E5%85%B6%E4%BB%96%E8%BF%90%E8%A1%8C%E6%97%B6%E9%80%89%E9%A1%B9">其他运行时选项<a class="anchor" href="#%E5%85%B6%E4%BB%96%E8%BF%90%E8%A1%8C%E6%97%B6%E9%80%89%E9%A1%B9">§</a></h3>\n<p>影响运行时环境的更多选项：</p>\n<pre class="language-autoit"><code class="language-autoit"><span class="token operator">-</span><span class="token operator">-</span>cached<span class="token operator">-</span>only                要求远程依赖已经被缓存\n<span class="token operator">-</span><span class="token operator">-</span>inspect<span class="token operator">=</span><span class="token operator">&lt;</span>HOST<span class="token punctuation">:</span>PORT<span class="token operator">></span>        在 host<span class="token punctuation">:</span>port 启动检查器\n<span class="token operator">-</span><span class="token operator">-</span>inspect<span class="token operator">-</span>brk<span class="token operator">=</span><span class="token operator">&lt;</span>HOST<span class="token punctuation">:</span>PORT<span class="token operator">></span>    在 host<span class="token punctuation">:</span>port 启动检查器并且暂停执行\n<span class="token operator">-</span><span class="token operator">-</span>seed <span class="token operator">&lt;</span>NUMBER<span class="token operator">></span>              指定 Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 的随机种子\n<span class="token operator">-</span><span class="token operator">-</span>v8<span class="token operator">-</span>flags<span class="token operator">=</span><span class="token operator">&lt;</span>v8<span class="token operator">-</span>flags<span class="token operator">></span>        设置 V8 命令行选项\n</code></pre>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E8%84%9A%E6%9C%AC%E6%9D%A5%E6%BA%90">脚本来源</a></li><li><a href="#%E8%84%9A%E6%9C%AC%E5%8F%82%E6%95%B0">脚本参数</a></li><li><a href="#%E5%AE%8C%E6%95%B4%E6%80%A7%E9%80%89%E9%A1%B9">完整性选项</a></li><li><a href="#%E7%BC%93%E5%AD%98%E5%92%8C%E7%BC%96%E8%AF%91%E9%80%89%E9%A1%B9">缓存和编译选项</a></li><li><a href="#%E8%BF%90%E8%A1%8C%E6%97%B6%E9%80%89%E9%A1%B9">运行时选项</a><ol><li><a href="#%E6%9D%83%E9%99%90%E9%80%89%E9%A1%B9">权限选项</a></li><li><a href="#%E5%85%B6%E4%BB%96%E8%BF%90%E8%A1%8C%E6%97%B6%E9%80%89%E9%A1%B9">其他运行时选项</a></li></ol></li></ol></nav>'
        } })
};
