import * as React from "react";

import embedImage from "../assets/embed.png";
import classes from "./EmbedButton.module.scss";
import { useToast } from "./toast/withToastProvider";

export const EmbedButton: React.FC<{ path: string }> = ({ path }) => {
  const toast = useToast();
  const footerHeight = 75;
  const getEmbeddableCode = `<iframe
            scrolling="no"
            src="${window.location.origin.toString()}/embed/${path}"
            width="1000"
            height="${1000 + footerHeight}"></iframe>`;

  const handleCopyEmbedCode = () => {
    const auxiliaryField = document.createElement("textarea");
    auxiliaryField.innerText = getEmbeddableCode.replace(/\s+(?=\s)/g, "");

    document.body.appendChild(auxiliaryField);
    auxiliaryField.select();
    document.execCommand("copy");

    auxiliaryField.remove();
    toast.add("Codul de embed a fost copiat în clipboard");
  };

  // if already embedded hide the button
  if (window.location.pathname.indexOf("/embed") !== -1) {
    return null;
  }

  return (
    <button type="button" title="Copiază cod de embed" className={classes.embedBtn} onClick={handleCopyEmbedCode}>
      <img src={embedImage} alt="embed" className="fab-icon" />
    </button>
  );
};
