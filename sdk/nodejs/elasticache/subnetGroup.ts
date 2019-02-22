// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides an ElastiCache Subnet Group resource.
 * 
 * > **NOTE:** ElastiCache Subnet Groups are only for use when working with an
 * ElastiCache cluster **inside** of a VPC. If you are on EC2 Classic, see the
 * ElastiCache Security Group resource.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const fooVpc = new aws.ec2.Vpc("foo", {
 *     cidrBlock: "10.0.0.0/16",
 *     tags: {
 *         Name: "tf-test",
 *     },
 * });
 * const fooSubnet = new aws.ec2.Subnet("foo", {
 *     availabilityZone: "us-west-2a",
 *     cidrBlock: "10.0.0.0/24",
 *     tags: {
 *         Name: "tf-test",
 *     },
 *     vpcId: fooVpc.id,
 * });
 * const bar = new aws.elasticache.SubnetGroup("bar", {
 *     subnetIds: [fooSubnet.id],
 * });
 * ```
 */
export class SubnetGroup extends pulumi.CustomResource {
    /**
     * Get an existing SubnetGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: pulumi.WrappedObject<SubnetGroupState>, opts?: pulumi.CustomResourceOptions): SubnetGroup {
        return new SubnetGroup(name, <any>state, { ...opts, id: id });
    }

    /**
     * Description for the cache subnet group. Defaults to "Managed by Terraform".
     */
    public readonly description: pulumi.Output<string>;
    /**
     * Name for the cache subnet group. Elasticache converts this name to lowercase.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * List of VPC Subnet IDs for the cache subnet group
     */
    public readonly subnetIds: pulumi.Output<string[]>;

    /**
     * Create a SubnetGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: pulumi.WrappedObject<SubnetGroupArgs>, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: pulumi.WrappedObject<SubnetGroupArgs> | pulumi.WrappedObject<SubnetGroupState>, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: SubnetGroupState = argsOrState as SubnetGroupState | undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["subnetIds"] = state ? state.subnetIds : undefined;
        } else {
            const args = argsOrState as SubnetGroupArgs | undefined;
            if (!args || args.subnetIds === undefined) {
                throw new Error("Missing required property 'subnetIds'");
            }
            inputs["description"] = (args ? args.description : undefined) || "Managed by Pulumi";
            inputs["name"] = args ? args.name : undefined;
            inputs["subnetIds"] = args ? args.subnetIds : undefined;
        }
        super("aws:elasticache/subnetGroup:SubnetGroup", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering SubnetGroup resources.
 */
export interface SubnetGroupState {
    /**
     * Description for the cache subnet group. Defaults to "Managed by Terraform".
     */
    readonly description?: string;
    /**
     * Name for the cache subnet group. Elasticache converts this name to lowercase.
     */
    readonly name?: string;
    /**
     * List of VPC Subnet IDs for the cache subnet group
     */
    readonly subnetIds?: string[];
}

/**
 * The set of arguments for constructing a SubnetGroup resource.
 */
export interface SubnetGroupArgs {
    /**
     * Description for the cache subnet group. Defaults to "Managed by Terraform".
     */
    readonly description?: string;
    /**
     * Name for the cache subnet group. Elasticache converts this name to lowercase.
     */
    readonly name?: string;
    /**
     * List of VPC Subnet IDs for the cache subnet group
     */
    readonly subnetIds: string[];
}
