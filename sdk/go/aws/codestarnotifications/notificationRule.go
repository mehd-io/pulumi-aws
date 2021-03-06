// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package codestarnotifications

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Provides a CodeStar Notifications Rule.
//
// ## Example Usage
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-aws/sdk/v3/go/aws/codecommit"
// 	"github.com/pulumi/pulumi-aws/sdk/v3/go/aws/codestarnotifications"
// 	"github.com/pulumi/pulumi-aws/sdk/v3/go/aws/iam"
// 	"github.com/pulumi/pulumi-aws/sdk/v3/go/aws/sns"
// 	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		code, err := codecommit.NewRepository(ctx, "code", &codecommit.RepositoryArgs{
// 			RepositoryName: pulumi.String("example-code-repo"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		notif, err := sns.NewTopic(ctx, "notif", nil)
// 		if err != nil {
// 			return err
// 		}
// 		_, err = sns.NewTopicPolicy(ctx, "_default", &sns.TopicPolicyArgs{
// 			Arn: notif.Arn,
// 			Policy: notifAccess.ApplyT(func(notifAccess iam.GetPolicyDocumentResult) (string, error) {
// 				return notifAccess.Json, nil
// 			}).(pulumi.StringOutput),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		_, err = codestarnotifications.NewNotificationRule(ctx, "commits", &codestarnotifications.NotificationRuleArgs{
// 			DetailType: pulumi.String("BASIC"),
// 			EventTypeIds: pulumi.StringArray{
// 				pulumi.String("codecommit-repository-comments-on-commits"),
// 			},
// 			Resource: code.Arn,
// 			Targets: codestarnotifications.NotificationRuleTargetArray{
// 				&codestarnotifications.NotificationRuleTargetArgs{
// 					Address: notif.Arn,
// 				},
// 			},
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
type NotificationRule struct {
	pulumi.CustomResourceState

	// The codestar notification rule ARN.
	Arn pulumi.StringOutput `pulumi:"arn"`
	// The level of detail to include in the notifications for this resource. Possible values are `BASIC` and `FULL`.
	DetailType pulumi.StringOutput `pulumi:"detailType"`
	// A list of event types associated with this notification rule.
	// For list of allowed events see [here](https://docs.aws.amazon.com/codestar-notifications/latest/userguide/concepts.html#concepts-api).
	EventTypeIds pulumi.StringArrayOutput `pulumi:"eventTypeIds"`
	// The name of notification rule.
	Name pulumi.StringOutput `pulumi:"name"`
	// The ARN of the resource to associate with the notification rule.
	Resource pulumi.StringOutput `pulumi:"resource"`
	// The status of the notification rule. Possible values are `ENABLED` and `DISABLED`, default is `ENABLED`.
	Status pulumi.StringPtrOutput `pulumi:"status"`
	// A map of tags to assign to the resource.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Configuration blocks containing notification target information. Can be specified multiple times. At least one target must be specified on creation.
	Targets NotificationRuleTargetArrayOutput `pulumi:"targets"`
}

// NewNotificationRule registers a new resource with the given unique name, arguments, and options.
func NewNotificationRule(ctx *pulumi.Context,
	name string, args *NotificationRuleArgs, opts ...pulumi.ResourceOption) (*NotificationRule, error) {
	if args == nil || args.DetailType == nil {
		return nil, errors.New("missing required argument 'DetailType'")
	}
	if args == nil || args.EventTypeIds == nil {
		return nil, errors.New("missing required argument 'EventTypeIds'")
	}
	if args == nil || args.Resource == nil {
		return nil, errors.New("missing required argument 'Resource'")
	}
	if args == nil {
		args = &NotificationRuleArgs{}
	}
	var resource NotificationRule
	err := ctx.RegisterResource("aws:codestarnotifications/notificationRule:NotificationRule", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetNotificationRule gets an existing NotificationRule resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetNotificationRule(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *NotificationRuleState, opts ...pulumi.ResourceOption) (*NotificationRule, error) {
	var resource NotificationRule
	err := ctx.ReadResource("aws:codestarnotifications/notificationRule:NotificationRule", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering NotificationRule resources.
type notificationRuleState struct {
	// The codestar notification rule ARN.
	Arn *string `pulumi:"arn"`
	// The level of detail to include in the notifications for this resource. Possible values are `BASIC` and `FULL`.
	DetailType *string `pulumi:"detailType"`
	// A list of event types associated with this notification rule.
	// For list of allowed events see [here](https://docs.aws.amazon.com/codestar-notifications/latest/userguide/concepts.html#concepts-api).
	EventTypeIds []string `pulumi:"eventTypeIds"`
	// The name of notification rule.
	Name *string `pulumi:"name"`
	// The ARN of the resource to associate with the notification rule.
	Resource *string `pulumi:"resource"`
	// The status of the notification rule. Possible values are `ENABLED` and `DISABLED`, default is `ENABLED`.
	Status *string `pulumi:"status"`
	// A map of tags to assign to the resource.
	Tags map[string]string `pulumi:"tags"`
	// Configuration blocks containing notification target information. Can be specified multiple times. At least one target must be specified on creation.
	Targets []NotificationRuleTarget `pulumi:"targets"`
}

type NotificationRuleState struct {
	// The codestar notification rule ARN.
	Arn pulumi.StringPtrInput
	// The level of detail to include in the notifications for this resource. Possible values are `BASIC` and `FULL`.
	DetailType pulumi.StringPtrInput
	// A list of event types associated with this notification rule.
	// For list of allowed events see [here](https://docs.aws.amazon.com/codestar-notifications/latest/userguide/concepts.html#concepts-api).
	EventTypeIds pulumi.StringArrayInput
	// The name of notification rule.
	Name pulumi.StringPtrInput
	// The ARN of the resource to associate with the notification rule.
	Resource pulumi.StringPtrInput
	// The status of the notification rule. Possible values are `ENABLED` and `DISABLED`, default is `ENABLED`.
	Status pulumi.StringPtrInput
	// A map of tags to assign to the resource.
	Tags pulumi.StringMapInput
	// Configuration blocks containing notification target information. Can be specified multiple times. At least one target must be specified on creation.
	Targets NotificationRuleTargetArrayInput
}

func (NotificationRuleState) ElementType() reflect.Type {
	return reflect.TypeOf((*notificationRuleState)(nil)).Elem()
}

type notificationRuleArgs struct {
	// The level of detail to include in the notifications for this resource. Possible values are `BASIC` and `FULL`.
	DetailType string `pulumi:"detailType"`
	// A list of event types associated with this notification rule.
	// For list of allowed events see [here](https://docs.aws.amazon.com/codestar-notifications/latest/userguide/concepts.html#concepts-api).
	EventTypeIds []string `pulumi:"eventTypeIds"`
	// The name of notification rule.
	Name *string `pulumi:"name"`
	// The ARN of the resource to associate with the notification rule.
	Resource string `pulumi:"resource"`
	// The status of the notification rule. Possible values are `ENABLED` and `DISABLED`, default is `ENABLED`.
	Status *string `pulumi:"status"`
	// A map of tags to assign to the resource.
	Tags map[string]string `pulumi:"tags"`
	// Configuration blocks containing notification target information. Can be specified multiple times. At least one target must be specified on creation.
	Targets []NotificationRuleTarget `pulumi:"targets"`
}

// The set of arguments for constructing a NotificationRule resource.
type NotificationRuleArgs struct {
	// The level of detail to include in the notifications for this resource. Possible values are `BASIC` and `FULL`.
	DetailType pulumi.StringInput
	// A list of event types associated with this notification rule.
	// For list of allowed events see [here](https://docs.aws.amazon.com/codestar-notifications/latest/userguide/concepts.html#concepts-api).
	EventTypeIds pulumi.StringArrayInput
	// The name of notification rule.
	Name pulumi.StringPtrInput
	// The ARN of the resource to associate with the notification rule.
	Resource pulumi.StringInput
	// The status of the notification rule. Possible values are `ENABLED` and `DISABLED`, default is `ENABLED`.
	Status pulumi.StringPtrInput
	// A map of tags to assign to the resource.
	Tags pulumi.StringMapInput
	// Configuration blocks containing notification target information. Can be specified multiple times. At least one target must be specified on creation.
	Targets NotificationRuleTargetArrayInput
}

func (NotificationRuleArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*notificationRuleArgs)(nil)).Elem()
}
