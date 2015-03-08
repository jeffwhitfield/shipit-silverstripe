var utils = require('shipit-utils');
var chalk = require('chalk');
var sprintf = require('sprintf-js').sprintf;
var init = require('../../lib/init');

/**
 * runs a Composer update on the current release
 */

module.exports = function (gruntOrShipit) {
  utils.registerTask(gruntOrShipit, 'silverstripe:composer', task);

  function task() {
    var shipit = utils.getShipit(gruntOrShipit);
    shipit = init(shipit);

    function composer() {
      return shipit['remote'](
        sprintf('cd %s && php composer.phar update', shipit.currentPath)
      );
    }

    shipit.log('Running - Composer update');
    return composer()
    .then(function () {
      shipit.log(chalk.green('Complete - Composer update'));
    });
  }
};
