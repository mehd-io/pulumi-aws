// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";
import * as lumirt from "@lumi/lumirt";

export class TargetGroupAttachment extends lumi.NamedResource implements TargetGroupAttachmentArgs {
    public readonly port?: number;
    public readonly targetGroupArn: string;
    public readonly targetId: string;

    public static get(id: lumi.ID): TargetGroupAttachment {
        return <any>undefined; // functionality provided by the runtime
    }

    public static query(q: any): TargetGroupAttachment[] {
        return <any>undefined; // functionality provided by the runtime
    }

    constructor(urnName: string, args: TargetGroupAttachmentArgs) {
        super(urnName);
        this.port = <any>args.port;
        if (lumirt.defaultIfComputed(args.targetGroupArn, "") === undefined) {
            throw new Error("Property argument 'targetGroupArn' is required, but was missing");
        }
        this.targetGroupArn = <any>args.targetGroupArn;
        if (lumirt.defaultIfComputed(args.targetId, "") === undefined) {
            throw new Error("Property argument 'targetId' is required, but was missing");
        }
        this.targetId = <any>args.targetId;
    }
}

export interface TargetGroupAttachmentArgs {
    readonly port?: number;
    readonly targetGroupArn: string;
    readonly targetId: string;
}

