import projectConfig from '/pagic.config.js';
export default {
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
    'pagePath': "contributing/style_guide.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "contributing/style_guide.html",
    'title': "Deno 风格指南",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<!-- https://github.com/denoland/deno/blob/be65f6692f0f81dc88c77ba4cf22cdda40760317/std/style_guide.md -->\n<!-- copy time: 20200506 -->\n<h1>Deno 风格指南</h1>\n<h2 id="%E7%9B%AE%E5%BD%95">目录<a class="anchor" href="#%E7%9B%AE%E5%BD%95">§</a></h2>\n<h2 id="%E7%89%88%E6%9D%83%E6%A0%87%E9%A2%98">版权标题<a class="anchor" href="#%E7%89%88%E6%9D%83%E6%A0%87%E9%A2%98">§</a></h2>\n<p>存储库中的大多数模块都应具有以下版权标题:</p>\n<pre class="language-ts"><code class="language-ts"><span class="token comment">// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.</span>\n</code></pre>\n<p>如果代码来源于其他地方，请确保文件拥有适当的版权拥有者。 我们只允许 MIT、BSD 和 Apache 许可代码。</p>\n<h2 id="%E5%9C%A8%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E4%BD%BF%E7%94%A8%E4%B8%8B%E5%88%92%E7%BA%BF%EF%BC%8C%E8%80%8C%E4%B8%8D%E6%98%AF%E7%A0%B4%E6%8A%98%E5%8F%B7">在文件名中使用下划线，而不是破折号<a class="anchor" href="#%E5%9C%A8%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E4%BD%BF%E7%94%A8%E4%B8%8B%E5%88%92%E7%BA%BF%EF%BC%8C%E8%80%8C%E4%B8%8D%E6%98%AF%E7%A0%B4%E6%8A%98%E5%8F%B7">§</a></h2>\n<p>例如: 将文件命名为 <code>file_server.ts</code> 而不是 <code>file-server.ts</code>。</p>\n<h2 id="%E4%B8%BA%E6%96%B0%E7%89%B9%E6%80%A7%E6%B7%BB%E5%8A%A0%E6%B5%8B%E8%AF%95">为新特性添加测试<a class="anchor" href="#%E4%B8%BA%E6%96%B0%E7%89%B9%E6%80%A7%E6%B7%BB%E5%8A%A0%E6%B5%8B%E8%AF%95">§</a></h2>\n<p>每个模块都应该包含或伴随着对其公共功能的测试。</p>\n<h2 id="todo-%E6%B3%A8%E9%87%8A">TODO 注释<a class="anchor" href="#todo-%E6%B3%A8%E9%87%8A">§</a></h2>\n<p>TODO 注释通常应该将一个 issue 或者作者的 github 用户名放在括号中。例如:</p>\n<pre class="language-ts"><code class="language-ts"><span class="token comment">// TODO(ry): Add tests.</span>\n<span class="token comment">// TODO(#123): Support Windows.</span>\n<span class="token comment">// FIXME(#349): Sometimes panics.</span>\n</code></pre>\n<h2 id="%E4%B8%8D%E5%BB%BA%E8%AE%AE%E4%BD%BF%E7%94%A8%E5%85%83%E7%BC%96%E7%A8%8B%EF%BC%88meta-programming%EF%BC%89%EF%BC%8C%E5%8C%85%E6%8B%AC%E4%BB%A3%E7%90%86%EF%BC%88proxy%EF%BC%89%E7%9A%84%E4%BD%BF%E7%94%A8">不建议使用元编程（Meta-programming），包括代理（Proxy）的使用<a class="anchor" href="#%E4%B8%8D%E5%BB%BA%E8%AE%AE%E4%BD%BF%E7%94%A8%E5%85%83%E7%BC%96%E7%A8%8B%EF%BC%88meta-programming%EF%BC%89%EF%BC%8C%E5%8C%85%E6%8B%AC%E4%BB%A3%E7%90%86%EF%BC%88proxy%EF%BC%89%E7%9A%84%E4%BD%BF%E7%94%A8">§</a></h2>\n<p>即使要写更多的代码，也要力求明确。</p>\n<p>在某些情况下，使用这些技术可能是有意义的，但是在绝大多数情况下，它们是没有意义的。</p>\n<h2 id="%E5%8C%85%E5%90%AB%E4%BB%A3%E7%A0%81%EF%BC%88inclusive-code%EF%BC%89">包含代码（Inclusive code）<a class="anchor" href="#%E5%8C%85%E5%90%AB%E4%BB%A3%E7%A0%81%EF%BC%88inclusive-code%EF%BC%89">§</a></h2>\n<p>请遵循有关包含代码的准则，网址为：</p>\n<p><a href="https://chromium.googlesource.com/chromium/src/+/master/styleguide/inclusive_code.md">https://chromium.googlesource.com/chromium/src/+/master/styleguide/inclusive_code.md</a></p>\n<h2 id="rust">Rust<a class="anchor" href="#rust">§</a></h2>\n<p>遵循 Rust 约定，并与现有代码保持一致。</p>\n<h2 id="typescript">Typescript<a class="anchor" href="#typescript">§</a></h2>\n<p>代码库的 TypeScript 部分包括内置的 <code>cli/js</code> 和标准库 <code>std</code>。</p>\n<h3 id="%E4%BD%BF%E7%94%A8-typescript-%E8%80%8C%E4%B8%8D%E6%98%AF-javascript">使用 TypeScript 而不是 JavaScript<a class="anchor" href="#%E4%BD%BF%E7%94%A8-typescript-%E8%80%8C%E4%B8%8D%E6%98%AF-javascript">§</a></h3>\n<h3 id="%E4%BD%BF%E7%94%A8%E6%9C%AF%E8%AF%AD%E2%80%9C%E6%A8%A1%E5%9D%97%EF%BC%88module%EF%BC%89%E2%80%9D%EF%BC%8C%E8%80%8C%E4%B8%8D%E6%98%AF%E2%80%9C%E5%BA%93%EF%BC%88library%EF%BC%89%E2%80%9D%E6%88%96%E2%80%9C%E5%8C%85%EF%BC%88package%EF%BC%89%E2%80%9D">使用术语“模块（module）”，而不是“库（library）”或“包（package）”<a class="anchor" href="#%E4%BD%BF%E7%94%A8%E6%9C%AF%E8%AF%AD%E2%80%9C%E6%A8%A1%E5%9D%97%EF%BC%88module%EF%BC%89%E2%80%9D%EF%BC%8C%E8%80%8C%E4%B8%8D%E6%98%AF%E2%80%9C%E5%BA%93%EF%BC%88library%EF%BC%89%E2%80%9D%E6%88%96%E2%80%9C%E5%8C%85%EF%BC%88package%EF%BC%89%E2%80%9D">§</a></h3>\n<p>为了保证明确性和一致性，避免使用术语 “library” 和 “package” ，而是使用 “module” 来引用一个 JS 或 TS 文件，或者一个 TS/JS 代码目录。</p>\n<h3 id="%E4%B8%8D%E8%A6%81%E4%BD%BF%E7%94%A8-index.ts-%E6%88%96-index.js-%E4%BD%9C%E4%B8%BA%E6%96%87%E4%BB%B6%E5%90%8D">不要使用 <code>index.ts</code> 或 <code>index.js</code> 作为文件名<a class="anchor" href="#%E4%B8%8D%E8%A6%81%E4%BD%BF%E7%94%A8-index.ts-%E6%88%96-index.js-%E4%BD%9C%E4%B8%BA%E6%96%87%E4%BB%B6%E5%90%8D">§</a></h3>\n<p>Deno 不会以特殊的方式处理 “index.js” 或 “index.ts” 文件。如果使用了这些名称，就意味着当它们需要模块说明符时，可能被排除在外。这会造成误解。</p>\n<p>如果一个代码目录需要一个默认的入口点，使用文件名 <code>mod.ts</code>。 文件名 <code>mod.ts</code> 遵循 Rust 的约定，比 <code>index.ts</code> 短，并且没有任何关于它如何工作的先入为主的概念。</p>\n<h3 id="%E5%AF%BC%E5%87%BA%E5%87%BD%E6%95%B0%EF%BC%88exported-functions%EF%BC%89%3A-%E6%9C%80%E5%A4%9A-2-%E4%B8%AA%E5%8F%82%E6%95%B0%EF%BC%8C%E5%85%B6%E4%BD%99%E7%9A%84%E6%94%BE%E5%85%A5%E4%B8%80%E4%B8%AA%E9%80%89%E9%A1%B9%E5%AF%B9%E8%B1%A1%EF%BC%88options-object%EF%BC%89">导出函数（Exported functions）: 最多 2 个参数，其余的放入一个选项对象（options object）<a class="anchor" href="#%E5%AF%BC%E5%87%BA%E5%87%BD%E6%95%B0%EF%BC%88exported-functions%EF%BC%89%3A-%E6%9C%80%E5%A4%9A-2-%E4%B8%AA%E5%8F%82%E6%95%B0%EF%BC%8C%E5%85%B6%E4%BD%99%E7%9A%84%E6%94%BE%E5%85%A5%E4%B8%80%E4%B8%AA%E9%80%89%E9%A1%B9%E5%AF%B9%E8%B1%A1%EF%BC%88options-object%EF%BC%89">§</a></h3>\n<p>在设计函数接口时，请严格遵循以下规则：</p>\n<ol>\n<li>\n<p>若某函数是公共 API 的一部分，则其可以接受 0~2 个参数，如果必要的话，可以外加一个选项对象，因此最大总数为 3 个。</p>\n</li>\n<li>\n<p>可选参数通常应放到选项对象中。</p>\n<p>如果只有一个可选参数，并且将来一般不会添加更多可选参数，那么该可选参数可以不放在选项对象中。</p>\n</li>\n<li>\n<p>选项参数是唯一一个常规对象参数</p>\n<p>其他参数可以是对象，但它们在运行时必须能区别于其他一般的对象（&quot;plain&quot; Object）。有以下两种方法进行区别：</p>\n<ul>\n<li>一个独特的原型（例如：<code>Array</code>，<code>Map</code>，<code>Date</code>，<code>class MyThing</code>）</li>\n<li>一个众所周知的符号属性（例如 <code>Symbol.iterator</code>）</li>\n</ul>\n<p>这允许 API 以向后兼容的方式发展，即使选项对象的位置发生了变化。</p>\n</li>\n</ol>\n<pre class="language-ts"><code class="language-ts"><span class="token comment">// 错误示例：可选参数不是选项对象的一部分 (#2)</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">resolve</span><span class="token punctuation">(</span>\n  hostname<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>\n  family<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">"ipv4"</span> <span class="token operator">|</span> <span class="token string">"ipv6"</span><span class="token punctuation">,</span>\n  timeout<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>\n<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token maybe-class-name">IPAddress</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n<span class="token comment">// 正确示例：</span>\n<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name"><span class="token maybe-class-name">ResolveOptions</span></span> <span class="token punctuation">{</span>\n  family<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">"ipv4"</span> <span class="token operator">|</span> <span class="token string">"ipv6"</span><span class="token punctuation">;</span>\n  timeout<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">resolve</span><span class="token punctuation">(</span>\n  hostname<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>\n  options<span class="token operator">:</span> <span class="token maybe-class-name">ResolveOptions</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token maybe-class-name">IPAddress</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n</code></pre>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name"><span class="token maybe-class-name">Environment</span></span> <span class="token punctuation">{</span>\n  <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 错误示例：`env`可以是一个常规对象，因此无法与选项对象区分 (#3)</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">runShellWithEnv</span><span class="token punctuation">(</span>cmdline<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> env<span class="token operator">:</span> <span class="token maybe-class-name">Environment</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n<span class="token comment">// 正确示例</span>\n<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name"><span class="token maybe-class-name">RunShellOptions</span></span> <span class="token punctuation">{</span>\n  env<span class="token operator">:</span> <span class="token maybe-class-name">Environment</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">runShellWithEnv</span><span class="token punctuation">(</span>\n  cmdline<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>\n  options<span class="token operator">:</span> <span class="token maybe-class-name">RunShellOptions</span>\n<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n</code></pre>\n<pre class="language-ts"><code class="language-ts"><span class="token comment">// 错误示例：多于3个参数 (#1)，多个可选参数 (#2)。</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">renameSync</span><span class="token punctuation">(</span>\n  oldname<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>\n  newname<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>\n  replaceExisting<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>\n  followLinks<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>\n<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n<span class="token comment">// 正确示例</span>\n<span class="token keyword">interface</span> <span class="token class-name"><span class="token maybe-class-name">RenameOptions</span></span> <span class="token punctuation">{</span>\n  replaceExisting<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>\n  followLinks<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">renameSync</span><span class="token punctuation">(</span>\n  oldname<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>\n  newname<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>\n  options<span class="token operator">:</span> <span class="token maybe-class-name">RenameOptions</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n</code></pre>\n<pre class="language-ts"><code class="language-ts"><span class="token comment">// 错误示例：参数过多 (#1)</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">pwrite</span><span class="token punctuation">(</span>\n  fd<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>\n  buffer<span class="token operator">:</span> <span class="token maybe-class-name">TypedArray</span><span class="token punctuation">,</span>\n  offset<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>\n  length<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>\n  position<span class="token operator">:</span> <span class="token builtin">number</span>\n<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n<span class="token comment">// 正确示例：</span>\n<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name"><span class="token maybe-class-name">PWrite</span></span> <span class="token punctuation">{</span>\n  fd<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  buffer<span class="token operator">:</span> <span class="token maybe-class-name">TypedArray</span><span class="token punctuation">;</span>\n  offset<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  length<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  position<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">pwrite</span><span class="token punctuation">(</span>options<span class="token operator">:</span> <span class="token maybe-class-name">PWrite</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n</code></pre>\n<h3 id="%E5%B0%BD%E9%87%8F%E9%99%8D%E4%BD%8E%E4%BE%9D%E8%B5%96%E6%80%A7%EF%BC%9B%E4%B8%8D%E8%A6%81%E8%BF%9B%E8%A1%8C%E5%BE%AA%E7%8E%AF%E5%AF%BC%E5%85%A5">尽量降低依赖性；不要进行循环导入<a class="anchor" href="#%E5%B0%BD%E9%87%8F%E9%99%8D%E4%BD%8E%E4%BE%9D%E8%B5%96%E6%80%A7%EF%BC%9B%E4%B8%8D%E8%A6%81%E8%BF%9B%E8%A1%8C%E5%BE%AA%E7%8E%AF%E5%AF%BC%E5%85%A5">§</a></h3>\n<p>尽管 <code>cli/js</code> 和 <code>std</code> 没有外部依赖关系，但仍然必须注意保持内部依赖关系的简单性和可管理性。请尤为注意，不要引入循环导入。</p>\n<h3 id="%E4%B8%8D%E8%A6%81%E8%BF%9E%E6%8E%A5%E5%88%B0%E6%96%87%E4%BB%B6%E5%90%8D%E4%BB%A5%E4%B8%8B%E5%88%92%E7%BA%BF%E5%BC%80%E5%A4%B4%E7%9A%84%E6%96%87%E4%BB%B6%EF%BC%8C%E5%A6%82%EF%BC%9A_foo.ts">不要连接到文件名以下划线开头的文件，如：<code>_foo.ts</code><a class="anchor" href="#%E4%B8%8D%E8%A6%81%E8%BF%9E%E6%8E%A5%E5%88%B0%E6%96%87%E4%BB%B6%E5%90%8D%E4%BB%A5%E4%B8%8B%E5%88%92%E7%BA%BF%E5%BC%80%E5%A4%B4%E7%9A%84%E6%96%87%E4%BB%B6%EF%BC%8C%E5%A6%82%EF%BC%9A_foo.ts">§</a></h3>\n<p>有时候可能需要一个内部模块，但是它的 API 并不稳定或者不被连接。这种情况下，在文件名前面加一个下划线。按照惯例，只有它自己目录中的文件才能导入它。</p>\n<h3 id="%E5%AF%B9%E5%AF%BC%E5%87%BA%E7%9A%84%E7%AC%A6%E5%8F%B7%E4%BD%BF%E7%94%A8-jsdoc">对导出的符号使用 JSDoc<a class="anchor" href="#%E5%AF%B9%E5%AF%BC%E5%87%BA%E7%9A%84%E7%AC%A6%E5%8F%B7%E4%BD%BF%E7%94%A8-jsdoc">§</a></h3>\n<p>我们力求文档的完整性。理想情况下，每个导出的文档符号都应该有一个文档行。</p>\n<p>如果可能的话，最好写单行 JSDoc。例如:</p>\n<pre class="language-ts"><code class="language-ts"><span class="token doc-comment comment">/** foo does bar. */</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>文档易于阅读是很重要的，但是还需要提供额外的样式信息，以确保生成的文档有更丰富的含义。因此，JSDoc 通常应该遵循 markdown 标记来丰富文本。</p>\n<p>虽然 markdown 支持 HTML 标记，但是在 JSDoc 块中是禁止的。</p>\n<p>代码字符串文字应使用反引号（`）括起来，而不是用引号。例如：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token doc-comment comment">/** Import something from the `deno` module. */</span>\n</code></pre>\n<p>不要记录函数参数，除非它们的意图不明显（当然，如果它们没有明显的意图，应该重新考虑 API 的设计）。因此，通常不应使用 <code>@param</code>。如果使用了 <code>@param</code>，则不应该包含 <code>type</code> ，因为 TypeScript 已经是强类型化的了。</p>\n<pre class="language-ts"><code class="language-ts"><span class="token doc-comment comment">/**\n * Function with non obvious param.\n * <span class="token keyword">@param</span> <span class="token parameter">foo</span> Description of non obvious parameter.\n */</span>\n</code></pre>\n<p>应尽可能减小垂直间距。因此单行注释应写为：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token doc-comment comment">/** 这样写单行 JSDoc 注释。 */</span>\n</code></pre>\n<p>不要写为：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token doc-comment comment">/**\n * 不要这样写单行 JSDoc 注释。\n */</span>\n</code></pre>\n<p>代码示例不应使用三个反引号（```）标记。它们应该用缩进标记，要求在示例代码块前加入一个空行，并且示例代码的每一行需要有 6 个额外空格。比注释的第一列多 4 个空格。例如：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token doc-comment comment">/** A straight forward comment and an example:\n *\n *       import <span class="token punctuation">{</span> foo <span class="token punctuation">}</span> from "deno";\n *       foo("bar");\n */</span>\n</code></pre>\n<p>既然代码示例已经是一个注释了，它就不应再包含其他注释。如果它需要进一步的注释，那意味着它不是一个很好的示例。</p>\n<h3 id="%E6%AF%8F%E4%B8%AA%E6%A8%A1%E5%9D%97%E9%83%BD%E5%BA%94%E8%AF%A5%E9%99%84%E5%B8%A6%E4%B8%80%E4%B8%AA%E6%B5%8B%E8%AF%95%E6%A8%A1%E5%9D%97">每个模块都应该附带一个测试模块<a class="anchor" href="#%E6%AF%8F%E4%B8%AA%E6%A8%A1%E5%9D%97%E9%83%BD%E5%BA%94%E8%AF%A5%E9%99%84%E5%B8%A6%E4%B8%80%E4%B8%AA%E6%B5%8B%E8%AF%95%E6%A8%A1%E5%9D%97">§</a></h3>\n<p>每个带有公共功能 <code>foo.ts</code> 的模块都应该附带一个测试模块 <code>foo_test.ts</code>。由于 <code>cli/js</code> 模块的上下文不同，它的测试应该放在 <code>cli/js/tests</code> 中，或者它应只是测试模块的同级模块。</p>\n<h3 id="%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95%E5%BA%94%E6%98%AF%E6%98%8E%E7%A1%AE%E7%9A%84">单元测试应是明确的<a class="anchor" href="#%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95%E5%BA%94%E6%98%AF%E6%98%8E%E7%A1%AE%E7%9A%84">§</a></h3>\n<p>为了更好地理解测试，函数应该在测试命令中按照提示正确命名，如:</p>\n<pre class="language-autoit"><code class="language-autoit">test myTestFunction <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> ok\n</code></pre>\n<p>测试示例:</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> assertEquals <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"<a class="token url-link" href="https://deno.land/std@v0.11/testing/asserts.ts">https://deno.land/std@v0.11/testing/asserts.ts</a>"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> foo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./mod.ts"</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token method function property-access">test</span><span class="token punctuation">(</span><span class="token string">"myTestFunction"</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> bar<span class="token operator">:</span> <span class="token string">"bar"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="%E9%A1%B6%E7%BA%A7%E5%87%BD%E6%95%B0%E4%B8%8D%E5%BA%94%E4%BD%BF%E7%94%A8%E7%AE%AD%E5%A4%B4%E8%AF%AD%E6%B3%95">顶级函数不应使用箭头语法<a class="anchor" href="#%E9%A1%B6%E7%BA%A7%E5%87%BD%E6%95%B0%E4%B8%8D%E5%BA%94%E4%BD%BF%E7%94%A8%E7%AE%AD%E5%A4%B4%E8%AF%AD%E6%B3%95">§</a></h2>\n<p>顶级函数应使用 <code>function</code> 关键字。箭头语法应限于闭包。</p>\n<p>错误示例：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token string">"bar"</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n<p>正确示例：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token string">"bar"</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h3 id="std"><code>std</code><a class="anchor" href="#std">§</a></h3>\n<h4 id="%E4%B8%8D%E8%A6%81%E4%BE%9D%E8%B5%96%E5%A4%96%E9%83%A8%E4%BB%A3%E7%A0%81">不要依赖外部代码<a class="anchor" href="#%E4%B8%8D%E8%A6%81%E4%BE%9D%E8%B5%96%E5%A4%96%E9%83%A8%E4%BB%A3%E7%A0%81">§</a></h4>\n<p><code>https://deno.land/std/</code> 旨在成为所有 Deno 程序可以依赖的基础功能。我们希望向用户保证，此代码不包含任何可能未经审核的第三方代码。</p>\n<h4 id="%E6%96%87%E6%A1%A3%E4%BB%A5%E5%8F%8A%E7%BB%B4%E6%8A%A4%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7">文档以及维护浏览器兼容性<a class="anchor" href="#%E6%96%87%E6%A1%A3%E4%BB%A5%E5%8F%8A%E7%BB%B4%E6%8A%A4%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7">§</a></h4>\n<p>如果一个模块兼容浏览器，在模块顶部的 JSDoc 中包含以下声明：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token doc-comment comment">/** This module is browser compatible. */</span>\n</code></pre>\n<p>为该模块维护浏览器兼容性，在代码和测试中都不要使用 <code>Deno</code> 命名空间，确保任何新的依赖都兼容浏览器。</p>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E7%9B%AE%E5%BD%95">目录</a></li><li><a href="#%E7%89%88%E6%9D%83%E6%A0%87%E9%A2%98">版权标题</a></li><li><a href="#%E5%9C%A8%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E4%BD%BF%E7%94%A8%E4%B8%8B%E5%88%92%E7%BA%BF%EF%BC%8C%E8%80%8C%E4%B8%8D%E6%98%AF%E7%A0%B4%E6%8A%98%E5%8F%B7">在文件名中使用下划线，而不是破折号</a></li><li><a href="#%E4%B8%BA%E6%96%B0%E7%89%B9%E6%80%A7%E6%B7%BB%E5%8A%A0%E6%B5%8B%E8%AF%95">为新特性添加测试</a></li><li><a href="#todo-%E6%B3%A8%E9%87%8A">TODO 注释</a></li><li><a href="#%E4%B8%8D%E5%BB%BA%E8%AE%AE%E4%BD%BF%E7%94%A8%E5%85%83%E7%BC%96%E7%A8%8B%EF%BC%88meta-programming%EF%BC%89%EF%BC%8C%E5%8C%85%E6%8B%AC%E4%BB%A3%E7%90%86%EF%BC%88proxy%EF%BC%89%E7%9A%84%E4%BD%BF%E7%94%A8">不建议使用元编程（Meta-programming），包括代理（Proxy）的使用</a></li><li><a href="#%E5%8C%85%E5%90%AB%E4%BB%A3%E7%A0%81%EF%BC%88inclusive-code%EF%BC%89">包含代码（Inclusive code）</a></li><li><a href="#rust">Rust</a></li><li><a href="#typescript">Typescript</a><ol><li><a href="#%E4%BD%BF%E7%94%A8-typescript-%E8%80%8C%E4%B8%8D%E6%98%AF-javascript">使用 TypeScript 而不是 JavaScript</a></li><li><a href="#%E4%BD%BF%E7%94%A8%E6%9C%AF%E8%AF%AD%E2%80%9C%E6%A8%A1%E5%9D%97%EF%BC%88module%EF%BC%89%E2%80%9D%EF%BC%8C%E8%80%8C%E4%B8%8D%E6%98%AF%E2%80%9C%E5%BA%93%EF%BC%88library%EF%BC%89%E2%80%9D%E6%88%96%E2%80%9C%E5%8C%85%EF%BC%88package%EF%BC%89%E2%80%9D">使用术语“模块（module）”，而不是“库（library）”或“包（package）”</a></li><li><a href="#%E4%B8%8D%E8%A6%81%E4%BD%BF%E7%94%A8-index.ts-%E6%88%96-index.js-%E4%BD%9C%E4%B8%BA%E6%96%87%E4%BB%B6%E5%90%8D">不要使用 index.ts 或 index.js 作为文件名</a></li><li><a href="#%E5%AF%BC%E5%87%BA%E5%87%BD%E6%95%B0%EF%BC%88exported-functions%EF%BC%89%3A-%E6%9C%80%E5%A4%9A-2-%E4%B8%AA%E5%8F%82%E6%95%B0%EF%BC%8C%E5%85%B6%E4%BD%99%E7%9A%84%E6%94%BE%E5%85%A5%E4%B8%80%E4%B8%AA%E9%80%89%E9%A1%B9%E5%AF%B9%E8%B1%A1%EF%BC%88options-object%EF%BC%89">导出函数（Exported functions）: 最多 2 个参数，其余的放入一个选项对象（options object）</a></li><li><a href="#%E5%B0%BD%E9%87%8F%E9%99%8D%E4%BD%8E%E4%BE%9D%E8%B5%96%E6%80%A7%EF%BC%9B%E4%B8%8D%E8%A6%81%E8%BF%9B%E8%A1%8C%E5%BE%AA%E7%8E%AF%E5%AF%BC%E5%85%A5">尽量降低依赖性；不要进行循环导入</a></li><li><a href="#%E4%B8%8D%E8%A6%81%E8%BF%9E%E6%8E%A5%E5%88%B0%E6%96%87%E4%BB%B6%E5%90%8D%E4%BB%A5%E4%B8%8B%E5%88%92%E7%BA%BF%E5%BC%80%E5%A4%B4%E7%9A%84%E6%96%87%E4%BB%B6%EF%BC%8C%E5%A6%82%EF%BC%9A_foo.ts">不要连接到文件名以下划线开头的文件，如：_foo.ts</a></li><li><a href="#%E5%AF%B9%E5%AF%BC%E5%87%BA%E7%9A%84%E7%AC%A6%E5%8F%B7%E4%BD%BF%E7%94%A8-jsdoc">对导出的符号使用 JSDoc</a></li><li><a href="#%E6%AF%8F%E4%B8%AA%E6%A8%A1%E5%9D%97%E9%83%BD%E5%BA%94%E8%AF%A5%E9%99%84%E5%B8%A6%E4%B8%80%E4%B8%AA%E6%B5%8B%E8%AF%95%E6%A8%A1%E5%9D%97">每个模块都应该附带一个测试模块</a></li><li><a href="#%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95%E5%BA%94%E6%98%AF%E6%98%8E%E7%A1%AE%E7%9A%84">单元测试应是明确的</a></li></ol></li><li><a href="#%E9%A1%B6%E7%BA%A7%E5%87%BD%E6%95%B0%E4%B8%8D%E5%BA%94%E4%BD%BF%E7%94%A8%E7%AE%AD%E5%A4%B4%E8%AF%AD%E6%B3%95">顶级函数不应使用箭头语法</a><ol><li><a href="#std">std</a><ol></ol></li></ol></li></ol></nav>'
        } })
};
