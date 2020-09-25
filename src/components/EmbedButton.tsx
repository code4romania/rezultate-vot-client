import React, { ReactNode, useCallback } from "react";
import { useLocation } from "react-router-dom";

import embedImage from "../assets/embed.png";
import { copyEmbedCode, makeEmbedCode } from "../functions/embed";
import { useCompleteScopeFromSearch } from "../functions/urlState";
import classes from "./EmbedButton.module.scss";
import { useToast } from "./toast/withToastProvider";

export const EmbedButtonWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={classes.wrapper}>{children}</div>;
};

export const EmbedButton: React.FC<{ path: string }> = ({ path }) => {
  const toast = useToast();
  const location = useLocation();
  const scope = useCompleteScopeFromSearch();

  const onCopyEmbedCode = useCallback(() => {
    if (!scope) return;
    copyEmbedCode(toast, makeEmbedCode(path, scope));
  }, [scope, path, toast]);

  // if already embedded hide the button
  if (location.pathname.indexOf("/embed") !== -1) {
    return null;
  }

  // if the scope is incomplete, hide the button
  if (!scope) {
    return null;
  }

  return (
    <button type="button" title="Copiază cod de embed" className={classes.embedBtn} onClick={onCopyEmbedCode}>
      <img src={embedImage} alt="embed" className="fab-icon" />
    </button>
  );
};
