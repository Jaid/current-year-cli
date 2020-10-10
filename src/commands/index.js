/**
 * @typedef {Object} Argv
 */

/**
 * @param {import("yargs").Arguments<import("src").Options & Argv>} argv
 */
export default argv => {
  const currentDate = new Date
  const currentYear = currentDate.getFullYear()
  const output = String(currentYear)
  if (argv.newline) {
    console.log(output)
  } else {
    process.stdout.write(output)
  }
}