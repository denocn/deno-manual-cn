import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "link": "standard_library.html",
        "text": "标准库"
    },
    'next': {
        "text": "断言",
        "link": "testing/assertions.html"
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
    'pagePath': "testing.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "testing.html",
    'title': "测试",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>测试</h1>\n<p>Deno 有一个内置的测试器，可以用来测试 JavaScript 或 TypeScript 代码。</p>\n<h2 id="%E7%BC%96%E5%86%99%E6%B5%8B%E8%AF%95">编写测试<a class="anchor" href="#%E7%BC%96%E5%86%99%E6%B5%8B%E8%AF%95">§</a></h2>\n<p>要定义测试，需要使用要测试的名称和函数调用 <code>Deno.test</code>。</p>\n<p>您可以使用两种风格：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token comment">// 传递名称和函数，紧凑的形式，但不能配置</span>\n<span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token method function property-access">test</span><span class="token punctuation">(</span><span class="token string">"hello world #1"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>\n  <span class="token function">assertEquals</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 全面的测试定义，更长的形式，但可配置（请参见下文）</span>\n<span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token method function property-access">test</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">"hello world #2"</span><span class="token punctuation">,</span>\n  <span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>\n    <span class="token function">assertEquals</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="%E6%96%AD%E8%A8%80">断言<a class="anchor" href="#%E6%96%AD%E8%A8%80">§</a></h2>\n<p>在 <a href="https://deno.land/std/testing#usage">https://deno.land/std/testing</a> 上有一些有用的断言实用程序，可以简化测试：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span>\n  assertEquals<span class="token punctuation">,</span>\n  assertArrayContains<span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"<a class="token url-link" href="https://deno.land/std/testing/asserts.ts">https://deno.land/std/testing/asserts.ts</a>"</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token method function property-access">test</span><span class="token punctuation">(</span><span class="token string">"hello world"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>\n  <span class="token function">assertEquals</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">assertArrayContains</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">"Expected 3 to be in the array"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h3 id="%E5%BC%82%E6%AD%A5%E5%87%BD%E6%95%B0">异步函数<a class="anchor" href="#%E5%BC%82%E6%AD%A5%E5%87%BD%E6%95%B0">§</a></h3>\n<p>您还可以通过传递一个测试函数来测试异步代码，该函数返回一个 promise。\n为此，您可以在定义函数时使用 <code>async</code> 关键字：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> delay <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"<a class="token url-link" href="https://deno.land/std/async/delay.ts">https://deno.land/std/async/delay.ts</a>"</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token method function property-access">test</span><span class="token punctuation">(</span><span class="token string">"async hello world"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// await some async task</span>\n  <span class="token keyword">await</span> <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">!==</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">throw</span> <span class="token known-class-name class-name">Error</span><span class="token punctuation">(</span><span class="token string">"x should be equal to 3"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h3 id="%E8%B5%84%E6%BA%90%E5%92%8C%E5%BC%82%E6%AD%A5%E6%93%8D%E4%BD%9C%E6%B8%85%E7%90%86%E5%99%A8">资源和异步操作清理器<a class="anchor" href="#%E8%B5%84%E6%BA%90%E5%92%8C%E5%BC%82%E6%AD%A5%E6%93%8D%E4%BD%9C%E6%B8%85%E7%90%86%E5%99%A8">§</a></h3>\n<p>Deno 中的某些操作在资源表（<a href="./contributing/architecture.html">在此处了解更多</a>）中创建资源。\n这些资源应该在使用完后关闭。</p>\n<p>对于每个测试定义，测试器会检查此测试中创建的所有资源是否已关闭，以防止资源“泄漏”。\n默认情况下，这对所有测试都是启用的，但可以通过在测试定义中将 <code>sanitizeResources</code> 布尔值设置为 false 来禁用。</p>\n<p>对于异步操作（如与文件系统交互）也是如此。测试器检查您在测试中启动的每个操作是否在测试结束之前完成。默认情况下，这对所有测试都是启用的，但可以通过在测试定义中将 <code>sanitizeps</code> 布尔值设置为 false 来禁用。</p>\n<pre class="language-ts"><code class="language-ts"><span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token method function property-access">test</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">"leaky test"</span><span class="token punctuation">,</span>\n  <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token method function property-access">open</span><span class="token punctuation">(</span><span class="token string">"hello.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  sanitizeResources<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  sanitizeOps<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="%E8%BF%90%E8%A1%8C%E6%B5%8B%E8%AF%95">运行测试<a class="anchor" href="#%E8%BF%90%E8%A1%8C%E6%B5%8B%E8%AF%95">§</a></h2>\n<p>要运行测试，使用 <code>deno test</code> 命令，传入包含测试函数的文件。您也可以忽略文件名，这样当前目录树内所有符合通配符 <code>{*_,*.,}test.{js,mjs,ts,jsx,tsx}</code> 的测试都会被运行。如果您传入了一个目录，那么该目录下所有匹配的文件都会被运行。</p>\n<pre class="language-shell"><code class="language-shell"><span class="token comment"># 运行当前目录树内的所有测试</span>\ndeno <span class="token builtin class-name">test</span>\n\n<span class="token comment"># 运行 util 目录内的所有测试</span>\ndeno <span class="token builtin class-name">test</span> util/\n\n<span class="token comment"># 只运行 my_test.ts</span>\ndeno <span class="token builtin class-name">test</span> my_test.ts\n</code></pre>\n<p><code>deno test</code> 和 <code>deno run</code> 使用相同的权限模型，比如在测试期间有可能要求 <code>--allow-write</code> 来写入文件系统。</p>\n<p>使用 <code>deno help test</code> 命令来查看相关选项。</p>\n<h2 id="%E8%BF%87%E6%BB%A4">过滤<a class="anchor" href="#%E8%BF%87%E6%BB%A4">§</a></h2>\n<p>有许多选项可以过滤要运行的测试。</p>\n<h3 id="%E5%91%BD%E4%BB%A4%E8%A1%8C%E8%BF%87%E6%BB%A4">命令行过滤<a class="anchor" href="#%E5%91%BD%E4%BB%A4%E8%A1%8C%E8%BF%87%E6%BB%A4">§</a></h3>\n<p>使用 <code>--filter</code> 选项可以单独或成组运行测试。</p>\n<p>该选项接受一个字符串或一个模式作为值。</p>\n<p>假设有以下测试：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token method function property-access">test</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">"my-test"</span><span class="token punctuation">,</span> fn<span class="token operator">:</span> myTest <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token method function property-access">test</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">"test-1"</span><span class="token punctuation">,</span> fn<span class="token operator">:</span> test1 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token method function property-access">test</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">"test2"</span><span class="token punctuation">,</span> fn<span class="token operator">:</span> test2 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>以下命令将会运行所有包含 &quot;test&quot; 的测试：</p>\n<pre class="language-shell"><code class="language-shell">deno <span class="token builtin class-name">test</span> --filter <span class="token string">"test"</span> tests/\n</code></pre>\n<p>以下命令将会运行匹配该模式的测试，即第二个和第三个：</p>\n<pre class="language-shell"><code class="language-shell">deno <span class="token builtin class-name">test</span> --filter <span class="token string">"/test-*\d/"</span> tests/\n</code></pre>\n<p>像 JavaScript 的正则表达式语法糖一样，Deno 会将用斜杠包裹的过滤字符串认为是模式。</p>\n<h3 id="%E6%B5%8B%E8%AF%95%E5%AE%9A%E4%B9%89%E8%BF%87%E6%BB%A4">测试定义过滤<a class="anchor" href="#%E6%B5%8B%E8%AF%95%E5%AE%9A%E4%B9%89%E8%BF%87%E6%BB%A4">§</a></h3>\n<p>在测试本身中，您有两个过滤选项。</p>\n<h4 id="%E5%BF%BD%E7%95%A5%E6%B5%8B%E8%AF%95">忽略测试<a class="anchor" href="#%E5%BF%BD%E7%95%A5%E6%B5%8B%E8%AF%95">§</a></h4>\n<p>有时您希望忽略基于某种条件的测试（例如您只希望在 Windows 上运行测试）。\n为此，您可以使用 <code>ignore</code> 测试定义中的布尔值。\n如果它被设置为 true，则测试将被跳过。</p>\n<pre class="language-ts"><code class="language-ts"><span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token method function property-access">test</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">"do macOS feature"</span><span class="token punctuation">,</span>\n  ignore<span class="token operator">:</span> <span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token property-access">build</span><span class="token punctuation">.</span><span class="token property-access">os</span> <span class="token operator">!==</span> <span class="token string">"darwin"</span><span class="token punctuation">,</span>\n  <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">doMacOSFeature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h4 id="%E5%90%AF%E7%94%A8%E6%B5%8B%E8%AF%95">启用测试<a class="anchor" href="#%E5%90%AF%E7%94%A8%E6%B5%8B%E8%AF%95">§</a></h4>\n<p>有时您可能会在大型测试中遇到问题，只想专注于有问题的测试，忽略其他测试。</p>\n<p>为此您可以使用 <code>only</code> 选项来让测试框架只运行一部分测试。多个测试可以设置此选项。尽管测试框架将报告每个测试的成功或失败，但当任何一个测试标记为 <code>only</code> 时，总体测试将始终失败。因为这只是一种临时措施，几乎会禁用所有测试。</p>\n<pre class="language-ts"><code class="language-ts"><span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token method function property-access">test</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">"Focus on this test only"</span><span class="token punctuation">,</span>\n  only<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">testComplicatedStuff</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="%E5%BF%AB%E9%80%9F%E5%A4%B1%E8%B4%A5">快速失败<a class="anchor" href="#%E5%BF%AB%E9%80%9F%E5%A4%B1%E8%B4%A5">§</a></h2>\n<p>如果您有一个运行时间较长的测试，并希望它在第一次失败时停止运行，则可以在运行测试时指定 <code>--failfast</code> 选项。</p>\n<pre class="language-shell"><code class="language-shell">deno <span class="token builtin class-name">test</span> --failfast\n</code></pre>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E7%BC%96%E5%86%99%E6%B5%8B%E8%AF%95">编写测试</a></li><li><a href="#%E6%96%AD%E8%A8%80">断言</a><ol><li><a href="#%E5%BC%82%E6%AD%A5%E5%87%BD%E6%95%B0">异步函数</a></li><li><a href="#%E8%B5%84%E6%BA%90%E5%92%8C%E5%BC%82%E6%AD%A5%E6%93%8D%E4%BD%9C%E6%B8%85%E7%90%86%E5%99%A8">资源和异步操作清理器</a></li></ol></li><li><a href="#%E8%BF%90%E8%A1%8C%E6%B5%8B%E8%AF%95">运行测试</a></li><li><a href="#%E8%BF%87%E6%BB%A4">过滤</a><ol><li><a href="#%E5%91%BD%E4%BB%A4%E8%A1%8C%E8%BF%87%E6%BB%A4">命令行过滤</a></li><li><a href="#%E6%B5%8B%E8%AF%95%E5%AE%9A%E4%B9%89%E8%BF%87%E6%BB%A4">测试定义过滤</a><ol></ol></li></ol></li><li><a href="#%E5%BF%AB%E9%80%9F%E5%A4%B1%E8%B4%A5">快速失败</a></li></ol></nav>'
        } })
};
