Shogiground
===========

*Shogiground* is a free/libre open source shogi UI.
It is a fork of *Chessground* designed for shogi.
It targets modern browsers, as well as mobile development using Cordova.

## License

Shogiground is distributed under the **GPL-3.0 license** (or any later version,
at your option).
When you use Shogiground for your website, your combined work may be
distributed only under the GPL. **You must release your source code** to the
users of your website.

Please read more about GPL for JavaScript on [greendrake.info/#nfy0](http://greendrake.info/#nfy0).

## Features

- Well typed with TypeScript
- Fast. Uses a custom DOM diff algorithm to reduce DOM writes to the absolute minimum.
- Small footprint: 10K gzipped (30K unzipped). No dependencies.
- SVG drawing of circles and arrows on the board
- Entirely configurable and reconfigurable at any time
- Styling with CSS only: board and pieces can be changed by simply switching a class
- Fluid layout: board can be resized at any time
- Support for 3D pieces and boards
- Full mobile support (touchstart, touchmove, touchend)
- Move pieces by click
- Move pieces by drag & drop
  - Minimum distance before drag
  - Centralisation of the piece under the cursor
  - Piece ghost element
  - Drop off revert or trash
- Premove by click or drag
- Drag new pieces onto the board (editor, Crazyhouse)
- Animation of pieces: moving and fading away
- Display last move, check, move destinations, and premove destinations (hover effects possible)
- Import and export positions in FEN notation
- User callbacks


### Usage

```js
const Shogiground = require('shogiground').Shogiground;

const config = {};
const ground = Shogiground(document.body, config);
```


## Documentation

- [Config types](https://github.com/ornicar/chessground/tree/master/src/config.ts)
- [Default config values](https://github.com/ornicar/chessground/tree/master/src/state.ts)
- [API type signatures](https://github.com/ornicar/chessground/tree/master/src/api.ts)
- [Examples repo](https://github.com/ornicar/chessground-examples/tree/master/src/units)
- [Base CSS](https://github.com/ornicar/chessground-examples/blob/master/assets/chessground.css)

## Development

Install build dependencies:
```sh
npm install
```

To build the node module:
```sh
npm run compile -- --watch
```

To build the standalone:
```sh
gulp dev  # build once
gulp      # build and watch
gulp prod # build minified
```
