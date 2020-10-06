import coffee from "coffee"
import path from "path"

const main = path.resolve(process.env.MAIN)

it("should run", () => coffee.fork(main)
  .expect("code", 0)
  .expect("stdout", /^2\d{3}\n$/)
  .debug(true)
  .end())

it("should run with options", () => coffee.fork(main, ["--no-break"])
  .expect("code", 0)
  .expect("stdout", /^2\d{3}$/)
  .debug(true)
  .end())