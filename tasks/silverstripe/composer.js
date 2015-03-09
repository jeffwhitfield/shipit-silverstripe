var utils = require('shipit-utils');
var chalk = require('chalk');
var init = require('../../lib/init');

/**
 * runs a Composer update on the current release
 */

module.exports = function (gruntOrShipit) {
  utils.registerTask(gruntOrShipit, 'silverstripe:composer', task);

  function task() {
    var shipit = utils.getShipit(gruntOrShipit);
    shipit = init(shipit);

    return composer();

    /**
     * Run Composer on current release path.
     */

    function composer() {
      shipit.log('Running - Composer update');
      return shipit.remote('cd '+ shipit.currentPath +' && php composer.phar update')
      .then(function () {
        shipit.log(chalk.green('Complete - Composer update'));
      });
    }

  }
};
