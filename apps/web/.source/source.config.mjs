// source.config.ts
import { rehypeCodeDefaultOptions } from "fumadocs-core/mdx-plugins";
import { defineConfig, defineDocs } from "fumadocs-mdx/config";
import { transformerTwoslash } from "fumadocs-twoslash";
import { createFileSystemTypesCache } from "fumadocs-twoslash/cache-fs";

transformerTwoslash({
  typesCache: createFileSystemTypesCache(),
});
var docs = defineDocs({
  dir: "content/docs",
});
var source_config_default = defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      langs: ["ts", "tsx", "js", "jsx", "rs", "solidity"],
      themes: {
        dark: "github-dark",
        light: "github-light",
      },
      transformers: [
        ...(rehypeCodeDefaultOptions.transformers ?? []),
        transformerTwoslash(),
      ],
    },
  },
});
export { source_config_default as default, docs };
