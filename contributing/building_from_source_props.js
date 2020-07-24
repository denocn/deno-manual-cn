import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "link": "contributing.html",
        "text": "贡献"
    },
    'next': {
        "text": "测试和工具",
        "link": "contributing/development_tools.html"
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
    'pagePath': "contributing/building_from_source.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "contributing/building_from_source.html",
    'title': "从源码构建",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>从源码构建</h1>\n<p>以下是从源码构建 Deno 的操作步骤。如果您只是想使用 Deno，您可以下载一个预构建的可执行文件，参考 <code>入门</code> 章节。</p>\n<h2 id="%E5%85%8B%E9%9A%86-deno-%E4%BB%93%E5%BA%93">克隆 Deno 仓库<a class="anchor" href="#%E5%85%8B%E9%9A%86-deno-%E4%BB%93%E5%BA%93">§</a></h2>\n<p>Linux 或 Mac 系统：</p>\n<p>Clone on Linux or Mac:</p>\n<pre class="language-shell"><code class="language-shell"><span class="token function">git</span> clone --recurse-submodules <a class="token url-link" href="https://github.com/denoland/deno.git">https://github.com/denoland/deno.git</a>\n</code></pre>\n<p>在 Windows 系统上有一些额外步骤：</p>\n<ol>\n<li>\n<p>打开“<a href="https://www.google.com/search?q=windows+enable+developer+mode">开发者模式</a>”，否则符号链接将需要管理员权限。</p>\n</li>\n<li>\n<p>确认您正在使用 git 2.19.2.windows.1 或更高版本。</p>\n</li>\n<li>\n<p>在检出 (checkout) 前，设置 <code>core.symlinks=true</code>。</p>\n<pre class="language-shell"><code class="language-shell"><span class="token function">git</span> config --global core.symlinks <span class="token boolean">true</span>\n<span class="token function">git</span> clone --recurse-submodules <a class="token url-link" href="https://github.com/denoland/deno.git">https://github.com/denoland/deno.git</a>\n</code></pre>\n</li>\n</ol>\n<h2 id="%E5%89%8D%E7%BD%AE%E6%9D%A1%E4%BB%B6">前置条件<a class="anchor" href="#%E5%89%8D%E7%BD%AE%E6%9D%A1%E4%BB%B6">§</a></h2>\n<p>您需要 <a href="https://www.rust-lang.org/tools/install">安装 Rust</a>。Deno 不支持每晚版本(nightly) 构建，请确定您获取的是最新的稳定版本(stable release)。</p>\n<p>检查以下工具是否已经安装：</p>\n<pre class="language-autoit"><code class="language-autoit">rustc <span class="token operator">-</span>V\ncargo <span class="token operator">-</span>V\n</code></pre>\n<h2 id="%E8%AE%BE%E7%BD%AE-rust-%E7%9A%84%E7%BC%96%E8%AF%91%E7%9B%AE%E6%A0%87%E5%92%8C%E7%BB%84%E4%BB%B6">设置 rust 的编译目标和组件<a class="anchor" href="#%E8%AE%BE%E7%BD%AE-rust-%E7%9A%84%E7%BC%96%E8%AF%91%E7%9B%AE%E6%A0%87%E5%92%8C%E7%BB%84%E4%BB%B6">§</a></h2>\n<pre class="language-shell"><code class="language-shell">rustup target <span class="token function">add</span> wasm32-unknown-unknown\nrustup target <span class="token function">add</span> wasm32-wasi\n</code></pre>\n<h2 id="%E6%9E%84%E5%BB%BA-deno">构建 Deno<a class="anchor" href="#%E6%9E%84%E5%BB%BA-deno">§</a></h2>\n<p>最简单的方式是使用预编译的 V8 ：</p>\n<pre class="language-autoit"><code class="language-autoit">cargo build <span class="token operator">-</span>vv\n</code></pre>\n<p>如果您想要从源码构建 Deno 和 V8 ：</p>\n<pre class="language-autoit"><code class="language-autoit">V8_FROM_SOURCE<span class="token operator">=</span><span class="token number">1</span> cargo build <span class="token operator">-</span>vv\n</code></pre>\n<p>从源码构建 V8 时会有更多依赖：</p>\n<p><a href="https://www.python.org/downloads">Python 2</a>. 确认您的 <code>PATH</code> 环境变量中有一个无后缀 (suffix-less) 的 <code>python</code>/<code>python.exe</code>，并且它指向 Python 2，而不是 Python3 (<a href="https://github.com/denoland/deno/issues/464#issuecomment-411795578">issue 464</a>)。</p>\n<p>Linux 用户：必须已经安装 glib-2.0 开发文件。（在 Ubuntu 上，运行 <code>apt install libglib2.0-dev</code>）</p>\n<p>Mac 用户：必须已经安装 Command Line Tools。（<a href="https://developer.apple.com/xcode/">XCode</a> 已经包含了 CLT。运行 <code>xcode-select --install</code> 来在没有 XCode 的情况下安装它。）</p>\n<p>Windows 用户：</p>\n<ol>\n<li>\n<p>安装 <a href="https://www.visualstudio.com/downloads/">VS Community 2019</a>，安装 &quot;Desktop development with C++&quot; 工具包，确认以下工具都已被选中和安装。</p>\n<ul>\n<li>Visual C++ tools for CMake</li>\n<li>Windows 10 SDK (10.0.17763.0)</li>\n<li>Testing tools core features - Build Tools</li>\n<li>Visual C++ ATL for x86 and x64</li>\n<li>Visual C++ MFC for x86 and x64</li>\n<li>C++/CLI support</li>\n<li>VC++ 2015.3 v14.00 (v140) toolset for desktop</li>\n</ul>\n</li>\n</ol>\n<ol start="2">\n<li>启用 &quot;Debugging Tools for Windows&quot;：\n&quot;Control Panel&quot;\n→ &quot;Programs&quot;\n→ &quot;Programs and Features&quot;\n→ 选择 &quot;Windows Software Development Kit - Windows 10&quot;\n→ &quot;Change&quot;\n→ &quot;Change&quot;\n→ 检查 &quot;Debugging Tools For Windows&quot;\n→ &quot;Change&quot;\n→ &quot;Finish&quot;\n或者使用 <a href="https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/">Debugging Tools for Windows</a>，它会下载文件，您应该手动安装 <code>X64 Debuggers And Tools-x64_en-us.msi</code>。</li>\n</ol>\n<p>有关构建 V8 的更多细节请查阅 <a href="https://github.com/denoland/rusty_v8">rusty_v8\'s README</a></p>\n<h2 id="%E6%9E%84%E5%BB%BA">构建<a class="anchor" href="#%E6%9E%84%E5%BB%BA">§</a></h2>\n<p>使用 Cargo：</p>\n<pre class="language-shell"><code class="language-shell"><span class="token comment"># 构建：</span>\ncargo build -vv\n\n<span class="token comment"># 构建失败？确保您位于最新的 master 分支，然后再试一次。如果还不行，尝试清除上一次的结果：</span>\ncargo clean <span class="token operator">&amp;&amp;</span> cargo build -vv\n\n<span class="token comment"># 运行：</span>\n./target/debug/deno run cli/tests/002_hello.ts\n</code></pre>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E5%85%8B%E9%9A%86-deno-%E4%BB%93%E5%BA%93">克隆 Deno 仓库</a></li><li><a href="#%E5%89%8D%E7%BD%AE%E6%9D%A1%E4%BB%B6">前置条件</a></li><li><a href="#%E8%AE%BE%E7%BD%AE-rust-%E7%9A%84%E7%BC%96%E8%AF%91%E7%9B%AE%E6%A0%87%E5%92%8C%E7%BB%84%E4%BB%B6">设置 rust 的编译目标和组件</a></li><li><a href="#%E6%9E%84%E5%BB%BA-deno">构建 Deno</a></li><li><a href="#%E6%9E%84%E5%BB%BA">构建</a></li></ol></nav>'
        } })
};
