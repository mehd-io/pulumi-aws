// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Creates a Snapshot of a snapshot.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const example = new aws.ebs.Volume("example", {
 *     availabilityZone: "us-west-2a",
 *     size: 40,
 *     tags: {
 *         Name: "HelloWorld",
 *     },
 * });
 * const exampleSnapshot = new aws.ebs.Snapshot("example_snapshot", {
 *     tags: {
 *         Name: "HelloWorld_snap",
 *     },
 *     volumeId: example.id,
 * });
 * const exampleCopy = new aws.ebs.SnapshotCopy("example_copy", {
 *     sourceRegion: "us-west-2",
 *     sourceSnapshotId: exampleSnapshot.id,
 *     tags: {
 *         Name: "HelloWorld_copy_snap",
 *     },
 * });
 * ```
 */
export class SnapshotCopy extends pulumi.CustomResource {
    /**
     * Get an existing SnapshotCopy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: pulumi.WrappedObject<SnapshotCopyState>, opts?: pulumi.CustomResourceOptions): SnapshotCopy {
        return new SnapshotCopy(name, <any>state, { ...opts, id: id });
    }

    /**
     * The data encryption key identifier for the snapshot.
     * * `source_snapshot_id` The ARN of the copied snapshot.
     * * `source_region` The region of the source snapshot.
     */
    public /*out*/ readonly dataEncryptionKeyId: pulumi.Output<string>;
    /**
     * A description of what the snapshot is.
     */
    public readonly description: pulumi.Output<string | undefined>;
    /**
     * Whether the snapshot is encrypted.
     */
    public readonly encrypted: pulumi.Output<boolean | undefined>;
    /**
     * The ARN for the KMS encryption key.
     * * `source_snapshot_id` The ARN for the snapshot to be copied.
     * * `source_region` The region of the source snapshot.
     */
    public readonly kmsKeyId: pulumi.Output<string | undefined>;
    /**
     * Value from an Amazon-maintained list (`amazon`, `aws-marketplace`, `microsoft`) of snapshot owners.
     */
    public /*out*/ readonly ownerAlias: pulumi.Output<string>;
    /**
     * The AWS account ID of the snapshot owner.
     */
    public /*out*/ readonly ownerId: pulumi.Output<string>;
    public readonly sourceRegion: pulumi.Output<string>;
    public readonly sourceSnapshotId: pulumi.Output<string>;
    /**
     * A mapping of tags for the snapshot.
     */
    public readonly tags: pulumi.Output<{[key: string]: any} | undefined>;
    public /*out*/ readonly volumeId: pulumi.Output<string>;
    /**
     * The size of the drive in GiBs.
     */
    public /*out*/ readonly volumeSize: pulumi.Output<number>;

    /**
     * Create a SnapshotCopy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: pulumi.WrappedObject<SnapshotCopyArgs>, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: pulumi.WrappedObject<SnapshotCopyArgs> | pulumi.WrappedObject<SnapshotCopyState>, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: SnapshotCopyState = argsOrState as SnapshotCopyState | undefined;
            inputs["dataEncryptionKeyId"] = state ? state.dataEncryptionKeyId : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["encrypted"] = state ? state.encrypted : undefined;
            inputs["kmsKeyId"] = state ? state.kmsKeyId : undefined;
            inputs["ownerAlias"] = state ? state.ownerAlias : undefined;
            inputs["ownerId"] = state ? state.ownerId : undefined;
            inputs["sourceRegion"] = state ? state.sourceRegion : undefined;
            inputs["sourceSnapshotId"] = state ? state.sourceSnapshotId : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["volumeId"] = state ? state.volumeId : undefined;
            inputs["volumeSize"] = state ? state.volumeSize : undefined;
        } else {
            const args = argsOrState as SnapshotCopyArgs | undefined;
            if (!args || args.sourceRegion === undefined) {
                throw new Error("Missing required property 'sourceRegion'");
            }
            if (!args || args.sourceSnapshotId === undefined) {
                throw new Error("Missing required property 'sourceSnapshotId'");
            }
            inputs["description"] = args ? args.description : undefined;
            inputs["encrypted"] = args ? args.encrypted : undefined;
            inputs["kmsKeyId"] = args ? args.kmsKeyId : undefined;
            inputs["sourceRegion"] = args ? args.sourceRegion : undefined;
            inputs["sourceSnapshotId"] = args ? args.sourceSnapshotId : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["dataEncryptionKeyId"] = undefined /*out*/;
            inputs["ownerAlias"] = undefined /*out*/;
            inputs["ownerId"] = undefined /*out*/;
            inputs["volumeId"] = undefined /*out*/;
            inputs["volumeSize"] = undefined /*out*/;
        }
        super("aws:ebs/snapshotCopy:SnapshotCopy", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering SnapshotCopy resources.
 */
export interface SnapshotCopyState {
    /**
     * The data encryption key identifier for the snapshot.
     * * `source_snapshot_id` The ARN of the copied snapshot.
     * * `source_region` The region of the source snapshot.
     */
    readonly dataEncryptionKeyId?: string;
    /**
     * A description of what the snapshot is.
     */
    readonly description?: string;
    /**
     * Whether the snapshot is encrypted.
     */
    readonly encrypted?: boolean;
    /**
     * The ARN for the KMS encryption key.
     * * `source_snapshot_id` The ARN for the snapshot to be copied.
     * * `source_region` The region of the source snapshot.
     */
    readonly kmsKeyId?: string;
    /**
     * Value from an Amazon-maintained list (`amazon`, `aws-marketplace`, `microsoft`) of snapshot owners.
     */
    readonly ownerAlias?: string;
    /**
     * The AWS account ID of the snapshot owner.
     */
    readonly ownerId?: string;
    readonly sourceRegion?: string;
    readonly sourceSnapshotId?: string;
    /**
     * A mapping of tags for the snapshot.
     */
    readonly tags?: {[key: string]: any};
    readonly volumeId?: string;
    /**
     * The size of the drive in GiBs.
     */
    readonly volumeSize?: number;
}

/**
 * The set of arguments for constructing a SnapshotCopy resource.
 */
export interface SnapshotCopyArgs {
    /**
     * A description of what the snapshot is.
     */
    readonly description?: string;
    /**
     * Whether the snapshot is encrypted.
     */
    readonly encrypted?: boolean;
    /**
     * The ARN for the KMS encryption key.
     * * `source_snapshot_id` The ARN for the snapshot to be copied.
     * * `source_region` The region of the source snapshot.
     */
    readonly kmsKeyId?: string;
    readonly sourceRegion: string;
    readonly sourceSnapshotId: string;
    /**
     * A mapping of tags for the snapshot.
     */
    readonly tags?: {[key: string]: any};
}
