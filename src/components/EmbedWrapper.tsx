import React, { ReactNode } from "react";
import { withToastProvider } from "./toast/withToastProvider";
import classes from "./EmbedWrapper.module.scss";
import { ReactComponent as ProjectLogo } from "../assets/logo.svg";
import { ReactComponent as Code4Logo } from "../assets/code4romania.svg";

export const EmbedWrapper: React.FC<{ children: ReactNode }> = withToastProvider(
  ({ children }: { children: ReactNode }) => (
    <>
      {children}
      <div className={classes.embeddedWidgetFooter}>
        <div className={classes.embeddedWidgetContainer}>
          <ProjectLogo className={classes.projectLogo} />
          <Code4Logo className={classes.code4Logo} />
          <div className={classes.buttonWrap}>
            <a className={classes.button} target="_blank" rel="noopener noreferrer" href="https://code4.ro/ro/doneaza/">
              Donează
            </a>
          </div>
        </div>
      </div>
    </>
  ),
);
