import React, { ReactNode } from "react";
import { withToastProvider } from "./toast/withToastProvider";
import classes from "./EmbedWrapper.module.scss";
import { Logo } from "./Logo";

export const EmbedWrapper: React.FC<{ children: ReactNode }> = withToastProvider(
  ({ children }: { children: ReactNode }) => (
    <>
      {children}
      <div className={classes.footer}>
        <Logo className={classes.logo} />
        <div className={classes.buttonWrap}>
          <a className={classes.button} target="_blank" rel="noopener noreferrer" href="https://code4.ro/ro/doneaza/">
            Doneaza
          </a>
        </div>
      </div>
    </>
  ),
);
