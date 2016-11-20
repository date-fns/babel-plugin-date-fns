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
import distanceInWordsToNow from 'date-fns/distanceInWordsToNow';
import differenceInYears from 'date-fns/differenceInYears';
import format from 'date-fns/format';
```

## Thanks

Heavily inspired by [babel-plugin-lodash](https://github.com/lodash/babel-plugin-lodash)
and [babel-plugin-recharts](https://github.com/recharts/babel-plugin-recharts).
