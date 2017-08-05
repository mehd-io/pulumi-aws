// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";
import * as lumirt from "@lumi/lumirt";

export class ClientCertificate extends lumi.NamedResource implements ClientCertificateArgs {
    public /*out*/ readonly createdDate: string;
    public readonly description?: string;
    public /*out*/ readonly expirationDate: string;
    public /*out*/ readonly pemEncodedCertificate: string;

    public static get(id: lumi.ID): ClientCertificate {
        return <any>undefined; // functionality provided by the runtime
    }

    public static query(q: any): ClientCertificate[] {
        return <any>undefined; // functionality provided by the runtime
    }

    constructor(urnName: string, args: ClientCertificateArgs) {
        super(urnName);
        this.description = <any>args.description;
    }
}

export interface ClientCertificateArgs {
    readonly description?: string;
}

