# Strateg (S)CSS Styleguide

- Use [stylelint](https://github.com/stylelint/stylelint) and the [stylelint-config-strateg](packages/stylelint-config-strateg) preset
- Use [BEM](http://getbem.com/introduction/)
- Prefer camelCasing over dashes in class names
- Do not use ID selectors
- Only nest BEM elements one level. Use `.nav__item` not `.nav__list__item`
- Place BEM modifiers at the bottom of the selector
- Place media queries at the bottom of the current selector but before BEM modifiers
