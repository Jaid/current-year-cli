import yargs from "yargs"

const job = ({noBreak}) => {
  const log = noBreak ? process.stdout.write : console.log
  const currentDate = new Date
  const currentYear = currentDate.getFullYear()
  const output = String(currentYear)
  log(output)
}

const builder = () => ({
  noBreak: {
    default: false,
    description: "If set, does not print the line break",
    type: "boolean",
  },
})

yargs
  .scriptName(process.env.REPLACE_PKG_NAME)
  .version(process.env.REPLACE_PKG_VERSION)
  .command("$0", process.env.REPLACE_PKG_DESCRIPTION, builder, job)
  .argv