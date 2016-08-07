# ember-data-store-push-improvements

[![Build Status](https://travis-ci.org/pangratz/ember-data-store-push-improvements.svg?branch=master)](https://travis-ci.org/pangratz/ember-data-store-push-improvements)
[![Ember Observer Score](https://emberobserver.com/badges/ember-data-store-push-improvements.svg)](https://emberobserver.com/addons/ember-data-store-push-improvements)

This is a POC addon for [RFC#161](https://github.com/emberjs/rfcs/pull/161),
which goal is to improve the `store.push` situation within Ember Data.

- [x] add `store.normalizePayload` ([ember-twiddle](https://ember-twiddle.com/3175d60b7cf3fd11dd8219ae2fe00fe8?fileTreeShown=false&numColumns=2&openFiles=routes.application.js%2Ctemplates.application.hbs))
- [ ] add `store.pushRef`

## Installation

`ember install ember-data-store-push-improvements`

## Code samples

```js
let normalized = store.normalizePayload({
  person: {
    id: 1,
    name: "GOB"
  }
});

assert.deepEqual(normalized, {
  data: {
    type: "person",
    id: "1",
    attributes: {
      name: "GOB"
    }
  }
});
```

# Development

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
