# ToS [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> Terms of Service and Privacy Policy Generator

The content generated is derived from Ben Nadel's [web-based generator](https://www.bennadel.com/coldfusion/privacy-policy-generator.htm). I appreciate it so much I wanted a CLI and ~~Jade~~ Pug output for it.

## Install

```sh
$ npm install --global tos   # <= CLI installation
$ npm install --save tos     # <= module installation
```

## CLI Usage

```sh
$ tos

  Usage: tos [options] <company> <state>

    Terms of Service and Privacy Policy Generator.

  Options:

    -h, --html  outputs as HTML

$ tos "Yo Company Name, Inc." "Delaware" > tos.pug
$ tos --html "Yo Company Name, Inc." "Delaware" > tos.html
```

## Module Usage

```js
var tos = require('tos');

tos(
  {
    markup: 'html', // 'markup' is optional, the default output is Pug
    company: 'Yo Company Name, Inc.',
    state: 'Delaware'
  },
  function(error, result) {
    // do yo thang
  }
);
```

## License

ISC © [Buster Collings](http://about.me/buster)

[npm-image]: https://badge.fury.io/js/tos.svg
[npm-url]: https://npmjs.org/package/tos
[travis-image]: https://travis-ci.org/busterc/tos.svg?branch=master
[travis-url]: https://travis-ci.org/busterc/tos
[daviddm-image]: https://david-dm.org/busterc/tos.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/busterc/tos
