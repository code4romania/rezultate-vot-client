import React from "react";

import { EmbedButton } from "./EmbedButton";
import classes from "./NewsEmbedButton.module.scss";

export const NewsEmbedButton: React.FC<{ ballotId: number; newsItemId: number }> = ({ ballotId, newsItemId }) => {
  return <EmbedButton className={classes.button} path={`${ballotId}/news/${newsItemId}`} />;
};
