# burningman-api

  Burning Man API wrapper

  [![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/Flet/semistandard)
  [![NPM Version](https://img.shields.io/npm/v/burningman-api.svg)](https://npmjs.org/package/burningman-api)

## Use
```js
var burningman = require('burningman-api')('api-key-goes-here');

burningman.arts(2017, function (error, arts) {
  if (error) {
    throw error;
  }

  console.log(arts);
});

burningman.art('art-uid', function (error, art) {
  if (error) {
    throw error;
  }

  console.log(art);
});

burningman.camps(2017, function (error, camps) {
  if (error) {
    throw error;
  }

  console.log(camps);
});

burningman.camp('camp-uid', function (error, camp) {
  if (error) {
    throw error;
  }

  console.log(camp);
});

burningman.events(2017, function (error, events) {
  if (error) {
    throw error;
  }

  console.log(events);
});

burningman.event('event-uid', function (error, event) {
  if (error) {
    throw error;
  }

  console.log(event);
});
```

## License

  [MIT](LICENSE)
