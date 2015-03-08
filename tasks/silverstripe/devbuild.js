var utils = require('shipit-utils');
var chalk = require('chalk');
var sprintf = require('sprintf-js').sprintf;
var init = require('../../lib/init');

/**
 * runs a dev/build process on the current release
 */

module.exports = function (gruntOrShipit) {
  utils.registerTask(gruntOrShipit, 'silverstripe:devbuild', task);

  function task() {
    var shipit = utils.getShipit(gruntOrShipit);
    var server = shipit.config.servers.split('@');
    var host = server.length > 1 ? server[1] : server[0];
    shipit = init(shipit);

    function devbuild() {
      return shipit['remote'](
        sprintf('cd %s && php framework/cli-script.php dev/build && rm -R ./silverstripe-cache/*', shipit.currentPath)
      );
    }

    function flush() {
      return shipit['remote'](
        sprintf('curl http://'+host+'/?flush=all&env_type=dev', shipit.currentPath)
      );
    }

    shipit.log('Running - dev/build');
    return devbuild()
    .then(function () {
      shipit.log(chalk.green('Complete - dev/build'));
      shipit.log('Running - flush');
      return flush()
      .then(function () {
        shipit.log(chalk.green('Complete - flush'));
      });
    });
  }
};
