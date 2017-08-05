// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";
import * as lumirt from "@lumi/lumirt";

export class Distribution extends lumi.NamedResource implements DistributionArgs {
    public /*out*/ readonly activeTrustedSigners: {[key: string]: any};
    public readonly aliases?: string[];
    public /*out*/ readonly arn: string;
    public readonly cacheBehavior?: { allowedMethods: string[], cachedMethods: string[], compress?: boolean, defaultTtl: number, forwardedValues: { cookies: { forward: string, whitelistedNames?: string[] }[], headers?: string[], queryString: boolean, queryStringCacheKeys?: string[] }[], lambdaFunctionAssociation?: { eventType: string, lambdaArn: string }[], maxTtl: number, minTtl: number, pathPattern: string, smoothStreaming?: boolean, targetOriginId: string, trustedSigners?: string[], viewerProtocolPolicy: string }[];
    public /*out*/ readonly callerReference: string;
    public readonly comment?: string;
    public readonly customErrorResponse?: { errorCachingMinTtl?: number, errorCode: number, responseCode?: number, responsePagePath?: string }[];
    public readonly defaultCacheBehavior: { allowedMethods: string[], cachedMethods: string[], compress?: boolean, defaultTtl: number, forwardedValues: { cookies: { forward: string, whitelistedNames?: string[] }[], headers?: string[], queryString: boolean, queryStringCacheKeys?: string[] }[], lambdaFunctionAssociation?: { eventType: string, lambdaArn: string }[], maxTtl: number, minTtl: number, smoothStreaming?: boolean, targetOriginId: string, trustedSigners?: string[], viewerProtocolPolicy: string }[];
    public readonly defaultRootObject?: string;
    public /*out*/ readonly domainName: string;
    public readonly enabled: boolean;
    public /*out*/ readonly etag: string;
    public /*out*/ readonly hostedZoneId: string;
    public readonly httpVersion?: string;
    public /*out*/ readonly inProgressValidationBatches: number;
    public readonly isIpv6Enabled?: boolean;
    public /*out*/ readonly lastModifiedTime: string;
    public readonly loggingConfig?: { bucket: string, includeCookies?: boolean, prefix?: string }[];
    public readonly origin: { customHeader?: { name: string, value: string }[], customOriginConfig?: { httpPort: number, httpsPort: number, originKeepaliveTimeout?: number, originProtocolPolicy: string, originReadTimeout?: number, originSslProtocols: string[] }[], domainName: string, originId: string, originPath?: string, s3OriginConfig?: { originAccessIdentity: string }[] }[];
    public readonly priceClass?: string;
    public readonly restrictions: { geoRestriction: { locations?: string[], restrictionType: string }[] }[];
    public readonly retainOnDelete?: boolean;
    public /*out*/ readonly status: string;
    public readonly tags?: {[key: string]: any};
    public readonly viewerCertificate: { acmCertificateArn?: string, cloudfrontDefaultCertificate?: boolean, iamCertificateId?: string, minimumProtocolVersion?: string, sslSupportMethod?: string }[];
    public readonly webAclId?: string;

    public static get(id: lumi.ID): Distribution {
        return <any>undefined; // functionality provided by the runtime
    }

    public static query(q: any): Distribution[] {
        return <any>undefined; // functionality provided by the runtime
    }

    constructor(urnName: string, args: DistributionArgs) {
        super(urnName);
        this.aliases = <any>args.aliases;
        this.cacheBehavior = <any>args.cacheBehavior;
        this.comment = <any>args.comment;
        this.customErrorResponse = <any>args.customErrorResponse;
        if (lumirt.defaultIfComputed(args.defaultCacheBehavior, "") === undefined) {
            throw new Error("Property argument 'defaultCacheBehavior' is required, but was missing");
        }
        this.defaultCacheBehavior = <any>args.defaultCacheBehavior;
        this.defaultRootObject = <any>args.defaultRootObject;
        if (lumirt.defaultIfComputed(args.enabled, "") === undefined) {
            throw new Error("Property argument 'enabled' is required, but was missing");
        }
        this.enabled = <any>args.enabled;
        this.httpVersion = <any>args.httpVersion;
        this.isIpv6Enabled = <any>args.isIpv6Enabled;
        this.loggingConfig = <any>args.loggingConfig;
        if (lumirt.defaultIfComputed(args.origin, "") === undefined) {
            throw new Error("Property argument 'origin' is required, but was missing");
        }
        this.origin = <any>args.origin;
        this.priceClass = <any>args.priceClass;
        if (lumirt.defaultIfComputed(args.restrictions, "") === undefined) {
            throw new Error("Property argument 'restrictions' is required, but was missing");
        }
        this.restrictions = <any>args.restrictions;
        this.retainOnDelete = <any>args.retainOnDelete;
        this.tags = <any>args.tags;
        if (lumirt.defaultIfComputed(args.viewerCertificate, "") === undefined) {
            throw new Error("Property argument 'viewerCertificate' is required, but was missing");
        }
        this.viewerCertificate = <any>args.viewerCertificate;
        this.webAclId = <any>args.webAclId;
    }
}

export interface DistributionArgs {
    readonly aliases?: string[];
    readonly cacheBehavior?: { allowedMethods: string[], cachedMethods: string[], compress?: boolean, defaultTtl: number, forwardedValues: { cookies: { forward: string, whitelistedNames?: string[] }[], headers?: string[], queryString: boolean, queryStringCacheKeys?: string[] }[], lambdaFunctionAssociation?: { eventType: string, lambdaArn: string }[], maxTtl: number, minTtl: number, pathPattern: string, smoothStreaming?: boolean, targetOriginId: string, trustedSigners?: string[], viewerProtocolPolicy: string }[];
    readonly comment?: string;
    readonly customErrorResponse?: { errorCachingMinTtl?: number, errorCode: number, responseCode?: number, responsePagePath?: string }[];
    readonly defaultCacheBehavior: { allowedMethods: string[], cachedMethods: string[], compress?: boolean, defaultTtl: number, forwardedValues: { cookies: { forward: string, whitelistedNames?: string[] }[], headers?: string[], queryString: boolean, queryStringCacheKeys?: string[] }[], lambdaFunctionAssociation?: { eventType: string, lambdaArn: string }[], maxTtl: number, minTtl: number, smoothStreaming?: boolean, targetOriginId: string, trustedSigners?: string[], viewerProtocolPolicy: string }[];
    readonly defaultRootObject?: string;
    readonly enabled: boolean;
    readonly httpVersion?: string;
    readonly isIpv6Enabled?: boolean;
    readonly loggingConfig?: { bucket: string, includeCookies?: boolean, prefix?: string }[];
    readonly origin: { customHeader?: { name: string, value: string }[], customOriginConfig?: { httpPort: number, httpsPort: number, originKeepaliveTimeout?: number, originProtocolPolicy: string, originReadTimeout?: number, originSslProtocols: string[] }[], domainName: string, originId: string, originPath?: string, s3OriginConfig?: { originAccessIdentity: string }[] }[];
    readonly priceClass?: string;
    readonly restrictions: { geoRestriction: { locations?: string[], restrictionType: string }[] }[];
    readonly retainOnDelete?: boolean;
    readonly tags?: {[key: string]: any};
    readonly viewerCertificate: { acmCertificateArn?: string, cloudfrontDefaultCertificate?: boolean, iamCertificateId?: string, minimumProtocolVersion?: string, sslSupportMethod?: string }[];
    readonly webAclId?: string;
}

