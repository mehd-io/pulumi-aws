// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";
import * as lumirt from "@lumi/lumirt";

export class Cluster extends lumi.NamedResource implements ClusterArgs {
    public readonly name: string;

    public static get(id: lumi.ID): Cluster {
        return <any>undefined; // functionality provided by the runtime
    }

    public static query(q: any): Cluster[] {
        return <any>undefined; // functionality provided by the runtime
    }

    constructor(urnName: string, args: ClusterArgs) {
        super(urnName);
        this.name = <any>args.name;
    }
}

export interface ClusterArgs {
    readonly name?: string;
}

