import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "text": "程序生命周期",
        "link": "runtime/program_lifecycle.html"
    },
    'next': {
        "text": "Worker",
        "link": "runtime/workers.html"
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
    'pagePath': "runtime/compiler_apis.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "runtime/compiler_apis.html",
    'title': "编译器 API",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>编译器 API</h1>\n<blockquote>\n<p>这是一个不稳定的 Deno 特性。\n更多信息请查阅 <a href="stability.html">稳定性</a></p>\n</blockquote>\n<p>Deno 支持对内置 TypeScript 编译器的运行时访问。<code>Deno</code> 命名空间中有三种方法提供此访问。</p>\n<h2 id="deno.compile()"><code>Deno.compile()</code><a class="anchor" href="#deno.compile()">§</a></h2>\n<p>这类似于 <code>deno cache</code>，因为它可以获取代码、缓存代码、编译代码，但不运行代码。它最多接受三个参数，<code>rootName</code>、可选的 <code>sources</code> 和可选的 <code>options</code>。</p>\n<p><code>rootName</code> 是用于生成目标程序的根模块。这类似于在 <code>deno run --reload example.ts</code> 中在命令行上传递的模块名。</p>\n<p><code>sources</code> 是一个哈希表，其中键是完全限定的模块名称，值是模块的文本源。如果传递了 <code>sources</code>，Deno 将从该哈希表中解析所有模块，而不会尝试在 Deno 之外解析它们。如果没有提供 <code>sources</code>，Deno 将解析模块，就像根模块已经在命令行上传递了一样。Deno 还将缓存所有的这些资源。所有已解析的资源都会被当成动态导入对待，导入行为是否需要读取和网络权限取决于目标在本地还是远程。</p>\n<p><code>options</code> 参数是一组 <code>Deno.CompilerOptions</code> 类型的选项，它是包含 Deno 支持选项的 TypeScript 编译器选项的子集。</p>\n<p>该方法返回元组。第一个参数包含与代码相关的任何诊断信息（语法或类型错误）。第二个参数是一个映射，其中键是输出文件名，值是内容。</p>\n<p>提供 <code>sources</code> 的一个例子:</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">const</span> <span class="token punctuation">[</span>diagnostics<span class="token punctuation">,</span> emitMap<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token method function property-access">compile</span><span class="token punctuation">(</span><span class="token string">"/foo.ts"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  <span class="token string">"/foo.ts"</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">import * as bar from "./bar.ts";\nconsole.log(bar);\n</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n  <span class="token string">"/bar.ts"</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">export const bar = "bar";\n</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">assert</span><span class="token punctuation">(</span>diagnostics <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 确保没有返回诊断信息</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>emitMap<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>我们希望 map 包含 4 个 “文件（files）” ，分别命名为 <code>/foo.js.map</code>，<code>/foo.js</code>，<code>/bar.js.map</code>，和 <code>/bar.js</code>。</p>\n<p>当不提供资源时，您可以使用本地或远程模块，就像在命令行上做的那样。所以您可以这样做:</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">const</span> <span class="token punctuation">[</span>diagnostics<span class="token punctuation">,</span> emitMap<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token method function property-access">compile</span><span class="token punctuation">(</span>\n  <span class="token string">"<a class="token url-link" href="https://deno.land/std/examples/welcome.ts">https://deno.land/std/examples/welcome.ts</a>"</span><span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>在这种情况下，<code>emitMap</code> 将包含一个 <code>console.log()</code> 语句。</p>\n<h2 id="deno.bundle()"><code>Deno.bundle()</code><a class="anchor" href="#deno.bundle()">§</a></h2>\n<p>这与 <code>deno bundle</code> 在命令行上的工作非常相似。 它也与 <code>Deno.compile()</code> 类似，只是它不返回文件映射，而是只返回一个字符串，这是一个自包含的 JavaScript ES 模块，它将包含提供或解析的所有代码，以及提供的根模块的所有导出。它最多接受三个参数，<code>rootName</code>、可选的 <code>sources</code> 和可选的 <code>options</code>。</p>\n<p><code>rootName</code> 是用于生成目标程序的根模块。这类似于在 <code>deno bundle example.ts</code> 中在命令行上传递的模块名。</p>\n<p><code>sources</code> 是一个哈希表，其中键是完全限定的模块名称，值是模块的文本源。如果传递了 <code>sources</code>，Deno 将从该哈希表中解析所有模块，而不会尝试在 Deno 之外解析它们。如果没有提供 <code>sources</code>，Deno 将解析模块，就像根模块已经在命令行上传递了一样。Deno 还将缓存所有的这些资源。所有已解析的资源都会被当成动态导入对待，导入行为是否需要读取和网络权限取决于目标在本地还是远程。</p>\n<p><code>options</code> 参数是一组 <code>Deno.CompilerOptions</code> 类型的选项，它是包含 Deno 支持选项的 TypeScript 编译器选项的子集。</p>\n<p>提供 <code>sources</code> 的一个例子:</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">const</span> <span class="token punctuation">[</span>diagnostics<span class="token punctuation">,</span> emit<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token method function property-access">bundle</span><span class="token punctuation">(</span><span class="token string">"/foo.ts"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  <span class="token string">"/foo.ts"</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">import * as bar from "./bar.ts";\nconsole.log(bar);\n</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n  <span class="token string">"/bar.ts"</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">export const bar = "bar";\n</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">assert</span><span class="token punctuation">(</span>diagnostics <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 确保没有返回诊断信息</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>emit<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>我们希望 <code>emit</code> 是一个 ES 模块的文本，它将包含两个模块的输出源。</p>\n<p>当不提供资源时，您可以使用本地或远程模块，就像在命令行上做的那样。所以您可以这样做:</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">const</span> <span class="token punctuation">[</span>diagnostics<span class="token punctuation">,</span> emit<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token method function property-access">bundle</span><span class="token punctuation">(</span>\n  <span class="token string">"<a class="token url-link" href="https://deno.land/std/http/server.ts">https://deno.land/std/http/server.ts</a>"</span><span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>在这种情况下，<code>emit</code> 将是一个自包含的 JavaScript ES 模块，并解析了所有依赖项，导出与源模块相同的导出。</p>\n<h2 id="deno.transpileonly()"><code>Deno.transpileOnly()</code><a class="anchor" href="#deno.transpileonly()">§</a></h2>\n<p>这是基于 TypeScript 函数 <code>transpileModule()</code> 的。所有这些操作都会“擦除”模块中的任何类型并释放 JavaScript。没有类型检查和依赖关系的解析。它最多接受两个参数，第一个参数是哈希表，其中键是模块名称，值是内容。模块名称的唯一用途是在将信息放入源映射时，显示源文件名称是什么。第二个参数包含 <code>Deno.CompilerOptions</code> 类型的可选 <code>options</code>。函数通过映射解析，其中键是提供的源模块名称，值是具有 <code>source</code> 属性和可选 <code>map</code> 属性的对象。第一个是模块的输出内容。 <code>map</code> 属性是源映射。源映射是默认提供的，但可以通过 <code>options</code> 参数关闭。</p>\n<p>举个例子：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token method function property-access">transpileOnly</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token string">"/foo.ts"</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">enum Foo { Foo, Bar, Baz };\n</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>result<span class="token punctuation">[</span><span class="token string">"/foo.ts"</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token property-access">source</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>result<span class="token punctuation">[</span><span class="token string">"/foo.ts"</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token property-access">map</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>我们期望 <code>enum</code> 被重写成一个构造可枚举的 IIFE，并且映射被定义。</p>\n<h2 id="%E5%BC%95%E7%94%A8-typescript-%E5%BA%93%E6%96%87%E4%BB%B6">引用 TypeScript 库文件<a class="anchor" href="#%E5%BC%95%E7%94%A8-typescript-%E5%BA%93%E6%96%87%E4%BB%B6">§</a></h2>\n<p>当您使用 <code>deno run</code> 或其他 TypeScript 类型的 Deno 命令时，该代码将根据描述 Deno 支持的环境的自定义库进行评估。默认情况下，TypeScript 类型的编译器运行时 API 也使用这些库（<code>Deno.compile()</code> 和 <code>Deno.bundle()</code>）。</p>\n<p>但是，如果您希望为其他运行时编译或捆绑 TypeScript，则您可能希望重载默认库。为此，运行时 API 支持编译器选项中的 <code>lib</code> 属性。例如，如果你的 TypeScript 代码是为浏览器准备的，您可以使用 TypeScript 的 <code>&quot;dom&quot;</code> 库:</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">const</span> <span class="token punctuation">[</span>errors<span class="token punctuation">,</span> emitted<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token method function property-access">compile</span><span class="token punctuation">(</span>\n  <span class="token string">"main.ts"</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    <span class="token string">"main.ts"</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">document.getElementById("foo");\n</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    lib<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"dom"</span><span class="token punctuation">,</span> <span class="token string">"esnext"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>有关 TypeScript 支持的所有库的列表，请参见 <a href="https://www.typescriptlang.org/docs/handbook/compiler-options.html"><code>lib</code> 编译器选项</a>。\n<strong>不要忘记包含 JavaScript 库</strong></p>\n<p>就像 <code>tsc</code> 一样，当您提供一个 <code>lib</code> 编译器选项时，它会覆盖默认的选项，这意味着基本的 JavaScript 库不会被包含，而您应该包含最能代表您的目标运行时的选项（例如 <code>es5</code>，<code>es2015</code>，<code>es2016</code>，<code>es2017</code>，<code>es2018</code>，<code>es2019</code>，<code>es2020</code> 或 <code>esnext</code>）。</p>\n<h3 id="%E5%8C%85%E5%90%AB-deno-%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4">包含 Deno 命名空间<a class="anchor" href="#%E5%8C%85%E5%90%AB-deno-%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4">§</a></h3>\n<p>除了 TypeScript 提供的库之外，还有四个内置在 Deno 中的库可以引用:</p>\n<ul>\n<li><code>deno.ns</code> - 提供 <code>Deno</code> 命名空间</li>\n<li><code>deno.shared_globals</code> - 提供 Deno 运行时支持的全局接口和变量，然后由最终运行时库公开</li>\n<li><code>deno.window</code> - 公开全局变量和 Deno 主工作进程中可用的 Deno 命名空间，是运行时编译器的默认 API</li>\n<li><code>deno.worker</code> - 公开在 Deno 下的工作进程中可用的全局变量。</li>\n</ul>\n<p>因此，要将 Deno 命名空间添加到编译中，需要在数组中包含 <code>deno.ns</code> 库，例如：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">const</span> <span class="token punctuation">[</span>errors<span class="token punctuation">,</span> emitted<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token method function property-access">compile</span><span class="token punctuation">(</span>\n  <span class="token string">"main.ts"</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    <span class="token string">"main.ts"</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">document.getElementById("foo");\n</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    lib<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"dom"</span><span class="token punctuation">,</span> <span class="token string">"esnext"</span><span class="token punctuation">,</span> <span class="token string">"deno.ns"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p><strong>注意</strong>，Deno 命名空间需要一个 ES2018 或更新的运行时环境。这意味着，如果您使用的库“低于” ES2018，那么您将得到编译过程中输出的错误。</p>\n<h3 id="%E4%BD%BF%E7%94%A8%E4%B8%89%E6%96%9C%E6%9D%A0%E5%BC%95%E7%94%A8%EF%BC%88triple-slash-reference%EF%BC%89">使用三斜杠引用（triple-slash reference）<a class="anchor" href="#%E4%BD%BF%E7%94%A8%E4%B8%89%E6%96%9C%E6%9D%A0%E5%BC%95%E7%94%A8%EF%BC%88triple-slash-reference%EF%BC%89">§</a></h3>\n<p>您不必在编译器选项中指定 <code>lib</code>。Deno 支持<a href="https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-lib-">对库的三斜杠引用</a>，并可以嵌入到文件的内容中。举个例子，如果你有一个 <code>main.ts</code>：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token comment">/// &lt;reference lib="dom" /></span>\n\n<span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span><span class="token string">"foo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>它可以编译，且不会出现下面这样的错误：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">const</span> <span class="token punctuation">[</span>errors<span class="token punctuation">,</span> emitted<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token method function property-access">compile</span><span class="token punctuation">(</span><span class="token string">"./main.ts"</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  lib<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"esnext"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p><strong>注意</strong>，<code>dom</code> 库与 Deno 的默认类型库中定义的一些默认全局变量有冲突。为了避免这种情况，需要在编译器选项中为运行时编译器 API 指定一个 <code>lib</code> 选项。</p>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#deno.compile()">Deno.compile()</a></li><li><a href="#deno.bundle()">Deno.bundle()</a></li><li><a href="#deno.transpileonly()">Deno.transpileOnly()</a></li><li><a href="#%E5%BC%95%E7%94%A8-typescript-%E5%BA%93%E6%96%87%E4%BB%B6">引用 TypeScript 库文件</a><ol><li><a href="#%E5%8C%85%E5%90%AB-deno-%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4">包含 Deno 命名空间</a></li><li><a href="#%E4%BD%BF%E7%94%A8%E4%B8%89%E6%96%9C%E6%9D%A0%E5%BC%95%E7%94%A8%EF%BC%88triple-slash-reference%EF%BC%89">使用三斜杠引用（triple-slash reference）</a></li></ol></li></ol></nav>'
        } })
};
