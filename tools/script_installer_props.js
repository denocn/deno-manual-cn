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
    'pagePath': "tools/script_installer.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "tools/script_installer.html",
    'title': "脚本安装器",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>脚本安装器</h1>\n<p>Deno 提供 <code>deno install</code> 来安装和分发可执行代码。</p>\n<p><code>deno install [OPTIONS...] [URL] [SCRIPT_ARGS...]</code> 将把位于 <code>URL</code> 的脚本安装到名称 <code>EXE_NAME</code> 下。</p>\n<p>这个命令将会创建一个轻薄的 shell 脚本来调用 <code>deno</code>，其中写入了特定的命令行参数。它位于 <code>deno</code> 安装目录的 <code>bin</code> 子目录下。</p>\n<p>示例：</p>\n<pre class="language-shell"><code class="language-shell">$ deno <span class="token function">install</span> --allow-net --allow-read <a class="token url-link" href="https://deno.land/std/http/file_server.ts">https://deno.land/std/http/file_server.ts</a>\n<span class="token punctuation">[</span><span class="token number">1</span>/1<span class="token punctuation">]</span> Compiling <a class="token url-link" href="https://deno.land/std/http/file_server.ts">https://deno.land/std/http/file_server.ts</a>\n\n✅ Successfully installed file_server.\n/Users/deno/.deno/bin/file_server\n</code></pre>\n<p>要改变命令名称，使用 <code>-n</code>/<code>--name</code> 参数：</p>\n<pre class="language-shell"><code class="language-shell">deno <span class="token function">install</span> --allow-net --allow-read -n serve <a class="token url-link" href="https://deno.land/std/http/file_server.ts">https://deno.land/std/http/file_server.ts</a>\n</code></pre>\n<p>默认情况下，Deno 会自动推导命令名称。</p>\n<ul>\n<li>\n<p>尝试获取文件名称 (file stem)，以上示例将推导为 &quot;file_server&quot;</p>\n</li>\n<li>\n<p>如果文件名称是通用的，比如 &quot;main&quot;、&quot;mod&quot;、&quot;index&quot; 或 &quot;cli&quot;，并且它的路径没有父级，那么取父级路径的文件名，否则设置为原通用名称。</p>\n</li>\n</ul>\n<p>要改变安装路径，使用 <code>--root</code> 选项：</p>\n<pre class="language-shell"><code class="language-shell">deno <span class="token function">install</span> --allow-net --allow-read --root /usr/local <a class="token url-link" href="https://deno.land/std/http/file_server.ts">https://deno.land/std/http/file_server.ts</a>\n</code></pre>\n<p>按照优先顺序确定安装根目录：</p>\n<ul>\n<li><code>--root</code> 选项</li>\n<li><code>DENO_INSTALL_ROOT</code> 环境变量</li>\n<li><code>$HOME/.deno</code></li>\n</ul>\n<p>如果需要，它们必须被添加进 <code>PATH</code> 环境变量。</p>\n<pre class="language-shell"><code class="language-shell"><span class="token builtin class-name">echo</span> <span class="token string">\'export PATH="<span class="token environment constant">$HOME</span>/.deno/bin:<span class="token environment constant">$PATH</span>"\'</span> <span class="token operator">>></span> ~/.bashrc\n</code></pre>\n<p>在安装时，您必须指定脚本会用到的权限。</p>\n<pre class="language-shell"><code class="language-shell">deno <span class="token function">install</span> --allow-net --allow-read <a class="token url-link" href="https://deno.land/std/http/file_server.ts">https://deno.land/std/http/file_server.ts</a> <span class="token number">8080</span>\n</code></pre>\n<p>以上命令会创建一个名叫 <code>file_server</code> 的命令，运行时需要读取权限和网络权限，绑定到 8080 端口。</p>\n<p>我们建议使用 <a href="../examples/testing_if_main.html">import.meta.main</a> 来指定作为可执行脚本时的入口点。</p>\n<p>示例：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token comment">// <a class="token url-link" href="https://example.com/awesome/cli.ts">https://example.com/awesome/cli.ts</a></span>\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">myAwesomeCli</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token known-class-name class-name">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token operator">--</span> snip <span class="token operator">--</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span><span class="token property-access">meta</span><span class="token punctuation">.</span><span class="token property-access">main</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">myAwesomeCli</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>当您创建一个可执行脚本时，最好在仓库中告诉用户如何安装，让用户看到一个示例安装命令。</p>\n<pre class="language-shell"><code class="language-shell"><span class="token comment"># 使用 deno install 安装</span>\n\n$ deno <span class="token function">install</span> -n awesome_cli <a class="token url-link" href="https://example.com/awesome/cli.ts">https://example.com/awesome/cli.ts</a>\n</code></pre>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': null
};
