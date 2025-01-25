# CSS Flatten

Flattens a nested (S)CSS string, `&` placeholders are supported too.

This is implemented using [css-simple-parser](https://github.com/fabiospampinato/css-simple-parser), which makes it tiny and blazing fast, but there are some limitations to be aware of, read the parser's readme to learn about them.

## Install

```sh
npm install css-flatten
```

## Usage

```ts
import flatten from 'css-flatten';

// Let's make some CSS to flatten

const css = `
.foo {
  color: red;
  &:hover {
    color: green;
  }
  .bar {
    color: blue;
  }
}
`;

// Let's flatten that CSS

flatten ( css );
// .foo {
//   color: red;
// }
// .foo:hover {
//   color: green;
// }
// .foo .bar {
//   color: blue;
// }
```

## License

MIT © Fabio Spampinato
