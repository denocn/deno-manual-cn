import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "link": "getting_started.html",
        "text": "入门"
    },
    'next': {
        "text": "设置您的环境",
        "link": "getting_started/setup_your_environment.html"
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
    'pagePath': "getting_started/installation.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "getting_started/installation.html",
    'title': "安装",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>安装</h1>\n<p>Deno 能够在 macOS、Linux 和 Windows 上运行。Deno 是一个单独的可执行文件，它没有额外的依赖。</p>\n<h2 id="%E4%B8%8B%E8%BD%BD%E5%AE%89%E8%A3%85">下载安装<a class="anchor" href="#%E4%B8%8B%E8%BD%BD%E5%AE%89%E8%A3%85">§</a></h2>\n<p><a href="https://github.com/denoland/deno_install">deno_install</a> 提供了方便的脚本，用以下载安装 Deno.</p>\n<p>使用 Shell (macOS 和 Linux):</p>\n<pre class="language-shell"><code class="language-shell"><span class="token function">curl</span> -fsSL <a class="token url-link" href="https://deno.land/x/install/install.sh">https://deno.land/x/install/install.sh</a> <span class="token operator">|</span> <span class="token function">sh</span>\n</code></pre>\n<p>使用 PowerShell (Windows):</p>\n<pre class="language-shell"><code class="language-shell">iwr <a class="token url-link" href="https://deno.land/x/install/install.ps1">https://deno.land/x/install/install.ps1</a> -useb <span class="token operator">|</span> iex\n</code></pre>\n<p>使用 <a href="https://scoop.sh/">Scoop</a> (Windows):</p>\n<pre class="language-shell"><code class="language-shell">scoop <span class="token function">install</span> deno\n</code></pre>\n<p>使用 <a href="https://chocolatey.org/packages/deno">Chocolatey</a> (Windows):</p>\n<pre class="language-shell"><code class="language-shell">choco <span class="token function">install</span> deno\n</code></pre>\n<p>使用 <a href="https://formulae.brew.sh/formula/deno">Homebrew</a> (macOS):</p>\n<pre class="language-shell"><code class="language-shell">brew <span class="token function">install</span> deno\n</code></pre>\n<p>使用 <a href="https://crates.io/crates/deno">Cargo</a> (Windows, macOS, Linux):</p>\n<pre class="language-shell"><code class="language-shell">cargo <span class="token function">install</span> deno\n</code></pre>\n<p>Deno 也可以手动安装，只需从 <a href="https://github.com/denoland/deno/releases">github.com/denoland/deno/releases</a> 下载一个 zip 文件。它仅包含一个单独的可执行文件。在 macOS 和 Linux 上，您需要为它设置执行权限。</p>\n<h2 id="%E6%B5%8B%E8%AF%95%E5%AE%89%E8%A3%85">测试安装<a class="anchor" href="#%E6%B5%8B%E8%AF%95%E5%AE%89%E8%A3%85">§</a></h2>\n<p>运行 <code>deno --version</code>，如果它打印出 Deno 版本，说明安装成功。</p>\n<p>运行 <code>deno help</code> 以查看帮助文档。</p>\n<p>运行 <code>deno help &lt;subcommand&gt;</code> 以查看子命令的选项。</p>\n<p>CLI 的详细指南在 <a href="./command_line_interface.html">这里</a>。</p>\n<h2 id="%E5%8D%87%E7%BA%A7">升级<a class="anchor" href="#%E5%8D%87%E7%BA%A7">§</a></h2>\n<p>要升级已安装的版本，运行：</p>\n<pre class="language-shell"><code class="language-shell">deno upgrade\n</code></pre>\n<p>这会从 <a href="https://github.com/denoland/deno/releases">github.com/denoland/deno/releases</a> 获取最新的发布版本，然后解压并替换现有的版本。</p>\n<p>您也可以用此来安装一个特定的版本：</p>\n<pre class="language-shell"><code class="language-shell">deno upgrade --version <span class="token number">1.0</span>.1\n</code></pre>\n<h2 id="%E4%BB%8E%E6%BA%90%E7%A0%81%E6%9E%84%E5%BB%BA">从源码构建<a class="anchor" href="#%E4%BB%8E%E6%BA%90%E7%A0%81%E6%9E%84%E5%BB%BA">§</a></h2>\n<p>关于构建步骤的信息请查阅 <a href="../contributing.html">贡献</a> 章节。</p>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E4%B8%8B%E8%BD%BD%E5%AE%89%E8%A3%85">下载安装</a></li><li><a href="#%E6%B5%8B%E8%AF%95%E5%AE%89%E8%A3%85">测试安装</a></li><li><a href="#%E5%8D%87%E7%BA%A7">升级</a></li><li><a href="#%E4%BB%8E%E6%BA%90%E7%A0%81%E6%9E%84%E5%BB%BA">从源码构建</a></li></ol></nav>'
        } })
};
