# babel-plugin-date-fns

> :warning: The current master is for v2 pre-release version of date-fns. [See the plugin of v1 version](https://github.com/date-fns/babel-plugin-date-fns/tree/v1).

## Install

```shell
$ npm i --save date-fns
$ npm i --save-dev babel-plugin-date-fns
```

## Example

Transforms

```js
import { formatDistance, differenceInYears, format } from 'date-fns';
```

roughly to

```js
import formatDistance from 'date-fns/formatDistance';
import differenceInYears from 'date-fns/differenceInYears';
import format from 'date-fns/format';
```

## Usage

### .babelrc

```json
{
  "plugins": ["date-fns"],
  "presets": ["es2015"]
}
```

### Webpack 2

```js
module: {
  rules: [{
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      presets: ['es2015'],
      plugins: ['date-fns'],
    },
  }],
}
```

## Thanks

Heavily inspired by [babel-plugin-lodash](https://github.com/lodash/babel-plugin-lodash)
and [babel-plugin-recharts](https://github.com/recharts/babel-plugin-recharts).
