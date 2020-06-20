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
    'pagePath': "contributing/development_tools.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "contributing/development_tools.html",
    'title': "测试和工具",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>测试和工具</h1>\n<h2 id="%E6%B5%8B%E8%AF%95">测试<a class="anchor" href="#%E6%B5%8B%E8%AF%95">§</a></h2>\n<p>测试 <code>deno</code>:</p>\n<pre class="language-shell"><code class="language-shell"><span class="token comment"># 运行所有测试套件：</span>\ncargo <span class="token builtin class-name">test</span>\n\n<span class="token comment"># 只测试 cli/js/：</span>\ncargo <span class="token builtin class-name">test</span> js_unit_tests\n</code></pre>\n<p>测试 <code>std/</code>:</p>\n<pre class="language-shell"><code class="language-shell">cargo <span class="token builtin class-name">test</span> std_tests\n</code></pre>\n<h2 id="%E4%BB%A3%E7%A0%81%E6%A3%80%E6%9F%A5%E4%B8%8E%E6%A0%BC%E5%BC%8F%E5%8C%96">代码检查与格式化<a class="anchor" href="#%E4%BB%A3%E7%A0%81%E6%A3%80%E6%9F%A5%E4%B8%8E%E6%A0%BC%E5%BC%8F%E5%8C%96">§</a></h2>\n<p>检查</p>\n<pre class="language-shell"><code class="language-shell">./tools/lint.py\n</code></pre>\n<p>格式化</p>\n<pre class="language-shell"><code class="language-shell">./tools/format.py\n</code></pre>\n<h2 id="%E6%80%A7%E8%83%BD%E5%88%86%E6%9E%90">性能分析<a class="anchor" href="#%E6%80%A7%E8%83%BD%E5%88%86%E6%9E%90">§</a></h2>\n<pre class="language-autoit"><code class="language-autoit"># 确认我们正在构建发布版 <span class="token punctuation">(</span>release<span class="token punctuation">)</span>。\n# 构建 deno 和 V8 的 d8。\nninja <span class="token operator">-</span>C target<span class="token operator">/</span>release d8\n\n# 使用 <span class="token operator">-</span><span class="token operator">-</span>prof 选项运行想要分析的程序。\n<span class="token punctuation">.</span><span class="token operator">/</span>target<span class="token operator">/</span>release<span class="token operator">/</span>deno run tests<span class="token operator">/</span>http_bench<span class="token punctuation">.</span>ts <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>net <span class="token operator">-</span><span class="token operator">-</span>v8<span class="token operator">-</span>flags<span class="token operator">=</span><span class="token operator">-</span><span class="token operator">-</span>prof <span class="token operator">&amp;</span>\n\n# 施加压力。\nthird_party<span class="token operator">/</span>wrk<span class="token operator">/</span>linux<span class="token operator">/</span>wrk http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token punctuation">:</span><span class="token number">4500</span><span class="token operator">/</span>\nkill `pgrep deno`\n</code></pre>\n<p>V8 将在当前目录写入一个文件，像这样 <code>isolate-0x7fad98242400-v8.log</code>。查看这个文件：</p>\n<pre class="language-autoit"><code class="language-autoit">D8_PATH<span class="token operator">=</span>target<span class="token operator">/</span>release<span class="token operator">/</span> <span class="token punctuation">.</span><span class="token operator">/</span>third_party<span class="token operator">/</span>v8<span class="token operator">/</span>tools<span class="token operator">/</span>linux<span class="token operator">-</span>tick<span class="token operator">-</span>processor\nisolate<span class="token operator">-</span><span class="token number">0x7fad98242400</span><span class="token operator">-</span>v8<span class="token punctuation">.</span>log <span class="token operator">></span> prof<span class="token punctuation">.</span>log\n# 在 macOS 上<span class="token punctuation">,</span> 使用 <span class="token punctuation">.</span><span class="token operator">/</span>third_party<span class="token operator">/</span>v8<span class="token operator">/</span>tools<span class="token operator">/</span>mac<span class="token operator">-</span>tick<span class="token operator">-</span>processor\n</code></pre>\n<p><code>prof.log</code> 将包含不用调用的 tick 分布。</p>\n<p>用 Web UI 查看这个日志，先生成 JSON 文件：</p>\n<pre class="language-autoit"><code class="language-autoit">D8_PATH<span class="token operator">=</span>target<span class="token operator">/</span>release<span class="token operator">/</span> <span class="token punctuation">.</span><span class="token operator">/</span>third_party<span class="token operator">/</span>v8<span class="token operator">/</span>tools<span class="token operator">/</span>linux<span class="token operator">-</span>tick<span class="token operator">-</span>processor\nisolate<span class="token operator">-</span><span class="token number">0x7fad98242400</span><span class="token operator">-</span>v8<span class="token punctuation">.</span>log <span class="token operator">-</span><span class="token operator">-</span>preprocess <span class="token operator">></span> prof<span class="token punctuation">.</span>json\n</code></pre>\n<p>在您的浏览器中打开 <code>third_party/v8/tools/profview/index.html</code>，选择 <code>prof.json</code> 以查看分布图。</p>\n<p>在性能分析时有用的 V8 选项：</p>\n<ul>\n<li>--prof</li>\n<li>--log-internal-timer-events</li>\n<li>--log-timer-events</li>\n<li>--track-gc</li>\n<li>--log-source-code</li>\n<li>--track-gc-object-stats</li>\n</ul>\n<p>有关 <code>d8</code> 和性能分析的更多信息，请查阅以下链接：</p>\n<ul>\n<li><a href="https://v8.dev/docs/d8">https://v8.dev/docs/d8</a></li>\n<li><a href="https://v8.dev/docs/profile">https://v8.dev/docs/profile</a></li>\n</ul>\n<h2 id="%E4%BD%BF%E7%94%A8-lldb-%E8%B0%83%E8%AF%95">使用 LLDB 调试<a class="anchor" href="#%E4%BD%BF%E7%94%A8-lldb-%E8%B0%83%E8%AF%95">§</a></h2>\n<h2 id="debugging-with-lldb">Debugging with LLDB<a class="anchor" href="#debugging-with-lldb">§</a></h2>\n<pre class="language-shell"><code class="language-shell">$ lldb -- target/debug/deno run tests/worker.js\n<span class="token operator">></span> run\n<span class="token operator">></span> bt\n<span class="token operator">></span> up\n<span class="token operator">></span> up\n<span class="token operator">></span> l\n</code></pre>\n<p>调试 Rust 代码，可以用 <code>rust-lldb</code>。</p>\n<pre class="language-shell"><code class="language-shell">$ rust-lldb -- ./target/debug/deno run --allow-net tests/http_bench.ts\n<span class="token comment"># 在 macOS 上，您可能看到像这样的警告：</span>\n<span class="token comment"># `ImportError: cannot import name _remove_dead_weakref`</span>\n<span class="token comment"># 在这种情况下，设置 PATH 以使用系统 python，例如</span>\n<span class="token comment"># PATH=/System/Library/Frameworks/Python.framework/Versions/2.7/bin:$PATH</span>\n<span class="token punctuation">(</span>lldb<span class="token punctuation">)</span> <span class="token builtin class-name">command</span> script <span class="token function">import</span> <span class="token string">"/Users/kevinqian/.rustup/toolchains/1.36.0-x86_64-apple-darwin/lib/rustlib/etc/lldb_rust_formatters.py"</span>\n<span class="token punctuation">(</span>lldb<span class="token punctuation">)</span> <span class="token builtin class-name">type</span> summary <span class="token function">add</span> --no-value --python-function lldb_rust_formatters.print_val -x <span class="token string">".*"</span> --category Rust\n<span class="token punctuation">(</span>lldb<span class="token punctuation">)</span> <span class="token builtin class-name">type</span> category <span class="token builtin class-name">enable</span> Rust\n<span class="token punctuation">(</span>lldb<span class="token punctuation">)</span> target create <span class="token string">"../deno/target/debug/deno"</span>\nCurrent executable <span class="token builtin class-name">set</span> to <span class="token string">\'../deno/target/debug/deno\'</span> <span class="token punctuation">(</span>x86_64<span class="token punctuation">)</span>.\n<span class="token punctuation">(</span>lldb<span class="token punctuation">)</span> settings <span class="token builtin class-name">set</span> -- target.run-args  <span class="token string">"tests/http_bench.ts"</span> <span class="token string">"--allow-net"</span>\n<span class="token punctuation">(</span>lldb<span class="token punctuation">)</span> b op_start\n<span class="token punctuation">(</span>lldb<span class="token punctuation">)</span> r\n</code></pre>\n<h2 id="v8-%E9%80%89%E9%A1%B9">V8 选项<a class="anchor" href="#v8-%E9%80%89%E9%A1%B9">§</a></h2>\n<p>V8 有很多内部的命令行选项。</p>\n<pre class="language-shell"><code class="language-shell"><span class="token comment"># 列出可用的 V8 选项</span>\n$ deno --v8-flags<span class="token operator">=</span>--help\n\n<span class="token comment"># 使用多个选项的示例</span>\n$ deno --v8-flags<span class="token operator">=</span>--expose-gc,--use-strict\n</code></pre>\n<p>特别有用的：</p>\n<pre class="language-autoit"><code class="language-autoit"><span class="token operator">-</span><span class="token operator">-</span>async<span class="token operator">-</span>stack<span class="token operator">-</span>trace\n</code></pre>\n<h2 id="%E6%8C%81%E7%BB%AD%E7%9A%84%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95">持续的性能测试<a class="anchor" href="#%E6%8C%81%E7%BB%AD%E7%9A%84%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95">§</a></h2>\n<p>参考我们的测试 <a href="https://deno.land/benchmarks">https://deno.land/benchmarks</a></p>\n<p>测试图表假设 <a href="https://github.com/denoland/benchmark_data/blob/gh-pages/data.json">https://github.com/denoland/benchmark_data/blob/gh-pages/data.json</a> 有着 <code>BenchmarkData[]</code> 类型。以下是 <code>BenchmarkData</code> 的定义：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name"><span class="token maybe-class-name">ExecTimeData</span></span> <span class="token punctuation">{</span>\n  mean<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  stddev<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  user<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  system<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  min<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  max<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">interface</span> <span class="token class-name"><span class="token maybe-class-name">BenchmarkData</span></span> <span class="token punctuation">{</span>\n  created_at<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  sha1<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  benchmark<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token maybe-class-name">ExecTimeData</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  binarySizeData<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  threadCountData<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  syscallCountData<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/main.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E6%B5%8B%E8%AF%95">测试</a></li><li><a href="#%E4%BB%A3%E7%A0%81%E6%A3%80%E6%9F%A5%E4%B8%8E%E6%A0%BC%E5%BC%8F%E5%8C%96">代码检查与格式化</a></li><li><a href="#%E6%80%A7%E8%83%BD%E5%88%86%E6%9E%90">性能分析</a></li><li><a href="#%E4%BD%BF%E7%94%A8-lldb-%E8%B0%83%E8%AF%95">使用 LLDB 调试</a></li><li><a href="#debugging-with-lldb">Debugging with LLDB</a></li><li><a href="#v8-%E9%80%89%E9%A1%B9">V8 选项</a></li><li><a href="#%E6%8C%81%E7%BB%AD%E7%9A%84%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95">持续的性能测试</a></li></ol></nav>'
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
