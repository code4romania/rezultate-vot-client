import React, { ReactNode } from "react";
import { withToastProvider } from "./toast/withToastProvider";

export const EmbedWrapper: React.FC<{ children: ReactNode }> = withToastProvider(
  ({ children }: { children: ReactNode }) => (
    <>
      {children}
      {/* TODO: Add some fancy code4ro footer here */}
    </>
  ),
);
