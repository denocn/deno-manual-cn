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
                    "getting_started/command_line_interface.md",
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
                "link": "testing.md",
                "children": [
                    "testing/assertions.md"
                ]
            },
            {
                "link": "tools.md",
                "children": [
                    "tools/debugger.md",
                    "tools/script_installer.md",
                    "tools/formatter.md",
                    "tools/bundler.md",
                    "tools/documentation_generator.md",
                    "tools/dependency_inspector.md",
                    "tools/linter.md"
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
    'pagePath': "testing/assertions.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "testing/assertions.html",
    'title': "断言",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>断言</h1>\n<p>为了帮助开发者编写测试，Deno 标准库提供了内置的 <a href="https://deno.land/std/testing/asserts.ts">断言模块</a>，可从 <code>https://deno.land/std/testing/asserts.ts</code> 导入。</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword module">import</span> <span class="token punctuation">{</span> assert <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">"<a class="token url-link" href="https://deno.land/std/testing/asserts.ts">https://deno.land/std/testing/asserts.ts</a>"</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token method function property-access">test</span><span class="token punctuation">(</span><span class="token string">"Hello Test"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">assert</span><span class="token punctuation">(</span><span class="token string">"Hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>断言模块提供了九个断言函数：</p>\n<ul>\n<li><code>assert(expr: unknown, msg = &quot;&quot;): asserts expr</code></li>\n<li><code>assertEquals(actual: unknown, expected: unknown, msg?: string): void</code></li>\n<li><code>assertNotEquals(actual: unknown, expected: unknown, msg?: string): void</code></li>\n<li><code>assertStrictEquals(actual: unknown, expected: unknown, msg?: string): void</code></li>\n<li><code>assertStringContains(actual: string, expected: string, msg?: string): void</code></li>\n<li><code>assertArrayContains(actual: unknown[], expected: unknown[], msg?: string): void</code></li>\n<li><code>assertMatch(actual: string, expected: RegExp, msg?: string): void</code></li>\n<li><code>assertThrows(fn: () =&gt; void, ErrorClass?: Constructor, msgIncludes = &quot;&quot;, msg?: string): Error</code></li>\n<li><code>assertThrowsAsync(fn: () =&gt; Promise&lt;void&gt;, ErrorClass?: Constructor, msgIncludes = &quot;&quot;, msg?: string): Promise&lt;Error&gt;</code></li>\n</ul>\n<h2 id="%E6%96%AD%E8%A8%80">断言<a class="anchor" href="#%E6%96%AD%E8%A8%80">§</a></h2>\n<p><code>assert</code> 方法是一个简单的“真值”断言，可用于断言任何可以推导为 <code>true</code> 的值。</p>\n<pre class="language-js"><code class="language-js"><span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token method function property-access">test</span><span class="token punctuation">(</span><span class="token string">"Test Assert"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">assert</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">assert</span><span class="token punctuation">(</span><span class="token string">"Hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">assert</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="%E7%9B%B8%E7%AD%89%E6%80%A7">相等性<a class="anchor" href="#%E7%9B%B8%E7%AD%89%E6%80%A7">§</a></h2>\n<p>可用的相等性断言有三个：<code>assertEquals()</code>，<code>assertNotEquals()</code> 和 <code>assertStrictEquals()</code>.</p>\n<p><code>assertEquals()</code> 和 <code>assertNotEquals()</code> 方法提供常规的相等性检查，并能够断言基本类型和对象的相等性。</p>\n<pre class="language-js"><code class="language-js"><span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token method function property-access">test</span><span class="token punctuation">(</span><span class="token string">"Test Assert Equals"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token string">"Hello"</span><span class="token punctuation">,</span> <span class="token string">"Hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token keyword nil">undefined</span><span class="token punctuation">,</span> <span class="token keyword nil">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token keyword null nil">null</span><span class="token punctuation">,</span> <span class="token keyword null nil">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">"abc"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">"abc"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n  <span class="token keyword">const</span> foo1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> foo2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token function">assertEquals</span><span class="token punctuation">(</span>foo1<span class="token punctuation">,</span> foo2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token method function property-access">test</span><span class="token punctuation">(</span><span class="token string">"Test Assert Not Equals"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">assertNotEquals</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">assertNotEquals</span><span class="token punctuation">(</span><span class="token string">"Hello"</span><span class="token punctuation">,</span> <span class="token string">"World"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">assertNotEquals</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">assertNotEquals</span><span class="token punctuation">(</span><span class="token keyword nil">undefined</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">assertNotEquals</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token known-class-name class-name">Date</span><span class="token punctuation">.</span><span class="token method function property-access">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">assertNotEquals</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">"abc"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">"def"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p><code>assertStrictEquals()</code> 基于 <code>===</code> 运算符提供了更简单、严格的检查。相同对象的两个实例不会判断为相等，因为引用不相同。</p>\n<pre class="language-js"><code class="language-js"><span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token method function property-access">test</span><span class="token punctuation">(</span><span class="token string">"Test Assert Strict Equals"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">assertStrictEquals</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">assertStrictEquals</span><span class="token punctuation">(</span><span class="token string">"Hello"</span><span class="token punctuation">,</span> <span class="token string">"Hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">assertStrictEquals</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">assertStrictEquals</span><span class="token punctuation">(</span><span class="token keyword nil">undefined</span><span class="token punctuation">,</span> <span class="token keyword nil">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p><code>assertStrictEquals()</code> 最好用于精确判断两个基本类型的相等性。</p>\n<h2 id="%E5%8C%85%E5%90%AB">包含<a class="anchor" href="#%E5%8C%85%E5%90%AB">§</a></h2>\n<p><code>assertStringContains()</code> 和 <code>assertArrayContains()</code> 可用于断言包含关系。</p>\n<p><code>assertStringContains()</code> 方法检查一个字符串是否包含了预期的字符串。</p>\n<pre class="language-js"><code class="language-js"><span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token method function property-access">test</span><span class="token punctuation">(</span><span class="token string">"Test Assert String Contains"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">assertStringContains</span><span class="token punctuation">(</span><span class="token string">"Hello World"</span><span class="token punctuation">,</span> <span class="token string">"Hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p><code>assertArrayContains()</code> 方法稍微高级一些，能够找到一个数组内的值，或是子数组。</p>\n<pre class="language-js"><code class="language-js"><span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token method function property-access">test</span><span class="token punctuation">(</span><span class="token string">"Test Assert Array Contains"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">assertArrayContains</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">assertArrayContains</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">assertArrayContains</span><span class="token punctuation">(</span><span class="token known-class-name class-name">Array</span><span class="token punctuation">.</span><span class="token keyword module">from</span><span class="token punctuation">(</span><span class="token string">"Hello World"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token known-class-name class-name">Array</span><span class="token punctuation">.</span><span class="token keyword module">from</span><span class="token punctuation">(</span><span class="token string">"Hello"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F">正则表达式<a class="anchor" href="#%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F">§</a></h2>\n<p>通过 <code>assertMatch()</code> 方法断言正则匹配。</p>\n<pre class="language-js"><code class="language-js"><span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token method function property-access">test</span><span class="token punctuation">(</span><span class="token string">"Test Assert Match"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">assertMatch</span><span class="token punctuation">(</span><span class="token string">"abcdefghi"</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">"def"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> basicUrl <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">"^https?://[a-z.]+.com$"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">assertMatch</span><span class="token punctuation">(</span><span class="token string">"<a class="token url-link" href="https://www.google.com">https://www.google.com</a>"</span><span class="token punctuation">,</span> basicUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">assertMatch</span><span class="token punctuation">(</span><span class="token string">"<a class="token url-link" href="http://facebook.com">http://facebook.com</a>"</span><span class="token punctuation">,</span> basicUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="%E6%8A%9B%E5%87%BA%E9%94%99%E8%AF%AF">抛出错误<a class="anchor" href="#%E6%8A%9B%E5%87%BA%E9%94%99%E8%AF%AF">§</a></h2>\n<p>在 Deno 中有两种方式断言抛出错误的行为：<code>assertThrows()</code> 和 <code>assertAsyncThrows()</code>。</p>\n<p>两种方式都能检查抛出<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error">错误</a> 的类型和信息。</p>\n<p>两种方式的区别是 <code>assertThrows()</code> 接收一个标准函数，而 <code>assertAsyncThrows()</code> 接收一个返回 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a> 的函数。</p>\n<p><code>assertThrows()</code> 将检查抛出的错误，也可以检查所抛出的错误的类型是否正确，并判断错误消息是否符合预期。</p>\n<pre class="language-js"><code class="language-js"><span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token method function property-access">test</span><span class="token punctuation">(</span><span class="token string">"Test Assert Throws"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">assertThrows</span><span class="token punctuation">(</span>\n    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"Panic!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token known-class-name class-name">Error</span><span class="token punctuation">,</span>\n    <span class="token string">"Panic!"</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p><code>assertAsyncThrows()</code> 稍微复杂一点，主要是因为它处理 Promise。它将捕获 Promise 中抛出的错误或 rejection。您还可以选择检查错误类型和错误消息。</p>\n<pre class="language-js"><code class="language-js"><span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token method function property-access">test</span><span class="token punctuation">(</span><span class="token string">"Test Assert Throws Async"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">assertThrowsAsync</span><span class="token punctuation">(</span>\n    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"Panic! Threw Error"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token known-class-name class-name">Error</span><span class="token punctuation">,</span>\n    <span class="token string">"Panic! Threw Error"</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token function">assertThrowsAsync</span><span class="token punctuation">(</span>\n    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token known-class-name class-name">Promise</span><span class="token punctuation">.</span><span class="token method function property-access">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"Panic! Reject Error"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token known-class-name class-name">Error</span><span class="token punctuation">,</span>\n    <span class="token string">"Panic! Reject Error"</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="%E8%87%AA%E5%AE%9A%E4%B9%89%E6%B6%88%E6%81%AF">自定义消息<a class="anchor" href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%B6%88%E6%81%AF">§</a></h2>\n<p>Deno 的每个内置断言都允许您覆盖标准 CLI 错误消息。</p>\n<p>这个示例将输出 &quot;Values Don\'t Match!&quot;，而不是标准 CLI 错误消息。</p>\n<pre class="language-js"><code class="language-js"><span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token method function property-access">test</span><span class="token punctuation">(</span><span class="token string">"Test Assert Equal Fail Custom Message"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">"Values Don\'t Match!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/main.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E6%96%AD%E8%A8%80">断言</a></li><li><a href="#%E7%9B%B8%E7%AD%89%E6%80%A7">相等性</a></li><li><a href="#%E5%8C%85%E5%90%AB">包含</a></li><li><a href="#%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F">正则表达式</a></li><li><a href="#%E6%8A%9B%E5%87%BA%E9%94%99%E8%AF%AF">抛出错误</a></li><li><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%B6%88%E6%81%AF">自定义消息</a></li></ol></nav>'
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
                    "text": "命令行界面",
                    "link": "getting_started/command_line_interface.html"
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
                    "text": "WebAssembly 支持",
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
            "children": [
                {
                    "text": "断言",
                    "link": "testing/assertions.html"
                }
            ],
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
                },
                {
                    "text": "Linter",
                    "link": "tools/linter.html"
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
                    "text": "文件系统事件",
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
