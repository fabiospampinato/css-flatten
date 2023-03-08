
/* IMPORT */

import benchmark from 'benchloop';
import flatten from '../dist/index.js';
import {INPUT} from '../test/fixtures.js';

/* MAIN */

benchmark.config ({
  iterations: 1_000
});

benchmark ({
  name: 'css-flatten',
  fn: () => {
    flatten ( INPUT );
  }
});
