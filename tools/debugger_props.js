import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "link": "tools.html",
        "title": "内置工具"
    },
    'next': {
        "title": "脚本安装器",
        "link": "tools/script_installer.html"
    },
    config: { "root": "/", ...projectConfig },
    'pagePath': "tools/debugger.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "tools/debugger.html",
    'title': "调试器 (debugger)",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>调试器 (debugger)</h1>\n<p>Deno 支持 <a href="https://v8.dev/docs/inspector">V8 Inspector Protocol</a>.</p>\n<p>使用 Chrome Devtools 或其他支持该协议的客户端（比如 VSCode）能够调试 Deno 程序。</p>\n<p>要启用调试功能，用 <code>--inspect</code> 或 <code>--inspect-brk</code> 选项运行 Deno。</p>\n<p><code>--inspect</code> 选项允许在任何时间点连接调试器，而 <code>--inspect-brk</code> 选项会等待调试器连接，在第一行代码处暂停执行。</p>\n<h2 id="chrome-devtools">Chrome Devtools<a class="anchor" href="#chrome-devtools">§</a></h2>\n<p>让我们用 Chrome 开发者工具来调试一个程序，我们将使用来自 <code>std</code> 的 <a href="https://deno.land/std@v0.50.0/http/file_server.ts">file_server.ts</a>，这是一个静态文件服务。</p>\n<p>使用 <code>--inspect-brk</code> 选项，在第一行代码处暂停执行。</p>\n<pre class="language-shell"><code class="language-shell">$ deno run --inspect-brk --allow-read --allow-net <a class="token url-link" href="https://deno.land/std@v0.50.0/http/file_server.ts">https://deno.land/std@v0.50.0/http/file_server.ts</a>\nDebugger listening on ws://127.0.0.1:9229/ws/1e82c406-85a9-44ab-86b6-7341583480b1\nDownload <a class="token url-link" href="https://deno.land/std@v0.50.0/http/file_server.ts">https://deno.land/std@v0.50.0/http/file_server.ts</a>\nCompile <a class="token url-link" href="https://deno.land/std@v0.50.0/http/file_server.ts">https://deno.land/std@v0.50.0/http/file_server.ts</a>\n<span class="token punctuation">..</span>.\n</code></pre>\n<p>打开 <code>chrome://inspect</code>，点击 target 旁边的 <code>Inspect</code>。</p>\n<p><img src="../images/debugger1.jpg" alt="chrome://inspect"></p>\n<p>开发者工具加载所有模块时可能会等待几秒。</p>\n<p><img src="../images/debugger2.jpg" alt="Devtools opened"></p>\n<p>您可能注意到开发者工具暂停执行的地方不是 <code>file_server.ts</code>，而是 <code>_constants.ts</code> 的第一行。这是符合预期的行为，ES 模块在 V8 中执行的顺序如此。<code>_constants.ts</code> 是 <code>file_server.ts</code> 最深、最先的依赖，因此它会最先执行。</p>\n<p>在这时，所有源码在开发者工具中都可用。打开 <code>file_server.ts</code>，加一处断点，然后打开 &quot;Sources&quot; 面板，展开树：</p>\n<p><img src="../images/debugger3.jpg" alt="Open file_server.ts"></p>\n<p><em>仔细观察，您会发现每个文件都有重复的条目，一个是正常字体，另一个是斜体。前者是编译后的源文件（所以 <code>.ts</code> 文件会生成 JavaScript 源代码），后者是该文件的源映射 (source map)。</em></p>\n<p>下一步，在 <code>listenAndServe</code> 方法处加一个断点。</p>\n<p><img src="../images/debugger4.jpg" alt="Break in file_server.ts"></p>\n<p>添加断点后，开发者工具会自动打开源映射文件，让我们能在包含类型的实际源码中步进。</p>\n<p>现在我们已经设置了断点，在触发断点时，我们可以检查传入的请求，也可以继续执行脚本。点击恢复脚本执行的按钮即可，您可能需要点两次。</p>\n<p>当脚本继续运行时，让我们发送一个请求，看看开发者工具中发生了什么。</p>\n<pre class="language-autoit"><code class="language-autoit">$ curl http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">0.0</span><span class="token punctuation">.</span><span class="token number">0.0</span><span class="token punctuation">:</span><span class="token number">4500</span><span class="token operator">/</span>\n</code></pre>\n<p><img src="../images/debugger5.jpg" alt="Break in request handling"></p>\n<p>在这时，我们可以检查请求的内容，逐步调试代码。</p>\n<h2 id="vscode">VSCode<a class="anchor" href="#vscode">§</a></h2>\n<p>Deno 可以在 VSCode 中调试。</p>\n<p>插件的官方支持正在开发中 <a href="https://github.com/denoland/vscode_deno/issues/12">https://github.com/denoland/vscode_deno/issues/12</a></p>\n<p>我们也可以通过手动提供 <a href="https://code.visualstudio.com/docs/editor/debugging#_launch-configurations"><code>launch.json</code></a> 配置，来连接调试器：</p>\n<pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"0.2.0"</span><span class="token punctuation">,</span>\n  <span class="token property">"configurations"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Deno"</span><span class="token punctuation">,</span>\n      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"node"</span><span class="token punctuation">,</span>\n      <span class="token property">"request"</span><span class="token operator">:</span> <span class="token string">"launch"</span><span class="token punctuation">,</span>\n      <span class="token property">"cwd"</span><span class="token operator">:</span> <span class="token string">"${workspaceFolder}"</span><span class="token punctuation">,</span>\n      <span class="token property">"runtimeExecutable"</span><span class="token operator">:</span> <span class="token string">"deno"</span><span class="token punctuation">,</span>\n      <span class="token property">"runtimeArgs"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"run"</span><span class="token punctuation">,</span> <span class="token string">"--inspect-brk"</span><span class="token punctuation">,</span> <span class="token string">"-A"</span><span class="token punctuation">,</span> <span class="token string">"${file}"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token property">"port"</span><span class="token operator">:</span> <span class="token number">9229</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p><strong>注意</strong>：这将使用您打开的文件作为入口点；如果需要固定的入口点，请用脚本名称替换 <code>${file}</code>。</p>\n<p>让我们尝试一下本地源文件，创建 <code>server.ts</code>：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> serve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"<a class="token url-link" href="https://deno.land/std@v0.50.0/http/server.ts">https://deno.land/std@v0.50.0/http/server.ts</a>"</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token function">serve</span><span class="token punctuation">(</span><span class="token punctuation">{</span> port<span class="token operator">:</span> <span class="token number">8000</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"<a class="token url-link" href="http://localhost:8000/">http://localhost:8000/</a>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">for</span> <span class="token keyword">await</span> <span class="token punctuation">(</span><span class="token keyword">const</span> req <span class="token keyword">of</span> server<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  req<span class="token punctuation">.</span><span class="token function">respond</span><span class="token punctuation">(</span><span class="token punctuation">{</span> body<span class="token operator">:</span> <span class="token string">"Hello World\n"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>然后我们可以设置断点，运行已创建的配置：</p>\n<p><img src="../images/debugger7.jpg" alt="VSCode debugger"></p>\n<h2 id="jetbrains-ide">JetBrains IDE<a class="anchor" href="#jetbrains-ide">§</a></h2>\n<p>您可以使用 JetBrains IDE 来调试 Deno，右击您想要调试的文件，选择 <code>Debug \'Deno: &lt;file name&gt;\'</code>。这会创建一个没有权限设置的 运行/调试 配置，您可能需要更改 <code>Arguments</code> 字段来提供所需权限。</p>\n<h2 id="%E5%85%B6%E4%BB%96">其他<a class="anchor" href="#%E5%85%B6%E4%BB%96">§</a></h2>\n<p>实现 Devtools 协议的任何客户端都能连接 Deno 进程。</p>\n<h2 id="%E9%99%90%E5%88%B6">限制<a class="anchor" href="#%E9%99%90%E5%88%B6">§</a></h2>\n<p>开发者工具的支持仍不成熟，有一些功能是缺失的，或是有 bug 的：</p>\n<ul>\n<li>开发者工具控制台中的自动补全会让 Deno 进程退出。</li>\n<li>性能分析 (profiling) 和内存转储 (memory dump) 可能不正确。</li>\n</ul>'
        } }),
    'head': React.createElement("link", { href: "/favicon.svg", rel: "icon", type: "image/svg+xml" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u8C03\u8BD5\u5668 (debugger)"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>Deno 支持 <a href="https://v8.dev/docs/inspector">V8 Inspector Protocol</a>.</p>\n<p>使用 Chrome Devtools 或其他支持该协议的客户端（比如 VSCode）能够调试 Deno 程序。</p>\n<p>要启用调试功能，用 <code>--inspect</code> 或 <code>--inspect-brk</code> 选项运行 Deno。</p>\n<p><code>--inspect</code> 选项允许在任何时间点连接调试器，而 <code>--inspect-brk</code> 选项会等待调试器连接，在第一行代码处暂停执行。</p>\n<h2 id="chrome-devtools">Chrome Devtools<a class="anchor" href="#chrome-devtools">§</a></h2>\n<p>让我们用 Chrome 开发者工具来调试一个程序，我们将使用来自 <code>std</code> 的 <a href="https://deno.land/std@v0.50.0/http/file_server.ts">file_server.ts</a>，这是一个静态文件服务。</p>\n<p>使用 <code>--inspect-brk</code> 选项，在第一行代码处暂停执行。</p>\n<pre class="language-shell"><code class="language-shell">$ deno run --inspect-brk --allow-read --allow-net <a class="token url-link" href="https://deno.land/std@v0.50.0/http/file_server.ts">https://deno.land/std@v0.50.0/http/file_server.ts</a>\nDebugger listening on ws://127.0.0.1:9229/ws/1e82c406-85a9-44ab-86b6-7341583480b1\nDownload <a class="token url-link" href="https://deno.land/std@v0.50.0/http/file_server.ts">https://deno.land/std@v0.50.0/http/file_server.ts</a>\nCompile <a class="token url-link" href="https://deno.land/std@v0.50.0/http/file_server.ts">https://deno.land/std@v0.50.0/http/file_server.ts</a>\n<span class="token punctuation">..</span>.\n</code></pre>\n<p>打开 <code>chrome://inspect</code>，点击 target 旁边的 <code>Inspect</code>。</p>\n<p><img src="../images/debugger1.jpg" alt="chrome://inspect"></p>\n<p>开发者工具加载所有模块时可能会等待几秒。</p>\n<p><img src="../images/debugger2.jpg" alt="Devtools opened"></p>\n<p>您可能注意到开发者工具暂停执行的地方不是 <code>file_server.ts</code>，而是 <code>_constants.ts</code> 的第一行。这是符合预期的行为，ES 模块在 V8 中执行的顺序如此。<code>_constants.ts</code> 是 <code>file_server.ts</code> 最深、最先的依赖，因此它会最先执行。</p>\n<p>在这时，所有源码在开发者工具中都可用。打开 <code>file_server.ts</code>，加一处断点，然后打开 &quot;Sources&quot; 面板，展开树：</p>\n<p><img src="../images/debugger3.jpg" alt="Open file_server.ts"></p>\n<p><em>仔细观察，您会发现每个文件都有重复的条目，一个是正常字体，另一个是斜体。前者是编译后的源文件（所以 <code>.ts</code> 文件会生成 JavaScript 源代码），后者是该文件的源映射 (source map)。</em></p>\n<p>下一步，在 <code>listenAndServe</code> 方法处加一个断点。</p>\n<p><img src="../images/debugger4.jpg" alt="Break in file_server.ts"></p>\n<p>添加断点后，开发者工具会自动打开源映射文件，让我们能在包含类型的实际源码中步进。</p>\n<p>现在我们已经设置了断点，在触发断点时，我们可以检查传入的请求，也可以继续执行脚本。点击恢复脚本执行的按钮即可，您可能需要点两次。</p>\n<p>当脚本继续运行时，让我们发送一个请求，看看开发者工具中发生了什么。</p>\n<pre class="language-autoit"><code class="language-autoit">$ curl http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">0.0</span><span class="token punctuation">.</span><span class="token number">0.0</span><span class="token punctuation">:</span><span class="token number">4500</span><span class="token operator">/</span>\n</code></pre>\n<p><img src="../images/debugger5.jpg" alt="Break in request handling"></p>\n<p>在这时，我们可以检查请求的内容，逐步调试代码。</p>\n<h2 id="vscode">VSCode<a class="anchor" href="#vscode">§</a></h2>\n<p>Deno 可以在 VSCode 中调试。</p>\n<p>插件的官方支持正在开发中 <a href="https://github.com/denoland/vscode_deno/issues/12">https://github.com/denoland/vscode_deno/issues/12</a></p>\n<p>我们也可以通过手动提供 <a href="https://code.visualstudio.com/docs/editor/debugging#_launch-configurations"><code>launch.json</code></a> 配置，来连接调试器：</p>\n<pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"0.2.0"</span><span class="token punctuation">,</span>\n  <span class="token property">"configurations"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Deno"</span><span class="token punctuation">,</span>\n      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"node"</span><span class="token punctuation">,</span>\n      <span class="token property">"request"</span><span class="token operator">:</span> <span class="token string">"launch"</span><span class="token punctuation">,</span>\n      <span class="token property">"cwd"</span><span class="token operator">:</span> <span class="token string">"${workspaceFolder}"</span><span class="token punctuation">,</span>\n      <span class="token property">"runtimeExecutable"</span><span class="token operator">:</span> <span class="token string">"deno"</span><span class="token punctuation">,</span>\n      <span class="token property">"runtimeArgs"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"run"</span><span class="token punctuation">,</span> <span class="token string">"--inspect-brk"</span><span class="token punctuation">,</span> <span class="token string">"-A"</span><span class="token punctuation">,</span> <span class="token string">"${file}"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token property">"port"</span><span class="token operator">:</span> <span class="token number">9229</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p><strong>注意</strong>：这将使用您打开的文件作为入口点；如果需要固定的入口点，请用脚本名称替换 <code>${file}</code>。</p>\n<p>让我们尝试一下本地源文件，创建 <code>server.ts</code>：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> serve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"<a class="token url-link" href="https://deno.land/std@v0.50.0/http/server.ts">https://deno.land/std@v0.50.0/http/server.ts</a>"</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token function">serve</span><span class="token punctuation">(</span><span class="token punctuation">{</span> port<span class="token operator">:</span> <span class="token number">8000</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"<a class="token url-link" href="http://localhost:8000/">http://localhost:8000/</a>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">for</span> <span class="token keyword">await</span> <span class="token punctuation">(</span><span class="token keyword">const</span> req <span class="token keyword">of</span> server<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  req<span class="token punctuation">.</span><span class="token function">respond</span><span class="token punctuation">(</span><span class="token punctuation">{</span> body<span class="token operator">:</span> <span class="token string">"Hello World\n"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>然后我们可以设置断点，运行已创建的配置：</p>\n<p><img src="../images/debugger7.jpg" alt="VSCode debugger"></p>\n<h2 id="jetbrains-ide">JetBrains IDE<a class="anchor" href="#jetbrains-ide">§</a></h2>\n<p>您可以使用 JetBrains IDE 来调试 Deno，右击您想要调试的文件，选择 <code>Debug \'Deno: &lt;file name&gt;\'</code>。这会创建一个没有权限设置的 运行/调试 配置，您可能需要更改 <code>Arguments</code> 字段来提供所需权限。</p>\n<h2 id="%E5%85%B6%E4%BB%96">其他<a class="anchor" href="#%E5%85%B6%E4%BB%96">§</a></h2>\n<p>实现 Devtools 协议的任何客户端都能连接 Deno 进程。</p>\n<h2 id="%E9%99%90%E5%88%B6">限制<a class="anchor" href="#%E9%99%90%E5%88%B6">§</a></h2>\n<p>开发者工具的支持仍不成熟，有一些功能是缺失的，或是有 bug 的：</p>\n<ul>\n<li>开发者工具控制台中的自动补全会让 Deno 进程退出。</li>\n<li>性能分析 (profiling) 和内存转储 (memory dump) 可能不正确。</li>\n</ul>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#chrome-devtools">Chrome Devtools</a></li><li><a href="#vscode">VSCode</a></li><li><a href="#jetbrains-ide">JetBrains IDE</a></li><li><a href="#%E5%85%B6%E4%BB%96">其他</a></li><li><a href="#%E9%99%90%E5%88%B6">限制</a></li></ol></nav>'
        } }),
    'author': "迷渡",
    'contributors': [
        "迷渡"
    ],
    'date': "2020-11-12T01:44:32.000Z",
    'updated': null,
    'excerpt': "Deno 支持 V8 Inspector Protocol. 使用 Chrome Devtools 或其他支持该协议的客户端（比如 VSCode）能够调试 Deno 程序。 要启用调试功能，用 --inspect 或 --inspect-brk 选项运行 Deno。 --inspect 选项允许在任何时间点连接...",
    'cover': "../images/debugger1.jpg",
    'sidebar': [
        {
            "title": "Deno 中文手册",
            "link": "index.html",
            "pagePath": "README.md"
        },
        {
            "title": "介绍",
            "link": "introduction.html",
            "pagePath": "introduction.md"
        },
        {
            "link": "getting_started.html",
            "children": [
                {
                    "title": "安装",
                    "link": "getting_started/installation.html",
                    "pagePath": "getting_started/installation.md"
                },
                {
                    "title": "设置您的环境",
                    "link": "getting_started/setup_your_environment.html",
                    "pagePath": "getting_started/setup_your_environment.md"
                },
                {
                    "title": "第一步",
                    "link": "getting_started/first_steps.html",
                    "pagePath": "getting_started/first_steps.md"
                },
                {
                    "title": "命令行界面",
                    "link": "getting_started/command_line_interface.html",
                    "pagePath": "getting_started/command_line_interface.md"
                },
                {
                    "title": "权限",
                    "link": "getting_started/permissions.html",
                    "pagePath": "getting_started/permissions.md"
                },
                {
                    "title": "使用 TypeScript",
                    "link": "getting_started/typescript.html",
                    "pagePath": "getting_started/typescript.md"
                },
                {
                    "title": "WebAssembly 支持",
                    "link": "getting_started/webassembly.html",
                    "pagePath": "getting_started/webassembly.md"
                }
            ],
            "title": "入门",
            "pagePath": "getting_started.md"
        },
        {
            "link": "runtime.html",
            "children": [
                {
                    "title": "稳定性",
                    "link": "runtime/stability.html",
                    "pagePath": "runtime/stability.md"
                },
                {
                    "title": "程序生命周期",
                    "link": "runtime/program_lifecycle.html",
                    "pagePath": "runtime/program_lifecycle.md"
                },
                {
                    "title": "编译器 API",
                    "link": "runtime/compiler_apis.html",
                    "pagePath": "runtime/compiler_apis.md"
                },
                {
                    "title": "Worker",
                    "link": "runtime/workers.html",
                    "pagePath": "runtime/workers.md"
                }
            ],
            "title": "运行时",
            "pagePath": "runtime.md"
        },
        {
            "link": "linking_to_external_code.html",
            "children": [
                {
                    "title": "重新加载特定的模块",
                    "link": "linking_to_external_code/reloading_modules.html",
                    "pagePath": "linking_to_external_code/reloading_modules.md"
                },
                {
                    "title": "完整性检查与锁定文件",
                    "link": "linking_to_external_code/integrity_checking.html",
                    "pagePath": "linking_to_external_code/integrity_checking.md"
                },
                {
                    "title": "代理（Proxies）",
                    "link": "linking_to_external_code/proxies.html",
                    "pagePath": "linking_to_external_code/proxies.md"
                },
                {
                    "title": "导入映射（Import maps）",
                    "link": "linking_to_external_code/import_maps.html",
                    "pagePath": "linking_to_external_code/import_maps.md"
                }
            ],
            "title": "与外部代码连接",
            "pagePath": "linking_to_external_code.md"
        },
        {
            "link": "standard_library.html",
            "title": "标准库",
            "pagePath": "standard_library.md"
        },
        {
            "link": "testing.html",
            "children": [
                {
                    "title": "断言",
                    "link": "testing/assertions.html",
                    "pagePath": "testing/assertions.md"
                }
            ],
            "title": "测试",
            "pagePath": "testing.md"
        },
        {
            "link": "tools.html",
            "children": [
                {
                    "title": "调试器 (debugger)",
                    "link": "tools/debugger.html",
                    "pagePath": "tools/debugger.md"
                },
                {
                    "title": "脚本安装器",
                    "link": "tools/script_installer.html",
                    "pagePath": "tools/script_installer.md"
                },
                {
                    "title": "代码格式化",
                    "link": "tools/formatter.html",
                    "pagePath": "tools/formatter.md"
                },
                {
                    "title": "打包",
                    "link": "tools/bundler.html",
                    "pagePath": "tools/bundler.md"
                },
                {
                    "title": "文档生成器",
                    "link": "tools/documentation_generator.html",
                    "pagePath": "tools/documentation_generator.md"
                },
                {
                    "title": "依赖检查器",
                    "link": "tools/dependency_inspector.html",
                    "pagePath": "tools/dependency_inspector.md"
                },
                {
                    "title": "Linter",
                    "link": "tools/linter.html",
                    "pagePath": "tools/linter.md"
                }
            ],
            "title": "内置工具",
            "pagePath": "tools.md"
        },
        {
            "link": "embedding_deno.html",
            "title": "嵌入式 Deno",
            "pagePath": "embedding_deno.md"
        },
        {
            "link": "contributing.html",
            "children": [
                {
                    "title": "从源码构建",
                    "link": "contributing/building_from_source.html",
                    "pagePath": "contributing/building_from_source.md"
                },
                {
                    "title": "测试和工具",
                    "link": "contributing/development_tools.html",
                    "pagePath": "contributing/development_tools.md"
                },
                {
                    "title": "Deno 风格指南",
                    "link": "contributing/style_guide.html",
                    "pagePath": "contributing/style_guide.md"
                },
                {
                    "title": "内部细节",
                    "link": "contributing/architecture.html",
                    "pagePath": "contributing/architecture.md"
                }
            ],
            "title": "贡献",
            "pagePath": "contributing.md"
        },
        {
            "link": "examples.html",
            "children": [
                {
                    "title": "Unix cat",
                    "link": "examples/unix_cat.html",
                    "pagePath": "examples/unix_cat.md"
                },
                {
                    "title": "文件服务器",
                    "link": "examples/file_server.html",
                    "pagePath": "examples/file_server.md"
                },
                {
                    "title": "TCP echo",
                    "link": "examples/tcp_echo.html",
                    "pagePath": "examples/tcp_echo.md"
                },
                {
                    "title": "运行子进程",
                    "link": "examples/subprocess.html",
                    "pagePath": "examples/subprocess.md"
                },
                {
                    "title": "检查与放弃权限",
                    "link": "examples/permissions.html",
                    "pagePath": "examples/permissions.md"
                },
                {
                    "title": "处理系统信号",
                    "link": "examples/os_signals.html",
                    "pagePath": "examples/os_signals.md"
                },
                {
                    "title": "文件系统事件",
                    "link": "examples/file_system_events.html",
                    "pagePath": "examples/file_system_events.md"
                },
                {
                    "title": "测试当前文件是否为主程序",
                    "link": "examples/testing_if_main.html",
                    "pagePath": "examples/testing_if_main.md"
                }
            ],
            "title": "示例",
            "pagePath": "examples.md"
        }
    ]
};
