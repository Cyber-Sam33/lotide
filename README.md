Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @sam_codes/lotide`

**Require it:**

`const _ = require('@sam_codes/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head(...)`: isolates head of paramter
- `tail(...)`: isolates tail of paramter
- `middle(...)`: finds middle value from an array
- `maps(...)`: finds a specied value for an array
- `letterPositions(...)`: returns the index for each letter in a sentence
- `findKey(...)`: returns a passed value's key
- `countOnly(...)`: takes an array of strings (i.e names) and a list of items you are searching and returns number of occurences, if value present
- `findKey(...)`: returns a passed value's key
- `assertEqual(...)`: compares two values for strict equality
- `assertArraysEqual(...)`: compares two arrays for strict equality
- `assertObjectEqual(...)`: compares two object for strict equality
