// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

import {Topic} from "../sns/topic";

/**
 * Provides a CloudWatch Metric Alarm resource.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const foobar = new aws.cloudwatch.MetricAlarm("foobar", {
 *     alarmDescription: "This metric monitors ec2 cpu utilization",
 *     name: "terraform-test-foobar5",
 *     comparisonOperator: "GreaterThanOrEqualToThreshold",
 *     evaluationPeriods: 2,
 *     insufficientDataActions: [],
 *     metricName: "CPUUtilization",
 *     namespace: "AWS/EC2",
 *     period: 120,
 *     statistic: "Average",
 *     threshold: 80,
 * });
 * ```
 * 
 * ## Example in Conjunction with Scaling Policies
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const batPolicy = new aws.autoscaling.Policy("bat", {
 *     adjustmentType: "ChangeInCapacity",
 *     autoscalingGroupName: aws_autoscaling_group_bar.name,
 *     cooldown: 300,
 *     scalingAdjustment: 4,
 * });
 * const batMetricAlarm = new aws.cloudwatch.MetricAlarm("bat", {
 *     alarmActions: [batPolicy.arn],
 *     alarmDescription: "This metric monitors ec2 cpu utilization",
 *     name: "terraform-test-foobar5",
 *     comparisonOperator: "GreaterThanOrEqualToThreshold",
 *     dimensions: {
 *         AutoScalingGroupName: aws_autoscaling_group_bar.name,
 *     },
 *     evaluationPeriods: 2,
 *     metricName: "CPUUtilization",
 *     namespace: "AWS/EC2",
 *     period: 120,
 *     statistic: "Average",
 *     threshold: 80,
 * });
 * ```
 * 
 * ## Example with an Expression
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const foobar = new aws.cloudwatch.MetricAlarm("foobar", {
 *     alarmDescription: "Request error rate has exceeded 10%",
 *     name: "terraform-test-foobar%d",
 *     comparisonOperator: "GreaterThanOrEqualToThreshold",
 *     evaluationPeriods: 2,
 *     insufficientDataActions: [],
 *     metricQueries: [
 *         {
 *             expression: "m2/m1*100",
 *             id: "e1",
 *             label: "Error Rate",
 *             returnData: true,
 *         },
 *         {
 *             id: "m1",
 *             metric: {
 *                 dimensions: {
 *                     LoadBalancer: "app/web",
 *                 },
 *                 metricName: "RequestCount",
 *                 namespace: "AWS/ApplicationELB",
 *                 period: 120,
 *                 stat: "Sum",
 *                 unit: "Count",
 *             },
 *         },
 *         {
 *             id: "m2",
 *             metric: {
 *                 dimensions: {
 *                     LoadBalancer: "app/web",
 *                 },
 *                 metricName: "HTTPCode_ELB_5XX_Count",
 *                 namespace: "AWS/ApplicationELB",
 *                 period: 120,
 *                 stat: "Sum",
 *                 unit: "Count",
 *             },
 *         },
 *     ],
 *     threshold: 0.1,
 * });
 * ```
 * 
 * > **NOTE:**  You cannot create a metric alarm consisting of both `statistic` and `extended_statistic` parameters.
 * You must choose one or the other
 */
export class MetricAlarm extends pulumi.CustomResource {
    /**
     * Get an existing MetricAlarm resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: pulumi.WrappedObject<MetricAlarmState>, opts?: pulumi.CustomResourceOptions): MetricAlarm {
        return new MetricAlarm(name, <any>state, { ...opts, id: id });
    }

    /**
     * Indicates whether or not actions should be executed during any changes to the alarm's state. Defaults to `true`.
     */
    public readonly actionsEnabled: pulumi.Output<boolean | undefined>;
    /**
     * The list of actions to execute when this alarm transitions into an ALARM state from any other state. Each action is specified as an Amazon Resource Number (ARN).
     */
    public readonly alarmActions: pulumi.Output<string[] | undefined>;
    /**
     * The description for the alarm.
     */
    public readonly alarmDescription: pulumi.Output<string | undefined>;
    /**
     * The descriptive name for the alarm. This name must be unique within the user's AWS account
     */
    public readonly name: pulumi.Output<string>;
    /**
     * The ARN of the cloudwatch metric alarm.
     */
    public /*out*/ readonly arn: pulumi.Output<string>;
    /**
     * The arithmetic operation to use when comparing the specified Statistic and Threshold. The specified Statistic value is used as the first operand. Either of the following is supported: `GreaterThanOrEqualToThreshold`, `GreaterThanThreshold`, `LessThanThreshold`, `LessThanOrEqualToThreshold`.
     */
    public readonly comparisonOperator: pulumi.Output<string>;
    /**
     * The number of datapoints that must be breaching to trigger the alarm.
     */
    public readonly datapointsToAlarm: pulumi.Output<number | undefined>;
    /**
     * The dimensions for this metric.  For the list of available dimensions see the AWS documentation [here](http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/CW_Support_For_AWS.html).
     */
    public readonly dimensions: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * Used only for alarms
     * based on percentiles. If you specify `ignore`, the alarm state will not
     * change during periods with too few data points to be statistically significant.
     * If you specify `evaluate` or omit this parameter, the alarm will always be
     * evaluated and possibly change state no matter how many data points are available.
     * The following values are supported: `ignore`, and `evaluate`.
     */
    public readonly evaluateLowSampleCountPercentiles: pulumi.Output<string>;
    /**
     * The number of periods over which data is compared to the specified threshold.
     */
    public readonly evaluationPeriods: pulumi.Output<number>;
    /**
     * The percentile statistic for the metric associated with the alarm. Specify a value between p0.0 and p100.
     */
    public readonly extendedStatistic: pulumi.Output<string | undefined>;
    /**
     * The list of actions to execute when this alarm transitions into an INSUFFICIENT_DATA state from any other state. Each action is specified as an Amazon Resource Number (ARN).
     */
    public readonly insufficientDataActions: pulumi.Output<string[] | undefined>;
    /**
     * The name for this metric.
     * See docs for [supported metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/CW_Support_For_AWS.html).
     */
    public readonly metricName: pulumi.Output<string | undefined>;
    /**
     * Enables you to create an alarm based on a metric math expression. You may specify at most 20.
     */
    public readonly metricQueries: pulumi.Output<{ expression?: string, id: string, label?: string, metric?: { dimensions?: {[key: string]: any}, metricName: string, namespace?: string, period: number, stat: string, unit?: string }, returnData?: boolean }[] | undefined>;
    /**
     * The namespace for this metric. See docs for the [list of namespaces](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/aws-namespaces.html).
     * See docs for [supported metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/CW_Support_For_AWS.html).
     */
    public readonly namespace: pulumi.Output<string | undefined>;
    /**
     * The list of actions to execute when this alarm transitions into an OK state from any other state. Each action is specified as an Amazon Resource Number (ARN).
     */
    public readonly okActions: pulumi.Output<string[] | undefined>;
    /**
     * The period in seconds over which the specified `stat` is applied.
     */
    public readonly period: pulumi.Output<number | undefined>;
    /**
     * The statistic to apply to the alarm's associated metric.
     * Either of the following is supported: `SampleCount`, `Average`, `Sum`, `Minimum`, `Maximum`
     */
    public readonly statistic: pulumi.Output<string | undefined>;
    /**
     * The value against which the specified statistic is compared.
     */
    public readonly threshold: pulumi.Output<number>;
    /**
     * Sets how this alarm is to handle missing data points. The following values are supported: `missing`, `ignore`, `breaching` and `notBreaching`. Defaults to `missing`.
     */
    public readonly treatMissingData: pulumi.Output<string | undefined>;
    /**
     * The unit for this metric.
     */
    public readonly unit: pulumi.Output<string | undefined>;

    /**
     * Create a MetricAlarm resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: pulumi.WrappedObject<MetricAlarmArgs>, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: pulumi.WrappedObject<MetricAlarmArgs> | pulumi.WrappedObject<MetricAlarmState>, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: MetricAlarmState = argsOrState as MetricAlarmState | undefined;
            inputs["actionsEnabled"] = state ? state.actionsEnabled : undefined;
            inputs["alarmActions"] = state ? state.alarmActions : undefined;
            inputs["alarmDescription"] = state ? state.alarmDescription : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["comparisonOperator"] = state ? state.comparisonOperator : undefined;
            inputs["datapointsToAlarm"] = state ? state.datapointsToAlarm : undefined;
            inputs["dimensions"] = state ? state.dimensions : undefined;
            inputs["evaluateLowSampleCountPercentiles"] = state ? state.evaluateLowSampleCountPercentiles : undefined;
            inputs["evaluationPeriods"] = state ? state.evaluationPeriods : undefined;
            inputs["extendedStatistic"] = state ? state.extendedStatistic : undefined;
            inputs["insufficientDataActions"] = state ? state.insufficientDataActions : undefined;
            inputs["metricName"] = state ? state.metricName : undefined;
            inputs["metricQueries"] = state ? state.metricQueries : undefined;
            inputs["namespace"] = state ? state.namespace : undefined;
            inputs["okActions"] = state ? state.okActions : undefined;
            inputs["period"] = state ? state.period : undefined;
            inputs["statistic"] = state ? state.statistic : undefined;
            inputs["threshold"] = state ? state.threshold : undefined;
            inputs["treatMissingData"] = state ? state.treatMissingData : undefined;
            inputs["unit"] = state ? state.unit : undefined;
        } else {
            const args = argsOrState as MetricAlarmArgs | undefined;
            if (!args || args.comparisonOperator === undefined) {
                throw new Error("Missing required property 'comparisonOperator'");
            }
            if (!args || args.evaluationPeriods === undefined) {
                throw new Error("Missing required property 'evaluationPeriods'");
            }
            if (!args || args.threshold === undefined) {
                throw new Error("Missing required property 'threshold'");
            }
            inputs["actionsEnabled"] = args ? args.actionsEnabled : undefined;
            inputs["alarmActions"] = args ? args.alarmActions : undefined;
            inputs["alarmDescription"] = args ? args.alarmDescription : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["comparisonOperator"] = args ? args.comparisonOperator : undefined;
            inputs["datapointsToAlarm"] = args ? args.datapointsToAlarm : undefined;
            inputs["dimensions"] = args ? args.dimensions : undefined;
            inputs["evaluateLowSampleCountPercentiles"] = args ? args.evaluateLowSampleCountPercentiles : undefined;
            inputs["evaluationPeriods"] = args ? args.evaluationPeriods : undefined;
            inputs["extendedStatistic"] = args ? args.extendedStatistic : undefined;
            inputs["insufficientDataActions"] = args ? args.insufficientDataActions : undefined;
            inputs["metricName"] = args ? args.metricName : undefined;
            inputs["metricQueries"] = args ? args.metricQueries : undefined;
            inputs["namespace"] = args ? args.namespace : undefined;
            inputs["okActions"] = args ? args.okActions : undefined;
            inputs["period"] = args ? args.period : undefined;
            inputs["statistic"] = args ? args.statistic : undefined;
            inputs["threshold"] = args ? args.threshold : undefined;
            inputs["treatMissingData"] = args ? args.treatMissingData : undefined;
            inputs["unit"] = args ? args.unit : undefined;
            inputs["arn"] = undefined /*out*/;
        }
        super("aws:cloudwatch/metricAlarm:MetricAlarm", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering MetricAlarm resources.
 */
export interface MetricAlarmState {
    /**
     * Indicates whether or not actions should be executed during any changes to the alarm's state. Defaults to `true`.
     */
    readonly actionsEnabled?: boolean;
    /**
     * The list of actions to execute when this alarm transitions into an ALARM state from any other state. Each action is specified as an Amazon Resource Number (ARN).
     */
    readonly alarmActions?: string | Topic[];
    /**
     * The description for the alarm.
     */
    readonly alarmDescription?: string;
    /**
     * The descriptive name for the alarm. This name must be unique within the user's AWS account
     */
    readonly name?: string;
    /**
     * The ARN of the cloudwatch metric alarm.
     */
    readonly arn?: string;
    /**
     * The arithmetic operation to use when comparing the specified Statistic and Threshold. The specified Statistic value is used as the first operand. Either of the following is supported: `GreaterThanOrEqualToThreshold`, `GreaterThanThreshold`, `LessThanThreshold`, `LessThanOrEqualToThreshold`.
     */
    readonly comparisonOperator?: string;
    /**
     * The number of datapoints that must be breaching to trigger the alarm.
     */
    readonly datapointsToAlarm?: number;
    /**
     * The dimensions for this metric.  For the list of available dimensions see the AWS documentation [here](http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/CW_Support_For_AWS.html).
     */
    readonly dimensions?: {[key: string]: any};
    /**
     * Used only for alarms
     * based on percentiles. If you specify `ignore`, the alarm state will not
     * change during periods with too few data points to be statistically significant.
     * If you specify `evaluate` or omit this parameter, the alarm will always be
     * evaluated and possibly change state no matter how many data points are available.
     * The following values are supported: `ignore`, and `evaluate`.
     */
    readonly evaluateLowSampleCountPercentiles?: string;
    /**
     * The number of periods over which data is compared to the specified threshold.
     */
    readonly evaluationPeriods?: number;
    /**
     * The percentile statistic for the metric associated with the alarm. Specify a value between p0.0 and p100.
     */
    readonly extendedStatistic?: string;
    /**
     * The list of actions to execute when this alarm transitions into an INSUFFICIENT_DATA state from any other state. Each action is specified as an Amazon Resource Number (ARN).
     */
    readonly insufficientDataActions?: string | Topic[];
    /**
     * The name for this metric.
     * See docs for [supported metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/CW_Support_For_AWS.html).
     */
    readonly metricName?: string;
    /**
     * Enables you to create an alarm based on a metric math expression. You may specify at most 20.
     */
    readonly metricQueries?: { expression?: string, id: string, label?: string, metric?: { dimensions?: {[key: string]: any}, metricName: string, namespace?: string, period: number, stat: string, unit?: string }, returnData?: boolean }[];
    /**
     * The namespace for this metric. See docs for the [list of namespaces](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/aws-namespaces.html).
     * See docs for [supported metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/CW_Support_For_AWS.html).
     */
    readonly namespace?: string;
    /**
     * The list of actions to execute when this alarm transitions into an OK state from any other state. Each action is specified as an Amazon Resource Number (ARN).
     */
    readonly okActions?: string | Topic[];
    /**
     * The period in seconds over which the specified `stat` is applied.
     */
    readonly period?: number;
    /**
     * The statistic to apply to the alarm's associated metric.
     * Either of the following is supported: `SampleCount`, `Average`, `Sum`, `Minimum`, `Maximum`
     */
    readonly statistic?: string;
    /**
     * The value against which the specified statistic is compared.
     */
    readonly threshold?: number;
    /**
     * Sets how this alarm is to handle missing data points. The following values are supported: `missing`, `ignore`, `breaching` and `notBreaching`. Defaults to `missing`.
     */
    readonly treatMissingData?: string;
    /**
     * The unit for this metric.
     */
    readonly unit?: string;
}

/**
 * The set of arguments for constructing a MetricAlarm resource.
 */
export interface MetricAlarmArgs {
    /**
     * Indicates whether or not actions should be executed during any changes to the alarm's state. Defaults to `true`.
     */
    readonly actionsEnabled?: boolean;
    /**
     * The list of actions to execute when this alarm transitions into an ALARM state from any other state. Each action is specified as an Amazon Resource Number (ARN).
     */
    readonly alarmActions?: string | Topic[];
    /**
     * The description for the alarm.
     */
    readonly alarmDescription?: string;
    /**
     * The descriptive name for the alarm. This name must be unique within the user's AWS account
     */
    readonly name?: string;
    /**
     * The arithmetic operation to use when comparing the specified Statistic and Threshold. The specified Statistic value is used as the first operand. Either of the following is supported: `GreaterThanOrEqualToThreshold`, `GreaterThanThreshold`, `LessThanThreshold`, `LessThanOrEqualToThreshold`.
     */
    readonly comparisonOperator: string;
    /**
     * The number of datapoints that must be breaching to trigger the alarm.
     */
    readonly datapointsToAlarm?: number;
    /**
     * The dimensions for this metric.  For the list of available dimensions see the AWS documentation [here](http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/CW_Support_For_AWS.html).
     */
    readonly dimensions?: {[key: string]: any};
    /**
     * Used only for alarms
     * based on percentiles. If you specify `ignore`, the alarm state will not
     * change during periods with too few data points to be statistically significant.
     * If you specify `evaluate` or omit this parameter, the alarm will always be
     * evaluated and possibly change state no matter how many data points are available.
     * The following values are supported: `ignore`, and `evaluate`.
     */
    readonly evaluateLowSampleCountPercentiles?: string;
    /**
     * The number of periods over which data is compared to the specified threshold.
     */
    readonly evaluationPeriods: number;
    /**
     * The percentile statistic for the metric associated with the alarm. Specify a value between p0.0 and p100.
     */
    readonly extendedStatistic?: string;
    /**
     * The list of actions to execute when this alarm transitions into an INSUFFICIENT_DATA state from any other state. Each action is specified as an Amazon Resource Number (ARN).
     */
    readonly insufficientDataActions?: string | Topic[];
    /**
     * The name for this metric.
     * See docs for [supported metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/CW_Support_For_AWS.html).
     */
    readonly metricName?: string;
    /**
     * Enables you to create an alarm based on a metric math expression. You may specify at most 20.
     */
    readonly metricQueries?: { expression?: string, id: string, label?: string, metric?: { dimensions?: {[key: string]: any}, metricName: string, namespace?: string, period: number, stat: string, unit?: string }, returnData?: boolean }[];
    /**
     * The namespace for this metric. See docs for the [list of namespaces](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/aws-namespaces.html).
     * See docs for [supported metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/CW_Support_For_AWS.html).
     */
    readonly namespace?: string;
    /**
     * The list of actions to execute when this alarm transitions into an OK state from any other state. Each action is specified as an Amazon Resource Number (ARN).
     */
    readonly okActions?: string | Topic[];
    /**
     * The period in seconds over which the specified `stat` is applied.
     */
    readonly period?: number;
    /**
     * The statistic to apply to the alarm's associated metric.
     * Either of the following is supported: `SampleCount`, `Average`, `Sum`, `Minimum`, `Maximum`
     */
    readonly statistic?: string;
    /**
     * The value against which the specified statistic is compared.
     */
    readonly threshold: number;
    /**
     * Sets how this alarm is to handle missing data points. The following values are supported: `missing`, `ignore`, `breaching` and `notBreaching`. Defaults to `missing`.
     */
    readonly treatMissingData?: string;
    /**
     * The unit for this metric.
     */
    readonly unit?: string;
}
