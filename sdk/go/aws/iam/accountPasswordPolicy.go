// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package iam

import (
	"reflect"

	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// > **Note:** There is only a single policy allowed per AWS account. An existing policy will be lost when using this resource as an effect of this limitation.
//
// Manages Password Policy for the AWS Account.
// See more about [Account Password Policy](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_passwords_account-policy.html)
// in the official AWS docs.
//
// ## Example Usage
//
//
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-aws/sdk/v2/go/aws/iam"
// 	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		strict, err := iam.NewAccountPasswordPolicy(ctx, "strict", &iam.AccountPasswordPolicyArgs{
// 			AllowUsersToChangePassword: pulumi.Bool(true),
// 			MinimumPasswordLength:      pulumi.Int(8),
// 			RequireLowercaseCharacters: pulumi.Bool(true),
// 			RequireNumbers:             pulumi.Bool(true),
// 			RequireSymbols:             pulumi.Bool(true),
// 			RequireUppercaseCharacters: pulumi.Bool(true),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
type AccountPasswordPolicy struct {
	pulumi.CustomResourceState

	// Whether to allow users to change their own password
	AllowUsersToChangePassword pulumi.BoolPtrOutput `pulumi:"allowUsersToChangePassword"`
	// Indicates whether passwords in the account expire.
	// Returns `true` if `maxPasswordAge` contains a value greater than `0`.
	// Returns `false` if it is `0` or _not present_.
	ExpirePasswords pulumi.BoolOutput `pulumi:"expirePasswords"`
	// Whether users are prevented from setting a new password after their password has expired
	// (i.e. require administrator reset)
	HardExpiry pulumi.BoolOutput `pulumi:"hardExpiry"`
	// The number of days that an user password is valid.
	MaxPasswordAge pulumi.IntOutput `pulumi:"maxPasswordAge"`
	// Minimum length to require for user passwords.
	MinimumPasswordLength pulumi.IntPtrOutput `pulumi:"minimumPasswordLength"`
	// The number of previous passwords that users are prevented from reusing.
	PasswordReusePrevention pulumi.IntOutput `pulumi:"passwordReusePrevention"`
	// Whether to require lowercase characters for user passwords.
	RequireLowercaseCharacters pulumi.BoolOutput `pulumi:"requireLowercaseCharacters"`
	// Whether to require numbers for user passwords.
	RequireNumbers pulumi.BoolOutput `pulumi:"requireNumbers"`
	// Whether to require symbols for user passwords.
	RequireSymbols pulumi.BoolOutput `pulumi:"requireSymbols"`
	// Whether to require uppercase characters for user passwords.
	RequireUppercaseCharacters pulumi.BoolOutput `pulumi:"requireUppercaseCharacters"`
}

// NewAccountPasswordPolicy registers a new resource with the given unique name, arguments, and options.
func NewAccountPasswordPolicy(ctx *pulumi.Context,
	name string, args *AccountPasswordPolicyArgs, opts ...pulumi.ResourceOption) (*AccountPasswordPolicy, error) {
	if args == nil {
		args = &AccountPasswordPolicyArgs{}
	}
	var resource AccountPasswordPolicy
	err := ctx.RegisterResource("aws:iam/accountPasswordPolicy:AccountPasswordPolicy", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetAccountPasswordPolicy gets an existing AccountPasswordPolicy resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetAccountPasswordPolicy(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *AccountPasswordPolicyState, opts ...pulumi.ResourceOption) (*AccountPasswordPolicy, error) {
	var resource AccountPasswordPolicy
	err := ctx.ReadResource("aws:iam/accountPasswordPolicy:AccountPasswordPolicy", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering AccountPasswordPolicy resources.
type accountPasswordPolicyState struct {
	// Whether to allow users to change their own password
	AllowUsersToChangePassword *bool `pulumi:"allowUsersToChangePassword"`
	// Indicates whether passwords in the account expire.
	// Returns `true` if `maxPasswordAge` contains a value greater than `0`.
	// Returns `false` if it is `0` or _not present_.
	ExpirePasswords *bool `pulumi:"expirePasswords"`
	// Whether users are prevented from setting a new password after their password has expired
	// (i.e. require administrator reset)
	HardExpiry *bool `pulumi:"hardExpiry"`
	// The number of days that an user password is valid.
	MaxPasswordAge *int `pulumi:"maxPasswordAge"`
	// Minimum length to require for user passwords.
	MinimumPasswordLength *int `pulumi:"minimumPasswordLength"`
	// The number of previous passwords that users are prevented from reusing.
	PasswordReusePrevention *int `pulumi:"passwordReusePrevention"`
	// Whether to require lowercase characters for user passwords.
	RequireLowercaseCharacters *bool `pulumi:"requireLowercaseCharacters"`
	// Whether to require numbers for user passwords.
	RequireNumbers *bool `pulumi:"requireNumbers"`
	// Whether to require symbols for user passwords.
	RequireSymbols *bool `pulumi:"requireSymbols"`
	// Whether to require uppercase characters for user passwords.
	RequireUppercaseCharacters *bool `pulumi:"requireUppercaseCharacters"`
}

type AccountPasswordPolicyState struct {
	// Whether to allow users to change their own password
	AllowUsersToChangePassword pulumi.BoolPtrInput
	// Indicates whether passwords in the account expire.
	// Returns `true` if `maxPasswordAge` contains a value greater than `0`.
	// Returns `false` if it is `0` or _not present_.
	ExpirePasswords pulumi.BoolPtrInput
	// Whether users are prevented from setting a new password after their password has expired
	// (i.e. require administrator reset)
	HardExpiry pulumi.BoolPtrInput
	// The number of days that an user password is valid.
	MaxPasswordAge pulumi.IntPtrInput
	// Minimum length to require for user passwords.
	MinimumPasswordLength pulumi.IntPtrInput
	// The number of previous passwords that users are prevented from reusing.
	PasswordReusePrevention pulumi.IntPtrInput
	// Whether to require lowercase characters for user passwords.
	RequireLowercaseCharacters pulumi.BoolPtrInput
	// Whether to require numbers for user passwords.
	RequireNumbers pulumi.BoolPtrInput
	// Whether to require symbols for user passwords.
	RequireSymbols pulumi.BoolPtrInput
	// Whether to require uppercase characters for user passwords.
	RequireUppercaseCharacters pulumi.BoolPtrInput
}

func (AccountPasswordPolicyState) ElementType() reflect.Type {
	return reflect.TypeOf((*accountPasswordPolicyState)(nil)).Elem()
}

type accountPasswordPolicyArgs struct {
	// Whether to allow users to change their own password
	AllowUsersToChangePassword *bool `pulumi:"allowUsersToChangePassword"`
	// Whether users are prevented from setting a new password after their password has expired
	// (i.e. require administrator reset)
	HardExpiry *bool `pulumi:"hardExpiry"`
	// The number of days that an user password is valid.
	MaxPasswordAge *int `pulumi:"maxPasswordAge"`
	// Minimum length to require for user passwords.
	MinimumPasswordLength *int `pulumi:"minimumPasswordLength"`
	// The number of previous passwords that users are prevented from reusing.
	PasswordReusePrevention *int `pulumi:"passwordReusePrevention"`
	// Whether to require lowercase characters for user passwords.
	RequireLowercaseCharacters *bool `pulumi:"requireLowercaseCharacters"`
	// Whether to require numbers for user passwords.
	RequireNumbers *bool `pulumi:"requireNumbers"`
	// Whether to require symbols for user passwords.
	RequireSymbols *bool `pulumi:"requireSymbols"`
	// Whether to require uppercase characters for user passwords.
	RequireUppercaseCharacters *bool `pulumi:"requireUppercaseCharacters"`
}

// The set of arguments for constructing a AccountPasswordPolicy resource.
type AccountPasswordPolicyArgs struct {
	// Whether to allow users to change their own password
	AllowUsersToChangePassword pulumi.BoolPtrInput
	// Whether users are prevented from setting a new password after their password has expired
	// (i.e. require administrator reset)
	HardExpiry pulumi.BoolPtrInput
	// The number of days that an user password is valid.
	MaxPasswordAge pulumi.IntPtrInput
	// Minimum length to require for user passwords.
	MinimumPasswordLength pulumi.IntPtrInput
	// The number of previous passwords that users are prevented from reusing.
	PasswordReusePrevention pulumi.IntPtrInput
	// Whether to require lowercase characters for user passwords.
	RequireLowercaseCharacters pulumi.BoolPtrInput
	// Whether to require numbers for user passwords.
	RequireNumbers pulumi.BoolPtrInput
	// Whether to require symbols for user passwords.
	RequireSymbols pulumi.BoolPtrInput
	// Whether to require uppercase characters for user passwords.
	RequireUppercaseCharacters pulumi.BoolPtrInput
}

func (AccountPasswordPolicyArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*accountPasswordPolicyArgs)(nil)).Elem()
}
