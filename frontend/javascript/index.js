import "$styles/index.css"
import "$styles/syntax-highlighting.css"

// Import all JavaScript & CSS files from src/_components
import components from "$components/**/*.{js,jsx,js.rb,css}"

console.info("Bridgetown is loaded!")

import { PRISM_TO_ROUGE_SCHEMA } from "./prism-to-rouge-schema.js"
import { ROUGE_SCHEMA } from "./rouge-schema.js"

function readText () {
  let css = document.querySelector("#prism-stylesheet").innerHTML
  // const styleSheet = new CSSStyleSheet();

  Object.entries(PRISM_TO_ROUGE_SCHEMA).forEach(([prismTokenName, rougeTokens]) => {
    const rougeSelectors = rougeTokens.map((key) => {
      return ROUGE_SCHEMA[key].selector
    })

    if (rougeSelectors?.length > 0) {
      css = css.replaceAll(new RegExp(`\\.token\\.${prismTokenName}\([\\s\\n\\r,]\)`, "mg"), `.highlight :is(${rougeSelectors.join(", ")}) /** ${PRISM_TO_ROUGE_SCHEMA[prismTokenName].join(", ")} */ $1`)
    }
  })

  document.querySelector("#rouge-stylesheet").innerHTML = css
}

document.querySelector("#prism-to-rouge").addEventListener("click", readText)
// console.log(readText())
