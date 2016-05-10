loopback-connector-memory2
=========================

The [loopback] connector for memory.

## Background

We were building fixture-based testing tool [fibula.js] which puts valid JSON
files to your database or runtime. Initially, we are using MongoDB's original
driver to put data into database, but that really increases the cost of test.

Until recently, the [loopback] is based on the [jugglerDB] which has a common
interface for memory and any supported databases. So we decide to write an
[fibula.js] adapter for memory, so that we could directly patch data in-memory.
Thus we can speed up as possible.

Yea, we did it, but found the native `memory` connector's id is always a `Number`
that causes the different id type between different datasource. That's why we
wrote a new memory which accepts a `String` value as its id type.

## Usage

Update your `datasources.*.json`.

## Installation

```sh
$ npm install loopback-connector-memory2 --save
```

## License

MIT

[loopback]: https://github.com/strongloop/loopback
[fibula.js]: https://github.com/weflex/fibula.js
[jugglerDB]: https://github.com/strongloop/loopback-datasource-juggler

