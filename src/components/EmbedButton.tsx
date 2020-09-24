import * as React from "react";

// import classes from "./EmbedButton.module.scss";

export const EmbedButton: React.FC<{ path: number }> = ({path}) => {
  const [inClipboard, setInClipboard] = React.useState(false);
  const footerHeight = 75;
  const getEmbeddableCode = `<iframe
            scrolling="no"
            src="${window.location.origin.toString()}/embed/${path}"
            width="${1000}"
            height="${1000 + footerHeight}"></iframe>`;

  const handleCopyEmbedCode = () => {
    const auxiliaryField = document.createElement("textarea");
    auxiliaryField.innerText = getEmbeddableCode.replace(/\s+(?=\s)/g, "");

    document.body.appendChild(auxiliaryField);
    auxiliaryField.select();
    document.execCommand("copy");

    auxiliaryField.remove();
    setInClipboard(true);
  };

  // if already embedded hide the button
  if (window.location.pathname.indexOf("/embed") !== -1) {
    return null;
  }

  return (
    <button onClick={handleCopyEmbedCode} type="button">
      {!inClipboard && 'Embed!'}
      {inClipboard && 'Embed code copied to clipboard'}
    </button>
  );
};
