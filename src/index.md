---
layout: default
---

<style>
textarea {
  min-height: 80vh;
  width: 100%;
}
</style>

<button id="prism-to-rouge" style="margin-inline-start: auto; margin-inline-end: 40px; width: auto;">Convert</button>
<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); padding: 0 1rem; gap: 1rem;">
  <div>
    <label for="prism-stylesheet">Prism Stylesheet (VSCode Dark)</label>
    <textarea id="prism-stylesheet">
  pre[class*="language-"],
  code[class*="language-"] {
	  color: #d3d4d4;
	  font-size: 12px;
	  text-shadow: none;
	  font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace;
	  direction: ltr;
	  text-align: left;
	  white-space: pre;
	  word-spacing: normal;
	  word-break: normal;
	  line-height: 0.5;
	  -moz-tab-size: 3;
	  -o-tab-size: 3;
	  tab-size: 3;
	  -webkit-hyphens: none;
	  -moz-hyphens: none;
	  -ms-hyphens: none;
	  hyphens: none;
  }

  pre[class*="language-"]::selection,
  code[class*="language-"]::selection,
  pre[class*="language-"] *::selection,
  code[class*="language-"] *::selection {
	  text-shadow: none;
	  background: #263F78;
  }

  @media print {
	  pre[class*="language-"],
	  code[class*="language-"] {
		  text-shadow: none;
	  }
  }

  pre[class*="language-"] {
	  padding: 0em;
	  margin: .4em 0;
	  overflow: auto;
	  background: #0e1e1e;
  }

  :not(pre) > code[class*="language-"] {
	  padding: .0em .3em;
	  border-radius: .2em;
	  color: #db3c69;
	  background: #0e1e1e;
  }
  /*********************************************************
  * Tokens
  */
  .namespace {
	  opacity: .6;
  }

  .token.doctype .token.doctype-tag {
	  color: #568CD6;
  }

  .token.doctype .token.name {
	  color: #8cdcfe;
  }

  .token.comment,
  .token.prolog {
	  color: #5a9955;
  }

  .token.punctuation,
  .language-html .language-css .token.punctuation,
  .language-html .language-javascript .token.punctuation {
	  color: #d3d4d4;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.inserted,
  .token.unit {
	  color: #b4cea8;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.deleted {
	  color: #ce9177;
  }

  .language-css .token.string.url {
	  text-decoration: underline;
  }

  .token.operator,
  .token.entity {
	  color: #d3d4d4;
  }

  .token.operator.arrow {
	  color: #568CD6;
  }

  .token.atrule {
	  color: #ce9177;
  }

  .token.atrule .token.rule {
	  color: #c585c0;
  }

  .token.atrule .token.url {
	  color: #8cdcfe;
  }

  .token.atrule .token.url .token.function {
	  color: #dcdcaa;
  }

  .token.atrule .token.url .token.punctuation {
	  color: #d3d4d4;
  }

  .token.keyword {
	  color: #568CD6;
  }

  .token.keyword.module,
  .token.keyword.control-flow {
	  color: #c585c0;
  }

  .token.function,
  .token.function .token.maybe-class-name {
	  color: #dcdcaa;
  }

  .token.regex {
	  color: #d16968;
  }

  .token.important {
	  color: #568cd6;
  }

  .token.italic {
	  font-style: italic;
  }

  .token.constant {
	  color: #8cdcfe;
  }

  .token.class-name,
  .token.maybe-class-name {
	  color: #3ec9b0;
  }

  .token.console {
	  color: #8cdcfe;
  }

  .token.parameter {
	  color: #8cdcfe;
  }

  .token.interpolation {
	  color: #8cdcfe;
  }

  .token.punctuation.interpolation-punctuation {
	  color: #568cd6;
  }

  .token.boolean {
	  color: #568cd6;
  }

  .token.property,
  .token.variable,
  .token.imports .token.maybe-class-name,
  .token.exports .token.maybe-class-name {
	  color: #8cdcfe;
  }

  .token.selector {
	  color: #d6ba7d;
  }

  .token.escape {
	  color: #d6ba7d;
  }

  .token.tag {
	  color: #568cd6;
  }

  .token.tag .token.punctuation {
	  color: #808079;
  }

  .token.cdata {
	  color: #808080;
  }

  .token.attr-name {
	  color: #9cdcfe;
  }

  .token.attr-value,
  .token.attr-value .token.punctuation {
	  color: #ce9178;
  }

  .token.attr-value .token.punctuation.attr-equals {
	  color: #d4d4d4;
  }

  .token.entity {
	  color: #569cd6;
  }

  .token.namespace {
	  color: #4ec9b0;
  }
  /*********************************************************
  * Language Specific
  */

  pre[class*="language-javascript"],
  code[class*="language-javascript"],
  pre[class*="language-jsx"],
  code[class*="language-jsx"],
  pre[class*="language-typescript"],
  code[class*="language-typescript"],
  pre[class*="language-tsx"],
  code[class*="language-tsx"] {
	  color: #9cdcfe;
  }

  pre[class*="language-css"],
  code[class*="language-css"] {
	  color: #ce9178;
  }

  pre[class*="language-html"],
  code[class*="language-html"] {
	  color: #d4d4d4;
  }

  .language-regex .token.anchor {
	  color: #dcdcaa;
  }

  .language-html .token.punctuation {
	  color: #808080;
  }
  /*********************************************************
  * Line highlighting
  */
  pre[class*="language-"] > code[class*="language-"] {
	  position: relative;
	  z-index: 1;
  }

  .line-highlight.line-highlight {
	  background: #f7ebc6;
	  box-shadow: inset 5px 0 0 #f7d87c;
	  z-index: 0;
  }
    </textarea>
  </div>

  <div>
    <label for="rouge-stylesheet">Rouge Stylesheet</label>
    <textarea id="rouge-stylesheet">
    </textarea>
  </div>
</div>
