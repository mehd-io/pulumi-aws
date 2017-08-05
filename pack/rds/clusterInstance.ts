// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";
import * as lumirt from "@lumi/lumirt";

export class ClusterInstance extends lumi.NamedResource implements ClusterInstanceArgs {
    public readonly applyImmediately: boolean;
    public readonly autoMinorVersionUpgrade?: boolean;
    public readonly clusterIdentifier: string;
    public readonly dbParameterGroupName: string;
    public readonly dbSubnetGroupName: string;
    public /*out*/ readonly dbiResourceId: string;
    public /*out*/ readonly endpoint: string;
    public readonly identifier: string;
    public readonly identifierPrefix: string;
    public readonly instanceClass: string;
    public /*out*/ readonly kmsKeyId: string;
    public readonly monitoringInterval?: number;
    public readonly monitoringRoleArn: string;
    public /*out*/ readonly port: number;
    public readonly preferredBackupWindow: string;
    public readonly preferredMaintenanceWindow: string;
    public readonly promotionTier?: number;
    public readonly publiclyAccessible?: boolean;
    public /*out*/ readonly storageEncrypted: boolean;
    public readonly tags?: {[key: string]: any};
    public /*out*/ readonly writer: boolean;

    public static get(id: lumi.ID): ClusterInstance {
        return <any>undefined; // functionality provided by the runtime
    }

    public static query(q: any): ClusterInstance[] {
        return <any>undefined; // functionality provided by the runtime
    }

    constructor(urnName: string, args: ClusterInstanceArgs) {
        super(urnName);
        this.applyImmediately = <any>args.applyImmediately;
        this.autoMinorVersionUpgrade = <any>args.autoMinorVersionUpgrade;
        if (lumirt.defaultIfComputed(args.clusterIdentifier, "") === undefined) {
            throw new Error("Property argument 'clusterIdentifier' is required, but was missing");
        }
        this.clusterIdentifier = <any>args.clusterIdentifier;
        this.dbParameterGroupName = <any>args.dbParameterGroupName;
        this.dbSubnetGroupName = <any>args.dbSubnetGroupName;
        this.identifier = <any>args.identifier;
        this.identifierPrefix = <any>args.identifierPrefix;
        if (lumirt.defaultIfComputed(args.instanceClass, "") === undefined) {
            throw new Error("Property argument 'instanceClass' is required, but was missing");
        }
        this.instanceClass = <any>args.instanceClass;
        this.monitoringInterval = <any>args.monitoringInterval;
        this.monitoringRoleArn = <any>args.monitoringRoleArn;
        this.preferredBackupWindow = <any>args.preferredBackupWindow;
        this.preferredMaintenanceWindow = <any>args.preferredMaintenanceWindow;
        this.promotionTier = <any>args.promotionTier;
        this.publiclyAccessible = <any>args.publiclyAccessible;
        this.tags = <any>args.tags;
    }
}

export interface ClusterInstanceArgs {
    readonly applyImmediately?: boolean;
    readonly autoMinorVersionUpgrade?: boolean;
    readonly clusterIdentifier: string;
    readonly dbParameterGroupName?: string;
    readonly dbSubnetGroupName?: string;
    readonly identifier?: string;
    readonly identifierPrefix?: string;
    readonly instanceClass: string;
    readonly monitoringInterval?: number;
    readonly monitoringRoleArn?: string;
    readonly preferredBackupWindow?: string;
    readonly preferredMaintenanceWindow?: string;
    readonly promotionTier?: number;
    readonly publiclyAccessible?: boolean;
    readonly tags?: {[key: string]: any};
}

