# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @dirtandgrass/lotide`

**Require it:**

`const _ = require('@dirtandgrass/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: compares two arrays and logs a message to the console
* `assertEqual(actual, expected)`: compares two values and logs a message to the console
* `assertObjectsEqual(obj1, obj2)`: compares two objects and logs a message to the console
* `countLetters(str)`: returns an object with the count of each letter in the input string
* `countOnly(allItems, itemsToCount)`: returns an object with the count of each item in the input array
* `eqArrays(arr1, arr2)`: compares two arrays and returns a boolean
* `eqObjects(obj1, obj2)`: compares two objects and returns a boolean
* `findKey(obj, callback)`: returns the first key for which the callback returns a truthy value
* `findKeyByValue(obj, value)`: returns the first key for which the value is found
* `flatten(arr)`: returns a new array with all elements of the input array
* `head(arr)`: returns the first element of the input array
* `letterPositions(str)`: returns an object with the position of each letter in the input string
* `map(arr, callback)`: returns a new array with the results of the callback function
* `middle(arr)`: returns the middle element(s) of the input array
* `tail(arr)`: returns a new array with all elements of the input array except the first
* `takeUntil(arr, callback)`: returns a new array with elements of the input array until the callback returns a truthy value
* `without(source, itemsToRemove)`: returns a new array with all elements of the input array except the ones to remove
