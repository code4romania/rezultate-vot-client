import React from "react";
import { ReactComponent as ProjectLogo } from "../assets/logo.svg";
import { ReactComponent as Code4Logo } from "../assets/code4romania.svg";
import classes from "./Logo.module.scss";

interface Props {
  className?: string;
  homeLink?: boolean;
  ongLink?: boolean;
}

export const Logo: React.FC<Props> = ({className, homeLink, ongLink}: Props) => {
  return (
    <div className={[classes.logo, className].join(' ')}>
      <a className={classes.projectLogo} href={homeLink ? "/" : undefined}>
        <ProjectLogo />
      </a>
      <div className={classes.code4Logo}>
        by
        <a target="_blank" rel="noopener noreferrer" href={ongLink ? "https://code4.ro" : undefined}>
          <Code4Logo />
        </a>
      </div>
    </div>
  )
}
