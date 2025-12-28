// @ts-nocheck
import { browser } from "fumadocs-mdx/runtime/browser";

import type * as config from "../source.config";

const create = browser<
  typeof config,
  import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
    DocData: {};
  }
>();
const browserCollections = {
  docs: create.doc("docs", {
    "index.mdx": () => import("../content/docs/index.mdx?collection=docs"),
  }),
};
export default browserCollections;
