# json.comparable

[![version](https://img.shields.io/npm/v/@extendscript/aes.patch.json.comparable.svg)](https://www.npmjs.org/package/@extendscript/aes.patch.json.comparable)

> Extension

Adds the `comparable()` method to JSON, which make it possible to compare two values on equality. It sorts arrays and objects before doing a `JSON.stringify()` comparison.

Source: [jib:stackoverflow](https://stackoverflow.com/questions/201183/how-to-determine-equality-for-two-javascript-objects)

## Install

    npm install @extendscript/aes.patch.json.comparable

## Include

    #include 'node_modules/@extendscript/aes.patch.json.comparable/comparable.js'

## Test

You can test the code against a range of [targets](https://github.com/nbqx/fakestk/blob/master/resources/versions.json):

    npm run test target-1 target-2

We keep [a log of test results](./test/results_log.md)
