// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides a resource to create a VPC Internet Gateway.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const gw = new aws.ec2.InternetGateway("gw", {
 *     tags: {
 *         Name: "main",
 *     },
 *     vpcId: aws_vpc_main.id,
 * });
 * ```
 */
export class InternetGateway extends pulumi.CustomResource {
    /**
     * Get an existing InternetGateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: pulumi.WrappedObject<InternetGatewayState>, opts?: pulumi.CustomResourceOptions): InternetGateway {
        return new InternetGateway(name, <any>state, { ...opts, id: id });
    }

    /**
     * The ID of the AWS account that owns the internet gateway.
     */
    public /*out*/ readonly ownerId: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * The VPC ID to create in.
     */
    public readonly vpcId: pulumi.Output<string | undefined>;

    /**
     * Create a InternetGateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: pulumi.WrappedObject<InternetGatewayArgs>, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: pulumi.WrappedObject<InternetGatewayArgs> | pulumi.WrappedObject<InternetGatewayState>, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: InternetGatewayState = argsOrState as InternetGatewayState | undefined;
            inputs["ownerId"] = state ? state.ownerId : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["vpcId"] = state ? state.vpcId : undefined;
        } else {
            const args = argsOrState as InternetGatewayArgs | undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["vpcId"] = args ? args.vpcId : undefined;
            inputs["ownerId"] = undefined /*out*/;
        }
        super("aws:ec2/internetGateway:InternetGateway", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering InternetGateway resources.
 */
export interface InternetGatewayState {
    /**
     * The ID of the AWS account that owns the internet gateway.
     */
    readonly ownerId?: string;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: {[key: string]: any};
    /**
     * The VPC ID to create in.
     */
    readonly vpcId?: string;
}

/**
 * The set of arguments for constructing a InternetGateway resource.
 */
export interface InternetGatewayArgs {
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: {[key: string]: any};
    /**
     * The VPC ID to create in.
     */
    readonly vpcId?: string;
}
