// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";
import * as lumirt from "@lumi/lumirt";

export class DomainName extends lumi.NamedResource implements DomainNameArgs {
    public readonly certificateArn?: string;
    public readonly certificateBody?: string;
    public readonly certificateChain?: string;
    public readonly certificateName?: string;
    public readonly certificatePrivateKey?: string;
    public /*out*/ readonly certificateUploadDate: string;
    public /*out*/ readonly cloudfrontDomainName: string;
    public /*out*/ readonly cloudfrontZoneId: string;
    public readonly domainName: string;

    public static get(id: lumi.ID): DomainName {
        return <any>undefined; // functionality provided by the runtime
    }

    public static query(q: any): DomainName[] {
        return <any>undefined; // functionality provided by the runtime
    }

    constructor(urnName: string, args: DomainNameArgs) {
        super(urnName);
        this.certificateArn = <any>args.certificateArn;
        this.certificateBody = <any>args.certificateBody;
        this.certificateChain = <any>args.certificateChain;
        this.certificateName = <any>args.certificateName;
        this.certificatePrivateKey = <any>args.certificatePrivateKey;
        if (lumirt.defaultIfComputed(args.domainName, "") === undefined) {
            throw new Error("Property argument 'domainName' is required, but was missing");
        }
        this.domainName = <any>args.domainName;
    }
}

export interface DomainNameArgs {
    readonly certificateArn?: string;
    readonly certificateBody?: string;
    readonly certificateChain?: string;
    readonly certificateName?: string;
    readonly certificatePrivateKey?: string;
    readonly domainName: string;
}

