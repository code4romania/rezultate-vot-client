import { electionScopeIsComplete } from "@code4ro/reusable-components";
import React, { useCallback, useMemo } from "react";
import { useLocation } from "react-router-dom";

import embedImage from "../assets/embed.png";
import { prependQuestionMark, scopeFromSearch, searchFromScope } from "../functions/urlState";
import classes from "./EmbedButton.module.scss";
import { useToast } from "./toast/withToastProvider";

export const EmbedButton: React.FC<{ path: string }> = ({ path }) => {
  const toast = useToast();
  const location = useLocation();
  const scope = useMemo(() => electionScopeIsComplete(scopeFromSearch(location.search))?.complete, [location.search]);

  const onCopyEmbedCode = useCallback(() => {
    if (!scope) return;

    const auxiliaryField = document.createElement("textarea");
    const url = new URL(`/embed/${path}`, window.location.origin);
    url.search = prependQuestionMark(searchFromScope(scope));

    auxiliaryField.innerText = `<iframe scrolling="no" width="100%" height="600" style="border:0" src="${url.href}"></iframe>`;

    document.body.appendChild(auxiliaryField);
    auxiliaryField.select();
    document.execCommand("copy");

    auxiliaryField.remove();
    toast.add("Codul de embed a fost copiat în clipboard");
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
