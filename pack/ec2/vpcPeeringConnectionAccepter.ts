// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";
import * as lumirt from "@lumi/lumirt";

export class VpcPeeringConnectionAccepter extends lumi.NamedResource implements VpcPeeringConnectionAccepterArgs {
    public /*out*/ readonly acceptStatus: string;
    public readonly accepter: { allowClassicLinkToRemoteVpc?: boolean, allowRemoteVpcDnsResolution?: boolean, allowVpcToRemoteClassicLink?: boolean }[];
    public readonly autoAccept?: boolean;
    public /*out*/ readonly peerOwnerId: string;
    public /*out*/ readonly peerVpcId: string;
    public readonly requester: { allowClassicLinkToRemoteVpc?: boolean, allowRemoteVpcDnsResolution?: boolean, allowVpcToRemoteClassicLink?: boolean }[];
    public readonly tags?: {[key: string]: any};
    public /*out*/ readonly vpcId: string;
    public readonly vpcPeeringConnectionId: string;

    public static get(id: lumi.ID): VpcPeeringConnectionAccepter {
        return <any>undefined; // functionality provided by the runtime
    }

    public static query(q: any): VpcPeeringConnectionAccepter[] {
        return <any>undefined; // functionality provided by the runtime
    }

    constructor(urnName: string, args: VpcPeeringConnectionAccepterArgs) {
        super(urnName);
        this.accepter = <any>args.accepter;
        this.autoAccept = <any>args.autoAccept;
        this.requester = <any>args.requester;
        this.tags = <any>args.tags;
        if (lumirt.defaultIfComputed(args.vpcPeeringConnectionId, "") === undefined) {
            throw new Error("Property argument 'vpcPeeringConnectionId' is required, but was missing");
        }
        this.vpcPeeringConnectionId = <any>args.vpcPeeringConnectionId;
    }
}

export interface VpcPeeringConnectionAccepterArgs {
    readonly accepter?: { allowClassicLinkToRemoteVpc?: boolean, allowRemoteVpcDnsResolution?: boolean, allowVpcToRemoteClassicLink?: boolean }[];
    readonly autoAccept?: boolean;
    readonly requester?: { allowClassicLinkToRemoteVpc?: boolean, allowRemoteVpcDnsResolution?: boolean, allowVpcToRemoteClassicLink?: boolean }[];
    readonly tags?: {[key: string]: any};
    readonly vpcPeeringConnectionId: string;
}

