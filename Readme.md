# px-to-rem-migration

## A migration script to convert px to rem, for use with [code-migrate](https://github.com/ranyitz/code-migrate).

<br>

## Description

px-to-rem-migration is a migration script that converts pixel values to rem values in any CSS fileS. This script is intented for use with [code-migrate](https://github.com/ranyitz/code-migrate). 

I stringly recommend using TypeScript when writing your own migration script. I tried to simplify by making the migration script a js file and ended up going down the CommonJS vs module rabbit hole. I went back to TypeScript as that ended up being the simplier solution.

While I've tried to do the work to make this also run as a standalone CLI, you can easily lift the script and use it in a more complex migration process.

Checkout [pxtorem-css](https://github.com/iqbal-rashed/pxtorem-css) if you perfer a more purpose built CLI.

Several code editors also have plug-ins available for more ad-hoc conversions.

Features:

-   Converts px to rem in CSS files quickly and easily
-   Script is customizable for your situation
-   Leverage the features of [code-migrate](https://github.com/ranyitz/code-migrate)

## Installation

Mostly I expect you to just lift the script, but you can install as a CLI utility.

```
npm i px-to-rem-css-migration -g
```

## Contribution

If you want to contribute or report any bug, you welcome

<br>
Don't forget to give a star 😍
