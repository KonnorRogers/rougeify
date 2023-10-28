---
layout: default
---

What is this?

This is a [PrismJS](https://prismjs.com/) -> [Rouge](https://github.com/rouge-ruby/rouge) theme converter. Yes, there will be bugs. Yes things may not be 100% accurate. But this is merely a starting point.

<%= markdownify(site.metadata.github_help) %>

<style id="rouge-stylesheet"></style>
<style id="prism-stylesheet"></style>

<style>
  .two-col {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
  }
  textarea {
    min-height: 60vh;
    width: 100%;
    padding: 0.5em 1em;
  }

  .split-panel-custom {
    --divider-width: 8px;
    --min: 400px;
    --max: calc(100% - 200px);
  }

  .split-panel-custom::part(divider) {
    background-color: var(--primary);
    height: calc(100% - 3em);
    top: 1.75em;
  }

  .split-panel-custom sl-icon {
    position: absolute;
    border-radius: var(--sl-border-radius-small);
    background: var(--primary);
    color: var(--sl-color-neutral-0);
    padding: 0.5rem 0.125rem;
  }

  .split-panel-custom::part(divider):focus-visible {
    background-color: var(--primary);
    color: var(--sl-color-neutral-0);
  }

  .split-panel-custom:focus-within sl-icon {
  }
</style>

<% site.data.prism_themes.each do |_key, theme| %>
  <textarea id="prism-theme-content-<%= theme.theme_name %>" hidden><%= theme.content %></textarea>
<% end %>


<div style="display: flex; justify-content: space-between;">
  <sl-select id="prism-theme-selector" value="">
    <sl-option value="">Choose a Prism Theme:</sl-option>

    <% site.data.prism_themes.each do |_key, theme| %>
      <sl-option value="<%= theme.theme_name %>"><%= theme.theme_name %></sl-option>
    <% end %>
  </sl-select>

  <button id="prism-to-rouge" style="margin-inline-start: auto; margin-inline-end: 40px; width: auto;">Convert</button>
</div>

<sl-split-panel class="split-panel-custom" style="margin-top: 1rem;">
  <sl-icon slot="divider" name="grip-vertical"></sl-icon>

  <div slot="start" style="padding-inline-end: 1rem;">
    <label for="prism-textarea">Prism Stylesheet</label>
    <textarea id="prism-textarea"></textarea>
  </div>

  <div slot="end" style="padding-inline-start: 1rem;">
    <label for="rouge-textarea">Rouge Stylesheet</label>
    <textarea id="rouge-textarea"></textarea>
  </div>
</sl-split-panel>

<% diff_code = capture do %>
Hello
- World
+ Universe
<% end %>

<div class="two-col">
  <label>
    Diff (PrismJS)
    <pre><code  class="language-diff"><%= diff_code %></code></pre>
  </label>

  <label>
    Diff (Rouge)
  <%= markdownify("```diff\n#{diff_code.html_safe}```") %>
  </label>
</div>



<% ruby_code = capture do %>
def bubble_sort(list)
  return list if list.size <= 1 # already sorted
  swapped = true
  while swapped do
    swapped = false
    0.upto(list.size-2) do |i|
      if list[i] > list[i+1]
        list[i], list[i+1] = list[i+1], list[i] # swap values
        swapped = true
      end
    end
  end

  list
end
<%- end -%>

<div class="two-col">
  <label>
    Ruby (PrismJS)
    <pre><code  class="language-ruby"><%= ruby_code %></code></pre>
  </label>

  <label>
    Ruby (Rouge)
  <%= markdownify("```rb\n#{ruby_code.html_safe}```") %>
  </label>
</div>

<% html_code = capture do %>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title></title>
  <style>
    @media screen and (min-width: 640px) {
      div.red {
        color: red;
      }

      div#blah {
        background-color: url("https://wherever.com") !important;
      }
    }
  </style>
</head>
<body>
  <main>Hi from HTML</main>
</body>
</html>
<% end %>

<div class="two-col">
  <label>
    HTML (PrismJS)
    <pre><code class="language-html"><%= CGI.unescape(html_code) %></code></pre>
  </label>

  <label>
    HTML (Rouge)
  <%= markdownify("```html\n#{html_code.html_safe}```") %>
  </label>
</div>

<% css_code = capture do %>
  :link {
    color: blue;
  }

  thing::part(blah) {
    opacity: 0.1;
  }

  [aria-disabled="true"] {
    opacity: 0.5;
  }

  [class*="language-"] {
    font-family: monospace;
  }

  @media screen and (min-width: 640px) {
    div.red {
      color: red;
    }

    div#blah {
      background-color: url("https://wherever.com") !important;
    }
  }
<% end %>

<div class="two-col">
  <label>
    CSS (PrismJS)
    <pre><code class="language-css"><%= css_code %></code></pre>
  </label>

  <label>
    CSS (Rouge)
  <%= markdownify("```css\n#{css_code.html_safe}```") %>
  </label>
</div>

<% markdown_code = capture do %>
**I am bolded text!**

Markdown
italic 	Italicised text. Mostly found in document-markup languages.

*I am italicised text!*
<% end %>

<div class="two-col">
  <label>
    Markdown (PrismJS)
    <pre><code  class="language-md"><%= markdown_code %></code></pre>
  </label>

  <label>
    Markdown (Rouge)
  <%= markdownify("```md\n#{markdown_code.html_safe}```") %>
  </label>
</div>

Themes pulled from here:

<https://github.com/PrismJS/prism-themes/tree/master/themes>

Prism Tokens pulled from here:

<https://prismjs.com/tokens.html>

Rouge Tokens pulled from here:

<https://github.com/rouge-ruby/rouge/blob/1687d63cede01e9e1c108425e9987060ad85c79d/lib/rouge/token.rb#L69>

<%= markdownify(site.metadata.github_help) %>

