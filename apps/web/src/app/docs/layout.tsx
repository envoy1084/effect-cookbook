import { DocsLayout } from "fumadocs-ui/layouts/docs";

import { baseOptions } from "@/lib/fumadocs";
import { source } from "@/lib/source";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <DocsLayout tree={source.pageTree} {...baseOptions()}>
      {children}
    </DocsLayout>
  );
}
