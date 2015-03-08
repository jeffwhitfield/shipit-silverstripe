var utils = require('shipit-utils');
/**
 * Register SilverStripe tasks.
 * - silverstripe
 * - silverstripe:composer
 * - silverstripe:devbuild
 */

module.exports = function (gruntOrShipit) {
  var shipit = utils.getShipit(gruntOrShipit);
  require('./composer')(gruntOrShipit);
  require('./devbuild')(gruntOrShipit);

  utils.registerTask(gruntOrShipit, 'silverstripe', [
    'silverstripe:composer',
    'silverstripe:devbuild'
  ]);

  shipit.on('published', function () {
    utils.runTask(gruntOrShipit, 'silverstripe');
  });
};
