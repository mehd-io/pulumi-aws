// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";
import * as lumirt from "@lumi/lumirt";

export class Queue extends lumi.NamedResource implements QueueArgs {
    public /*out*/ readonly arn: string;
    public readonly contentBasedDeduplication?: boolean;
    public readonly delaySeconds?: number;
    public readonly fifoQueue?: boolean;
    public readonly kmsDataKeyReusePeriodSeconds: number;
    public readonly kmsMasterKeyId?: string;
    public readonly maxMessageSize?: number;
    public readonly messageRetentionSeconds?: number;
    public readonly name: string;
    public readonly namePrefix?: string;
    public readonly policy: string;
    public readonly receiveWaitTimeSeconds?: number;
    public readonly redrivePolicy?: string;
    public readonly visibilityTimeoutSeconds?: number;

    public static get(id: lumi.ID): Queue {
        return <any>undefined; // functionality provided by the runtime
    }

    public static query(q: any): Queue[] {
        return <any>undefined; // functionality provided by the runtime
    }

    constructor(urnName: string, args: QueueArgs) {
        super(urnName);
        this.contentBasedDeduplication = <any>args.contentBasedDeduplication;
        this.delaySeconds = <any>args.delaySeconds;
        this.fifoQueue = <any>args.fifoQueue;
        this.kmsDataKeyReusePeriodSeconds = <any>args.kmsDataKeyReusePeriodSeconds;
        this.kmsMasterKeyId = <any>args.kmsMasterKeyId;
        this.maxMessageSize = <any>args.maxMessageSize;
        this.messageRetentionSeconds = <any>args.messageRetentionSeconds;
        this.name = <any>args.name;
        this.namePrefix = <any>args.namePrefix;
        this.policy = <any>args.policy;
        this.receiveWaitTimeSeconds = <any>args.receiveWaitTimeSeconds;
        this.redrivePolicy = <any>args.redrivePolicy;
        this.visibilityTimeoutSeconds = <any>args.visibilityTimeoutSeconds;
    }
}

export interface QueueArgs {
    readonly contentBasedDeduplication?: boolean;
    readonly delaySeconds?: number;
    readonly fifoQueue?: boolean;
    readonly kmsDataKeyReusePeriodSeconds?: number;
    readonly kmsMasterKeyId?: string;
    readonly maxMessageSize?: number;
    readonly messageRetentionSeconds?: number;
    readonly name?: string;
    readonly namePrefix?: string;
    readonly policy?: string;
    readonly receiveWaitTimeSeconds?: number;
    readonly redrivePolicy?: string;
    readonly visibilityTimeoutSeconds?: number;
}

