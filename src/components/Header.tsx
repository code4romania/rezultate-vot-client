import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import classes from "./Header.module.scss";
import { Logo } from "./Logo";
import { ReactComponent as CommitGlobalLogo } from "../assets/commit-global-logo.svg";
import { ReactComponent as HamburgerMenu } from "../assets/hamburger-button.svg";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const handleDocumentClick = (event: { target: any }) => {
    // @ts-ignore
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleDocumentClick);
    } else {
      document.removeEventListener("click", handleDocumentClick);
    }
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isOpen]);

  return (
    <>
      <div className={classes.brandingStrip}>
        <a href="https://www.commitglobal.org" target="_blank" rel="noreferrer noopener">
          <CommitGlobalLogo className={classes.commitGlobalLogo} />
          <span>O soluție Commit Global.</span>
        </a>
      </div>
      <div className={classes.root}>
        <Logo className={classes.logo} homeLink />
        <div className={classes.separator} />
        <NavLink to="/elections" className={classes.navLink} activeClassName={classes.navLinkActive}>
          Date alegeri
        </NavLink>
        <NavHashLink to="/elections#live-newsfeed" className={classes.navLink} activeClassName={classes.navLinkActive}>
          Live newsfeed
        </NavHashLink>
        <NavLink to="/about" exact className={classes.navLink} activeClassName={classes.navLinkActive}>
          Despre proiect
        </NavLink>
        <a href="https://code4.ro/ro/doneaza/" target="_blank" rel="noreferrer noopener" className={classes.navLink}>
          <button type="button" className={classes.donateButton}>
            Donează
          </button>
        </a>
      </div>

      <div className={`${classes.root} ${classes.hamburgerMenu}`}>
        <Logo className={classes.logo} homeLink />
        <div className={classes.separator} />
        <div className={classes.dropdown}>
          <button ref={dropdownRef} onClick={() => setIsOpen(!isOpen)} type="button" className={classes.dropdownButton}>
            <HamburgerMenu />
          </button>
          <div className={`${classes.dropdownOptions} ${isOpen ? classes.open : classes.closed}`}>
            <NavLink to="/elections" className={classes.navLink} activeClassName={classes.navLinkActive}>
              Date alegeri
            </NavLink>
            <NavHashLink
              to="/elections#live-newsfeed"
              className={classes.navLink}
              activeClassName={classes.navLinkActive}
            >
              Live newsfeed
            </NavHashLink>
            <NavLink to="/about" exact className={classes.navLink} activeClassName={classes.navLinkActive}>
              Despre proiect
            </NavLink>
            <a
              href="https://code4.ro/ro/doneaza/"
              target="_blank"
              rel="noreferrer noopener"
              className={classes.navLink}
            >
              <button type="button" className={classes.donateButton}>
                Donează
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className={classes.contentPadding} />
    </>
  );
};
