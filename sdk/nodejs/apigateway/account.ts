// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as enums from "../types/enums";
import * as utilities from "../utilities";

/**
 * Provides a settings of an API Gateway Account. Settings is applied region-wide per `provider` block.
 *
 * > **Note:** As there is no API method for deleting account settings or resetting it to defaults, destroying this resource will keep your account settings intact
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const cloudwatchRole = new aws.iam.Role("cloudwatchRole", {assumeRolePolicy: `{
 *   "Version": "2012-10-17",
 *   "Statement": [
 *     {
 *       "Sid": "",
 *       "Effect": "Allow",
 *       "Principal": {
 *         "Service": "apigateway.amazonaws.com"
 *       },
 *       "Action": "sts:AssumeRole"
 *     }
 *   ]
 * }
 * `});
 * const demo = new aws.apigateway.Account("demo", {cloudwatchRoleArn: cloudwatchRole.arn});
 * const cloudwatchRolePolicy = new aws.iam.RolePolicy("cloudwatchRolePolicy", {
 *     role: cloudwatchRole.id,
 *     policy: `{
 *     "Version": "2012-10-17",
 *     "Statement": [
 *         {
 *             "Effect": "Allow",
 *             "Action": [
 *                 "logs:CreateLogGroup",
 *                 "logs:CreateLogStream",
 *                 "logs:DescribeLogGroups",
 *                 "logs:DescribeLogStreams",
 *                 "logs:PutLogEvents",
 *                 "logs:GetLogEvents",
 *                 "logs:FilterLogEvents"
 *             ],
 *             "Resource": "*"
 *         }
 *     ]
 * }
 * `,
 * });
 * ```
 */
export class Account extends pulumi.CustomResource {
    /**
     * Get an existing Account resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AccountState, opts?: pulumi.CustomResourceOptions): Account {
        return new Account(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:apigateway/account:Account';

    /**
     * Returns true if the given object is an instance of Account.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Account {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Account.__pulumiType;
    }

    /**
     * The ARN of an IAM role for CloudWatch (to allow logging & monitoring).
     * See more [in AWS Docs](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-stage-settings.html#how-to-stage-settings-console).
     * Logging & monitoring can be enabled/disabled and otherwise tuned on the API Gateway Stage level.
     */
    public readonly cloudwatchRoleArn!: pulumi.Output<string | undefined>;
    /**
     * Account-Level throttle settings. See exported fields below.
     */
    public /*out*/ readonly throttleSettings!: pulumi.Output<outputs.apigateway.AccountThrottleSettings>;

    /**
     * Create a Account resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: AccountArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AccountArgs | AccountState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as AccountState | undefined;
            inputs["cloudwatchRoleArn"] = state ? state.cloudwatchRoleArn : undefined;
            inputs["throttleSettings"] = state ? state.throttleSettings : undefined;
        } else {
            const args = argsOrState as AccountArgs | undefined;
            inputs["cloudwatchRoleArn"] = args ? args.cloudwatchRoleArn : undefined;
            inputs["throttleSettings"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Account.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Account resources.
 */
export interface AccountState {
    /**
     * The ARN of an IAM role for CloudWatch (to allow logging & monitoring).
     * See more [in AWS Docs](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-stage-settings.html#how-to-stage-settings-console).
     * Logging & monitoring can be enabled/disabled and otherwise tuned on the API Gateway Stage level.
     */
    readonly cloudwatchRoleArn?: pulumi.Input<string>;
    /**
     * Account-Level throttle settings. See exported fields below.
     */
    readonly throttleSettings?: pulumi.Input<inputs.apigateway.AccountThrottleSettings>;
}

/**
 * The set of arguments for constructing a Account resource.
 */
export interface AccountArgs {
    /**
     * The ARN of an IAM role for CloudWatch (to allow logging & monitoring).
     * See more [in AWS Docs](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-stage-settings.html#how-to-stage-settings-console).
     * Logging & monitoring can be enabled/disabled and otherwise tuned on the API Gateway Stage level.
     */
    readonly cloudwatchRoleArn?: pulumi.Input<string>;
}
