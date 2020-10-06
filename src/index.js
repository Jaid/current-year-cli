import yargs from "yargs"

const job = ({printBreak}) => {
  const currentDate = new Date
  const currentYear = currentDate.getFullYear()
  const output = String(currentYear)
  if (printBreak) {
    console.log(output)
  } else {
    process.stdout.write(output)
  }
}

const builder = () => ({
  printBreak: {
    default: false,
    description: "Print line break",
    type: "boolean",
  },
})

yargs
  .scriptName(process.env.REPLACE_PKG_NAME)
  .version(process.env.REPLACE_PKG_VERSION)
  .command("$0", process.env.REPLACE_PKG_DESCRIPTION, builder, job)
  .argv