import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "text": "权限",
        "link": "getting_started/permissions.html"
    },
    'next': {
        "text": "WebAssembly 支持",
        "link": "getting_started/webassembly.html"
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
    'pagePath': "getting_started/typescript.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "getting_started/typescript.html",
    'title': "使用 TypeScript",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>使用 TypeScript</h1>\n<!-- TODO(lucacasonato): text on \'just import .ts\' -->\n<p>Deno 同时支持 JavaScript 和 TypeScript，它们是 Deno 的第一等语言。\n这意味着它需要标准的模块名称，包括\n扩展名（或提供正确媒体类型的服务器）。此外，Deno 还拥有“平凡”的模块解析算法。导入模块指定为文件（包括扩展名）或全限定 URL (fully qualified URL)。TypeScript 模块可以被直接导入，例如：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Response</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"<a class="token url-link" href="https://deno.land/std@0.53.0/http/server.ts">https://deno.land/std@0.53.0/http/server.ts</a>"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> queue <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./collections.ts"</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="--no-check-%E9%80%89%E9%A1%B9"><code>--no-check</code> 选项<a class="anchor" href="#--no-check-%E9%80%89%E9%A1%B9">§</a></h2>\n<p>当使用 <code>deno run</code>、<code>deno test</code>、<code>deno cache</code>、<code>deno info</code> 或 <code>deno bundle</code> 时，您可以指定 <code>--no-check</code> 选项来禁用 TypeScript 的类型检查。这会大大减少程序的启动时间。当您的编辑器提供了类型检查并且您想要程序启动得尽可能快时（比如当文件变化时自动重启），这个选项将非常有用。</p>\n<p>由于 <code>--no-check</code> 不执行 TypeScript 类型检查，我们不能自动删除类型导入导出，这需要类型信息。为此 TypeScript 提供了 <a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-exports"><code>import type</code> 和 <code>export type</code> 语法</a></p>\n<p>从一个不同的文件</p>\n<ul>\n<li>导出类型：<code>export type { AnInterface } from &quot;./mod.ts&quot;;</code>，</li>\n<li>导入类型：<code>import type { AnInterface } from &quot;./mod.ts&quot;;</code></li>\n</ul>\n<p>您可以通过将 TypeScript 编译选项 <code>importsNotUsedAsValues</code> 设置为 <code>&quot;error&quot;</code> 来检查此类导入导出的必要性。</p>\n<p>您可以在标准库中看到这一选项的示例：<a href="https://github.com/denoland/deno/blob/master/std/tsconfig_test.json"><code>tsconfig_test.json</code></a>。</p>\n<p>由于使用 <code>--no-check</code> 时没有类型信息，<code>const enum</code> 是不支持的。</p>\n<p><code>--no-check</code> 也不支持遗留的 <code>import =</code> 和 <code>export =</code> 语法。</p>\n<h2 id="%E4%BD%BF%E7%94%A8%E5%A4%96%E9%83%A8%E7%B1%BB%E5%9E%8B%E5%AE%9A%E4%B9%89">使用外部类型定义<a class="anchor" href="#%E4%BD%BF%E7%94%A8%E5%A4%96%E9%83%A8%E7%B1%BB%E5%9E%8B%E5%AE%9A%E4%B9%89">§</a></h2>\n<p>开箱即用的 TypeScript 编译器依赖于两种无扩展名\n模块和 Node.js 模块解析逻辑，以将类型应用于 JavaScript\n模块。</p>\n<p>为了弥合这种差距，Deno 支持三种引用类型定义文件的方法，而不必求助于“魔法”的模块解析。</p>\n<h3 id="%E7%BC%96%E8%AF%91%E6%8F%90%E7%A4%BA">编译提示<a class="anchor" href="#%E7%BC%96%E8%AF%91%E6%8F%90%E7%A4%BA">§</a></h3>\n<p>如果您要导入 JavaScript 模块，并且知道该模块的类型定义在哪里，您可以在导入时指定类型定义。这采用编译器提示的形式。编译提示告诉 Deno <code>.d.ts</code> 文件的位置和与之相关的导入的 JavaScript 代码。编译提示指令是 <code>@deno-types</code>，当指定时，该值将在编译器中使用，而不是 JavaScript 模块。</p>\n<p>例如，如果您有 <code>foo.js</code>，但您知道旁边的 <code>foo.d.ts</code> 是该模块的类型定义，代码将像这样：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token comment">// @deno-types="./foo.d.ts"</span>\n<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> foo <span class="token keyword">from</span> <span class="token string">"./foo.js"</span><span class="token punctuation">;</span>\n</code></pre>\n<p>该值遵循与导入模块相同的解析逻辑，这意味着它需要具有扩展名，并且是相对于当前模块的。远程模块也可以使用该说明符。</p>\n<p>此编译提示影响下一个 <code>import</code> 语句，或是 <code>export ... from</code> 语句，在编译时，该值将替换模块。像上面的示例一样，Deno 编译器将加载 <code>./foo.d.ts</code>，而不是 <code>./foo.js</code>。Deno 在运行时仍然会加载 <code>./foo.js</code>。</p>\n<h3 id="javascript-%E6%96%87%E4%BB%B6%E4%B8%AD%E7%9A%84%E4%B8%89%E6%96%9C%E6%9D%A0%E5%BC%95%E7%94%A8%E6%8C%87%E4%BB%A4">JavaScript 文件中的三斜杠引用指令<a class="anchor" href="#javascript-%E6%96%87%E4%BB%B6%E4%B8%AD%E7%9A%84%E4%B8%89%E6%96%9C%E6%9D%A0%E5%BC%95%E7%94%A8%E6%8C%87%E4%BB%A4">§</a></h3>\n<p>如果您要发布由 Deno 使用的模块，并且想要告诉 Deno 类型定义的位置，您可以使用实际代码中的三斜杠指令。</p>\n<p>例如，如果您有一个 JavaScript 模块，想为 Deno 提供类型定义的位置，您的 <code>foo.js</code> 可能看起来像这样：</p>\n<pre class="language-js"><code class="language-js"><span class="token comment">/// &lt;reference types="./foo.d.ts" /></span>\n<span class="token keyword module">export</span> <span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">"foo"</span><span class="token punctuation">;</span>\n</code></pre>\n<p>Deno 会看到这一点，并且在检查类型时，编译器将使用 <code>foo.d.ts</code> 文件，尽管 <code>foo.js</code> 将在运行时加载。</p>\n<p>该值遵循与导入模块相同的解析逻辑，这意味着它需要具有扩展名，并且是相对于当前模块的。远程模块也可以使用该说明符。</p>\n<h3 id="x-typescript-types-%E8%87%AA%E5%AE%9A%E4%B9%89-header">X-TypeScript-Types 自定义 Header<a class="anchor" href="#x-typescript-types-%E8%87%AA%E5%AE%9A%E4%B9%89-header">§</a></h3>\n<p>如果您要发布由 Deno 使用的模块，并且想要告诉 Deno 类型定义的位置，您可以使用自定义 HTTP 头 <code>X-TypeScript-Types</code>，来告诉 Deno 文件位置。</p>\n<p>标头的工作方式与上述三斜杠参考相同，这只是意味着 JavaScript 文件本身的内容不需要修改后，并且类型定义的位置可以通过服务器本身确定。</p>\n<p><strong>不是所有类型定义都受支持</strong></p>\n<p>Deno 将使用编译提示来加载指示的 <code>.d.ts</code> 文件，但有些 <code>.d.ts</code> 文件包含不受支持的功能。具体来说，有些 <code>.d.ts</code> 文件期望能够从其他包中加载或引用类型定义，它们使用模块解析逻辑。</p>\n<p>例如，一个包含 <code>node</code> 的类型引用指令，希望解析为像 <code>./node_modules/@types/node/index.d.ts</code> 的某些路径。由于这取决于非相对性的模块解析算法，Deno 无法处理这种情况。</p>\n<p><strong>为什么不在 TypeScript 文件中使用三斜杠类型引用？</strong></p>\n<p>TypeScript 编译器支持三斜杠指令，包括类型\n参考指令。如果 Deno 使用此功能，则会干扰\nTypeScript 编译器。Deno 仅在 JavaScript （包括 JSX）文件中查找指令。</p>\n<h2 id="%E8%87%AA%E5%AE%9A%E4%B9%89-typescript-%E7%BC%96%E8%AF%91%E5%99%A8%E9%80%89%E9%A1%B9">自定义 TypeScript 编译器选项<a class="anchor" href="#%E8%87%AA%E5%AE%9A%E4%B9%89-typescript-%E7%BC%96%E8%AF%91%E5%99%A8%E9%80%89%E9%A1%B9">§</a></h2>\n<p>在 Deno 生态系统中，所有严格标志都被默认启用，以符合 TypeScript 的理想状态。Deno 也支持自定义配置文件，例如 <code>tsconfig.json</code>。</p>\n<p>您需要通过显式设置 <code>-c</code> 或 <code>--config</code> 选项，来明确告诉 Deno 在哪里寻找此配置。</p>\n<pre class="language-shell"><code class="language-shell">deno run -c tsconfig.json mod.ts\n</code></pre>\n<p>以下是 Deno 当前允许的设置及其默认值：</p>\n<pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"allowJs"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token property">"allowUmdGlobalAccess"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token property">"allowUnreachableCode"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token property">"allowUnusedLabels"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token property">"alwaysStrict"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">"assumeChangesOnlyAffectDirectDependencies"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token property">"checkJs"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token property">"disableSizeLimit"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token property">"generateCpuProfile"</span><span class="token operator">:</span> <span class="token string">"profile.cpuprofile"</span><span class="token punctuation">,</span>\n    <span class="token property">"jsx"</span><span class="token operator">:</span> <span class="token string">"react"</span><span class="token punctuation">,</span>\n    <span class="token property">"jsxFactory"</span><span class="token operator">:</span> <span class="token string">"React.createElement"</span><span class="token punctuation">,</span>\n    <span class="token property">"lib"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">"noFallthroughCasesInSwitch"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token property">"noImplicitAny"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">"noImplicitReturns"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">"noImplicitThis"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">"noImplicitUseStrict"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token property">"noStrictGenericChecks"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token property">"noUnusedLocals"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token property">"noUnusedParameters"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token property">"preserveConstEnums"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token property">"removeComments"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token property">"resolveJsonModule"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">"strict"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">"strictBindCallApply"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">"strictFunctionTypes"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">"strictNullChecks"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">"strictPropertyInitialization"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">"suppressExcessPropertyErrors"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token property">"suppressImplicitAnyIndexErrors"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token property">"useDefineForClassFields"</span><span class="token operator">:</span> <span class="token boolean">false</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>有关上述选项和用例的文档，请访问 <a href="https://www.typescriptlang.org/docs/handbook/compiler-options.html">typescript docs</a>.</p>\n<p><strong>注意</strong>：以上列表中不包含 Deno 不支持的选项，或者 TypeScript 文档中已经标记为废弃的/实验性的选项。</p>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#--no-check-%E9%80%89%E9%A1%B9">--no-check 选项</a></li><li><a href="#%E4%BD%BF%E7%94%A8%E5%A4%96%E9%83%A8%E7%B1%BB%E5%9E%8B%E5%AE%9A%E4%B9%89">使用外部类型定义</a><ol><li><a href="#%E7%BC%96%E8%AF%91%E6%8F%90%E7%A4%BA">编译提示</a></li><li><a href="#javascript-%E6%96%87%E4%BB%B6%E4%B8%AD%E7%9A%84%E4%B8%89%E6%96%9C%E6%9D%A0%E5%BC%95%E7%94%A8%E6%8C%87%E4%BB%A4">JavaScript 文件中的三斜杠引用指令</a></li><li><a href="#x-typescript-types-%E8%87%AA%E5%AE%9A%E4%B9%89-header">X-TypeScript-Types 自定义 Header</a></li></ol></li><li><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89-typescript-%E7%BC%96%E8%AF%91%E5%99%A8%E9%80%89%E9%A1%B9">自定义 TypeScript 编译器选项</a></li></ol></nav>'
        } })
};
