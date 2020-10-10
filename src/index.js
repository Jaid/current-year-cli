import yargs from "yargs"

import handleDefaultCommand from "src/commands"

/**
 * @typedef {Object} Options
 * @prop {boolean} newline
 */

/**
 * @type {import("yargs").CommandBuilder}
 */
const commandBuilder = {
  newline: {
    description: "Print the final line break",
    type: "boolean",
    default: true,
  },
}

yargs
  .scriptName(process.env.REPLACE_PKG_NAME)
  .version(process.env.REPLACE_PKG_VERSION)
  .command("*", process.env.REPLACE_PKG_DESCRIPTION, commandBuilder, handleDefaultCommand)
  .parse()