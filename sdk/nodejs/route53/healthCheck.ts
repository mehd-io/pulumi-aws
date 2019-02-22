// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides a Route53 health check.
 * 
 * ## Example Usage
 * 
 * ### Connectivity and HTTP Status Code Check
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const example = new aws.route53.HealthCheck("example", {
 *     failureThreshold: 5,
 *     fqdn: "example.com",
 *     port: 80,
 *     requestInterval: 30,
 *     resourcePath: "/",
 *     tags: {
 *         Name: "tf-test-health-check",
 *     },
 *     type: "HTTP",
 * });
 * ```
 * 
 * ### Connectivity and String Matching Check
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const example = new aws.route53.HealthCheck("example", {
 *     failureThreshold: 5,
 *     fqdn: "example.com",
 *     port: 443,
 *     requestInterval: 30,
 *     resourcePath: "/",
 *     searchString: "example",
 *     type: "HTTPS_STR_MATCH",
 * });
 * ```
 * 
 * ### Aggregate Check
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const parent = new aws.route53.HealthCheck("parent", {
 *     childHealthThreshold: 1,
 *     childHealthchecks: [aws_route53_health_check_child.id],
 *     tags: {
 *         Name: "tf-test-calculated-health-check",
 *     },
 *     type: "CALCULATED",
 * });
 * ```
 * 
 * ### CloudWatch Alarm Check
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
 *     metricName: "CPUUtilization",
 *     namespace: "AWS/EC2",
 *     period: 120,
 *     statistic: "Average",
 *     threshold: 80,
 * });
 * const foo = new aws.route53.HealthCheck("foo", {
 *     cloudwatchAlarmName: foobar.alarmName,
 *     cloudwatchAlarmRegion: "us-west-2",
 *     insufficientDataHealthStatus: "Healthy",
 *     type: "CLOUDWATCH_METRIC",
 * });
 * ```
 */
export class HealthCheck extends pulumi.CustomResource {
    /**
     * Get an existing HealthCheck resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: pulumi.WrappedObject<HealthCheckState>, opts?: pulumi.CustomResourceOptions): HealthCheck {
        return new HealthCheck(name, <any>state, { ...opts, id: id });
    }

    /**
     * The minimum number of child health checks that must be healthy for Route 53 to consider the parent health check to be healthy. Valid values are integers between 0 and 256, inclusive
     */
    public readonly childHealthThreshold: pulumi.Output<number | undefined>;
    /**
     * For a specified parent health check, a list of HealthCheckId values for the associated child health checks.
     */
    public readonly childHealthchecks: pulumi.Output<string[] | undefined>;
    /**
     * The name of the CloudWatch alarm.
     */
    public readonly cloudwatchAlarmName: pulumi.Output<string | undefined>;
    /**
     * The CloudWatchRegion that the CloudWatch alarm was created in.
     */
    public readonly cloudwatchAlarmRegion: pulumi.Output<string | undefined>;
    /**
     * A boolean value that indicates whether Route53 should send the `fqdn` to the endpoint when performing the health check. This defaults to AWS' defaults: when the `type` is "HTTPS" `enable_sni` defaults to `true`, when `type` is anything else `enable_sni` defaults to `false`.
     */
    public readonly enableSni: pulumi.Output<boolean>;
    /**
     * The number of consecutive health checks that an endpoint must pass or fail.
     */
    public readonly failureThreshold: pulumi.Output<number | undefined>;
    /**
     * The fully qualified domain name of the endpoint to be checked.
     */
    public readonly fqdn: pulumi.Output<string | undefined>;
    /**
     * The status of the health check when CloudWatch has insufficient data about the state of associated alarm. Valid values are `Healthy` , `Unhealthy` and `LastKnownStatus`.
     */
    public readonly insufficientDataHealthStatus: pulumi.Output<string | undefined>;
    /**
     * A boolean value that indicates whether the status of health check should be inverted. For example, if a health check is healthy but Inverted is True , then Route 53 considers the health check to be unhealthy.
     */
    public readonly invertHealthcheck: pulumi.Output<boolean | undefined>;
    /**
     * The IP address of the endpoint to be checked.
     */
    public readonly ipAddress: pulumi.Output<string | undefined>;
    /**
     * A Boolean value that indicates whether you want Route 53 to measure the latency between health checkers in multiple AWS regions and your endpoint and to display CloudWatch latency graphs in the Route 53 console.
     */
    public readonly measureLatency: pulumi.Output<boolean | undefined>;
    /**
     * The port of the endpoint to be checked.
     */
    public readonly port: pulumi.Output<number | undefined>;
    /**
     * This is a reference name used in Caller Reference
     * (helpful for identifying single health_check set amongst others)
     */
    public readonly referenceName: pulumi.Output<string | undefined>;
    /**
     * A list of AWS regions that you want Amazon Route 53 health checkers to check the specified endpoint from.
     */
    public readonly regions: pulumi.Output<string[] | undefined>;
    /**
     * The number of seconds between the time that Amazon Route 53 gets a response from your endpoint and the time that it sends the next health-check request.
     */
    public readonly requestInterval: pulumi.Output<number | undefined>;
    /**
     * The path that you want Amazon Route 53 to request when performing health checks.
     */
    public readonly resourcePath: pulumi.Output<string | undefined>;
    /**
     * String searched in the first 5120 bytes of the response body for check to be considered healthy. Only valid with `HTTP_STR_MATCH` and `HTTPS_STR_MATCH`.
     */
    public readonly searchString: pulumi.Output<string | undefined>;
    /**
     * A mapping of tags to assign to the health check.
     */
    public readonly tags: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * The protocol to use when performing health checks. Valid values are `HTTP`, `HTTPS`, `HTTP_STR_MATCH`, `HTTPS_STR_MATCH`, `TCP`, `CALCULATED` and `CLOUDWATCH_METRIC`.
     */
    public readonly type: pulumi.Output<string>;

    /**
     * Create a HealthCheck resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: pulumi.WrappedObject<HealthCheckArgs>, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: pulumi.WrappedObject<HealthCheckArgs> | pulumi.WrappedObject<HealthCheckState>, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: HealthCheckState = argsOrState as HealthCheckState | undefined;
            inputs["childHealthThreshold"] = state ? state.childHealthThreshold : undefined;
            inputs["childHealthchecks"] = state ? state.childHealthchecks : undefined;
            inputs["cloudwatchAlarmName"] = state ? state.cloudwatchAlarmName : undefined;
            inputs["cloudwatchAlarmRegion"] = state ? state.cloudwatchAlarmRegion : undefined;
            inputs["enableSni"] = state ? state.enableSni : undefined;
            inputs["failureThreshold"] = state ? state.failureThreshold : undefined;
            inputs["fqdn"] = state ? state.fqdn : undefined;
            inputs["insufficientDataHealthStatus"] = state ? state.insufficientDataHealthStatus : undefined;
            inputs["invertHealthcheck"] = state ? state.invertHealthcheck : undefined;
            inputs["ipAddress"] = state ? state.ipAddress : undefined;
            inputs["measureLatency"] = state ? state.measureLatency : undefined;
            inputs["port"] = state ? state.port : undefined;
            inputs["referenceName"] = state ? state.referenceName : undefined;
            inputs["regions"] = state ? state.regions : undefined;
            inputs["requestInterval"] = state ? state.requestInterval : undefined;
            inputs["resourcePath"] = state ? state.resourcePath : undefined;
            inputs["searchString"] = state ? state.searchString : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as HealthCheckArgs | undefined;
            if (!args || args.type === undefined) {
                throw new Error("Missing required property 'type'");
            }
            inputs["childHealthThreshold"] = args ? args.childHealthThreshold : undefined;
            inputs["childHealthchecks"] = args ? args.childHealthchecks : undefined;
            inputs["cloudwatchAlarmName"] = args ? args.cloudwatchAlarmName : undefined;
            inputs["cloudwatchAlarmRegion"] = args ? args.cloudwatchAlarmRegion : undefined;
            inputs["enableSni"] = args ? args.enableSni : undefined;
            inputs["failureThreshold"] = args ? args.failureThreshold : undefined;
            inputs["fqdn"] = args ? args.fqdn : undefined;
            inputs["insufficientDataHealthStatus"] = args ? args.insufficientDataHealthStatus : undefined;
            inputs["invertHealthcheck"] = args ? args.invertHealthcheck : undefined;
            inputs["ipAddress"] = args ? args.ipAddress : undefined;
            inputs["measureLatency"] = args ? args.measureLatency : undefined;
            inputs["port"] = args ? args.port : undefined;
            inputs["referenceName"] = args ? args.referenceName : undefined;
            inputs["regions"] = args ? args.regions : undefined;
            inputs["requestInterval"] = args ? args.requestInterval : undefined;
            inputs["resourcePath"] = args ? args.resourcePath : undefined;
            inputs["searchString"] = args ? args.searchString : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["type"] = args ? args.type : undefined;
        }
        super("aws:route53/healthCheck:HealthCheck", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering HealthCheck resources.
 */
export interface HealthCheckState {
    /**
     * The minimum number of child health checks that must be healthy for Route 53 to consider the parent health check to be healthy. Valid values are integers between 0 and 256, inclusive
     */
    readonly childHealthThreshold?: number;
    /**
     * For a specified parent health check, a list of HealthCheckId values for the associated child health checks.
     */
    readonly childHealthchecks?: string[];
    /**
     * The name of the CloudWatch alarm.
     */
    readonly cloudwatchAlarmName?: string;
    /**
     * The CloudWatchRegion that the CloudWatch alarm was created in.
     */
    readonly cloudwatchAlarmRegion?: string;
    /**
     * A boolean value that indicates whether Route53 should send the `fqdn` to the endpoint when performing the health check. This defaults to AWS' defaults: when the `type` is "HTTPS" `enable_sni` defaults to `true`, when `type` is anything else `enable_sni` defaults to `false`.
     */
    readonly enableSni?: boolean;
    /**
     * The number of consecutive health checks that an endpoint must pass or fail.
     */
    readonly failureThreshold?: number;
    /**
     * The fully qualified domain name of the endpoint to be checked.
     */
    readonly fqdn?: string;
    /**
     * The status of the health check when CloudWatch has insufficient data about the state of associated alarm. Valid values are `Healthy` , `Unhealthy` and `LastKnownStatus`.
     */
    readonly insufficientDataHealthStatus?: string;
    /**
     * A boolean value that indicates whether the status of health check should be inverted. For example, if a health check is healthy but Inverted is True , then Route 53 considers the health check to be unhealthy.
     */
    readonly invertHealthcheck?: boolean;
    /**
     * The IP address of the endpoint to be checked.
     */
    readonly ipAddress?: string;
    /**
     * A Boolean value that indicates whether you want Route 53 to measure the latency between health checkers in multiple AWS regions and your endpoint and to display CloudWatch latency graphs in the Route 53 console.
     */
    readonly measureLatency?: boolean;
    /**
     * The port of the endpoint to be checked.
     */
    readonly port?: number;
    /**
     * This is a reference name used in Caller Reference
     * (helpful for identifying single health_check set amongst others)
     */
    readonly referenceName?: string;
    /**
     * A list of AWS regions that you want Amazon Route 53 health checkers to check the specified endpoint from.
     */
    readonly regions?: string[];
    /**
     * The number of seconds between the time that Amazon Route 53 gets a response from your endpoint and the time that it sends the next health-check request.
     */
    readonly requestInterval?: number;
    /**
     * The path that you want Amazon Route 53 to request when performing health checks.
     */
    readonly resourcePath?: string;
    /**
     * String searched in the first 5120 bytes of the response body for check to be considered healthy. Only valid with `HTTP_STR_MATCH` and `HTTPS_STR_MATCH`.
     */
    readonly searchString?: string;
    /**
     * A mapping of tags to assign to the health check.
     */
    readonly tags?: {[key: string]: any};
    /**
     * The protocol to use when performing health checks. Valid values are `HTTP`, `HTTPS`, `HTTP_STR_MATCH`, `HTTPS_STR_MATCH`, `TCP`, `CALCULATED` and `CLOUDWATCH_METRIC`.
     */
    readonly type?: string;
}

/**
 * The set of arguments for constructing a HealthCheck resource.
 */
export interface HealthCheckArgs {
    /**
     * The minimum number of child health checks that must be healthy for Route 53 to consider the parent health check to be healthy. Valid values are integers between 0 and 256, inclusive
     */
    readonly childHealthThreshold?: number;
    /**
     * For a specified parent health check, a list of HealthCheckId values for the associated child health checks.
     */
    readonly childHealthchecks?: string[];
    /**
     * The name of the CloudWatch alarm.
     */
    readonly cloudwatchAlarmName?: string;
    /**
     * The CloudWatchRegion that the CloudWatch alarm was created in.
     */
    readonly cloudwatchAlarmRegion?: string;
    /**
     * A boolean value that indicates whether Route53 should send the `fqdn` to the endpoint when performing the health check. This defaults to AWS' defaults: when the `type` is "HTTPS" `enable_sni` defaults to `true`, when `type` is anything else `enable_sni` defaults to `false`.
     */
    readonly enableSni?: boolean;
    /**
     * The number of consecutive health checks that an endpoint must pass or fail.
     */
    readonly failureThreshold?: number;
    /**
     * The fully qualified domain name of the endpoint to be checked.
     */
    readonly fqdn?: string;
    /**
     * The status of the health check when CloudWatch has insufficient data about the state of associated alarm. Valid values are `Healthy` , `Unhealthy` and `LastKnownStatus`.
     */
    readonly insufficientDataHealthStatus?: string;
    /**
     * A boolean value that indicates whether the status of health check should be inverted. For example, if a health check is healthy but Inverted is True , then Route 53 considers the health check to be unhealthy.
     */
    readonly invertHealthcheck?: boolean;
    /**
     * The IP address of the endpoint to be checked.
     */
    readonly ipAddress?: string;
    /**
     * A Boolean value that indicates whether you want Route 53 to measure the latency between health checkers in multiple AWS regions and your endpoint and to display CloudWatch latency graphs in the Route 53 console.
     */
    readonly measureLatency?: boolean;
    /**
     * The port of the endpoint to be checked.
     */
    readonly port?: number;
    /**
     * This is a reference name used in Caller Reference
     * (helpful for identifying single health_check set amongst others)
     */
    readonly referenceName?: string;
    /**
     * A list of AWS regions that you want Amazon Route 53 health checkers to check the specified endpoint from.
     */
    readonly regions?: string[];
    /**
     * The number of seconds between the time that Amazon Route 53 gets a response from your endpoint and the time that it sends the next health-check request.
     */
    readonly requestInterval?: number;
    /**
     * The path that you want Amazon Route 53 to request when performing health checks.
     */
    readonly resourcePath?: string;
    /**
     * String searched in the first 5120 bytes of the response body for check to be considered healthy. Only valid with `HTTP_STR_MATCH` and `HTTPS_STR_MATCH`.
     */
    readonly searchString?: string;
    /**
     * A mapping of tags to assign to the health check.
     */
    readonly tags?: {[key: string]: any};
    /**
     * The protocol to use when performing health checks. Valid values are `HTTP`, `HTTPS`, `HTTP_STR_MATCH`, `HTTPS_STR_MATCH`, `TCP`, `CALCULATED` and `CLOUDWATCH_METRIC`.
     */
    readonly type: string;
}
