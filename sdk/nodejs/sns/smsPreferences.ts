// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides a way to set SNS SMS preferences.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const updateSmsPrefs = new aws.sns.SmsPreferences("update_sms_prefs", {});
 * ```
 */
export class SmsPreferences extends pulumi.CustomResource {
    /**
     * Get an existing SmsPreferences resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: pulumi.WrappedObject<SmsPreferencesState>, opts?: pulumi.CustomResourceOptions): SmsPreferences {
        return new SmsPreferences(name, <any>state, { ...opts, id: id });
    }

    /**
     * A string, such as your business brand, that is displayed as the sender on the receiving device.
     */
    public readonly defaultSenderId: pulumi.Output<string | undefined>;
    /**
     * The type of SMS message that you will send by default. Possible values are: Promotional, Transactional
     */
    public readonly defaultSmsType: pulumi.Output<string | undefined>;
    /**
     * The ARN of the IAM role that allows Amazon SNS to write logs about SMS deliveries in CloudWatch Logs.
     */
    public readonly deliveryStatusIamRoleArn: pulumi.Output<string | undefined>;
    /**
     * The percentage of successful SMS deliveries for which Amazon SNS will write logs in CloudWatch Logs. The value must be between 0 and 100.
     */
    public readonly deliveryStatusSuccessSamplingRate: pulumi.Output<string | undefined>;
    /**
     * The maximum amount in USD that you are willing to spend each month to send SMS messages.
     */
    public readonly monthlySpendLimit: pulumi.Output<string | undefined>;
    /**
     * The name of the Amazon S3 bucket to receive daily SMS usage reports from Amazon SNS.
     */
    public readonly usageReportS3Bucket: pulumi.Output<string | undefined>;

    /**
     * Create a SmsPreferences resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: pulumi.WrappedObject<SmsPreferencesArgs>, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: pulumi.WrappedObject<SmsPreferencesArgs> | pulumi.WrappedObject<SmsPreferencesState>, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: SmsPreferencesState = argsOrState as SmsPreferencesState | undefined;
            inputs["defaultSenderId"] = state ? state.defaultSenderId : undefined;
            inputs["defaultSmsType"] = state ? state.defaultSmsType : undefined;
            inputs["deliveryStatusIamRoleArn"] = state ? state.deliveryStatusIamRoleArn : undefined;
            inputs["deliveryStatusSuccessSamplingRate"] = state ? state.deliveryStatusSuccessSamplingRate : undefined;
            inputs["monthlySpendLimit"] = state ? state.monthlySpendLimit : undefined;
            inputs["usageReportS3Bucket"] = state ? state.usageReportS3Bucket : undefined;
        } else {
            const args = argsOrState as SmsPreferencesArgs | undefined;
            inputs["defaultSenderId"] = args ? args.defaultSenderId : undefined;
            inputs["defaultSmsType"] = args ? args.defaultSmsType : undefined;
            inputs["deliveryStatusIamRoleArn"] = args ? args.deliveryStatusIamRoleArn : undefined;
            inputs["deliveryStatusSuccessSamplingRate"] = args ? args.deliveryStatusSuccessSamplingRate : undefined;
            inputs["monthlySpendLimit"] = args ? args.monthlySpendLimit : undefined;
            inputs["usageReportS3Bucket"] = args ? args.usageReportS3Bucket : undefined;
        }
        super("aws:sns/smsPreferences:SmsPreferences", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering SmsPreferences resources.
 */
export interface SmsPreferencesState {
    /**
     * A string, such as your business brand, that is displayed as the sender on the receiving device.
     */
    readonly defaultSenderId?: string;
    /**
     * The type of SMS message that you will send by default. Possible values are: Promotional, Transactional
     */
    readonly defaultSmsType?: string;
    /**
     * The ARN of the IAM role that allows Amazon SNS to write logs about SMS deliveries in CloudWatch Logs.
     */
    readonly deliveryStatusIamRoleArn?: string;
    /**
     * The percentage of successful SMS deliveries for which Amazon SNS will write logs in CloudWatch Logs. The value must be between 0 and 100.
     */
    readonly deliveryStatusSuccessSamplingRate?: string;
    /**
     * The maximum amount in USD that you are willing to spend each month to send SMS messages.
     */
    readonly monthlySpendLimit?: string;
    /**
     * The name of the Amazon S3 bucket to receive daily SMS usage reports from Amazon SNS.
     */
    readonly usageReportS3Bucket?: string;
}

/**
 * The set of arguments for constructing a SmsPreferences resource.
 */
export interface SmsPreferencesArgs {
    /**
     * A string, such as your business brand, that is displayed as the sender on the receiving device.
     */
    readonly defaultSenderId?: string;
    /**
     * The type of SMS message that you will send by default. Possible values are: Promotional, Transactional
     */
    readonly defaultSmsType?: string;
    /**
     * The ARN of the IAM role that allows Amazon SNS to write logs about SMS deliveries in CloudWatch Logs.
     */
    readonly deliveryStatusIamRoleArn?: string;
    /**
     * The percentage of successful SMS deliveries for which Amazon SNS will write logs in CloudWatch Logs. The value must be between 0 and 100.
     */
    readonly deliveryStatusSuccessSamplingRate?: string;
    /**
     * The maximum amount in USD that you are willing to spend each month to send SMS messages.
     */
    readonly monthlySpendLimit?: string;
    /**
     * The name of the Amazon S3 bucket to receive daily SMS usage reports from Amazon SNS.
     */
    readonly usageReportS3Bucket?: string;
}
