const { califPopulate } = require("./califPopu")
const { categoryPopulate } = require("./categoryPopu")
const { favPopulate } = require("./favPopu")
const { clearDB } = require("./helper")
const { recipePopulate } = require("./recipePopu")
const { userPopulate } = require("./userPopu")

async function populate(){
  await clearDB()
  await userPopulate()
  await categoryPopulate()
  await recipePopulate()
  await favPopulate()
  await califPopulate()
  process.exit()
}
populate()