---
# Feel free to add content and custom Front Matter to this file.

layout: default
---

Diff

```diff
Hello
- World
+ Universe
```

Ruby

```rb
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
```

HTML

```html
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
```

Markdown

```md
**I am bolded text!**

Markdown
italic 	Italicised text. Mostly found in document-markup languages.

*I am italicised text!*
```
