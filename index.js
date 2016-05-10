'use strict';

module.exports = require('loopback-datasource-juggler/lib/connectors/memory');
module.exports.Memory.prototype.getDefaultIdType = function() {
  return String;
};
