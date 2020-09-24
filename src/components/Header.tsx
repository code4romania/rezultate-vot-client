import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.scss";
import { ReactComponent as Logo } from "../assets/logo.svg";

export const Header: React.FC = () => {
  return (
    <>
      <div className={classes.root}>
        <Logo className={classes.logo} />
        <div className={classes.separator} />
        <NavLink to="/elections" className={classes.navLink} activeClassName={classes.navLinkActive}>
          Istoric alegeri
        </NavLink>
        <NavLink to="/about" exact className={classes.navLink} activeClassName={classes.navLinkActive}>
          Despre noi
        </NavLink>
        <a href="https://code4.ro/ro/doneaza/" target="_blank" rel="noreferrer noopener" className={classes.navLink}>
          Donează
        </a>
      </div>
      <div className={classes.contentPadding} />
    </>
  );
};
