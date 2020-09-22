import React from "react";
import { Ellipsis } from "react-spinners-css";
import classes from "./Loader.module.scss";

export const Loader: React.FC = () => {
  return (
    <div className={classes.root}>
      <Ellipsis color="#ffcc00" size={64} className={classes.root} />
    </div>
  );
};
