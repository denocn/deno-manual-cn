import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "title": "编译器 API",
        "link": "runtime/compiler_apis.html"
    },
    'next': {
        "link": "linking_to_external_code.html",
        "title": "与外部代码连接"
    },
    config: { "root": "/", ...projectConfig },
    'pagePath': "runtime/workers.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "runtime/workers.html",
    'title': "Worker",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Worker</h1>\n<p>Deno 支持 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Worker/Worker">Web Worker API</a>.</p>\n<p>Worker 能够用来在多个线程中运行代码，<code>Worker</code> 的每个实例都会在一个单独的线程中运行，这个线程专属于它。</p>\n<p>目前，Deno 只支持 <code>module</code> 类型的 worker，因此在创建新的 worker 时必须传递 <code>type: &quot;module&quot;</code> 选项。</p>\n<p>目前，相对模块说明符 (Relative module specifiers) <a href="https://github.com/denoland/deno/issues/5216">尚不支持</a>。作为代替，您可以用 <code>URL</code> 构造函数和 <code>import.meta.url</code> 来为附近的脚本创建说明符。</p>\n<pre class="language-ts"><code class="language-ts"><span class="token comment">// Good</span>\n<span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name"><span class="token constant">URL</span></span><span class="token punctuation">(</span><span class="token string">"worker.js"</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>href<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">"module"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Bad</span>\n<span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name"><span class="token constant">URL</span></span><span class="token punctuation">(</span><span class="token string">"worker.js"</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name"><span class="token constant">URL</span></span><span class="token punctuation">(</span><span class="token string">"worker.js"</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>href<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">"classic"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span><span class="token string">"./worker.js"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">"module"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="%E6%9D%83%E9%99%90">权限<a class="anchor" href="#%E6%9D%83%E9%99%90">§</a></h2>\n<p>创建一个新的 <code>Worker</code> 实例的行为与动态导入类似，因此 Deno 需要适当的权限来做这个操作。</p>\n<p>对于使用本地模块的 worker，Deno 需要读取 (<code>--allow-read</code>) 权限：</p>\n<p><strong>main.ts</strong></p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name"><span class="token constant">URL</span></span><span class="token punctuation">(</span><span class="token string">"worker.ts"</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>href<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">"module"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p><strong>worker.ts</strong></p>\n<pre class="language-ts"><code class="language-ts"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"hello world"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nself<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<pre class="language-shell"><code class="language-shell">$ deno run main.ts\nerror: Uncaught PermissionDenied: <span class="token builtin class-name">read</span> access to <span class="token string">"./worker.ts"</span>, run again with the --allow-read flag\n\n$ deno run --allow-read main.ts\nhello world\n</code></pre>\n<p>对于使用远程模块的 worker，Deno 需要网络 (<code>--allow-net</code>) 权限：</p>\n<p><strong>main.ts</strong></p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span><span class="token string">"<a class="token url-link" href="https://example.com/worker.ts">https://example.com/worker.ts</a>"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">"module"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p><strong>worker.ts</strong></p>\n<pre class="language-ts"><code class="language-ts"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"hello world"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nself<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<pre class="language-shell"><code class="language-shell">$ deno run main.ts\nerror: Uncaught PermissionDenied: net access to <span class="token string">"<a class="token url-link" href="https://example.com/worker.ts">https://example.com/worker.ts</a>"</span>, run again with the --allow-net flag\n\n$ deno run --allow-net main.ts\nhello world\n</code></pre>\n<h2 id="%E5%9C%A8-worker-%E4%B8%AD%E4%BD%BF%E7%94%A8-deno">在 Worker 中使用 Deno<a class="anchor" href="#%E5%9C%A8-worker-%E4%B8%AD%E4%BD%BF%E7%94%A8-deno">§</a></h2>\n<blockquote>\n<p>这是一个不稳定的 Deno 特性。\n更多信息请查阅 <a href="stability.html">稳定性</a></p>\n</blockquote>\n<p>默认情况下，<code>Deno</code> 命名空间在 worker 作用域中不可用。</p>\n<p>要想启用 <code>Deno</code> 命名空间，在创建新的 worker 时传递 <code>deno: true</code> 选项：</p>\n<p><strong>main.js</strong></p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">const</span> worker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name"><span class="token constant">URL</span></span><span class="token punctuation">(</span><span class="token string">"worker.js"</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>href<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">"module"</span><span class="token punctuation">,</span>\n  deno<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nworker<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span> filename<span class="token operator">:</span> <span class="token string">"./log.txt"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p><strong>worker.js</strong></p>\n<pre class="language-ts"><code class="language-ts">self<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> filename <span class="token punctuation">}</span> <span class="token operator">=</span> e<span class="token punctuation">.</span>data<span class="token punctuation">;</span>\n  <span class="token keyword">const</span> text <span class="token operator">=</span> <span class="token keyword">await</span> Deno<span class="token punctuation">.</span><span class="token function">readTextFile</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  self<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n<p><strong>log.txt</strong></p>\n<pre class="language-autoit"><code class="language-autoit">hello world\n</code></pre>\n<pre class="language-shell"><code class="language-shell">$ deno run --allow-read --unstable main.js\nhello world\n</code></pre>\n<p>当 <code>Deno</code> 命名空间在 worker 作用域中启用时，此 worker 继承创建者的权限（使用类似 <code>--allow-*</code> 的选项指定的权限）。</p>\n<p>我们计划提供 worker 权限的配置方法。</p>'
        } }),
    'head': React.createElement("link", { href: "/favicon.svg", rel: "icon", type: "image/svg+xml" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Worker"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>Deno 支持 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Worker/Worker">Web Worker API</a>.</p>\n<p>Worker 能够用来在多个线程中运行代码，<code>Worker</code> 的每个实例都会在一个单独的线程中运行，这个线程专属于它。</p>\n<p>目前，Deno 只支持 <code>module</code> 类型的 worker，因此在创建新的 worker 时必须传递 <code>type: &quot;module&quot;</code> 选项。</p>\n<p>目前，相对模块说明符 (Relative module specifiers) <a href="https://github.com/denoland/deno/issues/5216">尚不支持</a>。作为代替，您可以用 <code>URL</code> 构造函数和 <code>import.meta.url</code> 来为附近的脚本创建说明符。</p>\n<pre class="language-ts"><code class="language-ts"><span class="token comment">// Good</span>\n<span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name"><span class="token constant">URL</span></span><span class="token punctuation">(</span><span class="token string">"worker.js"</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>href<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">"module"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Bad</span>\n<span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name"><span class="token constant">URL</span></span><span class="token punctuation">(</span><span class="token string">"worker.js"</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name"><span class="token constant">URL</span></span><span class="token punctuation">(</span><span class="token string">"worker.js"</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>href<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">"classic"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span><span class="token string">"./worker.js"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">"module"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="%E6%9D%83%E9%99%90">权限<a class="anchor" href="#%E6%9D%83%E9%99%90">§</a></h2>\n<p>创建一个新的 <code>Worker</code> 实例的行为与动态导入类似，因此 Deno 需要适当的权限来做这个操作。</p>\n<p>对于使用本地模块的 worker，Deno 需要读取 (<code>--allow-read</code>) 权限：</p>\n<p><strong>main.ts</strong></p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name"><span class="token constant">URL</span></span><span class="token punctuation">(</span><span class="token string">"worker.ts"</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>href<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">"module"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p><strong>worker.ts</strong></p>\n<pre class="language-ts"><code class="language-ts"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"hello world"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nself<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<pre class="language-shell"><code class="language-shell">$ deno run main.ts\nerror: Uncaught PermissionDenied: <span class="token builtin class-name">read</span> access to <span class="token string">"./worker.ts"</span>, run again with the --allow-read flag\n\n$ deno run --allow-read main.ts\nhello world\n</code></pre>\n<p>对于使用远程模块的 worker，Deno 需要网络 (<code>--allow-net</code>) 权限：</p>\n<p><strong>main.ts</strong></p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span><span class="token string">"<a class="token url-link" href="https://example.com/worker.ts">https://example.com/worker.ts</a>"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">"module"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p><strong>worker.ts</strong></p>\n<pre class="language-ts"><code class="language-ts"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"hello world"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nself<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<pre class="language-shell"><code class="language-shell">$ deno run main.ts\nerror: Uncaught PermissionDenied: net access to <span class="token string">"<a class="token url-link" href="https://example.com/worker.ts">https://example.com/worker.ts</a>"</span>, run again with the --allow-net flag\n\n$ deno run --allow-net main.ts\nhello world\n</code></pre>\n<h2 id="%E5%9C%A8-worker-%E4%B8%AD%E4%BD%BF%E7%94%A8-deno">在 Worker 中使用 Deno<a class="anchor" href="#%E5%9C%A8-worker-%E4%B8%AD%E4%BD%BF%E7%94%A8-deno">§</a></h2>\n<blockquote>\n<p>这是一个不稳定的 Deno 特性。\n更多信息请查阅 <a href="stability.html">稳定性</a></p>\n</blockquote>\n<p>默认情况下，<code>Deno</code> 命名空间在 worker 作用域中不可用。</p>\n<p>要想启用 <code>Deno</code> 命名空间，在创建新的 worker 时传递 <code>deno: true</code> 选项：</p>\n<p><strong>main.js</strong></p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">const</span> worker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name"><span class="token constant">URL</span></span><span class="token punctuation">(</span><span class="token string">"worker.js"</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>href<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">"module"</span><span class="token punctuation">,</span>\n  deno<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nworker<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span> filename<span class="token operator">:</span> <span class="token string">"./log.txt"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p><strong>worker.js</strong></p>\n<pre class="language-ts"><code class="language-ts">self<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> filename <span class="token punctuation">}</span> <span class="token operator">=</span> e<span class="token punctuation">.</span>data<span class="token punctuation">;</span>\n  <span class="token keyword">const</span> text <span class="token operator">=</span> <span class="token keyword">await</span> Deno<span class="token punctuation">.</span><span class="token function">readTextFile</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  self<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n<p><strong>log.txt</strong></p>\n<pre class="language-autoit"><code class="language-autoit">hello world\n</code></pre>\n<pre class="language-shell"><code class="language-shell">$ deno run --allow-read --unstable main.js\nhello world\n</code></pre>\n<p>当 <code>Deno</code> 命名空间在 worker 作用域中启用时，此 worker 继承创建者的权限（使用类似 <code>--allow-*</code> 的选项指定的权限）。</p>\n<p>我们计划提供 worker 权限的配置方法。</p>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E6%9D%83%E9%99%90">权限</a></li><li><a href="#%E5%9C%A8-worker-%E4%B8%AD%E4%BD%BF%E7%94%A8-deno">在 Worker 中使用 Deno</a></li></ol></nav>'
        } }),
    'author': "迷渡",
    'contributors': [
        "迷渡"
    ],
    'date': "2020-11-12T01:44:32.000Z",
    'updated': null,
    'excerpt': "Deno 支持 Web Worker API. Worker 能够用来在多个线程中运行代码，Worker 的每个实例都会在一个单独的线程中运行，这个线程专属于它。 目前，Deno 只支持 module 类型的 worker，因此在创建新的 worker 时必须传递 type: \"mod...",
    'cover': undefined,
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
