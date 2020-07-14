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
    'pagePath': "getting_started/setup_your_environment.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "getting_started/setup_your_environment.html",
    'title': "设置您的环境",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>设置您的环境</h1>\n<p>要高效地使用 Deno，您需要设置环境，比如命令行自动补全、环境变量、编辑器或 IDE。</p>\n<h2 id="%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F">环境变量<a class="anchor" href="#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F">§</a></h2>\n<p>这是一些控制 Deno 行为的环境变量：</p>\n<p><code>DENO_DIR</code> 默认为 <code>$HOME/.cache/deno</code>，但可以设置为任何路径。这是 Deno 存放生成的代码和缓存的源码的路径。</p>\n<p>如果 <code>NO_COLOR</code> 被设置，Deno 将会关闭彩色输出 (<a href="https://no-color.org/">https://no-color.org/</a>)。用户代码可以通过布尔常量 <code>Deno.noColor</code> 测试 <code>NO_COLOR</code> 是否被设置，这不需要环境权限 (<code>--allow-env</code>)。</p>\n<h2 id="%E5%91%BD%E4%BB%A4%E8%A1%8C%E8%87%AA%E5%8A%A8%E8%A1%A5%E5%85%A8">命令行自动补全<a class="anchor" href="#%E5%91%BD%E4%BB%A4%E8%A1%8C%E8%87%AA%E5%8A%A8%E8%A1%A5%E5%85%A8">§</a></h2>\n<p>通过 <code>deno completions &lt;shell&gt;</code> 命令可以生成补全脚本。它会输出到 stdout，您应该将它重定向到适当的文件。</p>\n<p>Deno 支持的 shell 如下：</p>\n<ul>\n<li>zsh</li>\n<li>bash</li>\n<li>fish</li>\n<li>powershell</li>\n<li>elvish</li>\n</ul>\n<p>示例 (bash)：</p>\n<pre class="language-shell"><code class="language-shell">deno completions <span class="token function">bash</span> <span class="token operator">></span> /usr/local/etc/bash_completion.d/deno.bash\n<span class="token builtin class-name">source</span> /usr/local/etc/bash_completion.d/deno.bash\n</code></pre>\n<p>示例 (zsh):</p>\n<pre class="language-shell"><code class="language-shell"><span class="token function">mkdir</span> ~/.oh-my-zsh/custom/plugins/deno\ndeno completions <span class="token function">zsh</span> <span class="token operator">></span> ~/.oh-my-zsh/custom/plugins/deno/_deno\n</code></pre>\n<p>在此之后，在 <code>~/.zshrc</code> 文件中的 plugins 标签下增加 <code>deno</code> 插件。</p>\n<h2 id="%E7%BC%96%E8%BE%91%E5%99%A8%E5%92%8C-ide">编辑器和 IDE<a class="anchor" href="#%E7%BC%96%E8%BE%91%E5%99%A8%E5%92%8C-ide">§</a></h2>\n<p>Deno 需要用文件后缀名来支持模块导入和 HTTP 导入。目前，大多数编辑器和语言服务器没有原生支持这点，一些编辑器可能会抛出“无法找到文件”的错误，或是“不必要的文件后缀名”错误。</p>\n<p>社区已经开发了一些插件用来解决这些问题。</p>\n<h3 id="vs-code">VS Code<a class="anchor" href="#vs-code">§</a></h3>\n<p>目前内测版的 <a href="https://github.com/denoland/vscode_deno">vscode_deno</a> 扩展已经发布到了 <a href="https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno">Visual Studio Marketplace</a>。如果遇到 bug 欢迎提 issues。</p>\n<h3 id="jetbrains-ide">JetBrains IDE<a class="anchor" href="#jetbrains-ide">§</a></h3>\n<p>JetBrains IDE 通过插件来提供 Deno 支持：<a href="https://plugins.jetbrains.com/plugin/14382-deno">Deno 插件</a></p>\n<p>要了解有关设置步骤的更多信息，请在 YouTrack 上阅读 <a href="https://youtrack.jetbrains.com/issue/WEB-41607#focus=streamItem-27-4160152.0-0">这个评论</a>。</p>\n<h2 id="vim-%E5%92%8C-neovim">Vim 和 NeoVim<a class="anchor" href="#vim-%E5%92%8C-neovim">§</a></h2>\n<p>如果您安装 <a href="https://github.com/neoclide/coc.nvim">CoC</a>（intellisense engine and language server protocol），Vim 对于 Deno/TypeScript 来说非常友好。</p>\n<p>当安装完 CoC 后，可以在 Vim 内部运行 <code>:CocInstall coc-deno</code>。你会发现，诸如 <code>gd</code>（转到定义）和 <code>gr</code>（转到/查找引用）之类的东西可以正常工作了。</p>\n<h3 id="emacs">Emacs<a class="anchor" href="#emacs">§</a></h3>\n<p>对于目标为 Deno 的 TypeScript 项目，Emacs 工作得很好，只需使用两个插件：</p>\n<ul>\n<li>\n<p><a href="https://github.com/ananthakumaran/tide">tide</a>：这是在 Emacs 中使用 TypeScript 的典范方法。</p>\n</li>\n<li>\n<p><a href="https://github.com/justjavac/typescript-deno-plugin">typescript-deno-plugin</a>：它被 <a href="https://github.com/denoland/vscode_deno">Deno 官方 VSCode 插件</a> 使用。</p>\n</li>\n</ul>\n<p>首先确保您已经安装了 <code>tide</code>，下一步，按照 <a href="https://github.com/justjavac/typescript-deno-plugin">typescript-deno-plugin</a> 页面的指示，在项目中运行 <code>npm install --save-dev typescript-deno-plugin typescript</code> (<code>npm init -y</code> 是必要的)，并在 <code>tsconfig.json</code> 中添加以下设置，然后准备开发吧！</p>\n<pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"typescript-deno-plugin"</span><span class="token punctuation">,</span>\n        <span class="token property">"enable"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// default is `true`</span>\n        <span class="token property">"importmap"</span><span class="token operator">:</span> <span class="token string">"import_map.json"</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>如果您没有在列表中看到您最喜欢的 IDE，或许可以开发一个插件，我们的社区能够帮助您起步：<a href="https://discord.gg/deno">Discord</a></p>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F">环境变量</a></li><li><a href="#%E5%91%BD%E4%BB%A4%E8%A1%8C%E8%87%AA%E5%8A%A8%E8%A1%A5%E5%85%A8">命令行自动补全</a></li><li><a href="#%E7%BC%96%E8%BE%91%E5%99%A8%E5%92%8C-ide">编辑器和 IDE</a><ol><li><a href="#vs-code">VS Code</a></li><li><a href="#jetbrains-ide">JetBrains IDE</a></li></ol></li><li><a href="#vim-%E5%92%8C-neovim">Vim 和 NeoVim</a><ol><li><a href="#emacs">Emacs</a></li></ol></li></ol></nav>'
        } })
};
