var path = require('path');
/**
 * Create object for options
 */
module.exports = function (shipit) {
  shipit.currentPath = path.join(shipit.config.deployTo, 'current');
  shipit.config.servers = shipit.config.servers;
  return shipit;
};
