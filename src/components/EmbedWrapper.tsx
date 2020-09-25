import { DevelopedBy } from "@code4ro/taskforce-fe-components/dist";
import "@code4ro/taskforce-fe-components/dist/index.css";
import React, { ReactNode } from "react";
import { withToastProvider } from "./toast/withToastProvider";
import classes from "./EmbedWrapper.module.scss";
import { ReactComponent as Logo } from "../assets/logo.svg";

export const EmbedWrapper: React.FC<{ children: ReactNode }> = withToastProvider(
  ({ children }: { children: ReactNode }) => (
    <>
      {children}
      <div className={classes.footer}>
        <Logo className={classes.logo} />
        <DevelopedBy showPartners={false} />
      </div>
    </>
  ),
);
