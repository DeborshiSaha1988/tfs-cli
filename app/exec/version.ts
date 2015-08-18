import cmdm = require('../lib/tfcommand');
import cm = require('../lib/common');
import am = require('../lib/auth');
import Q = require('q');
import fs = require('fs');
var trace = require('../lib/trace');

export function describe(): string {
    return 'output the version';
}

export function getCommand(): cmdm.TfCommand {
    return new Version();
}

export var isServerOperation: boolean = false;

export var hideBanner: boolean = false;

export class Version extends cmdm.TfCommand {
    
    public exec(args: string[], options: cm.IOptions): Q.Promise<string> {
        trace.debug('version.exec');
        var defer = Q.defer();
        var packageJson = require('../package.json');
        defer.resolve(packageJson.version);
        return <Q.Promise<string>>defer.promise;
    }

    public output(version: string): void {
        trace.info('Version %s', version);
    }
}