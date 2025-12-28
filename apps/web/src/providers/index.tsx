import type { PropsWithChildren } from "react";

import { RootProvider } from "fumadocs-ui/provider/next";

export const ProviderTree = ({ children }: PropsWithChildren) => {
  return <RootProvider>{children}</RootProvider>;
};
