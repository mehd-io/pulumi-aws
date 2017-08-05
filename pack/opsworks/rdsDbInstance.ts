// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";
import * as lumirt from "@lumi/lumirt";

export class RdsDbInstance extends lumi.NamedResource implements RdsDbInstanceArgs {
    public readonly dbPassword: string;
    public readonly dbUser: string;
    public /*out*/ readonly instanceId: string;
    public readonly rdsDbInstanceArn: string;
    public readonly stackId: string;

    public static get(id: lumi.ID): RdsDbInstance {
        return <any>undefined; // functionality provided by the runtime
    }

    public static query(q: any): RdsDbInstance[] {
        return <any>undefined; // functionality provided by the runtime
    }

    constructor(urnName: string, args: RdsDbInstanceArgs) {
        super(urnName);
        if (lumirt.defaultIfComputed(args.dbPassword, "") === undefined) {
            throw new Error("Property argument 'dbPassword' is required, but was missing");
        }
        this.dbPassword = <any>args.dbPassword;
        if (lumirt.defaultIfComputed(args.dbUser, "") === undefined) {
            throw new Error("Property argument 'dbUser' is required, but was missing");
        }
        this.dbUser = <any>args.dbUser;
        if (lumirt.defaultIfComputed(args.rdsDbInstanceArn, "") === undefined) {
            throw new Error("Property argument 'rdsDbInstanceArn' is required, but was missing");
        }
        this.rdsDbInstanceArn = <any>args.rdsDbInstanceArn;
        if (lumirt.defaultIfComputed(args.stackId, "") === undefined) {
            throw new Error("Property argument 'stackId' is required, but was missing");
        }
        this.stackId = <any>args.stackId;
    }
}

export interface RdsDbInstanceArgs {
    readonly dbPassword: string;
    readonly dbUser: string;
    readonly rdsDbInstanceArn: string;
    readonly stackId: string;
}

