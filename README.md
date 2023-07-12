# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @buyayub/lotide`

**Require it:**

`const _ = require('@buyayub/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: asserts that two arrays are equal to each other
* `assertEqual(actual, expected)`: performs test to see if two values are equal to each other
* `assertObjectsEqual(obj1, obj2)`: performs test to see if two objects are equal to each other 
* `countLetters(str)`: counts the letters in a string and returns an object with the letter count
* `countOnly(allItems, itemsToCount)`: count items in an array, but only those referenced in itemsToCount. returns object with count of certain items
* `eqArrays(arr1, arr2)`: determines if arrays are shallowly equal.
* `eqObjects(object1, object2)`: determines if objects are shallowly equal
* `findKey(obj, callback)`: find key in object according to criteria in callback function for their values
* `findKeyByValue(obj, val)`: iterate through object snad return a key if the value is the same as `val`
* `flatten(arr)`: flatten an array
* `head(arr)`: returns the head of an array
* `letterPositions(sentence)`: collects the positions of letters in a sentence, and returns an object with the keys for each letter. 
* `map(array, callback)`: apply callback to each value in an array and return the mapped array
* `middle(arr)`: returns the middle element of an array
* `tail(arr)`: returns the tail of an array (everything that isn't the head)
* `takeUntil(array, callback)`: return array with values up until callback criteria is reached for an element
* `without(arr, exclude)`: filters array of values  that are present inside `exclude` array and returns result
