# Strateg (S)CSS Styleguide

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Terminology](#terminology)
- [Linting](#linting)
- [Naming convention](#naming-convention)
- [Formatting](#formatting)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Terminology
CSS-Tricks does a great job of explaining the basic CSS terminology [here](https://css-tricks.com/css-ruleset-terminology/).

## Linting
We use [stylelint](https://github.com/stylelint/stylelint) with our custom [config](packages/stylelint-config-strateg) to ensure that we write clean and maintanable code.

## Naming convention
We use BEM or "Block-Element-Modifier" to help us build reusable, scalable components and to keep the selector specificity low. But we are using a more atomic approach to BEM that looks like this `.block__element -modifier` to avoid long class names when combinding multiple modifiers. 

Useful reading
- http://getbem.com/introduction/
- https://css-tricks.com/bem-101/
- https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/

## Formatting
### Do not use ID selectors
This will only create unnecessary selector specificity.

### camelCase selectors
camelCasing will provide a better grouping of class names and make them easier to mentally process.

🚫 Don't
```css
.header-nav__list-item.-is-active {}
```

✅ Do
```css
.headerNav__listItem.-isActive {}
```

Note: the only exception of this rule is the JavaScript hooks.

### Never nest BEM selectors more than one level
If you need to neest deeper it probably means that you need to break out a element to become a block.

🚫 Don't
```css
.nav__list__item {}
```

✅ Do
```css
.nav__item {}
```

### JavaScript hooks
Avoid binding to the same class in your CSS and JavaScript. Using the same class will make it harder to refactor and reuse functionality. We use a specific JavaScript class prefixed with `.js-` instead.

```html
<button class="button js-open-menu">Open menu</button>
```
