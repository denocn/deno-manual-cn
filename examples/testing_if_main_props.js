import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "text": "文件系统事件",
        "link": "examples/file_system_events.html"
    },
    'next': null,
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
    'pagePath': "examples/testing_if_main.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "examples/testing_if_main.html",
    'title': "测试当前文件是否为主程序",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>测试当前文件是否为主程序</h1>\n<p>当前脚本作为主程序的标志是 <code>import.meta.main</code>。</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span><span class="token property-access">meta</span><span class="token punctuation">.</span><span class="token property-access">main</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"main"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': null
};