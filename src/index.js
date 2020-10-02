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
  .scriptName(_PKG_NAME)
  .version(_PKG_VERSION)
  .command("$0", _PKG_DESCRIPTION, builder, job)
  .argv