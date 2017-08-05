// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";
import * as lumirt from "@lumi/lumirt";

export class Attachment extends lumi.NamedResource implements AttachmentArgs {
    public readonly elb: string;
    public readonly instance: string;

    public static get(id: lumi.ID): Attachment {
        return <any>undefined; // functionality provided by the runtime
    }

    public static query(q: any): Attachment[] {
        return <any>undefined; // functionality provided by the runtime
    }

    constructor(urnName: string, args: AttachmentArgs) {
        super(urnName);
        if (lumirt.defaultIfComputed(args.elb, "") === undefined) {
            throw new Error("Property argument 'elb' is required, but was missing");
        }
        this.elb = <any>args.elb;
        if (lumirt.defaultIfComputed(args.instance, "") === undefined) {
            throw new Error("Property argument 'instance' is required, but was missing");
        }
        this.instance = <any>args.instance;
    }
}

export interface AttachmentArgs {
    readonly elb: string;
    readonly instance: string;
}

