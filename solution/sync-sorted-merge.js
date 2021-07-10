"use strict";

const asclogEntries = require('./sort-log-sources');

// Print all entries, across all of the sources, in chronological order.

module.exports = (logSources, printer) => {
  const logEntries = logSources.map(logSource => logSource.pop());
  const deslogEntries = asclogEntries(logEntries); 
  deslogEntries.forEach(logEntry => {
    printer.print(logEntry);
  });
  printer.done();
  return console.log("Sync sort complete.");
};
