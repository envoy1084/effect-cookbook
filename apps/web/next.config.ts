import type { NextConfig } from "next";
import "./src/env";

import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

const config: NextConfig = {
  serverExternalPackages: ["typescript", "twoslash"],
  typedRoutes: true,
};

export default withMDX(config);
