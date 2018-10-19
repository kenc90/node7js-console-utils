const chalk = require('chalk');


module.exports = {
    log: function (text, hexColor = null) {
        if (hexColor)
            console.log(chalk.hex(hexColor)(text));
        else
            console.log(text);
    },

    logError: function (text) {
        console.log(chalk.red.bold(text));
    },

    logWarning: function (text) {
        console.log(chalk.yellow.bold(text));
    },
}