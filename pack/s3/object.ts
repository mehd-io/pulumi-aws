// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";
import * as lumirt from "@lumi/lumirt";

import {Bucket} from "./bucket";

export class Object extends lumi.NamedResource implements ObjectArgs {
    public readonly acl?: string;
    public readonly bucket: Bucket;
    public readonly cacheControl?: string;
    public readonly content?: string;
    public readonly contentDisposition?: string;
    public readonly contentEncoding?: string;
    public readonly contentLanguage?: string;
    public readonly contentType: string;
    public readonly etag: string;
    public readonly key: string;
    public readonly kmsKeyId?: string;
    public readonly serverSideEncryption: string;
    public readonly source?: lumi.asset.Asset;
    public readonly storageClass: string;
    public readonly tags?: {[key: string]: any};
    public /*out*/ readonly versionId: string;
    public readonly websiteRedirect?: string;

    public static get(id: lumi.ID): Object {
        return <any>undefined; // functionality provided by the runtime
    }

    public static query(q: any): Object[] {
        return <any>undefined; // functionality provided by the runtime
    }

    constructor(urnName: string, args: ObjectArgs) {
        super(urnName);
        this.acl = <any>args.acl;
        if (lumirt.defaultIfComputed(args.bucket, "") === undefined) {
            throw new Error("Property argument 'bucket' is required, but was missing");
        }
        this.bucket = <any>args.bucket;
        this.cacheControl = <any>args.cacheControl;
        this.content = <any>args.content;
        this.contentDisposition = <any>args.contentDisposition;
        this.contentEncoding = <any>args.contentEncoding;
        this.contentLanguage = <any>args.contentLanguage;
        this.contentType = <any>args.contentType;
        this.etag = <any>args.etag;
        this.key = <any>args.key;
        this.kmsKeyId = <any>args.kmsKeyId;
        this.serverSideEncryption = <any>args.serverSideEncryption;
        this.source = <any>args.source;
        this.storageClass = <any>args.storageClass;
        this.tags = <any>args.tags;
        this.websiteRedirect = <any>args.websiteRedirect;
    }
}

export interface ObjectArgs {
    readonly acl?: string;
    readonly bucket: Bucket;
    readonly cacheControl?: string;
    readonly content?: string;
    readonly contentDisposition?: string;
    readonly contentEncoding?: string;
    readonly contentLanguage?: string;
    readonly contentType?: string;
    readonly etag?: string;
    readonly key?: string;
    readonly kmsKeyId?: string;
    readonly serverSideEncryption?: string;
    readonly source?: lumi.asset.Asset;
    readonly storageClass?: string;
    readonly tags?: {[key: string]: any};
    readonly websiteRedirect?: string;
}

