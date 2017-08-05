// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";
import * as lumirt from "@lumi/lumirt";

export class MaintenanceWindowTarget extends lumi.NamedResource implements MaintenanceWindowTargetArgs {
    public readonly ownerInformation?: string;
    public readonly resourceType: string;
    public readonly targets: { key: string, values: string[] }[];
    public readonly windowId: string;

    public static get(id: lumi.ID): MaintenanceWindowTarget {
        return <any>undefined; // functionality provided by the runtime
    }

    public static query(q: any): MaintenanceWindowTarget[] {
        return <any>undefined; // functionality provided by the runtime
    }

    constructor(urnName: string, args: MaintenanceWindowTargetArgs) {
        super(urnName);
        this.ownerInformation = <any>args.ownerInformation;
        if (lumirt.defaultIfComputed(args.resourceType, "") === undefined) {
            throw new Error("Property argument 'resourceType' is required, but was missing");
        }
        this.resourceType = <any>args.resourceType;
        if (lumirt.defaultIfComputed(args.targets, "") === undefined) {
            throw new Error("Property argument 'targets' is required, but was missing");
        }
        this.targets = <any>args.targets;
        if (lumirt.defaultIfComputed(args.windowId, "") === undefined) {
            throw new Error("Property argument 'windowId' is required, but was missing");
        }
        this.windowId = <any>args.windowId;
    }
}

export interface MaintenanceWindowTargetArgs {
    readonly ownerInformation?: string;
    readonly resourceType: string;
    readonly targets: { key: string, values: string[] }[];
    readonly windowId: string;
}

