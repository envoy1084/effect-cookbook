// @ts-nocheck
import { dynamic } from "fumadocs-mdx/runtime/dynamic";

import * as config from "../source.config";

const create = await dynamic<
  typeof config,
  import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
    DocData: {};
  }
>(
  config,
  { configPath: "source.config.ts", environment: "next", outDir: ".source" },
  { doc: { passthroughs: ["extractedReferences"] } },
);
