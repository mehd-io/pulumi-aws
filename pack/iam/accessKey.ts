// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";
import * as lumirt from "@lumi/lumirt";

export class AccessKey extends lumi.NamedResource implements AccessKeyArgs {
    public /*out*/ readonly encryptedSecret: string;
    public /*out*/ readonly keyFingerprint: string;
    public readonly pgpKey?: string;
    public /*out*/ readonly secret: string;
    public /*out*/ readonly sesSmtpPassword: string;
    public /*out*/ readonly status: string;
    public readonly user: string;

    public static get(id: lumi.ID): AccessKey {
        return <any>undefined; // functionality provided by the runtime
    }

    public static query(q: any): AccessKey[] {
        return <any>undefined; // functionality provided by the runtime
    }

    constructor(urnName: string, args: AccessKeyArgs) {
        super(urnName);
        this.pgpKey = <any>args.pgpKey;
        if (lumirt.defaultIfComputed(args.user, "") === undefined) {
            throw new Error("Property argument 'user' is required, but was missing");
        }
        this.user = <any>args.user;
    }
}

export interface AccessKeyArgs {
    readonly pgpKey?: string;
    readonly user: string;
}

