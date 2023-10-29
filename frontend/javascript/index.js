import "$styles/index.css"
// import "$styles/syntax-highlighting.css"

// Import all JavaScript & CSS files from src/_components
// import components from "$components/**/*.{js,jsx,js.rb,css}"

import Prism from 'prismjs';
import "prismjs/components/prism-ruby.js"

import { PRISM_TO_ROUGE_SCHEMA } from "./prism-to-rouge-schema.js"
import { ROUGE_SCHEMA } from "./rouge-schema.js"


;(() => {
Prism.manual = true;
  document.querySelectorAll(":not(.highlighter-rouge) code[class*='language-']").forEach((element) => {
    Prism.highlightElement(element);
  })

  const rouge_textarea = document.querySelector("#rouge-textarea")
  const rouge_stylesheet = document.querySelector("#rouge-stylesheet")
  const prism_textarea = document.querySelector("#prism-textarea")
  const prism_stylesheet = document.querySelector("#prism-stylesheet")

  function convertPrismToRouge () {
    let css = prism_textarea.value

    // pre[class*="language-"] -> pre.highlight
    // code[class*="language-"] -> code.highlight
    css = css.replaceAll(/(\w+)\[class\*=["']language-["']\]/g, "$1.highlight")

    Object.entries(PRISM_TO_ROUGE_SCHEMA).forEach(([prismTokenName, rougeTokens]) => {
      const rougeSelectors = rougeTokens.map((key) => {
        return ROUGE_SCHEMA[key].selector
      })

      if (rougeSelectors?.length > 0) {
        css = css.replaceAll(new RegExp(`\\.token\\.${prismTokenName}\([\\s\\n\\r,]\)`, "mg"), `.highlight :is(${rougeSelectors.join(", ")}) /** ${prismTokenName} -> ${PRISM_TO_ROUGE_SCHEMA[prismTokenName].join(", ")} */ $1`)
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

  function handlePrismTextAreaInput () {
    updatePrismStylesheet()
    convertPrismToRouge()
  }

  rouge_textarea.addEventListener("input", updateRougeStylesheet)
  prism_textarea.addEventListener("input", handlePrismTextAreaInput)

  // document.querySelector("#prism-to-rouge").addEventListener("click", convertPrismToRouge)

  // Make code blocks scrollable with keyboard.
  document.querySelectorAll("pre").forEach((pre) => pre.tabIndex = "0")

  function handleThemeSelect (event) {
    const textarea_prefix = "prism-theme-content"
    const el_id = event.target.value

    const textarea = document.getElementById(textarea_prefix + "-" + el_id)

    prism_textarea.value = textarea.value

    updatePrismStylesheet()
    convertPrismToRouge()
  }

  document.querySelector("#prism-theme-selector").addEventListener("sl-change", handleThemeSelect)

  updatePrismStylesheet()
})()
