import React, { ReactNode } from "react";
import { withToastProvider } from "./toast/withToastProvider";
import classes from "./EmbedWrapper.module.scss";
import { ReactComponent as ProjectLogo } from "../assets/logo.svg";
import { ReactComponent as Code4Logo } from "../assets/code4romania.svg";

export const EmbedWrapper: React.FC<{ children: ReactNode }> = withToastProvider(
  ({ children }: { children: ReactNode }) => (
    <>
      {children}
      <div className={classes.footer}>
        <ProjectLogo />
        <div className={classes.code4Logo}>
          by
          <a target="_blank" rel="noopener noreferrer" href="https://code4.ro">
            <Code4Logo />
          </a>
        </div>

        <a className={classes.button} target="_blank" rel="noopener noreferrer" href="https://code4.ro/ro/doneaza/">
          Doneaza
        </a>
      </div>
    </>
  ),
);
