// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as enums from "../types/enums";
import * as utilities from "../utilities";

/**
 * Provides a CodeCommit Trigger Resource.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const testRepository = new aws.codecommit.Repository("testRepository", {repositoryName: "test"});
 * const testTrigger = new aws.codecommit.Trigger("testTrigger", {
 *     repositoryName: testRepository.repositoryName,
 *     triggers: [{
 *         name: "all",
 *         events: ["all"],
 *         destinationArn: aws_sns_topic.test.arn,
 *     }],
 * });
 * ```
 */
export class Trigger extends pulumi.CustomResource {
    /**
     * Get an existing Trigger resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TriggerState, opts?: pulumi.CustomResourceOptions): Trigger {
        return new Trigger(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:codecommit/trigger:Trigger';

    /**
     * Returns true if the given object is an instance of Trigger.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Trigger {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Trigger.__pulumiType;
    }

    public /*out*/ readonly configurationId!: pulumi.Output<string>;
    /**
     * The name for the repository. This needs to be less than 100 characters.
     */
    public readonly repositoryName!: pulumi.Output<string>;
    public readonly triggers!: pulumi.Output<outputs.codecommit.TriggerTrigger[]>;

    /**
     * Create a Trigger resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TriggerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TriggerArgs | TriggerState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as TriggerState | undefined;
            inputs["configurationId"] = state ? state.configurationId : undefined;
            inputs["repositoryName"] = state ? state.repositoryName : undefined;
            inputs["triggers"] = state ? state.triggers : undefined;
        } else {
            const args = argsOrState as TriggerArgs | undefined;
            if (!args || args.repositoryName === undefined) {
                throw new Error("Missing required property 'repositoryName'");
            }
            if (!args || args.triggers === undefined) {
                throw new Error("Missing required property 'triggers'");
            }
            inputs["repositoryName"] = args ? args.repositoryName : undefined;
            inputs["triggers"] = args ? args.triggers : undefined;
            inputs["configurationId"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Trigger.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Trigger resources.
 */
export interface TriggerState {
    readonly configurationId?: pulumi.Input<string>;
    /**
     * The name for the repository. This needs to be less than 100 characters.
     */
    readonly repositoryName?: pulumi.Input<string>;
    readonly triggers?: pulumi.Input<pulumi.Input<inputs.codecommit.TriggerTrigger>[]>;
}

/**
 * The set of arguments for constructing a Trigger resource.
 */
export interface TriggerArgs {
    /**
     * The name for the repository. This needs to be less than 100 characters.
     */
    readonly repositoryName: pulumi.Input<string>;
    readonly triggers: pulumi.Input<pulumi.Input<inputs.codecommit.TriggerTrigger>[]>;
}
