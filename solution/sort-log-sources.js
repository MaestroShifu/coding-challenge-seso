"use strict";

module.exports = (LogEntries) => {
    return LogEntries.sort((a, b) => {
        const dateA = a.date;
        const dateB = b.date;
        return dateA - dateB;
    });
}
