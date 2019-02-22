// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

import {PolicyDocument} from "../iam/documents";

/**
 * Attaches a policy to an S3 bucket resource.
 * 
 * ## Example Usage
 * 
 * ### Basic Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const bucket = new aws.s3.Bucket("b", {
 *     bucket: "my_tf_test_bucket",
 * });
 * const bucketPolicy = new aws.s3.BucketPolicy("b", {
 *     bucket: bucket.id,
 *     policy: `{
 *   "Version": "2012-10-17",
 *   "Id": "MYBUCKETPOLICY",
 *   "Statement": [
 *     {
 *       "Sid": "IPAllow",
 *       "Effect": "Deny",
 *       "Principal": "*",
 *       "Action": "s3:*",
 *       "Resource": "arn:aws:s3:::my_tf_test_bucket/*",
 *       "Condition": {
 *          "IpAddress": {"aws:SourceIp": "8.8.8.8/32"}
 *       }
 *     }
 *   ]
 * }
 * `,
 * });
 * ```
 */
export class BucketPolicy extends pulumi.CustomResource {
    /**
     * Get an existing BucketPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: pulumi.WrappedObject<BucketPolicyState>, opts?: pulumi.CustomResourceOptions): BucketPolicy {
        return new BucketPolicy(name, <any>state, { ...opts, id: id });
    }

    /**
     * The name of the bucket to which to apply the policy.
     */
    public readonly bucket: pulumi.Output<string>;
    /**
     * The text of the policy. For more information about building AWS IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://www.terraform.io/docs/providers/aws/guides/iam-policy-documents.html).
     */
    public readonly policy: pulumi.Output<string>;

    /**
     * Create a BucketPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: pulumi.WrappedObject<BucketPolicyArgs>, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: pulumi.WrappedObject<BucketPolicyArgs> | pulumi.WrappedObject<BucketPolicyState>, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: BucketPolicyState = argsOrState as BucketPolicyState | undefined;
            inputs["bucket"] = state ? state.bucket : undefined;
            inputs["policy"] = state ? state.policy : undefined;
        } else {
            const args = argsOrState as BucketPolicyArgs | undefined;
            if (!args || args.bucket === undefined) {
                throw new Error("Missing required property 'bucket'");
            }
            if (!args || args.policy === undefined) {
                throw new Error("Missing required property 'policy'");
            }
            inputs["bucket"] = args ? args.bucket : undefined;
            inputs["policy"] = args ? args.policy : undefined;
        }
        super("aws:s3/bucketPolicy:BucketPolicy", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering BucketPolicy resources.
 */
export interface BucketPolicyState {
    /**
     * The name of the bucket to which to apply the policy.
     */
    readonly bucket?: string;
    /**
     * The text of the policy. For more information about building AWS IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://www.terraform.io/docs/providers/aws/guides/iam-policy-documents.html).
     */
    readonly policy?: string | PolicyDocument;
}

/**
 * The set of arguments for constructing a BucketPolicy resource.
 */
export interface BucketPolicyArgs {
    /**
     * The name of the bucket to which to apply the policy.
     */
    readonly bucket: string;
    /**
     * The text of the policy. For more information about building AWS IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://www.terraform.io/docs/providers/aws/guides/iam-policy-documents.html).
     */
    readonly policy: string | PolicyDocument;
}
