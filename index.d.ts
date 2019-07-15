// Type definitions for koa-better-serve 2.0.7
// Project: https://github.com/tunnckoCoreLabs/koa-better-serve.git
// Definitions by: Jmeo <https://github.com/jmeo>
// Definitions: https://github.com/jmeo/-types-koa-better-serve.git

/**
 
import koaBetterServe = require('koa-better-serve')
var Koa = require('koa)

var app = new Koa()
app.use(KoaBetterServe('root','pathname',options))


 */

import * as http from 'http'
import * as Koa from 'koa'

declare namespace Serve {
    interface Options {
        maxage?: number;
        immutable?: boolean;
        hidden?: boolean;
        root?: string;
        index?: string;
        gzip?: boolean;
        brotli?: boolean;
        format?: boolean;
        setHeaders?(res: http.ServerResponse, path: string, stats: string): void;
        extensions?: any;
    }
}



declare function koaBetterServe(root?: string, pathname?: string | Serve.Options): Koa.Middleware;
declare function koaBetterServe(root?: string, pathname?: string | Serve.Options, options?: Serve.Options): Koa.Middleware;

export = koaBetterServe