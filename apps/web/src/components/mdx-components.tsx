// biome-ignore lint/performance/noNamespaceImport: needed
import * as twoslash from "fumadocs-twoslash/ui";
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...twoslash,
    ...components,
  };
}
