interface SidebarConfigItem {
  text?: string;
  link: string;
  children?: SidebarConfig;
}

type SidebarConfig = (SidebarConfigItem | string)[];

export const toc: SidebarConfig = [
  "README.md",
  "introduction.md",
  {
    link: "getting_started.md",
    children: [
      "getting_started/installation.md",
      "getting_started/setup_your_environment.md",
      "getting_started/first_steps.md",
      "getting_started/permissions.md",
      "getting_started/typescript.md",
      "getting_started/webassembly.md",
    ],
  },
  {
    link: "runtime.md",
    children: [
      "runtime/stability.md",
      "runtime/program_lifecycle.md",
      "runtime/compiler_apis.md",
      "runtime/workers.md",
    ],
  },
  {
    link: "linking_to_external_code.md",
    children: [
      "linking_to_external_code/reloading_modules.md",
      "linking_to_external_code/integrity_checking.md",
      "linking_to_external_code/proxies.md",
      "linking_to_external_code/import_maps.md",
    ],
  },
  {
    link: "standard_library.md",
    children: [
      "standard_library/name.md",
    ],
  },
  {
    link: "testing.md",
  },
  {
    link: "tools.md",
    children: [
      "tools/debugger.md",
      "tools/script_installer.md",
      "tools/formatter.md",
      "tools/bundler.md",
      "tools/documentation_generator.md",
      "tools/dependency_inspector.md",
    ],
  },
  {
    link: "embedding_deno.md",
  },
  {
    link: "contributing.md",
    children: [
      "contributing/building_from_source.md",
      "contributing/development_tools.md",
      "contributing/style_guide.md",
      "contributing/architecture.md",
    ],
  },
  {
    link: "examples.md",
    children: [
      "examples/unix_cat.md",
      "examples/file_server.md",
      "examples/tcp_echo.md",
      "examples/subprocess.md",
      "examples/permissions.md",
      "examples/os_signals.md",
      "examples/file_system_events.md",
      "examples/testing_if_main.md",
    ],
  },
];
