import {ROUGE_KEYS} from "./rouge-schema.js"
/**
 * Everything gets prefixed as `.token.token-<keyword>`
 * https://prismjs.com/tokens.html
 */
export const PRISM_TO_ROUGE_SCHEMA = {
  "keyword": [
    ROUGE_KEYS["Keyword.Type"],
    ROUGE_KEYS["Keyword"],
    ROUGE_KEYS["Keyword.Reserved"],
    ROUGE_KEYS["Keyword.Declaration"],

    // These have an existing highlighter.
    // ROUGE_KEYS["Keyword.Namespace"]
    // ROUGE_KEYS["Keyword.Constant"],
    // ROUGE_KEYS["Keyword.Pseudo"], boolean
  ],
  "builtin": [
    ROUGE_KEYS["Name.Builtin"],
    // ROUGE_KEYS["Name.Builtin.Pseudo"]
  ],
  "class-name": [
    ROUGE_KEYS["Name.Class"],
  ],
  "function": [
    ROUGE_KEYS["Name.Function"],
  ],
  "name": [
    ROUGE_KEYS["Name"]
  ],
  "boolean": [
    ROUGE_KEYS["Keyword.Pseudo"]
  ],
  "number": [
    ROUGE_KEYS["Literal.Number"],
    ROUGE_KEYS["Literal.Number.Hex"],
    ROUGE_KEYS["Literal.Number.Oct"],
    ROUGE_KEYS["Literal.Number.Integer"],
    ROUGE_KEYS["Literal.Number.Integer.Long"],
  ],
  "string": [
    ROUGE_KEYS["Literal.String"],
    ROUGE_KEYS["Literal.String.Doc"],
    ROUGE_KEYS["Literal.String.Double"],
    ROUGE_KEYS["Literal.String.Heredoc"],
    ROUGE_KEYS["Literal.String.Other"],
    ROUGE_KEYS["Literal.String.Escape"],
    ROUGE_KEYS["Literal.String.Single"],
    ROUGE_KEYS["Literal.String.Backtick"],
    ROUGE_KEYS["Literal.String.Interpol"],

    // ROUGE_KEYS["Literal.String.Regex"],
    // ROUGE_KEYS["Literal.String.Symbol"],
    // ROUGE_KEYS["Literal.String.Char"],
  ],
  "char": [
    ROUGE_KEYS["Literal.String.Char"],
  ],
  "symbol": [
    ROUGE_KEYS["Literal.String.Symbol"],
  ],
  "regex": [
    ROUGE_KEYS["Literal.String.Regex"],
  ],
  "url": [
    ROUGE_KEYS["Literal.String.Other"],
  ],
  "operator": [
    ROUGE_KEYS["Operator"],
    ROUGE_KEYS["Operator.Word"]
  ],
  "variable": [
    ROUGE_KEYS["Name.Variable"],
    ROUGE_KEYS["Name.Variable.Global"],
    ROUGE_KEYS["Name.Variable.Class"],
    ROUGE_KEYS["Name.Variable.Instance"],
  ],
  "constant": [
    ROUGE_KEYS["Keyword.Constant"],
  ],
  "property": [
    ROUGE_KEYS["Literal.String.Symbol"]
  ],
  "punctuation": [
    ROUGE_KEYS["Punctuation"]
  ],
  "important": [
    ROUGE_KEYS["Comment.Preproc"]
  ],
  "comment": [
    ROUGE_KEYS["Comment"],
    ROUGE_KEYS["Comment.Single"],
    ROUGE_KEYS["Comment.Multiline"],
    ROUGE_KEYS["Comment.Special"],

    // ROUGE_KEYS["Comment.Preproc"]
  ],
  /** Markup languages */
  "tag": [
    ROUGE_KEYS["Name.Tag"],
  ],
  "attr-name": [
    ROUGE_KEYS["Name.Attribute"]
  ],
  "attr-value": [
    ROUGE_KEYS["Literal.String"]
  ],
  "namespace": [
    ROUGE_KEYS["Keyword.Namespace"],
    ROUGE_KEYS["Name.Namespace"]
  ],
  "prolog": [
    ROUGE_KEYS["Comment.Preproc"]
  ],
  "doctype": [
    ROUGE_KEYS["Comment.Preproc"]
  ],
  "doctype-tag": [
    ROUGE_KEYS["Comment.Preproc"]
  ],
  "cdata": [
    ROUGE_KEYS["Comment.Preproc"]
  ],
  "entity": [
    ROUGE_KEYS["Comment.Preproc"]
  ],
  /* Document Markup languges */
  "bold": [
    ROUGE_KEYS["Generic.Strong"]
  ],
  "italic": [
    ROUGE_KEYS["Generic.Emph"]
  ],
  /* Stylesheets */
  "atrule": [
    ROUGE_KEYS["Keyword"]
  ],
  "selector": [
    ROUGE_KEYS["Name.Tag"]
  ],
  /** Git diffs */
  "inserted": [
    ROUGE_KEYS["Generic.Inserted"],
  ],
  "deleted": [
    ROUGE_KEYS["Generic.Deleted"]
  ]
}
