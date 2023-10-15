// https://www.npmjs.com/package/debug
import Debug from 'debug';

// Dev debugger
const debug = Debug('dev:');

// Server debugger
const debugServer = Debug("server:");

export { debug, debugServer };

