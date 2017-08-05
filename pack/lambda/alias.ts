// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";
import * as lumirt from "@lumi/lumirt";

export class Alias extends lumi.NamedResource implements AliasArgs {
    public /*out*/ readonly arn: string;
    public readonly description?: string;
    public readonly functionName: string;
    public readonly functionVersion: string;
    public readonly name: string;

    public static get(id: lumi.ID): Alias {
        return <any>undefined; // functionality provided by the runtime
    }

    public static query(q: any): Alias[] {
        return <any>undefined; // functionality provided by the runtime
    }

    constructor(urnName: string, args: AliasArgs) {
        super(urnName);
        this.description = <any>args.description;
        if (lumirt.defaultIfComputed(args.functionName, "") === undefined) {
            throw new Error("Property argument 'functionName' is required, but was missing");
        }
        this.functionName = <any>args.functionName;
        if (lumirt.defaultIfComputed(args.functionVersion, "") === undefined) {
            throw new Error("Property argument 'functionVersion' is required, but was missing");
        }
        this.functionVersion = <any>args.functionVersion;
        this.name = <any>args.name;
    }
}

export interface AliasArgs {
    readonly description?: string;
    readonly functionName: string;
    readonly functionVersion: string;
    readonly name?: string;
}

