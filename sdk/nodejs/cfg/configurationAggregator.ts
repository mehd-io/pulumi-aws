// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages an AWS Config Configuration Aggregator
 * 
 * ## Example Usage
 * 
 * ### Account Based Aggregation
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const account = new aws.cfg.ConfigurationAggregator("account", {
 *     accountAggregationSource: {
 *         accountIds: ["123456789012"],
 *         regions: ["us-west-2"],
 *     },
 * });
 * ```
 * 
 * ### Organization Based Aggregation
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const organizationRole = new aws.iam.Role("organization", {
 *     assumeRolePolicy: `{
 *   "Version": "2012-10-17",
 *   "Statement": [
 *     {
 *       "Sid": "",
 *       "Effect": "Allow",
 *       "Principal": {
 *         "Service": "config.amazonaws.com"
 *       },
 *       "Action": "sts:AssumeRole"
 *     }
 *   ]
 * }
 * `,
 * });
 * const organizationRolePolicyAttachment = new aws.iam.RolePolicyAttachment("organization", {
 *     policyArn: "arn:aws:iam::aws:policy/service-role/AWSConfigRoleForOrganizations",
 *     role: organizationRole.name,
 * });
 * const organizationConfigurationAggregator = new aws.cfg.ConfigurationAggregator("organization", {
 *     organizationAggregationSource: {
 *         allRegions: true,
 *         roleArn: organizationRole.arn,
 *     },
 * }, {dependsOn: [organizationRolePolicyAttachment]});
 * ```
 */
export class ConfigurationAggregator extends pulumi.CustomResource {
    /**
     * Get an existing ConfigurationAggregator resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: pulumi.WrappedObject<ConfigurationAggregatorState>, opts?: pulumi.CustomResourceOptions): ConfigurationAggregator {
        return new ConfigurationAggregator(name, <any>state, { ...opts, id: id });
    }

    /**
     * The account(s) to aggregate config data from as documented below.
     */
    public readonly accountAggregationSource: pulumi.Output<{ accountIds: string[], allRegions?: boolean, regions?: string[] } | undefined>;
    /**
     * The ARN of the aggregator
     */
    public /*out*/ readonly arn: pulumi.Output<string>;
    /**
     * The name of the configuration aggregator.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * The organization to aggregate config data from as documented below.
     */
    public readonly organizationAggregationSource: pulumi.Output<{ allRegions?: boolean, regions?: string[], roleArn: string } | undefined>;

    /**
     * Create a ConfigurationAggregator resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: pulumi.WrappedObject<ConfigurationAggregatorArgs>, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: pulumi.WrappedObject<ConfigurationAggregatorArgs> | pulumi.WrappedObject<ConfigurationAggregatorState>, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: ConfigurationAggregatorState = argsOrState as ConfigurationAggregatorState | undefined;
            inputs["accountAggregationSource"] = state ? state.accountAggregationSource : undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["organizationAggregationSource"] = state ? state.organizationAggregationSource : undefined;
        } else {
            const args = argsOrState as ConfigurationAggregatorArgs | undefined;
            inputs["accountAggregationSource"] = args ? args.accountAggregationSource : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["organizationAggregationSource"] = args ? args.organizationAggregationSource : undefined;
            inputs["arn"] = undefined /*out*/;
        }
        super("aws:cfg/configurationAggregator:ConfigurationAggregator", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ConfigurationAggregator resources.
 */
export interface ConfigurationAggregatorState {
    /**
     * The account(s) to aggregate config data from as documented below.
     */
    readonly accountAggregationSource?: { accountIds: string[], allRegions?: boolean, regions?: string[] };
    /**
     * The ARN of the aggregator
     */
    readonly arn?: string;
    /**
     * The name of the configuration aggregator.
     */
    readonly name?: string;
    /**
     * The organization to aggregate config data from as documented below.
     */
    readonly organizationAggregationSource?: { allRegions?: boolean, regions?: string[], roleArn: string };
}

/**
 * The set of arguments for constructing a ConfigurationAggregator resource.
 */
export interface ConfigurationAggregatorArgs {
    /**
     * The account(s) to aggregate config data from as documented below.
     */
    readonly accountAggregationSource?: { accountIds: string[], allRegions?: boolean, regions?: string[] };
    /**
     * The name of the configuration aggregator.
     */
    readonly name?: string;
    /**
     * The organization to aggregate config data from as documented below.
     */
    readonly organizationAggregationSource?: { allRegions?: boolean, regions?: string[], roleArn: string };
}
