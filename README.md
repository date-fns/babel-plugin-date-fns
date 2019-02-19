# babel-plugin-date-fns

## Install

```shell
$ npm i --save date-fns
$ npm i --save-dev babel-plugin-date-fns
```

## Example

Transforms

```js
import { distanceInWordsToNow, differenceInYears, format } from 'date-fns';
```

roughly to

```js
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import differenceInYears from 'date-fns/difference_in_years';
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
