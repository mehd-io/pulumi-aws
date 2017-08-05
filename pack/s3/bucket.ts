// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";
import * as lumirt from "@lumi/lumirt";

export class Bucket extends lumi.NamedResource implements BucketArgs {
    public readonly accelerationStatus: string;
    public readonly acl?: string;
    public readonly arn: string;
    public readonly bucket: string;
    public /*out*/ readonly bucketDomainName: string;
    public readonly bucketPrefix?: string;
    public readonly corsRule?: { allowedHeaders?: string[], allowedMethods: string[], allowedOrigins: string[], exposeHeaders?: string[], maxAgeSeconds?: number }[];
    public readonly forceDestroy?: boolean;
    public readonly hostedZoneId: string;
    public readonly lifecycleRule?: { abortIncompleteMultipartUploadDays?: number, enabled: boolean, expiration?: { date?: string, days?: number, expiredObjectDeleteMarker?: boolean }[], id: string, noncurrentVersionExpiration?: { days?: number }[], noncurrentVersionTransition?: { days?: number, storageClass: string }[], prefix?: string, tags?: {[key: string]: any}, transition?: { date?: string, days?: number, storageClass: string }[] }[];
    public readonly logging?: { targetBucket: string, targetPrefix?: string }[];
    public readonly policy?: string;
    public readonly region: string;
    public readonly replicationConfiguration?: { role: string, rules: { destination: { bucket: string, storageClass?: string }[], id?: string, prefix: string, status: string }[] }[];
    public readonly requestPayer: string;
    public readonly tags?: {[key: string]: any};
    public readonly versioning: { enabled?: boolean, mfaDelete?: boolean }[];
    public readonly website?: { errorDocument?: string, indexDocument?: string, redirectAllRequestsTo?: string, routingRules?: string }[];
    public readonly websiteDomain: string;
    public readonly websiteEndpoint: string;

    public static get(id: lumi.ID): Bucket {
        return <any>undefined; // functionality provided by the runtime
    }

    public static query(q: any): Bucket[] {
        return <any>undefined; // functionality provided by the runtime
    }

    constructor(urnName: string, args: BucketArgs) {
        super(urnName);
        this.accelerationStatus = <any>args.accelerationStatus;
        this.acl = <any>args.acl;
        this.arn = <any>args.arn;
        this.bucket = <any>args.bucket;
        this.bucketPrefix = <any>args.bucketPrefix;
        this.corsRule = <any>args.corsRule;
        this.forceDestroy = <any>args.forceDestroy;
        this.hostedZoneId = <any>args.hostedZoneId;
        this.lifecycleRule = <any>args.lifecycleRule;
        this.logging = <any>args.logging;
        this.policy = <any>args.policy;
        this.region = <any>args.region;
        this.replicationConfiguration = <any>args.replicationConfiguration;
        this.requestPayer = <any>args.requestPayer;
        this.tags = <any>args.tags;
        this.versioning = <any>args.versioning;
        this.website = <any>args.website;
        this.websiteDomain = <any>args.websiteDomain;
        this.websiteEndpoint = <any>args.websiteEndpoint;
    }
}

export interface BucketArgs {
    readonly accelerationStatus?: string;
    readonly acl?: string;
    readonly arn?: string;
    readonly bucket?: string;
    readonly bucketPrefix?: string;
    readonly corsRule?: { allowedHeaders?: string[], allowedMethods: string[], allowedOrigins: string[], exposeHeaders?: string[], maxAgeSeconds?: number }[];
    readonly forceDestroy?: boolean;
    readonly hostedZoneId?: string;
    readonly lifecycleRule?: { abortIncompleteMultipartUploadDays?: number, enabled: boolean, expiration?: { date?: string, days?: number, expiredObjectDeleteMarker?: boolean }[], id?: string, noncurrentVersionExpiration?: { days?: number }[], noncurrentVersionTransition?: { days?: number, storageClass: string }[], prefix?: string, tags?: {[key: string]: any}, transition?: { date?: string, days?: number, storageClass: string }[] }[];
    readonly logging?: { targetBucket: string, targetPrefix?: string }[];
    readonly policy?: string;
    readonly region?: string;
    readonly replicationConfiguration?: { role: string, rules: { destination: { bucket: string, storageClass?: string }[], id?: string, prefix: string, status: string }[] }[];
    readonly requestPayer?: string;
    readonly tags?: {[key: string]: any};
    readonly versioning?: { enabled?: boolean, mfaDelete?: boolean }[];
    readonly website?: { errorDocument?: string, indexDocument?: string, redirectAllRequestsTo?: string, routingRules?: string }[];
    readonly websiteDomain?: string;
    readonly websiteEndpoint?: string;
}

