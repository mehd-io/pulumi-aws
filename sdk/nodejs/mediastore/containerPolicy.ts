// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides a MediaStore Container Policy.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const exampleContainer = new aws.mediastore.Container("example", {});
 * const currentCallerIdentity = pulumi.output(aws.getCallerIdentity({}));
 * const currentRegion = pulumi.output(aws.getRegion({}));
 * const exampleContainerPolicy = new aws.mediastore.ContainerPolicy("example", {
 *     containerName: exampleContainer.name,
 *     policy: pulumi.all([currentCallerIdentity, currentCallerIdentity, currentRegion, exampleContainer.name]).apply(([currentCallerIdentity, currentCallerIdentity1, currentRegion, name]) => `{
 * 	"Version": "2012-10-17",
 * 	"Statement": [{
 * 		"Sid": "MediaStoreFullAccess",
 * 		"Action": [ "mediastore:*" ],
 * 		"Principal": {"AWS" : "arn:aws:iam::${currentCallerIdentity.accountId}:root"},
 * 		"Effect": "Allow",
 * 		"Resource": "arn:aws:mediastore:${currentCallerIdentity1.accountId}:${currentRegion.name}:container/${name}/*",
 * 		"Condition": {
 * 			"Bool": { "aws:SecureTransport": "true" }
 * 		}
 * 	}]
 * }
 * `),
 * });
 * ```
 */
export class ContainerPolicy extends pulumi.CustomResource {
    /**
     * Get an existing ContainerPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: pulumi.WrappedObject<ContainerPolicyState>, opts?: pulumi.CustomResourceOptions): ContainerPolicy {
        return new ContainerPolicy(name, <any>state, { ...opts, id: id });
    }

    /**
     * The name of the container.
     */
    public readonly containerName: pulumi.Output<string>;
    /**
     * The contents of the policy. For more information about building AWS IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://www.terraform.io/docs/providers/aws/guides/iam-policy-documents.html).
     */
    public readonly policy: pulumi.Output<string>;

    /**
     * Create a ContainerPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: pulumi.WrappedObject<ContainerPolicyArgs>, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: pulumi.WrappedObject<ContainerPolicyArgs> | pulumi.WrappedObject<ContainerPolicyState>, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: ContainerPolicyState = argsOrState as ContainerPolicyState | undefined;
            inputs["containerName"] = state ? state.containerName : undefined;
            inputs["policy"] = state ? state.policy : undefined;
        } else {
            const args = argsOrState as ContainerPolicyArgs | undefined;
            if (!args || args.containerName === undefined) {
                throw new Error("Missing required property 'containerName'");
            }
            if (!args || args.policy === undefined) {
                throw new Error("Missing required property 'policy'");
            }
            inputs["containerName"] = args ? args.containerName : undefined;
            inputs["policy"] = args ? args.policy : undefined;
        }
        super("aws:mediastore/containerPolicy:ContainerPolicy", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ContainerPolicy resources.
 */
export interface ContainerPolicyState {
    /**
     * The name of the container.
     */
    readonly containerName?: string;
    /**
     * The contents of the policy. For more information about building AWS IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://www.terraform.io/docs/providers/aws/guides/iam-policy-documents.html).
     */
    readonly policy?: string;
}

/**
 * The set of arguments for constructing a ContainerPolicy resource.
 */
export interface ContainerPolicyArgs {
    /**
     * The name of the container.
     */
    readonly containerName: string;
    /**
     * The contents of the policy. For more information about building AWS IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://www.terraform.io/docs/providers/aws/guides/iam-policy-documents.html).
     */
    readonly policy: string;
}
