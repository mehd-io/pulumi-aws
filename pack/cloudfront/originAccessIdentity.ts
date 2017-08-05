// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";
import * as lumirt from "@lumi/lumirt";

export class OriginAccessIdentity extends lumi.NamedResource implements OriginAccessIdentityArgs {
    public /*out*/ readonly callerReference: string;
    public /*out*/ readonly cloudfrontAccessIdentityPath: string;
    public readonly comment?: string;
    public /*out*/ readonly etag: string;
    public /*out*/ readonly iamArn: string;
    public /*out*/ readonly s3CanonicalUserId: string;

    public static get(id: lumi.ID): OriginAccessIdentity {
        return <any>undefined; // functionality provided by the runtime
    }

    public static query(q: any): OriginAccessIdentity[] {
        return <any>undefined; // functionality provided by the runtime
    }

    constructor(urnName: string, args: OriginAccessIdentityArgs) {
        super(urnName);
        this.comment = <any>args.comment;
    }
}

export interface OriginAccessIdentityArgs {
    readonly comment?: string;
}

