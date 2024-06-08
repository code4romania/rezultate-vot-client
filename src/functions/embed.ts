import { ElectionScope } from "@code4romania/reusable-components";
import { prependQuestionMark, searchFromScope } from "./urlState";

export function makeEmbedCode(path: string, scope?: ElectionScope | null): string {
  const url = new URL(`/embed/${path}`, window.location.origin);
  if (scope) {
    url.search = prependQuestionMark(searchFromScope(scope));
  }

  return `
<script async src="https://www.googletagmanager.com/gtag/js?id=G-CX2LL7DLB3"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-CX2LL7DLB3');
</script>
<script src="${window.location.origin}/iframeResizer.min.js" async></script>
<iframe scrolling="no" width="100%" height="600" style="border:0" src="${url.href}" onload="(window.iFrameResize || function () { var q = window.__iframeResizerQueue || []; window.__iframeResizerQueue = q; q.push(arguments); })({}, this)"></iframe>`;
}

export function copyEmbedCode(toast: { add: (s: string) => void }, code: string): void {
  const auxiliaryField = document.createElement("textarea");
  auxiliaryField.innerText = code;

  document.body.appendChild(auxiliaryField);
  auxiliaryField.select();
  document.execCommand("copy");

  auxiliaryField.remove();
  toast.add("Codul de embed a fost copiat în clipboard");
}
