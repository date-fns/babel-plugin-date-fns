# babel-plugin-date-fns

> :warning: The current version (2.x) supports date-fns v2. If you are using v1, please use [1.x](https://github.com/date-fns/babel-plugin-date-fns/tree/v1).

## Install

```shell
$ npm i --save date-fns
$ npm i --save-dev babel-plugin-date-fns
```

## Example

Transforms

```js
import { differenceInYears, format, formatDistance } from "date-fns";
```

roughly to

```js

import differenceInYears from 'date-fns/differenceInYears';
import format from "date-fns/format";
import formatDistance from "date-fns/formatDistance";
```

## Usage

### .babelrc

```json
{
  "plugins": ["date-fns"],
  "presets": ["@babel/preset-env"]
}
```

### Webpack

```js
module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['date-fns']
        }
      }
    }
  ]
}
```

## Thanks

Heavily inspired by [babel-plugin-lodash](https://github.com/lodash/babel-plugin-lodash)
and [babel-plugin-recharts](https://github.com/recharts/babel-plugin-recharts).
