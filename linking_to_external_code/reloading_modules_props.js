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
    'pagePath': "linking_to_external_code/reloading_modules.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "linking_to_external_code/reloading_modules.html",
    'title': "重新加载特定的模块",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>重新加载特定的模块</h1>\n<p>默认情况下，缓存中的模块将被重用，而无需获取或重新编译它。有时这不是期望的行为，您可以强制 deno 重新下载模块并重新编译到缓存中。您可以使用 <code>deno cache</code> 子命令的<code>--reload</code> 选项来使本地 <code>DENO_DIR</code> 缓存无效。</p>\n<p>其用法描述如下：</p>\n<h2 id="%E9%87%8D%E6%96%B0%E5%8A%A0%E8%BD%BD%E6%89%80%E6%9C%89%E5%86%85%E5%AE%B9">重新加载所有内容<a class="anchor" href="#%E9%87%8D%E6%96%B0%E5%8A%A0%E8%BD%BD%E6%89%80%E6%9C%89%E5%86%85%E5%AE%B9">§</a></h2>\n<pre class="language-ts"><code class="language-ts">deno cache <span class="token operator">--</span>reload my_module<span class="token punctuation">.</span><span class="token property-access">ts</span>\n</code></pre>\n<h2 id="%E9%87%8D%E6%96%B0%E5%8A%A0%E8%BD%BD%E6%8C%87%E5%AE%9A%E6%A8%A1%E5%9D%97">重新加载指定模块<a class="anchor" href="#%E9%87%8D%E6%96%B0%E5%8A%A0%E8%BD%BD%E6%8C%87%E5%AE%9A%E6%A8%A1%E5%9D%97">§</a></h2>\n<p>有时我们只想升级某些模块，可以通过将参数传递给 <code>--reload</code> 选项来控制它。</p>\n<p>重新加载所有 v0.55.0 的标准模块：</p>\n<pre class="language-ts"><code class="language-ts">deno cache <span class="token operator">--</span>reload<span class="token operator">=</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>deno<span class="token punctuation">.</span><span class="token property-access">land</span><span class="token operator">/</span>std@v0<span class="token punctuation">.</span><span class="token number">55.0</span> my_module<span class="token punctuation">.</span><span class="token property-access">ts</span>\n</code></pre>\n<p>为了重新加载特定的模块（在这个例子中是 colors 和 file system copy），需要使用逗号来分隔 URL：</p>\n<pre class="language-ts"><code class="language-ts">deno cache <span class="token operator">--</span>reload<span class="token operator">=</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>deno<span class="token punctuation">.</span><span class="token property-access">land</span><span class="token operator">/</span>std<span class="token operator">/</span>fs<span class="token operator">/</span>copy<span class="token punctuation">.</span><span class="token property-access">ts</span><span class="token punctuation">,</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>deno<span class="token punctuation">.</span><span class="token property-access">land</span><span class="token operator">/</span>std<span class="token operator">/</span>fmt<span class="token operator">/</span>colors<span class="token punctuation">.</span><span class="token property-access">ts</span> my_module<span class="token punctuation">.</span><span class="token property-access">ts</span>\n</code></pre>\n<!-- Should this be part of examples? -->\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/main.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E9%87%8D%E6%96%B0%E5%8A%A0%E8%BD%BD%E6%89%80%E6%9C%89%E5%86%85%E5%AE%B9">重新加载所有内容</a></li><li><a href="#%E9%87%8D%E6%96%B0%E5%8A%A0%E8%BD%BD%E6%8C%87%E5%AE%9A%E6%A8%A1%E5%9D%97">重新加载指定模块</a></li></ol></nav>'
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
