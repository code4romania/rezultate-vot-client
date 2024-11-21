import React from "react";
import { mergeClasses } from "@code4romania/reusable-components";
import classes from "./Banner.module.scss";

type Props = {
  className?: string | null;
};

export const Banner: React.FC<Props> = ({ className }: Props) => {
  return (
    <div className={mergeClasses(classes.root, className)}>
      <p>
        <b>
          <a href="https://rezultatevot.ro" target="_blank" rel="noopener noreferrer">
            &lt; Înapoi la rezultatele live de la alegerile prezidențiale și parlamentare.
          </a>
        </b>
      </p>
    </div>
  );
};

Banner.defaultProps = {
  className: null,
};
