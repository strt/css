module.exports = {
  "extends": "stylelint-config-standard",
  "rules": {
    "color-hex-length": "long",
    "function-comma-space-after": "always-single-line",
    "declaration-empty-line-before": "never",
    "at-rule-empty-line-before": {
      "ignoreAtRules": [
        "else",
        "if"
      ]
    },
    "string-quotes": "single"
  }
}
