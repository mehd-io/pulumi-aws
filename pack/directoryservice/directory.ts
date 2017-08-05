// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";
import * as lumirt from "@lumi/lumirt";

export class Directory extends lumi.NamedResource implements DirectoryArgs {
    public /*out*/ readonly accessUrl: string;
    public readonly alias: string;
    public readonly connectSettings?: { customerDnsIps: string[], customerUsername: string, subnetIds: string[], vpcId: string }[];
    public readonly description?: string;
    public /*out*/ readonly dnsIpAddresses: string[];
    public readonly enableSso?: boolean;
    public readonly name: string;
    public readonly password: string;
    public readonly shortName: string;
    public readonly size?: string;
    public readonly type?: string;
    public readonly vpcSettings?: { subnetIds: string[], vpcId: string }[];

    public static get(id: lumi.ID): Directory {
        return <any>undefined; // functionality provided by the runtime
    }

    public static query(q: any): Directory[] {
        return <any>undefined; // functionality provided by the runtime
    }

    constructor(urnName: string, args: DirectoryArgs) {
        super(urnName);
        this.alias = <any>args.alias;
        this.connectSettings = <any>args.connectSettings;
        this.description = <any>args.description;
        this.enableSso = <any>args.enableSso;
        this.name = <any>args.name;
        if (lumirt.defaultIfComputed(args.password, "") === undefined) {
            throw new Error("Property argument 'password' is required, but was missing");
        }
        this.password = <any>args.password;
        this.shortName = <any>args.shortName;
        this.size = <any>args.size;
        this.type = <any>args.type;
        this.vpcSettings = <any>args.vpcSettings;
    }
}

export interface DirectoryArgs {
    readonly alias?: string;
    readonly connectSettings?: { customerDnsIps: string[], customerUsername: string, subnetIds: string[], vpcId: string }[];
    readonly description?: string;
    readonly enableSso?: boolean;
    readonly name?: string;
    readonly password: string;
    readonly shortName?: string;
    readonly size?: string;
    readonly type?: string;
    readonly vpcSettings?: { subnetIds: string[], vpcId: string }[];
}

