// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";
import * as lumirt from "@lumi/lumirt";

export class SslNegotiationPolicy extends lumi.NamedResource implements SslNegotiationPolicyArgs {
    public readonly attribute?: { name: string, value: string }[];
    public readonly lbPort: number;
    public readonly loadBalancer: string;
    public readonly name: string;

    public static get(id: lumi.ID): SslNegotiationPolicy {
        return <any>undefined; // functionality provided by the runtime
    }

    public static query(q: any): SslNegotiationPolicy[] {
        return <any>undefined; // functionality provided by the runtime
    }

    constructor(urnName: string, args: SslNegotiationPolicyArgs) {
        super(urnName);
        this.attribute = <any>args.attribute;
        if (lumirt.defaultIfComputed(args.lbPort, "") === undefined) {
            throw new Error("Property argument 'lbPort' is required, but was missing");
        }
        this.lbPort = <any>args.lbPort;
        if (lumirt.defaultIfComputed(args.loadBalancer, "") === undefined) {
            throw new Error("Property argument 'loadBalancer' is required, but was missing");
        }
        this.loadBalancer = <any>args.loadBalancer;
        this.name = <any>args.name;
    }
}

export interface SslNegotiationPolicyArgs {
    readonly attribute?: { name: string, value: string }[];
    readonly lbPort: number;
    readonly loadBalancer: string;
    readonly name?: string;
}

