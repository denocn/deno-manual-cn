# 依赖检查器

`deno info [URL]` 会列出 ES 模块和它的所有依赖。

```shell
deno info https://deno.land/std@0.52.0/http/file_server.ts
Download https://deno.land/std@0.52.0/http/file_server.ts
...
local: /Users/deno/Library/Caches/deno/deps/https/deno.land/5bd138988e9d20db1a436666628ffb3f7586934e0a2a9fe2a7b7bf4fb7f70b98
type: TypeScript
compiled: /Users/deno/Library/Caches/deno/gen/https/deno.land/std@0.52.0/http/file_server.ts.js
map: /Users/deno/Library/Caches/deno/gen/https/deno.land/std@0.52.0/http/file_server.ts.js.map
deps:
https://deno.land/std@0.52.0/http/file_server.ts
  ├─┬ https://deno.land/std@0.52.0/path/mod.ts
  │ ├─┬ https://deno.land/std@0.52.0/path/win32.ts
  │ │ ├── https://deno.land/std@0.52.0/path/_constants.ts
  │ │ ├─┬ https://deno.land/std@0.52.0/path/_util.ts
  │ │ │ └── https://deno.land/std@0.52.0/path/_constants.ts
  │ │ └─┬ https://deno.land/std@0.52.0/testing/asserts.ts
  │ │   ├── https://deno.land/std@0.52.0/fmt/colors.ts
  │ │   └── https://deno.land/std@0.52.0/testing/diff.ts
  │ ├─┬ https://deno.land/std@0.52.0/path/posix.ts
  │ │ ├── https://deno.land/std@0.52.0/path/_constants.ts
  │ │ └── https://deno.land/std@0.52.0/path/_util.ts
  │ ├─┬ https://deno.land/std@0.52.0/path/common.ts
  │ │ └── https://deno.land/std@0.52.0/path/separator.ts
  │ ├── https://deno.land/std@0.52.0/path/separator.ts
  │ ├── https://deno.land/std@0.52.0/path/interface.ts
  │ └─┬ https://deno.land/std@0.52.0/path/glob.ts
  │   ├── https://deno.land/std@0.52.0/path/separator.ts
  │   ├── https://deno.land/std@0.52.0/path/_globrex.ts
  │   ├── https://deno.land/std@0.52.0/path/mod.ts
  │   └── https://deno.land/std@0.52.0/testing/asserts.ts
  ├─┬ https://deno.land/std@0.52.0/http/server.ts
  │ ├── https://deno.land/std@0.52.0/encoding/utf8.ts
  │ ├─┬ https://deno.land/std@0.52.0/io/bufio.ts
  │ │ ├─┬ https://deno.land/std@0.52.0/io/util.ts
  │ │ │ ├── https://deno.land/std@0.52.0/path/mod.ts
  │ │ │ └── https://deno.land/std@0.52.0/encoding/utf8.ts
  │ │ └── https://deno.land/std@0.52.0/testing/asserts.ts
  │ ├── https://deno.land/std@0.52.0/testing/asserts.ts
  │ ├─┬ https://deno.land/std@0.52.0/async/mod.ts
  │ │ ├── https://deno.land/std@0.52.0/async/deferred.ts
  │ │ ├── https://deno.land/std@0.52.0/async/delay.ts
  │ │ └─┬ https://deno.land/std@0.52.0/async/mux_async_iterator.ts
  │ │   └── https://deno.land/std@0.52.0/async/deferred.ts
  │ └─┬ https://deno.land/std@0.52.0/http/_io.ts
  │   ├── https://deno.land/std@0.52.0/io/bufio.ts
  │   ├─┬ https://deno.land/std@0.52.0/textproto/mod.ts
  │   │ ├── https://deno.land/std@0.52.0/io/util.ts
  │   │ ├─┬ https://deno.land/std@0.52.0/bytes/mod.ts
  │   │ │ └── https://deno.land/std@0.52.0/io/util.ts
  │   │ └── https://deno.land/std@0.52.0/encoding/utf8.ts
  │   ├── https://deno.land/std@0.52.0/testing/asserts.ts
  │   ├── https://deno.land/std@0.52.0/encoding/utf8.ts
  │   ├── https://deno.land/std@0.52.0/http/server.ts
  │   └── https://deno.land/std@0.52.0/http/http_status.ts
  ├─┬ https://deno.land/std@0.52.0/flags/mod.ts
  │ └── https://deno.land/std@0.52.0/testing/asserts.ts
  └── https://deno.land/std@0.52.0/testing/asserts.ts
```

依赖检查器对本地或远程的任意 ES 模块都有效。

# 缓存位置

`deno info` 可以用来显示与缓存位置有关的信息：

```shell
deno info
DENO_DIR location: "/Users/deno/Library/Caches/deno"
Remote modules cache: "/Users/deno/Library/Caches/deno/deps"
TypeScript compiler cache: "/Users/deno/Library/Caches/deno/gen"
```
