// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";
import * as lumirt from "@lumi/lumirt";

export class IpSet extends lumi.NamedResource implements IpSetArgs {
    public readonly ipSetDescriptor?: { type: string, value: string }[];
    public readonly name: string;

    public static get(id: lumi.ID): IpSet {
        return <any>undefined; // functionality provided by the runtime
    }

    public static query(q: any): IpSet[] {
        return <any>undefined; // functionality provided by the runtime
    }

    constructor(urnName: string, args: IpSetArgs) {
        super(urnName);
        this.ipSetDescriptor = <any>args.ipSetDescriptor;
        this.name = <any>args.name;
    }
}

export interface IpSetArgs {
    readonly ipSetDescriptor?: { type: string, value: string }[];
    readonly name?: string;
}

