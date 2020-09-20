import { DivBody, mergeClasses } from "@code4ro/reusable-components";
import React from "react";
import classes from "./ErrorMessage.module.scss";

type Props = {
  error?: Error | null;
  sideMargins?: boolean;
};

export const ErrorMessage: React.FC<Props> = ({ error, sideMargins }) => {
  if (!error) {
    return null;
  }
  return (
    <div className={mergeClasses(classes.root, sideMargins && classes.sideMargins)}>
      <DivBody className={classes.title}>A intervenit o eroare:</DivBody>
      <DivBody className={classes.body}>{error.toString()}</DivBody>
    </div>
  );
};
