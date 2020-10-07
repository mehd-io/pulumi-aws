// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as enums from "../types/enums";
import * as utilities from "../utilities";

/**
 * Provides a Resource Group.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const test = new aws.resourcegroups.Group("test", {
 *     resourceQuery: {
 *         query: `{
 *   "ResourceTypeFilters": [
 *     "AWS::EC2::Instance"
 *   ],
 *   "TagFilters": [
 *     {
 *       "Key": "Stage",
 *       "Values": ["Test"]
 *     }
 *   ]
 * }
 * `,
 *     },
 * });
 * ```
 */
export class Group extends pulumi.CustomResource {
    /**
     * Get an existing Group resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GroupState, opts?: pulumi.CustomResourceOptions): Group {
        return new Group(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:resourcegroups/group:Group';

    /**
     * Returns true if the given object is an instance of Group.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Group {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Group.__pulumiType;
    }

    /**
     * The ARN assigned by AWS for this resource group.
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * A description of the resource group.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The resource group's name. A resource group name can have a maximum of 127 characters, including letters, numbers, hyphens, dots, and underscores. The name cannot start with `AWS` or `aws`.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A `resourceQuery` block. Resource queries are documented below.
     */
    public readonly resourceQuery!: pulumi.Output<outputs.resourcegroups.GroupResourceQuery>;
    /**
     * Key-value map of resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;

    /**
     * Create a Group resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GroupArgs | GroupState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as GroupState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceQuery"] = state ? state.resourceQuery : undefined;
            inputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as GroupArgs | undefined;
            if (!args || args.resourceQuery === undefined) {
                throw new Error("Missing required property 'resourceQuery'");
            }
            inputs["description"] = args ? args.description : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceQuery"] = args ? args.resourceQuery : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["arn"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Group.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Group resources.
 */
export interface GroupState {
    /**
     * The ARN assigned by AWS for this resource group.
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * A description of the resource group.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The resource group's name. A resource group name can have a maximum of 127 characters, including letters, numbers, hyphens, dots, and underscores. The name cannot start with `AWS` or `aws`.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A `resourceQuery` block. Resource queries are documented below.
     */
    readonly resourceQuery?: pulumi.Input<inputs.resourcegroups.GroupResourceQuery>;
    /**
     * Key-value map of resource tags
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a Group resource.
 */
export interface GroupArgs {
    /**
     * A description of the resource group.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The resource group's name. A resource group name can have a maximum of 127 characters, including letters, numbers, hyphens, dots, and underscores. The name cannot start with `AWS` or `aws`.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A `resourceQuery` block. Resource queries are documented below.
     */
    readonly resourceQuery: pulumi.Input<inputs.resourcegroups.GroupResourceQuery>;
    /**
     * Key-value map of resource tags
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
