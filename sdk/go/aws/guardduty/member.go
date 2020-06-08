// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package guardduty

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Provides a resource to manage a GuardDuty member. To accept invitations in member accounts, see the `guardduty.InviteAccepter` resource.
//
// ## Example Usage
//
//
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-aws/sdk/v2/go/aws/guardduty"
// 	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		master, err := guardduty.NewDetector(ctx, "master", &guardduty.DetectorArgs{
// 			Enable: pulumi.Bool(true),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		memberDetector, err := guardduty.NewDetector(ctx, "memberDetector", &guardduty.DetectorArgs{
// 			Enable: pulumi.Bool(true),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		memberMember, err := guardduty.NewMember(ctx, "memberMember", &guardduty.MemberArgs{
// 			AccountId:         memberDetector.AccountId,
// 			DetectorId:        master.ID(),
// 			Email:             pulumi.String("required@example.com"),
// 			Invite:            pulumi.Bool(true),
// 			InvitationMessage: pulumi.String("please accept guardduty invitation"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
type Member struct {
	pulumi.CustomResourceState

	// AWS account ID for member account.
	AccountId pulumi.StringOutput `pulumi:"accountId"`
	// The detector ID of the GuardDuty account where you want to create member accounts.
	DetectorId pulumi.StringOutput `pulumi:"detectorId"`
	// Boolean whether an email notification is sent to the accounts. Defaults to `false`.
	DisableEmailNotification pulumi.BoolPtrOutput `pulumi:"disableEmailNotification"`
	// Email address for member account.
	Email pulumi.StringOutput `pulumi:"email"`
	// Message for invitation.
	InvitationMessage pulumi.StringPtrOutput `pulumi:"invitationMessage"`
	// Boolean whether to invite the account to GuardDuty as a member. Defaults to `false`. To detect if an invitation needs to be (re-)sent, the this provider state value is `true` based on a `relationshipStatus` of `Disabled`, `Enabled`, `Invited`, or `EmailVerificationInProgress`.
	Invite pulumi.BoolPtrOutput `pulumi:"invite"`
	// The status of the relationship between the member account and its master account. More information can be found in [Amazon GuardDuty API Reference](https://docs.aws.amazon.com/guardduty/latest/ug/get-members.html).
	RelationshipStatus pulumi.StringOutput `pulumi:"relationshipStatus"`
}

// NewMember registers a new resource with the given unique name, arguments, and options.
func NewMember(ctx *pulumi.Context,
	name string, args *MemberArgs, opts ...pulumi.ResourceOption) (*Member, error) {
	if args == nil || args.AccountId == nil {
		return nil, errors.New("missing required argument 'AccountId'")
	}
	if args == nil || args.DetectorId == nil {
		return nil, errors.New("missing required argument 'DetectorId'")
	}
	if args == nil || args.Email == nil {
		return nil, errors.New("missing required argument 'Email'")
	}
	if args == nil {
		args = &MemberArgs{}
	}
	var resource Member
	err := ctx.RegisterResource("aws:guardduty/member:Member", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetMember gets an existing Member resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetMember(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *MemberState, opts ...pulumi.ResourceOption) (*Member, error) {
	var resource Member
	err := ctx.ReadResource("aws:guardduty/member:Member", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Member resources.
type memberState struct {
	// AWS account ID for member account.
	AccountId *string `pulumi:"accountId"`
	// The detector ID of the GuardDuty account where you want to create member accounts.
	DetectorId *string `pulumi:"detectorId"`
	// Boolean whether an email notification is sent to the accounts. Defaults to `false`.
	DisableEmailNotification *bool `pulumi:"disableEmailNotification"`
	// Email address for member account.
	Email *string `pulumi:"email"`
	// Message for invitation.
	InvitationMessage *string `pulumi:"invitationMessage"`
	// Boolean whether to invite the account to GuardDuty as a member. Defaults to `false`. To detect if an invitation needs to be (re-)sent, the this provider state value is `true` based on a `relationshipStatus` of `Disabled`, `Enabled`, `Invited`, or `EmailVerificationInProgress`.
	Invite *bool `pulumi:"invite"`
	// The status of the relationship between the member account and its master account. More information can be found in [Amazon GuardDuty API Reference](https://docs.aws.amazon.com/guardduty/latest/ug/get-members.html).
	RelationshipStatus *string `pulumi:"relationshipStatus"`
}

type MemberState struct {
	// AWS account ID for member account.
	AccountId pulumi.StringPtrInput
	// The detector ID of the GuardDuty account where you want to create member accounts.
	DetectorId pulumi.StringPtrInput
	// Boolean whether an email notification is sent to the accounts. Defaults to `false`.
	DisableEmailNotification pulumi.BoolPtrInput
	// Email address for member account.
	Email pulumi.StringPtrInput
	// Message for invitation.
	InvitationMessage pulumi.StringPtrInput
	// Boolean whether to invite the account to GuardDuty as a member. Defaults to `false`. To detect if an invitation needs to be (re-)sent, the this provider state value is `true` based on a `relationshipStatus` of `Disabled`, `Enabled`, `Invited`, or `EmailVerificationInProgress`.
	Invite pulumi.BoolPtrInput
	// The status of the relationship between the member account and its master account. More information can be found in [Amazon GuardDuty API Reference](https://docs.aws.amazon.com/guardduty/latest/ug/get-members.html).
	RelationshipStatus pulumi.StringPtrInput
}

func (MemberState) ElementType() reflect.Type {
	return reflect.TypeOf((*memberState)(nil)).Elem()
}

type memberArgs struct {
	// AWS account ID for member account.
	AccountId string `pulumi:"accountId"`
	// The detector ID of the GuardDuty account where you want to create member accounts.
	DetectorId string `pulumi:"detectorId"`
	// Boolean whether an email notification is sent to the accounts. Defaults to `false`.
	DisableEmailNotification *bool `pulumi:"disableEmailNotification"`
	// Email address for member account.
	Email string `pulumi:"email"`
	// Message for invitation.
	InvitationMessage *string `pulumi:"invitationMessage"`
	// Boolean whether to invite the account to GuardDuty as a member. Defaults to `false`. To detect if an invitation needs to be (re-)sent, the this provider state value is `true` based on a `relationshipStatus` of `Disabled`, `Enabled`, `Invited`, or `EmailVerificationInProgress`.
	Invite *bool `pulumi:"invite"`
}

// The set of arguments for constructing a Member resource.
type MemberArgs struct {
	// AWS account ID for member account.
	AccountId pulumi.StringInput
	// The detector ID of the GuardDuty account where you want to create member accounts.
	DetectorId pulumi.StringInput
	// Boolean whether an email notification is sent to the accounts. Defaults to `false`.
	DisableEmailNotification pulumi.BoolPtrInput
	// Email address for member account.
	Email pulumi.StringInput
	// Message for invitation.
	InvitationMessage pulumi.StringPtrInput
	// Boolean whether to invite the account to GuardDuty as a member. Defaults to `false`. To detect if an invitation needs to be (re-)sent, the this provider state value is `true` based on a `relationshipStatus` of `Disabled`, `Enabled`, `Invited`, or `EmailVerificationInProgress`.
	Invite pulumi.BoolPtrInput
}

func (MemberArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*memberArgs)(nil)).Elem()
}
