require "json"

class Builders::SyntaxSchema < SiteBuilder
  def build
    helper :syntax_schema, :syntax_schema
  end

  def syntax_schema
    {
      "Highlight": {
        "selector": ".hll",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Comment": {
        "selector": ".c",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Error": {
        "selector": ".err",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Keyword": {
        "selector": ".k",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Operator": {
        "selector": ".o",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Comment.Multiline": {
        "selector": ".cm",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Comment.Preproc": {
        "selector": ".cp",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Comment.Single": {
        "selector": ".cs",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Comment.Special": {
        "selector": ".cs",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Generic.Deleted": {
        "selector": ".gd",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Generic.Emph": {
        "selector": ".ge",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Generic.Error": {
        "selector": ".gr",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Generic.Heading": {
        "selector": ".gh",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Generic.Inserted": {
        "selector": ".gi",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Generic.Output": {
        "selector": ".go",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Generic.Prompt": {
        "selector": ".gp",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Generic.Strong": {
        "selector": ".gs",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Generic.Subheading": {
        "selector": ".gu",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Generic.Traceback": {
        "selector": ".gt",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Keyword.Constant": {
        "selector": ".kc",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Keyword.Declaration": {
        "selector": ".kd",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Keyword.Namespace": {
        "selector": ".kn",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Keyword.Pseudo": {
        "selector": ".kp",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Keyword.Reserved": {
        "selector": ".kr",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Keyword.Type": {
        "selector": ".kt",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Literal.Number": {
        "selector": ".m",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Literal.String": {
        "selector": ".s",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Name.Attribute": {
        "selector": ".na",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Name.Builtin": {
        "selector": ".nb",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Name.Class": {
        "selector": ".nc",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Name.Constant": {
        "selector": ".no",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Name.Decorator": {
        "selector": ".nd",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Name.Entity": {
        "selector": ".ni",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Name.Exception": {
        "selector": ".ne",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Name.Function": {
        "selector": ".nf",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Name.Label": {
        "selector": ".nl",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Name.Namespace": {
        "selector": ".nn",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Name.Tag": {
        "selector": ".nt",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Name.Variable": {
        "selector": ".nv",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Operator.Word": {
        "selector": ".ow",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Text.Whitespace": {
        "selector": ".w",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Liter.Number.Float": {
        "selector": ".mf",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Literal.Number.Hex": {
        "selector": ".mh",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Literal.Number.Integer": {
        "selector": ".mi",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Literal.Number.Oct": {
        "selector": ".mo",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Literal.String.Backtick": {
        "selector": ".sb",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Literal.String.Char": {
        "selector": ".sc",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Literal.String.Doc": {
        "selector": ".sd",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Literal.String.Double": {
        "selector": ".s2",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Literal.String.Escape": {
        "selector": ".se",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Literal.String.Heredoc": {
        "selector": ".sh",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Literal.String.Interpol": {
        "selector": ".si",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Literal.String.Other": {
        "selector": ".sx",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Literal.String.Regex": {
        "selector": ".sr",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Literal.String.Single": {
        "selector": ".s1",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Literal.String.Symbol": {
        "selector": ".ss",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Name.Builtin.Pseudo": {
        "selector": ".bp",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Name.Variable.Class": {
        "selector": ".vc",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Name.Variable.Global": {
        "selector": ".vg",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Name.Variable.Instance": {
        "selector": ".vi",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
      "Literal.Number.Integer.Long": {
        "selector": ".il",
        "styles": {
          "font-weight": "",
          "font-style": "",
          "color": "",
          "background-color": "",
        }
      },
    }
  end
end
