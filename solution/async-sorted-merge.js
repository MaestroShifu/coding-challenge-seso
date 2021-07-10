"use strict";

const { Promise } = require("bluebird");
const asclogEntries = require('./sort-log-sources');

// Print all entries, across all of the *async* sources, in chronological order.

module.exports = (logSources, printer) => {
  return new Promise(async (resolve, reject) => {
    const promiseLogEntries = logSources.map(logSource => logSource.popAsync());
    const logEntries = await Promise.all(promiseLogEntries);
    const deslogEntries = asclogEntries(logEntries); 
    deslogEntries.forEach(logEntry => {
      printer.print(logEntry);
    });
    printer.done();
    resolve(console.log("Async sort complete."));
  });
};
