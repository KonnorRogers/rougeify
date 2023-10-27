import "$styles/index.css"
// import "$styles/syntax-highlighting.css"

// Import all JavaScript & CSS files from src/_components
// import components from "$components/**/*.{js,jsx,js.rb,css}"

console.info("Bridgetown is loaded!")


import Prism from 'prismjs';
// import loadLanguages from 'prismjs/components/index.js';
// loadLanguages(['ruby', 'javascript', 'markup']);
import ruby from "prismjs/components/prism-ruby.min.js"

Prism.languages["ruby"] = ruby

document.querySelectorAll("pre[class*='language-']").forEach((element) => {
  const language = element.getAttribute("class").split("language-")[1]
  element.innerHTML = Prism.highlight(
    element.textContent,
    Prism.languages[language],
    language
  );
})
import { PRISM_TO_ROUGE_SCHEMA } from "./prism-to-rouge-schema.js"
import { ROUGE_SCHEMA } from "./rouge-schema.js"

const rouge_textarea = document.querySelector("#rouge-textarea")
const rouge_stylesheet = document.querySelector("#rouge-stylesheet")
const prism_textarea = document.querySelector("#prism-textarea")
const prism_stylesheet = document.querySelector("#prism-stylesheet")

function readText () {
  let css = prism_textarea.innerHTML

  // pre[class*="language-"] -> pre.highlight
  // code[class*="language-"] -> code.highlight
  css = css.replaceAll(/(\w+)\[class\*=["']language-["']\]/g, "$1.highlight")

  Object.entries(PRISM_TO_ROUGE_SCHEMA).forEach(([prismTokenName, rougeTokens]) => {
    const rougeSelectors = rougeTokens.map((key) => {
      return ROUGE_SCHEMA[key].selector
    })

    if (rougeSelectors?.length > 0) {
      css = css.replaceAll(new RegExp(`\\.token\\.${prismTokenName}\([\\s\\n\\r,]\)`, "mg"), `.highlight :is(${rougeSelectors.join(", ")}) /** ${PRISM_TO_ROUGE_SCHEMA[prismTokenName].join(", ")} */ $1`)
    }
  })

  rouge_textarea.value = css
  updateRougeStylesheet()
}

function updateRougeStylesheet () {
  rouge_stylesheet.innerText = rouge_textarea.value
}

function updatePrismStylesheet () {
  prism_stylesheet.innerText = prism_textarea.value
}

rouge_textarea.addEventListener("input", updateRougeStylesheet)
prism_textarea.addEventListener("input", updatePrismStylesheet)

document.querySelector("#prism-to-rouge").addEventListener("click", readText)

document.querySelectorAll("pre").forEach((pre) => pre.tabIndex = "0")

updatePrismStylesheet()
