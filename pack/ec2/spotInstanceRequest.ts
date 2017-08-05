// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";
import * as lumirt from "@lumi/lumirt";

export class SpotInstanceRequest extends lumi.NamedResource implements SpotInstanceRequestArgs {
    public readonly ami: string;
    public readonly associatePublicIpAddress: boolean;
    public readonly availabilityZone: string;
    public readonly blockDurationMinutes?: number;
    public readonly disableApiTermination?: boolean;
    public readonly ebsBlockDevice: { deleteOnTermination?: boolean, deviceName: string, encrypted: boolean, iops: number, snapshotId: string, volumeSize: number, volumeType: string }[];
    public readonly ebsOptimized?: boolean;
    public readonly ephemeralBlockDevice: { deviceName: string, noDevice?: boolean, virtualName?: string }[];
    public readonly iamInstanceProfile?: string;
    public readonly instanceInitiatedShutdownBehavior?: string;
    public /*out*/ readonly instanceState: string;
    public readonly instanceType: string;
    public readonly ipv6AddressCount: number;
    public readonly ipv6Addresses: string[];
    public readonly keyName: string;
    public readonly launchGroup?: string;
    public readonly monitoring?: boolean;
    public readonly networkInterface: { deleteOnTermination?: boolean, deviceIndex: number, networkInterfaceId: string }[];
    public /*out*/ readonly networkInterfaceId: string;
    public readonly placementGroup: string;
    public /*out*/ readonly primaryNetworkInterfaceId: string;
    public /*out*/ readonly privateDns: string;
    public readonly privateIp: string;
    public /*out*/ readonly publicDns: string;
    public /*out*/ readonly publicIp: string;
    public readonly rootBlockDevice: { deleteOnTermination?: boolean, iops: number, volumeSize: number, volumeType: string }[];
    public readonly securityGroups: string[];
    public readonly sourceDestCheck?: boolean;
    public /*out*/ readonly spotBidStatus: string;
    public /*out*/ readonly spotInstanceId: string;
    public readonly spotPrice: string;
    public /*out*/ readonly spotRequestState: string;
    public readonly spotType?: string;
    public readonly subnetId: string;
    public readonly tags?: {[key: string]: any};
    public readonly tenancy: string;
    public readonly userData?: string;
    public readonly volumeTags?: {[key: string]: any};
    public readonly vpcSecurityGroupIds: string[];
    public readonly waitForFulfillment?: boolean;

    public static get(id: lumi.ID): SpotInstanceRequest {
        return <any>undefined; // functionality provided by the runtime
    }

    public static query(q: any): SpotInstanceRequest[] {
        return <any>undefined; // functionality provided by the runtime
    }

    constructor(urnName: string, args: SpotInstanceRequestArgs) {
        super(urnName);
        if (lumirt.defaultIfComputed(args.ami, "") === undefined) {
            throw new Error("Property argument 'ami' is required, but was missing");
        }
        this.ami = <any>args.ami;
        this.associatePublicIpAddress = <any>args.associatePublicIpAddress;
        this.availabilityZone = <any>args.availabilityZone;
        this.blockDurationMinutes = <any>args.blockDurationMinutes;
        this.disableApiTermination = <any>args.disableApiTermination;
        this.ebsBlockDevice = <any>args.ebsBlockDevice;
        this.ebsOptimized = <any>args.ebsOptimized;
        this.ephemeralBlockDevice = <any>args.ephemeralBlockDevice;
        this.iamInstanceProfile = <any>args.iamInstanceProfile;
        this.instanceInitiatedShutdownBehavior = <any>args.instanceInitiatedShutdownBehavior;
        if (lumirt.defaultIfComputed(args.instanceType, "") === undefined) {
            throw new Error("Property argument 'instanceType' is required, but was missing");
        }
        this.instanceType = <any>args.instanceType;
        this.ipv6AddressCount = <any>args.ipv6AddressCount;
        this.ipv6Addresses = <any>args.ipv6Addresses;
        this.keyName = <any>args.keyName;
        this.launchGroup = <any>args.launchGroup;
        this.monitoring = <any>args.monitoring;
        this.networkInterface = <any>args.networkInterface;
        this.placementGroup = <any>args.placementGroup;
        this.privateIp = <any>args.privateIp;
        this.rootBlockDevice = <any>args.rootBlockDevice;
        this.securityGroups = <any>args.securityGroups;
        this.sourceDestCheck = <any>args.sourceDestCheck;
        if (lumirt.defaultIfComputed(args.spotPrice, "") === undefined) {
            throw new Error("Property argument 'spotPrice' is required, but was missing");
        }
        this.spotPrice = <any>args.spotPrice;
        this.spotType = <any>args.spotType;
        this.subnetId = <any>args.subnetId;
        this.tags = <any>args.tags;
        this.tenancy = <any>args.tenancy;
        this.userData = <any>args.userData;
        this.volumeTags = <any>args.volumeTags;
        this.vpcSecurityGroupIds = <any>args.vpcSecurityGroupIds;
        this.waitForFulfillment = <any>args.waitForFulfillment;
    }
}

export interface SpotInstanceRequestArgs {
    readonly ami: string;
    readonly associatePublicIpAddress?: boolean;
    readonly availabilityZone?: string;
    readonly blockDurationMinutes?: number;
    readonly disableApiTermination?: boolean;
    readonly ebsBlockDevice?: { deleteOnTermination?: boolean, deviceName: string, encrypted?: boolean, iops?: number, snapshotId?: string, volumeSize?: number, volumeType?: string }[];
    readonly ebsOptimized?: boolean;
    readonly ephemeralBlockDevice?: { deviceName: string, noDevice?: boolean, virtualName?: string }[];
    readonly iamInstanceProfile?: string;
    readonly instanceInitiatedShutdownBehavior?: string;
    readonly instanceType: string;
    readonly ipv6AddressCount?: number;
    readonly ipv6Addresses?: string[];
    readonly keyName?: string;
    readonly launchGroup?: string;
    readonly monitoring?: boolean;
    readonly networkInterface?: { deleteOnTermination?: boolean, deviceIndex: number, networkInterfaceId: string }[];
    readonly placementGroup?: string;
    readonly privateIp?: string;
    readonly rootBlockDevice?: { deleteOnTermination?: boolean, iops?: number, volumeSize?: number, volumeType?: string }[];
    readonly securityGroups?: string[];
    readonly sourceDestCheck?: boolean;
    readonly spotPrice: string;
    readonly spotType?: string;
    readonly subnetId?: string;
    readonly tags?: {[key: string]: any};
    readonly tenancy?: string;
    readonly userData?: string;
    readonly volumeTags?: {[key: string]: any};
    readonly vpcSecurityGroupIds?: string[];
    readonly waitForFulfillment?: boolean;
}

