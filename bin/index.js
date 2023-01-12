#!/home/jatin/.nvm/versions/node/v14.18.1/bin/node
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import {addAccess, addNewResource} from './servicess.js';

yargs(hideBin(process.argv))
  .command('addAccess [accessType]', 'create new Access', (yargs) => {
    return yargs
      .positional('port', {
        describe: 'port to bind on',
        default: 5000
      })
  }, (argv) => {
    // if (argv.verbose) console.info(`start server on :${argv.port}`)
        addAccess(argv.accessType);
  })
  .option('verbose', {
    alias: 'v',
    type: 'boolean',
    description: 'Run with verbose logging'
  })
  .parse()


  yargs(hideBin(process.argv))
  .command('addResource [resourceName]', 'create new Access', (yargs) => {
    return yargs
      .positional('port', {
        describe: 'port to bind on',
        default: 5000
      })
  }, (argv) => {
    // if (argv.verbose) console.info(`start server on :${argv.port}`)
        addNewResource(argv.resourceName);
  })
  .option('verbose', {
    alias: 'v',
    type: 'boolean',
    description: 'Run with verbose logging'
  })
  .parse()