// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

import {LaunchConfiguration} from "../ec2/launchConfiguration";
import {PlacementGroup} from "../ec2/placementGroup";
import {Metric, MetricsGranularity} from "./metrics";

/**
 * Provides an AutoScaling Group resource.
 * 
 * > **Note:** You must specify either `launch_configuration`, `launch_template`, or `mixed_instances_policy`.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const test = new aws.ec2.PlacementGroup("test", {
 *     strategy: "cluster",
 * });
 * const bar = new aws.autoscaling.Group("bar", {
 *     desiredCapacity: 4,
 *     forceDelete: true,
 *     healthCheckGracePeriod: 300,
 *     healthCheckType: "ELB",
 *     initialLifecycleHooks: [{
 *         defaultResult: "CONTINUE",
 *         heartbeatTimeout: 2000,
 *         lifecycleTransition: "autoscaling:EC2_INSTANCE_LAUNCHING",
 *         name: "foobar",
 *         notificationMetadata: `{
 *   "foo": "bar"
 * }
 * `,
 *         notificationTargetArn: "arn:aws:sqs:us-east-1:444455556666:queue1*",
 *         roleArn: "arn:aws:iam::123456789012:role/S3Access",
 *     }],
 *     launchConfiguration: aws_launch_configuration_foobar.name,
 *     maxSize: 5,
 *     minSize: 2,
 *     placementGroup: test.id,
 *     tags: [
 *         {
 *             key: "foo",
 *             propagateAtLaunch: true,
 *             value: "bar",
 *         },
 *         {
 *             key: "lorem",
 *             propagateAtLaunch: false,
 *             value: "ipsum",
 *         },
 *     ],
 *     timeouts: [{
 *         delete: "15m",
 *     }],
 *     vpcZoneIdentifiers: [
 *         aws_subnet_example1.id,
 *         aws_subnet_example2.id,
 *     ],
 * });
 * ```
 * 
 * ### With Latest Version Of Launch Template
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const foobar = new aws.ec2.LaunchTemplate("foobar", {
 *     imageId: "ami-1a2b3c",
 *     instanceType: "t2.micro",
 *     namePrefix: "foobar",
 * });
 * const bar = new aws.autoscaling.Group("bar", {
 *     availabilityZones: ["us-east-1a"],
 *     desiredCapacity: 1,
 *     launchTemplate: {
 *         id: foobar.id,
 *         version: "$Latest",
 *     },
 *     maxSize: 1,
 *     minSize: 1,
 * });
 * ```
 * 
 * ### Mixed Instances Policy
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const exampleLaunchTemplate = new aws.ec2.LaunchTemplate("example", {
 *     imageId: aws_ami_example.id.apply(id => id),
 *     instanceType: "c5.large",
 *     namePrefix: "example",
 * });
 * const exampleGroup = new aws.autoscaling.Group("example", {
 *     availabilityZones: ["us-east-1a"],
 *     desiredCapacity: 1,
 *     maxSize: 1,
 *     minSize: 1,
 *     mixedInstancesPolicy: {
 *         launchTemplate: {
 *             launchTemplateSpecification: {
 *                 launchTemplateId: exampleLaunchTemplate.id,
 *             },
 *             overrides: [
 *                 {
 *                     instanceType: "c4.large",
 *                 },
 *                 {
 *                     instanceType: "c3.large",
 *                 },
 *             ],
 *         },
 *     },
 * });
 * ```
 * 
 * ## Interpolated tags
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const config = new pulumi.Config();
 * const extraTags = config.get("extraTags") || [
 *     {
 *         key: "Foo",
 *         propagateAtLaunch: true,
 *         value: "Bar",
 *     },
 *     {
 *         key: "Baz",
 *         propagateAtLaunch: true,
 *         value: "Bam",
 *     },
 * ];
 * 
 * const bar = new aws.autoscaling.Group("bar", {
 *     launchConfiguration: aws_launch_configuration_foobar.name,
 *     maxSize: 5,
 *     minSize: 2,
 *     tagsCollection: [
 *         {
 *             key: "explicit1",
 *             propagate_at_launch: true,
 *             value: "value1",
 *         },
 *         {
 *             key: "explicit2",
 *             propagate_at_launch: true,
 *             value: "value2",
 *         },
 *         ...[{"key": "interpolation1", "value": "value3", "propagate_at_launch": true}, {"key": "interpolation2", "value": "value4", "propagate_at_launch": true}].concat(extraTags),
 *     ],
 *     vpcZoneIdentifiers: [
 *         aws_subnet_example1.id,
 *         aws_subnet_example2.id,
 *     ],
 * });
 * ```
 * 
 * ## Waiting for Capacity
 * 
 * A newly-created ASG is initially empty and begins to scale to `min_size` (or
 * `desired_capacity`, if specified) by launching instances using the provided
 * Launch Configuration. These instances take time to launch and boot.
 * 
 * On ASG Update, changes to these values also take time to result in the target
 * number of instances providing service.
 * 
 * Terraform provides two mechanisms to help consistently manage ASG scale up
 * time across dependent resources.
 * 
 * #### Waiting for ASG Capacity
 * 
 * The first is default behavior. Terraform waits after ASG creation for
 * `min_size` (or `desired_capacity`, if specified) healthy instances to show up
 * in the ASG before continuing.
 * 
 * If `min_size` or `desired_capacity` are changed in a subsequent update,
 * Terraform will also wait for the correct number of healthy instances before
 * continuing.
 * 
 * Terraform considers an instance "healthy" when the ASG reports `HealthStatus:
 * "Healthy"` and `LifecycleState: "InService"`. See the [AWS AutoScaling
 * Docs](https://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/AutoScalingGroupLifecycle.html)
 * for more information on an ASG's lifecycle.
 * 
 * Terraform will wait for healthy instances for up to
 * `wait_for_capacity_timeout`. If ASG creation is taking more than a few minutes,
 * it's worth investigating for scaling activity errors, which can be caused by
 * problems with the selected Launch Configuration.
 * 
 * Setting `wait_for_capacity_timeout` to `"0"` disables ASG Capacity waiting.
 * 
 * #### Waiting for ELB Capacity
 * 
 * The second mechanism is optional, and affects ASGs with attached ELBs specified
 * via the `load_balancers` attribute or with ALBs specified with `target_group_arns`.
 * 
 * The `min_elb_capacity` parameter causes Terraform to wait for at least the
 * requested number of instances to show up `"InService"` in all attached ELBs
 * during ASG creation.  It has no effect on ASG updates.
 * 
 * If `wait_for_elb_capacity` is set, Terraform will wait for exactly that number
 * of Instances to be `"InService"` in all attached ELBs on both creation and
 * updates.
 * 
 * These parameters can be used to ensure that service is being provided before
 * Terraform moves on. If new instances don't pass the ELB's health checks for any
 * reason, the Terraform apply will time out, and the ASG will be marked as
 * tainted (i.e. marked to be destroyed in a follow up run).
 * 
 * As with ASG Capacity, Terraform will wait for up to `wait_for_capacity_timeout`
 * for the proper number of instances to be healthy.
 * 
 * #### Troubleshooting Capacity Waiting Timeouts
 * 
 * If ASG creation takes more than a few minutes, this could indicate one of a
 * number of configuration problems. See the [AWS Docs on Load Balancer
 * Troubleshooting](https://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/elb-troubleshooting.html)
 * for more information.
 */
export class Group extends pulumi.CustomResource {
    /**
     * Get an existing Group resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: pulumi.WrappedObject<GroupState>, opts?: pulumi.CustomResourceOptions): Group {
        return new Group(name, <any>state, { ...opts, id: id });
    }

    /**
     * The ARN for this AutoScaling Group
     */
    public /*out*/ readonly arn: pulumi.Output<string>;
    /**
     * A list of one or more availability zones for the group. This parameter should not be specified when using `vpc_zone_identifier`.
     */
    public readonly availabilityZones: pulumi.Output<string[]>;
    /**
     * The amount of time, in seconds, after a scaling activity completes before another scaling activity can start.
     */
    public readonly defaultCooldown: pulumi.Output<number>;
    /**
     * The number of Amazon EC2 instances that
     * should be running in the group. (See also Waiting for
     * Capacity below.)
     */
    public readonly desiredCapacity: pulumi.Output<number>;
    /**
     * A list of metrics to collect. The allowed values are `GroupMinSize`, `GroupMaxSize`, `GroupDesiredCapacity`, `GroupInServiceInstances`, `GroupPendingInstances`, `GroupStandbyInstances`, `GroupTerminatingInstances`, `GroupTotalInstances`.
     * * `wait_for_capacity_timeout` (Default: "10m") A maximum
     * [duration](https://golang.org/pkg/time/#ParseDuration) that Terraform should
     * wait for ASG instances to be healthy before timing out.  (See also Waiting
     * for Capacity below.) Setting this to "0" causes
     * Terraform to skip all Capacity Waiting behavior.
     */
    public readonly enabledMetrics: pulumi.Output<Metric[] | undefined>;
    /**
     * Allows deleting the autoscaling group without waiting
     * for all instances in the pool to terminate.  You can force an autoscaling group to delete
     * even if it's in the process of scaling a resource. Normally, Terraform
     * drains all the instances before deleting the group.  This bypasses that
     * behavior and potentially leaves resources dangling.
     */
    public readonly forceDelete: pulumi.Output<boolean | undefined>;
    /**
     * Time (in seconds) after instance comes into service before checking health.
     */
    public readonly healthCheckGracePeriod: pulumi.Output<number | undefined>;
    /**
     * "EC2" or "ELB". Controls how health checking is done.
     */
    public readonly healthCheckType: pulumi.Output<string>;
    /**
     * One or more
     * [Lifecycle Hooks](http://docs.aws.amazon.com/autoscaling/latest/userguide/lifecycle-hooks.html)
     * to attach to the autoscaling group **before** instances are launched. The
     * syntax is exactly the same as the separate
     * [`aws_autoscaling_lifecycle_hook`](https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hooks.html)
     * resource, without the `autoscaling_group_name` attribute. Please note that this will only work when creating
     * a new autoscaling group. For all other use-cases, please use `aws_autoscaling_lifecycle_hook` resource.
     */
    public readonly initialLifecycleHooks: pulumi.Output<{ defaultResult: string, heartbeatTimeout?: number, lifecycleTransition: string, name: string, notificationMetadata?: string, notificationTargetArn?: string, roleArn?: string }[] | undefined>;
    /**
     * The name of the launch configuration to use.
     */
    public readonly launchConfiguration: pulumi.Output<string | undefined>;
    /**
     * Nested argument containing launch template settings along with the overrides to specify multiple instance types. Defined below.
     */
    public readonly launchTemplate: pulumi.Output<{ id: string, name: string, version?: string } | undefined>;
    /**
     * A list of elastic load balancer names to add to the autoscaling
     * group names. Only valid for classic load balancers. For ALBs, use `target_group_arns` instead.
     */
    public readonly loadBalancers: pulumi.Output<string[]>;
    /**
     * The maximum size of the auto scale group.
     */
    public readonly maxSize: pulumi.Output<number>;
    /**
     * The granularity to associate with the metrics to collect. The only valid value is `1Minute`. Default is `1Minute`.
     */
    public readonly metricsGranularity: pulumi.Output<string | undefined>;
    /**
     * Setting this causes Terraform to wait for
     * this number of instances to show up healthy in the ELB only on creation.
     * Updates will not wait on ELB instance number changes.
     * (See also Waiting for Capacity below.)
     */
    public readonly minElbCapacity: pulumi.Output<number | undefined>;
    /**
     * The minimum size of the auto scale group.
     * (See also Waiting for Capacity below.)
     */
    public readonly minSize: pulumi.Output<number>;
    /**
     * Configuration block containing settings to define launch targets for Auto Scaling groups. Defined below.
     */
    public readonly mixedInstancesPolicy: pulumi.Output<{ instancesDistribution?: { onDemandAllocationStrategy?: string, onDemandBaseCapacity?: number, onDemandPercentageAboveBaseCapacity?: number, spotAllocationStrategy?: string, spotInstancePools: number, spotMaxPrice?: string }, launchTemplate: { launchTemplateSpecification: { launchTemplateId: string, launchTemplateName: string, version?: string }, overrides?: { instanceType?: string }[] } } | undefined>;
    /**
     * The name of the auto scaling group. By default generated by Terraform.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * Creates a unique name beginning with the specified
     * prefix. Conflicts with `name`.
     */
    public readonly namePrefix: pulumi.Output<string | undefined>;
    /**
     * The name of the placement group into which you'll launch your instances, if any.
     */
    public readonly placementGroup: pulumi.Output<string | undefined>;
    /**
     * Allows setting instance protection. The
     * autoscaling group will not select instances with this setting for terminination
     * during scale in events.
     */
    public readonly protectFromScaleIn: pulumi.Output<boolean | undefined>;
    /**
     * The ARN of the service-linked role that the ASG will use to call other AWS services
     */
    public readonly serviceLinkedRoleArn: pulumi.Output<string>;
    /**
     * A list of processes to suspend for the AutoScaling Group. The allowed values are `Launch`, `Terminate`, `HealthCheck`, `ReplaceUnhealthy`, `AZRebalance`, `AlarmNotification`, `ScheduledActions`, `AddToLoadBalancer`.
     * Note that if you suspend either the `Launch` or `Terminate` process types, it can prevent your autoscaling group from functioning properly.
     */
    public readonly suspendedProcesses: pulumi.Output<string[] | undefined>;
    /**
     * A list of tag blocks. Tags documented below.
     */
    public readonly tags: pulumi.Output<{ key: string, propagateAtLaunch: boolean, value: string }[] | undefined>;
    /**
     * A list of tag blocks (maps). Tags documented below.
     */
    public readonly tagsCollection: pulumi.Output<{[key: string]: any}[] | undefined>;
    /**
     * A list of `aws_alb_target_group` ARNs, for use with Application Load Balancing.
     */
    public readonly targetGroupArns: pulumi.Output<string[]>;
    /**
     * A list of policies to decide how the instances in the auto scale group should be terminated. The allowed values are `OldestInstance`, `NewestInstance`, `OldestLaunchConfiguration`, `ClosestToNextInstanceHour`, `Default`.
     */
    public readonly terminationPolicies: pulumi.Output<string[] | undefined>;
    /**
     * A list of subnet IDs to launch resources in.
     */
    public readonly vpcZoneIdentifiers: pulumi.Output<string[]>;
    public readonly waitForCapacityTimeout: pulumi.Output<string | undefined>;
    /**
     * Setting this will cause Terraform to wait
     * for exactly this number of healthy instances in all attached load balancers
     * on both create and update operations. (Takes precedence over
     * `min_elb_capacity` behavior.)
     * (See also Waiting for Capacity below.)
     */
    public readonly waitForElbCapacity: pulumi.Output<number | undefined>;

    /**
     * Create a Group resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: pulumi.WrappedObject<GroupArgs>, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: pulumi.WrappedObject<GroupArgs> | pulumi.WrappedObject<GroupState>, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: GroupState = argsOrState as GroupState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["availabilityZones"] = state ? state.availabilityZones : undefined;
            inputs["defaultCooldown"] = state ? state.defaultCooldown : undefined;
            inputs["desiredCapacity"] = state ? state.desiredCapacity : undefined;
            inputs["enabledMetrics"] = state ? state.enabledMetrics : undefined;
            inputs["forceDelete"] = state ? state.forceDelete : undefined;
            inputs["healthCheckGracePeriod"] = state ? state.healthCheckGracePeriod : undefined;
            inputs["healthCheckType"] = state ? state.healthCheckType : undefined;
            inputs["initialLifecycleHooks"] = state ? state.initialLifecycleHooks : undefined;
            inputs["launchConfiguration"] = state ? state.launchConfiguration : undefined;
            inputs["launchTemplate"] = state ? state.launchTemplate : undefined;
            inputs["loadBalancers"] = state ? state.loadBalancers : undefined;
            inputs["maxSize"] = state ? state.maxSize : undefined;
            inputs["metricsGranularity"] = state ? state.metricsGranularity : undefined;
            inputs["minElbCapacity"] = state ? state.minElbCapacity : undefined;
            inputs["minSize"] = state ? state.minSize : undefined;
            inputs["mixedInstancesPolicy"] = state ? state.mixedInstancesPolicy : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["namePrefix"] = state ? state.namePrefix : undefined;
            inputs["placementGroup"] = state ? state.placementGroup : undefined;
            inputs["protectFromScaleIn"] = state ? state.protectFromScaleIn : undefined;
            inputs["serviceLinkedRoleArn"] = state ? state.serviceLinkedRoleArn : undefined;
            inputs["suspendedProcesses"] = state ? state.suspendedProcesses : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["tagsCollection"] = state ? state.tagsCollection : undefined;
            inputs["targetGroupArns"] = state ? state.targetGroupArns : undefined;
            inputs["terminationPolicies"] = state ? state.terminationPolicies : undefined;
            inputs["vpcZoneIdentifiers"] = state ? state.vpcZoneIdentifiers : undefined;
            inputs["waitForCapacityTimeout"] = state ? state.waitForCapacityTimeout : undefined;
            inputs["waitForElbCapacity"] = state ? state.waitForElbCapacity : undefined;
        } else {
            const args = argsOrState as GroupArgs | undefined;
            if (!args || args.maxSize === undefined) {
                throw new Error("Missing required property 'maxSize'");
            }
            if (!args || args.minSize === undefined) {
                throw new Error("Missing required property 'minSize'");
            }
            inputs["availabilityZones"] = args ? args.availabilityZones : undefined;
            inputs["defaultCooldown"] = args ? args.defaultCooldown : undefined;
            inputs["desiredCapacity"] = args ? args.desiredCapacity : undefined;
            inputs["enabledMetrics"] = args ? args.enabledMetrics : undefined;
            inputs["forceDelete"] = args ? args.forceDelete : undefined;
            inputs["healthCheckGracePeriod"] = args ? args.healthCheckGracePeriod : undefined;
            inputs["healthCheckType"] = args ? args.healthCheckType : undefined;
            inputs["initialLifecycleHooks"] = args ? args.initialLifecycleHooks : undefined;
            inputs["launchConfiguration"] = args ? args.launchConfiguration : undefined;
            inputs["launchTemplate"] = args ? args.launchTemplate : undefined;
            inputs["loadBalancers"] = args ? args.loadBalancers : undefined;
            inputs["maxSize"] = args ? args.maxSize : undefined;
            inputs["metricsGranularity"] = args ? args.metricsGranularity : undefined;
            inputs["minElbCapacity"] = args ? args.minElbCapacity : undefined;
            inputs["minSize"] = args ? args.minSize : undefined;
            inputs["mixedInstancesPolicy"] = args ? args.mixedInstancesPolicy : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["namePrefix"] = args ? args.namePrefix : undefined;
            inputs["placementGroup"] = args ? args.placementGroup : undefined;
            inputs["protectFromScaleIn"] = args ? args.protectFromScaleIn : undefined;
            inputs["serviceLinkedRoleArn"] = args ? args.serviceLinkedRoleArn : undefined;
            inputs["suspendedProcesses"] = args ? args.suspendedProcesses : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["tagsCollection"] = args ? args.tagsCollection : undefined;
            inputs["targetGroupArns"] = args ? args.targetGroupArns : undefined;
            inputs["terminationPolicies"] = args ? args.terminationPolicies : undefined;
            inputs["vpcZoneIdentifiers"] = args ? args.vpcZoneIdentifiers : undefined;
            inputs["waitForCapacityTimeout"] = args ? args.waitForCapacityTimeout : undefined;
            inputs["waitForElbCapacity"] = args ? args.waitForElbCapacity : undefined;
            inputs["arn"] = undefined /*out*/;
        }
        super("aws:autoscaling/group:Group", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Group resources.
 */
export interface GroupState {
    /**
     * The ARN for this AutoScaling Group
     */
    readonly arn?: string;
    /**
     * A list of one or more availability zones for the group. This parameter should not be specified when using `vpc_zone_identifier`.
     */
    readonly availabilityZones?: string[];
    /**
     * The amount of time, in seconds, after a scaling activity completes before another scaling activity can start.
     */
    readonly defaultCooldown?: number;
    /**
     * The number of Amazon EC2 instances that
     * should be running in the group. (See also Waiting for
     * Capacity below.)
     */
    readonly desiredCapacity?: number;
    /**
     * A list of metrics to collect. The allowed values are `GroupMinSize`, `GroupMaxSize`, `GroupDesiredCapacity`, `GroupInServiceInstances`, `GroupPendingInstances`, `GroupStandbyInstances`, `GroupTerminatingInstances`, `GroupTotalInstances`.
     * * `wait_for_capacity_timeout` (Default: "10m") A maximum
     * [duration](https://golang.org/pkg/time/#ParseDuration) that Terraform should
     * wait for ASG instances to be healthy before timing out.  (See also Waiting
     * for Capacity below.) Setting this to "0" causes
     * Terraform to skip all Capacity Waiting behavior.
     */
    readonly enabledMetrics?: Metric[];
    /**
     * Allows deleting the autoscaling group without waiting
     * for all instances in the pool to terminate.  You can force an autoscaling group to delete
     * even if it's in the process of scaling a resource. Normally, Terraform
     * drains all the instances before deleting the group.  This bypasses that
     * behavior and potentially leaves resources dangling.
     */
    readonly forceDelete?: boolean;
    /**
     * Time (in seconds) after instance comes into service before checking health.
     */
    readonly healthCheckGracePeriod?: number;
    /**
     * "EC2" or "ELB". Controls how health checking is done.
     */
    readonly healthCheckType?: string;
    /**
     * One or more
     * [Lifecycle Hooks](http://docs.aws.amazon.com/autoscaling/latest/userguide/lifecycle-hooks.html)
     * to attach to the autoscaling group **before** instances are launched. The
     * syntax is exactly the same as the separate
     * [`aws_autoscaling_lifecycle_hook`](https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hooks.html)
     * resource, without the `autoscaling_group_name` attribute. Please note that this will only work when creating
     * a new autoscaling group. For all other use-cases, please use `aws_autoscaling_lifecycle_hook` resource.
     */
    readonly initialLifecycleHooks?: { defaultResult?: string, heartbeatTimeout?: number, lifecycleTransition: string, name: string, notificationMetadata?: string, notificationTargetArn?: string, roleArn?: string }[];
    /**
     * The name of the launch configuration to use.
     */
    readonly launchConfiguration?: string | LaunchConfiguration;
    /**
     * Nested argument containing launch template settings along with the overrides to specify multiple instance types. Defined below.
     */
    readonly launchTemplate?: { id?: string, name?: string, version?: string };
    /**
     * A list of elastic load balancer names to add to the autoscaling
     * group names. Only valid for classic load balancers. For ALBs, use `target_group_arns` instead.
     */
    readonly loadBalancers?: string[];
    /**
     * The maximum size of the auto scale group.
     */
    readonly maxSize?: number;
    /**
     * The granularity to associate with the metrics to collect. The only valid value is `1Minute`. Default is `1Minute`.
     */
    readonly metricsGranularity?: string | MetricsGranularity;
    /**
     * Setting this causes Terraform to wait for
     * this number of instances to show up healthy in the ELB only on creation.
     * Updates will not wait on ELB instance number changes.
     * (See also Waiting for Capacity below.)
     */
    readonly minElbCapacity?: number;
    /**
     * The minimum size of the auto scale group.
     * (See also Waiting for Capacity below.)
     */
    readonly minSize?: number;
    /**
     * Configuration block containing settings to define launch targets for Auto Scaling groups. Defined below.
     */
    readonly mixedInstancesPolicy?: { instancesDistribution?: { onDemandAllocationStrategy?: string, onDemandBaseCapacity?: number, onDemandPercentageAboveBaseCapacity?: number, spotAllocationStrategy?: string, spotInstancePools?: number, spotMaxPrice?: string }, launchTemplate: { launchTemplateSpecification: { launchTemplateId?: string, launchTemplateName?: string, version?: string }, overrides?: { instanceType?: string }[] } };
    /**
     * The name of the auto scaling group. By default generated by Terraform.
     */
    readonly name?: string;
    /**
     * Creates a unique name beginning with the specified
     * prefix. Conflicts with `name`.
     */
    readonly namePrefix?: string;
    /**
     * The name of the placement group into which you'll launch your instances, if any.
     */
    readonly placementGroup?: string | PlacementGroup;
    /**
     * Allows setting instance protection. The
     * autoscaling group will not select instances with this setting for terminination
     * during scale in events.
     */
    readonly protectFromScaleIn?: boolean;
    /**
     * The ARN of the service-linked role that the ASG will use to call other AWS services
     */
    readonly serviceLinkedRoleArn?: string;
    /**
     * A list of processes to suspend for the AutoScaling Group. The allowed values are `Launch`, `Terminate`, `HealthCheck`, `ReplaceUnhealthy`, `AZRebalance`, `AlarmNotification`, `ScheduledActions`, `AddToLoadBalancer`.
     * Note that if you suspend either the `Launch` or `Terminate` process types, it can prevent your autoscaling group from functioning properly.
     */
    readonly suspendedProcesses?: string[];
    /**
     * A list of tag blocks. Tags documented below.
     */
    readonly tags?: { key: string, propagateAtLaunch: boolean, value: string }[];
    /**
     * A list of tag blocks (maps). Tags documented below.
     */
    readonly tagsCollection?: {[key: string]: any}[];
    /**
     * A list of `aws_alb_target_group` ARNs, for use with Application Load Balancing.
     */
    readonly targetGroupArns?: string[];
    /**
     * A list of policies to decide how the instances in the auto scale group should be terminated. The allowed values are `OldestInstance`, `NewestInstance`, `OldestLaunchConfiguration`, `ClosestToNextInstanceHour`, `Default`.
     */
    readonly terminationPolicies?: string[];
    /**
     * A list of subnet IDs to launch resources in.
     */
    readonly vpcZoneIdentifiers?: string[];
    readonly waitForCapacityTimeout?: string;
    /**
     * Setting this will cause Terraform to wait
     * for exactly this number of healthy instances in all attached load balancers
     * on both create and update operations. (Takes precedence over
     * `min_elb_capacity` behavior.)
     * (See also Waiting for Capacity below.)
     */
    readonly waitForElbCapacity?: number;
}

/**
 * The set of arguments for constructing a Group resource.
 */
export interface GroupArgs {
    /**
     * A list of one or more availability zones for the group. This parameter should not be specified when using `vpc_zone_identifier`.
     */
    readonly availabilityZones?: string[];
    /**
     * The amount of time, in seconds, after a scaling activity completes before another scaling activity can start.
     */
    readonly defaultCooldown?: number;
    /**
     * The number of Amazon EC2 instances that
     * should be running in the group. (See also Waiting for
     * Capacity below.)
     */
    readonly desiredCapacity?: number;
    /**
     * A list of metrics to collect. The allowed values are `GroupMinSize`, `GroupMaxSize`, `GroupDesiredCapacity`, `GroupInServiceInstances`, `GroupPendingInstances`, `GroupStandbyInstances`, `GroupTerminatingInstances`, `GroupTotalInstances`.
     * * `wait_for_capacity_timeout` (Default: "10m") A maximum
     * [duration](https://golang.org/pkg/time/#ParseDuration) that Terraform should
     * wait for ASG instances to be healthy before timing out.  (See also Waiting
     * for Capacity below.) Setting this to "0" causes
     * Terraform to skip all Capacity Waiting behavior.
     */
    readonly enabledMetrics?: Metric[];
    /**
     * Allows deleting the autoscaling group without waiting
     * for all instances in the pool to terminate.  You can force an autoscaling group to delete
     * even if it's in the process of scaling a resource. Normally, Terraform
     * drains all the instances before deleting the group.  This bypasses that
     * behavior and potentially leaves resources dangling.
     */
    readonly forceDelete?: boolean;
    /**
     * Time (in seconds) after instance comes into service before checking health.
     */
    readonly healthCheckGracePeriod?: number;
    /**
     * "EC2" or "ELB". Controls how health checking is done.
     */
    readonly healthCheckType?: string;
    /**
     * One or more
     * [Lifecycle Hooks](http://docs.aws.amazon.com/autoscaling/latest/userguide/lifecycle-hooks.html)
     * to attach to the autoscaling group **before** instances are launched. The
     * syntax is exactly the same as the separate
     * [`aws_autoscaling_lifecycle_hook`](https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hooks.html)
     * resource, without the `autoscaling_group_name` attribute. Please note that this will only work when creating
     * a new autoscaling group. For all other use-cases, please use `aws_autoscaling_lifecycle_hook` resource.
     */
    readonly initialLifecycleHooks?: { defaultResult?: string, heartbeatTimeout?: number, lifecycleTransition: string, name: string, notificationMetadata?: string, notificationTargetArn?: string, roleArn?: string }[];
    /**
     * The name of the launch configuration to use.
     */
    readonly launchConfiguration?: string | LaunchConfiguration;
    /**
     * Nested argument containing launch template settings along with the overrides to specify multiple instance types. Defined below.
     */
    readonly launchTemplate?: { id?: string, name?: string, version?: string };
    /**
     * A list of elastic load balancer names to add to the autoscaling
     * group names. Only valid for classic load balancers. For ALBs, use `target_group_arns` instead.
     */
    readonly loadBalancers?: string[];
    /**
     * The maximum size of the auto scale group.
     */
    readonly maxSize: number;
    /**
     * The granularity to associate with the metrics to collect. The only valid value is `1Minute`. Default is `1Minute`.
     */
    readonly metricsGranularity?: string | MetricsGranularity;
    /**
     * Setting this causes Terraform to wait for
     * this number of instances to show up healthy in the ELB only on creation.
     * Updates will not wait on ELB instance number changes.
     * (See also Waiting for Capacity below.)
     */
    readonly minElbCapacity?: number;
    /**
     * The minimum size of the auto scale group.
     * (See also Waiting for Capacity below.)
     */
    readonly minSize: number;
    /**
     * Configuration block containing settings to define launch targets for Auto Scaling groups. Defined below.
     */
    readonly mixedInstancesPolicy?: { instancesDistribution?: { onDemandAllocationStrategy?: string, onDemandBaseCapacity?: number, onDemandPercentageAboveBaseCapacity?: number, spotAllocationStrategy?: string, spotInstancePools?: number, spotMaxPrice?: string }, launchTemplate: { launchTemplateSpecification: { launchTemplateId?: string, launchTemplateName?: string, version?: string }, overrides?: { instanceType?: string }[] } };
    /**
     * The name of the auto scaling group. By default generated by Terraform.
     */
    readonly name?: string;
    /**
     * Creates a unique name beginning with the specified
     * prefix. Conflicts with `name`.
     */
    readonly namePrefix?: string;
    /**
     * The name of the placement group into which you'll launch your instances, if any.
     */
    readonly placementGroup?: string | PlacementGroup;
    /**
     * Allows setting instance protection. The
     * autoscaling group will not select instances with this setting for terminination
     * during scale in events.
     */
    readonly protectFromScaleIn?: boolean;
    /**
     * The ARN of the service-linked role that the ASG will use to call other AWS services
     */
    readonly serviceLinkedRoleArn?: string;
    /**
     * A list of processes to suspend for the AutoScaling Group. The allowed values are `Launch`, `Terminate`, `HealthCheck`, `ReplaceUnhealthy`, `AZRebalance`, `AlarmNotification`, `ScheduledActions`, `AddToLoadBalancer`.
     * Note that if you suspend either the `Launch` or `Terminate` process types, it can prevent your autoscaling group from functioning properly.
     */
    readonly suspendedProcesses?: string[];
    /**
     * A list of tag blocks. Tags documented below.
     */
    readonly tags?: { key: string, propagateAtLaunch: boolean, value: string }[];
    /**
     * A list of tag blocks (maps). Tags documented below.
     */
    readonly tagsCollection?: {[key: string]: any}[];
    /**
     * A list of `aws_alb_target_group` ARNs, for use with Application Load Balancing.
     */
    readonly targetGroupArns?: string[];
    /**
     * A list of policies to decide how the instances in the auto scale group should be terminated. The allowed values are `OldestInstance`, `NewestInstance`, `OldestLaunchConfiguration`, `ClosestToNextInstanceHour`, `Default`.
     */
    readonly terminationPolicies?: string[];
    /**
     * A list of subnet IDs to launch resources in.
     */
    readonly vpcZoneIdentifiers?: string[];
    readonly waitForCapacityTimeout?: string;
    /**
     * Setting this will cause Terraform to wait
     * for exactly this number of healthy instances in all attached load balancers
     * on both create and update operations. (Takes precedence over
     * `min_elb_capacity` behavior.)
     * (See also Waiting for Capacity below.)
     */
    readonly waitForElbCapacity?: number;
}
