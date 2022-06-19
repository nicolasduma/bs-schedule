/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import-helpers/order-imports */
const { resolve } = require('path')
require('dotenv').config({ path: resolve(__dirname, '..', '.test.env') })
const { execSync } = require('child_process')
const NodeEnvironment = require('jest-environment-node').default
const { v4: uuid } = require('uuid')

const prismaCli = './node_modules/.bin/prisma'

class JestEnvironment extends NodeEnvironment {
  constructor(config, context) {
    super(config, context)
    this.testPath = context.testPath
    this.docblockPragmas = context.docblockPragmas
    this.schema = `${uuid()}`
    this.connectionString = `${process.env.DATABASE_URL}${this.schema}`
  }

  setup() {
    process.env.DATABASE_URL = this.connectionString
    this.global.process.env.DATABASE_URL = this.connectionString

    execSync(`${prismaCli} migrate dev`)
  }

  async teardown() {
    await execSync('rm -r ./prisma/test')
  }
}

module.exports = JestEnvironment
