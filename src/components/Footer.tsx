import { Body, mergeClasses } from "@code4ro/reusable-components";
import { faFacebook, faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { ReactComponent as Code4RomaniaGray } from "../assets/code4romania-gray.svg";
import classes from "./Footer.module.scss";

const links = [
  {
    title: "Legal",
    href: "https://code4.ro/ro/legal/",
  },
  {
    title: "Codul de conduită",
    href: "https://code4.ro/ro/codul-de-conduita/",
  },
  {
    title: "Implică-te",
    href: "https://code4.ro/ro/implica-te/",
  },
  {
    title: "Donează",
    href: "https://code4.ro/ro/doneaza/",
    cta: true,
  },
];

const socialButtons = [
  {
    icon: faFacebook,
    href: "https://www.facebook.com/code4romania/",
  },
  {
    icon: faTwitter,
    href: "https://twitter.com/Code4Romania",
  },
  {
    icon: faGithub,
    href: "https://github.com/code4romania/",
  },
  {
    icon: faLinkedin,
    href: "https://www.linkedin.com/company/code4romania/",
  },
];

export const Footer: React.FC = () => (
  <div className={classes.root}>
    <Code4RomaniaGray className={classes.logo} />

    <div className={classes.links}>
      {links.map(({ href, title, cta }, index) => (
        <a
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          className={mergeClasses(classes.link, cta && classes.linkCta)}
          href={href}
          target="_blank"
          rel="noreferrer noopener"
        >
          {title}
        </a>
      ))}
    </div>

    <div className={classes.separator} />

    <div className={classes.socialButtons}>
      {socialButtons.map(({ href, icon }, index) => (
        <a
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          className={classes.socialButton}
          href={href}
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon icon={icon} />
        </a>
      ))}
    </div>

    <Body className={classes.disclaimer}>
      © 2019 Code for Romania.
      <br />
      Organizație neguvernamentală independentă, neafiliată politic și apolitică.
    </Body>
  </div>
);
