// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";
import * as lumirt from "@lumi/lumirt";

export class KeyPair extends lumi.NamedResource implements KeyPairArgs {
    public /*out*/ readonly arn: string;
    public /*out*/ readonly encryptedFingerprint: string;
    public /*out*/ readonly encryptedPrivateKey: string;
    public /*out*/ readonly fingerprint: string;
    public readonly name: string;
    public readonly namePrefix?: string;
    public readonly pgpKey?: string;
    public /*out*/ readonly privateKey: string;
    public readonly publicKey: string;

    public static get(id: lumi.ID): KeyPair {
        return <any>undefined; // functionality provided by the runtime
    }

    public static query(q: any): KeyPair[] {
        return <any>undefined; // functionality provided by the runtime
    }

    constructor(urnName: string, args: KeyPairArgs) {
        super(urnName);
        this.name = <any>args.name;
        this.namePrefix = <any>args.namePrefix;
        this.pgpKey = <any>args.pgpKey;
        this.publicKey = <any>args.publicKey;
    }
}

export interface KeyPairArgs {
    readonly name?: string;
    readonly namePrefix?: string;
    readonly pgpKey?: string;
    readonly publicKey?: string;
}

