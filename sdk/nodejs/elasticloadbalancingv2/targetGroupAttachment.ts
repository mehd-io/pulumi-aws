// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides the ability to register instances and containers with an Application Load Balancer (ALB) or Network Load Balancer (NLB) target group. For attaching resources with Elastic Load Balancer (ELB), see the [`aws_elb_attachment` resource](https://www.terraform.io/docs/providers/aws/r/elb_attachment.html).
 * 
 * > **Note:** `aws_alb_target_group_attachment` is known as `aws_lb_target_group_attachment`. The functionality is identical.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const testInstance = new aws.ec2.Instance("test", {});
 * const testTargetGroup = new aws.elasticloadbalancingv2.TargetGroup("test", {});
 * const testTargetGroupAttachment = new aws.elasticloadbalancingv2.TargetGroupAttachment("test", {
 *     port: 80,
 *     targetGroupArn: testTargetGroup.arn,
 *     targetId: testInstance.id,
 * });
 * ```
 * 
 * ## Usage with lambda
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const testFunction = new aws.lambda.Function("test", {});
 * const testTargetGroup = new aws.elasticloadbalancingv2.TargetGroup("test", {
 *     targetType: "lambda",
 * });
 * const withLb = new aws.lambda.Permission("with_lb", {
 *     action: "lambda:InvokeFunction",
 *     function: testFunction.arn,
 *     principal: "elasticloadbalancing.amazonaws.com",
 *     sourceArn: testTargetGroup.arn,
 *     statementId: "AllowExecutionFromlb",
 * });
 * const testTargetGroupAttachment = new aws.elasticloadbalancingv2.TargetGroupAttachment("test", {
 *     targetGroupArn: testTargetGroup.arn,
 *     targetId: testFunction.arn,
 * }, {dependsOn: [withLb]});
 * ```
 */
export class TargetGroupAttachment extends pulumi.CustomResource {
    /**
     * Get an existing TargetGroupAttachment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: pulumi.WrappedObject<TargetGroupAttachmentState>, opts?: pulumi.CustomResourceOptions): TargetGroupAttachment {
        return new TargetGroupAttachment(name, <any>state, { ...opts, id: id });
    }

    /**
     * The Availability Zone where the IP address of the target is to be registered.
     */
    public readonly availabilityZone: pulumi.Output<string | undefined>;
    /**
     * The port on which targets receive traffic.
     */
    public readonly port: pulumi.Output<number | undefined>;
    /**
     * The ARN of the target group with which to register targets
     */
    public readonly targetGroupArn: pulumi.Output<string>;
    /**
     * The ID of the target. This is the Instance ID for an instance, or the container ID for an ECS container. If the target type is ip, specify an IP address. If the target type is lambda, specify the arn of lambda.
     */
    public readonly targetId: pulumi.Output<string>;

    /**
     * Create a TargetGroupAttachment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: pulumi.WrappedObject<TargetGroupAttachmentArgs>, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: pulumi.WrappedObject<TargetGroupAttachmentArgs> | pulumi.WrappedObject<TargetGroupAttachmentState>, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: TargetGroupAttachmentState = argsOrState as TargetGroupAttachmentState | undefined;
            inputs["availabilityZone"] = state ? state.availabilityZone : undefined;
            inputs["port"] = state ? state.port : undefined;
            inputs["targetGroupArn"] = state ? state.targetGroupArn : undefined;
            inputs["targetId"] = state ? state.targetId : undefined;
        } else {
            const args = argsOrState as TargetGroupAttachmentArgs | undefined;
            if (!args || args.targetGroupArn === undefined) {
                throw new Error("Missing required property 'targetGroupArn'");
            }
            if (!args || args.targetId === undefined) {
                throw new Error("Missing required property 'targetId'");
            }
            inputs["availabilityZone"] = args ? args.availabilityZone : undefined;
            inputs["port"] = args ? args.port : undefined;
            inputs["targetGroupArn"] = args ? args.targetGroupArn : undefined;
            inputs["targetId"] = args ? args.targetId : undefined;
        }
        super("aws:elasticloadbalancingv2/targetGroupAttachment:TargetGroupAttachment", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering TargetGroupAttachment resources.
 */
export interface TargetGroupAttachmentState {
    /**
     * The Availability Zone where the IP address of the target is to be registered.
     */
    readonly availabilityZone?: string;
    /**
     * The port on which targets receive traffic.
     */
    readonly port?: number;
    /**
     * The ARN of the target group with which to register targets
     */
    readonly targetGroupArn?: string;
    /**
     * The ID of the target. This is the Instance ID for an instance, or the container ID for an ECS container. If the target type is ip, specify an IP address. If the target type is lambda, specify the arn of lambda.
     */
    readonly targetId?: string;
}

/**
 * The set of arguments for constructing a TargetGroupAttachment resource.
 */
export interface TargetGroupAttachmentArgs {
    /**
     * The Availability Zone where the IP address of the target is to be registered.
     */
    readonly availabilityZone?: string;
    /**
     * The port on which targets receive traffic.
     */
    readonly port?: number;
    /**
     * The ARN of the target group with which to register targets
     */
    readonly targetGroupArn: string;
    /**
     * The ID of the target. This is the Instance ID for an instance, or the container ID for an ECS container. If the target type is ip, specify an IP address. If the target type is lambda, specify the arn of lambda.
     */
    readonly targetId: string;
}
