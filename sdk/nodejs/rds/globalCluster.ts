// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages a RDS Global Cluster, which is an Aurora global database spread across multiple regions. The global database contains a single primary cluster with read-write capability, and a read-only secondary cluster that receives data from the primary cluster through high-speed replication performed by the Aurora storage subsystem.
 * 
 * More information about Aurora global databases can be found in the [Aurora User Guide](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html#aurora-global-database-creating).
 * 
 * > **NOTE:** RDS only supports the `aurora` engine (MySQL 5.6 compatible) for Global Clusters at this time.
 */
export class GlobalCluster extends pulumi.CustomResource {
    /**
     * Get an existing GlobalCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: pulumi.WrappedObject<GlobalClusterState>, opts?: pulumi.CustomResourceOptions): GlobalCluster {
        return new GlobalCluster(name, <any>state, { ...opts, id: id });
    }

    /**
     * RDS Global Cluster Amazon Resource Name (ARN)
     */
    public /*out*/ readonly arn: pulumi.Output<string>;
    /**
     * Name for an automatically created database on cluster creation.
     */
    public readonly databaseName: pulumi.Output<string | undefined>;
    /**
     * If the Global Cluster should have deletion protection enabled. The database can't be deleted when this value is set to `true`. The default is `false`.
     */
    public readonly deletionProtection: pulumi.Output<boolean | undefined>;
    /**
     * Name of the database engine to be used for this DB cluster. Valid values: `aurora`. Defaults to `aurora`.
     */
    public readonly engine: pulumi.Output<string | undefined>;
    /**
     * Engine version of the Aurora global database.
     */
    public readonly engineVersion: pulumi.Output<string>;
    public readonly globalClusterIdentifier: pulumi.Output<string>;
    /**
     * AWS Region-unique, immutable identifier for the global database cluster. This identifier is found in AWS CloudTrail log entries whenever the AWS KMS key for the DB cluster is accessed
     */
    public /*out*/ readonly globalClusterResourceId: pulumi.Output<string>;
    /**
     * Specifies whether the DB cluster is encrypted. The default is `false`.
     */
    public readonly storageEncrypted: pulumi.Output<boolean | undefined>;

    /**
     * Create a GlobalCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: pulumi.WrappedObject<GlobalClusterArgs>, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: pulumi.WrappedObject<GlobalClusterArgs> | pulumi.WrappedObject<GlobalClusterState>, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: GlobalClusterState = argsOrState as GlobalClusterState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["databaseName"] = state ? state.databaseName : undefined;
            inputs["deletionProtection"] = state ? state.deletionProtection : undefined;
            inputs["engine"] = state ? state.engine : undefined;
            inputs["engineVersion"] = state ? state.engineVersion : undefined;
            inputs["globalClusterIdentifier"] = state ? state.globalClusterIdentifier : undefined;
            inputs["globalClusterResourceId"] = state ? state.globalClusterResourceId : undefined;
            inputs["storageEncrypted"] = state ? state.storageEncrypted : undefined;
        } else {
            const args = argsOrState as GlobalClusterArgs | undefined;
            if (!args || args.globalClusterIdentifier === undefined) {
                throw new Error("Missing required property 'globalClusterIdentifier'");
            }
            inputs["databaseName"] = args ? args.databaseName : undefined;
            inputs["deletionProtection"] = args ? args.deletionProtection : undefined;
            inputs["engine"] = args ? args.engine : undefined;
            inputs["engineVersion"] = args ? args.engineVersion : undefined;
            inputs["globalClusterIdentifier"] = args ? args.globalClusterIdentifier : undefined;
            inputs["storageEncrypted"] = args ? args.storageEncrypted : undefined;
            inputs["arn"] = undefined /*out*/;
            inputs["globalClusterResourceId"] = undefined /*out*/;
        }
        super("aws:rds/globalCluster:GlobalCluster", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering GlobalCluster resources.
 */
export interface GlobalClusterState {
    /**
     * RDS Global Cluster Amazon Resource Name (ARN)
     */
    readonly arn?: string;
    /**
     * Name for an automatically created database on cluster creation.
     */
    readonly databaseName?: string;
    /**
     * If the Global Cluster should have deletion protection enabled. The database can't be deleted when this value is set to `true`. The default is `false`.
     */
    readonly deletionProtection?: boolean;
    /**
     * Name of the database engine to be used for this DB cluster. Valid values: `aurora`. Defaults to `aurora`.
     */
    readonly engine?: string;
    /**
     * Engine version of the Aurora global database.
     */
    readonly engineVersion?: string;
    readonly globalClusterIdentifier?: string;
    /**
     * AWS Region-unique, immutable identifier for the global database cluster. This identifier is found in AWS CloudTrail log entries whenever the AWS KMS key for the DB cluster is accessed
     */
    readonly globalClusterResourceId?: string;
    /**
     * Specifies whether the DB cluster is encrypted. The default is `false`.
     */
    readonly storageEncrypted?: boolean;
}

/**
 * The set of arguments for constructing a GlobalCluster resource.
 */
export interface GlobalClusterArgs {
    /**
     * Name for an automatically created database on cluster creation.
     */
    readonly databaseName?: string;
    /**
     * If the Global Cluster should have deletion protection enabled. The database can't be deleted when this value is set to `true`. The default is `false`.
     */
    readonly deletionProtection?: boolean;
    /**
     * Name of the database engine to be used for this DB cluster. Valid values: `aurora`. Defaults to `aurora`.
     */
    readonly engine?: string;
    /**
     * Engine version of the Aurora global database.
     */
    readonly engineVersion?: string;
    readonly globalClusterIdentifier: string;
    /**
     * Specifies whether the DB cluster is encrypted. The default is `false`.
     */
    readonly storageEncrypted?: boolean;
}
