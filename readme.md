<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Strateg (S)CSS Styleguide](#strateg-scss-styleguide)
  - [Terminology](#terminology)
  - [Linting](#linting)
  - [Naming convention](#naming-convention)
  - [Formatting](#formatting)
  - [Sass](#sass)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Strateg (S)CSS Styleguide

## Terminology
CSS-Tricks does a great job of explaining the basic CSS terminology [here](https://css-tricks.com/css-ruleset-terminology/).

## Linting
We use [stylelint](https://github.com/stylelint/stylelint) with our custom [config](packages/stylelint-config-strateg) to ensure that we write clean and maintanable code.

## Naming convention
We use BEM or "Block-Element-Modifier" to help us build reusable, scalable components and to keep the selector specificity low. Altough we are using a more atomic approach to BEM that looks like this `.block__element -modifier` to avoid long class names when combinding multiple modifiers. 

Useful reading
- http://getbem.com/introduction/
- https://css-tricks.com/bem-101/
- https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/

## Formatting
- Do not use ID selectors
- camelCase your selectors
- **Never** nest BEM selectors more than one level deep

### JavaScript hooks

## Sass

### Extend
