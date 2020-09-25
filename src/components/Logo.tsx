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

  const ongLinkProps: {href?: string} = {};
  const homeLinkProps: {href?: string} = {};

  if (ongLink) {
    ongLinkProps.href = "https://code4.ro";
  }

  if (homeLink) {
    homeLinkProps.href = "/";
  }

  return (
    <div className={[classes.logo, className].join(' ')}>
      <a className={classes.projectLogo} {...homeLinkProps}>
        <ProjectLogo />
      </a>
      <div className={classes.code4Logo}>
        by
        <a target="_blank" rel="noopener noreferrer" {...ongLinkProps}>
          <Code4Logo />
        </a>
      </div>
    </div>
  )
}
