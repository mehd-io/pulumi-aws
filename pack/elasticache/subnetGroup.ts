// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";
import * as lumirt from "@lumi/lumirt";

export class SubnetGroup extends lumi.NamedResource implements SubnetGroupArgs {
    public readonly description?: string;
    public readonly name: string;
    public readonly subnetIds: string[];

    public static get(id: lumi.ID): SubnetGroup {
        return <any>undefined; // functionality provided by the runtime
    }

    public static query(q: any): SubnetGroup[] {
        return <any>undefined; // functionality provided by the runtime
    }

    constructor(urnName: string, args: SubnetGroupArgs) {
        super(urnName);
        this.description = <any>args.description;
        this.name = <any>args.name;
        if (lumirt.defaultIfComputed(args.subnetIds, "") === undefined) {
            throw new Error("Property argument 'subnetIds' is required, but was missing");
        }
        this.subnetIds = <any>args.subnetIds;
    }
}

export interface SubnetGroupArgs {
    readonly description?: string;
    readonly name?: string;
    readonly subnetIds: string[];
}

