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
                "link": "testing.md"
            },
            {
                "link": "tools.md",
                "children": [
                    "tools/debugger.md",
                    "tools/script_installer.md",
                    "tools/formatter.md",
                    "tools/bundler.md",
                    "tools/documentation_generator.md",
                    "tools/dependency_inspector.md"
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
    'pagePath': "getting_started/installation.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "getting_started/installation.html",
    'title': "安装",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>安装</h1>\n<p>Deno 能够在 macOS、Linux 和 Windows 上运行。Deno 是一个单独的可执行文件，它没有额外的依赖。</p>\n<h2 id="%E4%B8%8B%E8%BD%BD%E5%AE%89%E8%A3%85">下载安装<a class="anchor" href="#%E4%B8%8B%E8%BD%BD%E5%AE%89%E8%A3%85">§</a></h2>\n<p><a href="https://github.com/denoland/deno_install">deno_install</a> 提供了方便的脚本，用以下载安装 Deno.</p>\n<p>使用 Shell (macOS 和 Linux):</p>\n<pre class="language-shell"><code class="language-shell"><span class="token function">curl</span> -fsSL <a class="token url-link" href="https://deno.land/x/install/install.sh">https://deno.land/x/install/install.sh</a> <span class="token operator">|</span> <span class="token function">sh</span>\n</code></pre>\n<p>使用 PowerShell (Windows):</p>\n<pre class="language-shell"><code class="language-shell">iwr <a class="token url-link" href="https://deno.land/x/install/install.ps1">https://deno.land/x/install/install.ps1</a> -useb <span class="token operator">|</span> iex\n</code></pre>\n<p>使用 <a href="https://scoop.sh/">Scoop</a> (Windows):</p>\n<pre class="language-shell"><code class="language-shell">scoop <span class="token function">install</span> deno\n</code></pre>\n<p>使用 <a href="https://chocolatey.org/packages/deno">Chocolatey</a> (Windows):</p>\n<pre class="language-shell"><code class="language-shell">choco <span class="token function">install</span> deno\n</code></pre>\n<p>使用 <a href="https://formulae.brew.sh/formula/deno">Homebrew</a> (macOS):</p>\n<pre class="language-shell"><code class="language-shell">brew <span class="token function">install</span> deno\n</code></pre>\n<p>使用 <a href="https://crates.io/crates/deno">Cargo</a> (Windows, macOS, Linux):</p>\n<pre class="language-shell"><code class="language-shell">cargo <span class="token function">install</span> deno\n</code></pre>\n<p>Deno 也可以手动安装，只需从 <a href="https://github.com/denoland/deno/releases">github.com/denoland/deno/releases</a> 下载一个 zip 文件。它仅包含一个单独的可执行文件。在 macOS 和 Linux 上，您需要为它设置执行权限。</p>\n<h2 id="%E6%B5%8B%E8%AF%95%E5%AE%89%E8%A3%85">测试安装<a class="anchor" href="#%E6%B5%8B%E8%AF%95%E5%AE%89%E8%A3%85">§</a></h2>\n<p>运行 <code>deno --version</code>，如果它打印出 Deno 版本，说明安装成功。</p>\n<p>运行 <code>deno help</code> 以查看帮助文档。</p>\n<p>运行 <code>deno help &lt;subcommand&gt;</code> 以查看子命令的选项。</p>\n<h2 id="%E5%8D%87%E7%BA%A7">升级<a class="anchor" href="#%E5%8D%87%E7%BA%A7">§</a></h2>\n<p>要升级已安装的版本，运行：</p>\n<pre class="language-shell"><code class="language-shell">deno upgrade\n</code></pre>\n<p>这会从 <a href="https://github.com/denoland/deno/releases">github.com/denoland/deno/releases</a> 获取最新的发布版本，然后解压并替换现有的版本。</p>\n<p>您也可以用此来安装一个特定的版本：</p>\n<pre class="language-shell"><code class="language-shell">deno upgrade --version <span class="token number">1.0</span>.1\n</code></pre>\n<h2 id="%E4%BB%8E%E6%BA%90%E7%A0%81%E6%9E%84%E5%BB%BA">从源码构建<a class="anchor" href="#%E4%BB%8E%E6%BA%90%E7%A0%81%E6%9E%84%E5%BB%BA">§</a></h2>\n<p>关于构建步骤的信息请查阅 <a href="../contributing.html">贡献</a> 章节。</p>\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/main.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E4%B8%8B%E8%BD%BD%E5%AE%89%E8%A3%85">下载安装</a></li><li><a href="#%E6%B5%8B%E8%AF%95%E5%AE%89%E8%A3%85">测试安装</a></li><li><a href="#%E5%8D%87%E7%BA%A7">升级</a></li><li><a href="#%E4%BB%8E%E6%BA%90%E7%A0%81%E6%9E%84%E5%BB%BA">从源码构建</a></li></ol></nav>'
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
                    "text": "权限",
                    "link": "getting_started/permissions.html"
                },
                {
                    "text": "使用 TypeScript",
                    "link": "getting_started/typescript.html"
                },
                {
                    "text": "WASM 支持",
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
