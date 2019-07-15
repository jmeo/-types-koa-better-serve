import * as http from 'http'
import * as Koa from 'koa'


declare function koaBetterServe(root?: string, pathname?: string, options?: Serve.Options): Koa.Middleware;

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
        setHeaders?(res: http.ServerResponse, path: string, stats: string);
        extensions?: any;
    }


}


export = koaBetterServe