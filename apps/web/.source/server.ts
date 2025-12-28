// @ts-nocheck

import { server } from "fumadocs-mdx/runtime/server";

import * as fdGlob0 from "../content/docs/index.mdx?collection=docs";
import type * as config from "../source.config";

const create = server<
  typeof config,
  import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
    DocData: {};
  }
>({ doc: { passthroughs: ["extractedReferences"] } });

export const docs = await create.docs(
  "docs",
  "content/docs",
  {},
  { "index.mdx": fdGlob0 },
);
