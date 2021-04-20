import * as _ from "underscore";

// TODO: make this configurable
const SE_BASE = "https://secondedition.io";

const TAG_NAME = "secondedition";

// Article, as formatted by Second Edition.
// TODO: date, location, markdown, etc.
export interface Article {
  html: string;
}

// High-level "all in one" helper intended for demos and testing.
// TODO: make async, and wait for all injections
export function fetchAndInjectAll(sanitiser = (s: string) => s) {
  _.forEach(document.getElementsByTagName(TAG_NAME), async (e) => {
    const q = e.attributes.getNamedItem("src").value;
    const article = await fetchFormattedArticle(q);

    // TODO: find a better way to replace elements
    const div = document.createElement("div");
    div.innerHTML = sanitiser(article.html);
    e.parentNode.replaceChild(div, e);
  });
}

// Low-level access to the JSON blob returned by Second Edition.
// Intended as a helper for fine-grained integrations, e.g. Gatsby.
export async function fetchFormattedArticle(q: string) {
  const req = await fetch(`${SE_BASE}/api/render?q=${q}`);
  return await req.json();
}
