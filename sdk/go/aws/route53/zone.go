// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package route53

import (
	"reflect"

	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Manages a Route53 Hosted Zone.
//
// ## Example Usage
//
// ### Public Zone
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-aws/sdk/v2/go/aws/route53"
// 	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		primary, err := route53.NewZone(ctx, "primary", nil)
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
//
// ### Private Zone
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-aws/sdk/v2/go/aws/route53"
// 	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		private, err := route53.NewZone(ctx, "private", &route53.ZoneArgs{
// 			Vpcs: route53.ZoneVpcArray{
// 				&route53.ZoneVpcArgs{
// 					VpcId: pulumi.String(aws_vpc.Example.Id),
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
type Zone struct {
	pulumi.CustomResourceState

	// A comment for the hosted zone. Defaults to 'Managed by Pulumi'.
	Comment pulumi.StringOutput `pulumi:"comment"`
	// The ID of the reusable delegation set whose NS records you want to assign to the hosted zone. Conflicts with `vpc` as delegation sets can only be used for public zones.
	DelegationSetId pulumi.StringPtrOutput `pulumi:"delegationSetId"`
	// Whether to destroy all records (possibly managed outside of this provider) in the zone when destroying the zone.
	ForceDestroy pulumi.BoolPtrOutput `pulumi:"forceDestroy"`
	// This is the name of the hosted zone.
	Name pulumi.StringOutput `pulumi:"name"`
	// A list of name servers in associated (or default) delegation set.
	// Find more about delegation sets in [AWS docs](https://docs.aws.amazon.com/Route53/latest/APIReference/actions-on-reusable-delegation-sets.html).
	NameServers pulumi.StringArrayOutput `pulumi:"nameServers"`
	// A mapping of tags to assign to the zone.
	Tags pulumi.MapOutput `pulumi:"tags"`
	// Configuration block(s) specifying VPC(s) to associate with a private hosted zone. Conflicts with the `delegationSetId` argument in this resource and any `route53.ZoneAssociation` resource specifying the same zone ID. Detailed below.
	Vpcs ZoneVpcArrayOutput `pulumi:"vpcs"`
	// The Hosted Zone ID. This can be referenced by zone records.
	ZoneId pulumi.StringOutput `pulumi:"zoneId"`
}

// NewZone registers a new resource with the given unique name, arguments, and options.
func NewZone(ctx *pulumi.Context,
	name string, args *ZoneArgs, opts ...pulumi.ResourceOption) (*Zone, error) {
	if args == nil {
		args = &ZoneArgs{}
	}
	if args.Comment == nil {
		args.Comment = pulumi.StringPtr("Managed by Pulumi")
	}
	var resource Zone
	err := ctx.RegisterResource("aws:route53/zone:Zone", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetZone gets an existing Zone resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetZone(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ZoneState, opts ...pulumi.ResourceOption) (*Zone, error) {
	var resource Zone
	err := ctx.ReadResource("aws:route53/zone:Zone", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Zone resources.
type zoneState struct {
	// A comment for the hosted zone. Defaults to 'Managed by Pulumi'.
	Comment *string `pulumi:"comment"`
	// The ID of the reusable delegation set whose NS records you want to assign to the hosted zone. Conflicts with `vpc` as delegation sets can only be used for public zones.
	DelegationSetId *string `pulumi:"delegationSetId"`
	// Whether to destroy all records (possibly managed outside of this provider) in the zone when destroying the zone.
	ForceDestroy *bool `pulumi:"forceDestroy"`
	// This is the name of the hosted zone.
	Name *string `pulumi:"name"`
	// A list of name servers in associated (or default) delegation set.
	// Find more about delegation sets in [AWS docs](https://docs.aws.amazon.com/Route53/latest/APIReference/actions-on-reusable-delegation-sets.html).
	NameServers []string `pulumi:"nameServers"`
	// A mapping of tags to assign to the zone.
	Tags map[string]interface{} `pulumi:"tags"`
	// Configuration block(s) specifying VPC(s) to associate with a private hosted zone. Conflicts with the `delegationSetId` argument in this resource and any `route53.ZoneAssociation` resource specifying the same zone ID. Detailed below.
	Vpcs []ZoneVpc `pulumi:"vpcs"`
	// The Hosted Zone ID. This can be referenced by zone records.
	ZoneId *string `pulumi:"zoneId"`
}

type ZoneState struct {
	// A comment for the hosted zone. Defaults to 'Managed by Pulumi'.
	Comment pulumi.StringPtrInput
	// The ID of the reusable delegation set whose NS records you want to assign to the hosted zone. Conflicts with `vpc` as delegation sets can only be used for public zones.
	DelegationSetId pulumi.StringPtrInput
	// Whether to destroy all records (possibly managed outside of this provider) in the zone when destroying the zone.
	ForceDestroy pulumi.BoolPtrInput
	// This is the name of the hosted zone.
	Name pulumi.StringPtrInput
	// A list of name servers in associated (or default) delegation set.
	// Find more about delegation sets in [AWS docs](https://docs.aws.amazon.com/Route53/latest/APIReference/actions-on-reusable-delegation-sets.html).
	NameServers pulumi.StringArrayInput
	// A mapping of tags to assign to the zone.
	Tags pulumi.MapInput
	// Configuration block(s) specifying VPC(s) to associate with a private hosted zone. Conflicts with the `delegationSetId` argument in this resource and any `route53.ZoneAssociation` resource specifying the same zone ID. Detailed below.
	Vpcs ZoneVpcArrayInput
	// The Hosted Zone ID. This can be referenced by zone records.
	ZoneId pulumi.StringPtrInput
}

func (ZoneState) ElementType() reflect.Type {
	return reflect.TypeOf((*zoneState)(nil)).Elem()
}

type zoneArgs struct {
	// A comment for the hosted zone. Defaults to 'Managed by Pulumi'.
	Comment *string `pulumi:"comment"`
	// The ID of the reusable delegation set whose NS records you want to assign to the hosted zone. Conflicts with `vpc` as delegation sets can only be used for public zones.
	DelegationSetId *string `pulumi:"delegationSetId"`
	// Whether to destroy all records (possibly managed outside of this provider) in the zone when destroying the zone.
	ForceDestroy *bool `pulumi:"forceDestroy"`
	// This is the name of the hosted zone.
	Name *string `pulumi:"name"`
	// A mapping of tags to assign to the zone.
	Tags map[string]interface{} `pulumi:"tags"`
	// Configuration block(s) specifying VPC(s) to associate with a private hosted zone. Conflicts with the `delegationSetId` argument in this resource and any `route53.ZoneAssociation` resource specifying the same zone ID. Detailed below.
	Vpcs []ZoneVpc `pulumi:"vpcs"`
}

// The set of arguments for constructing a Zone resource.
type ZoneArgs struct {
	// A comment for the hosted zone. Defaults to 'Managed by Pulumi'.
	Comment pulumi.StringPtrInput
	// The ID of the reusable delegation set whose NS records you want to assign to the hosted zone. Conflicts with `vpc` as delegation sets can only be used for public zones.
	DelegationSetId pulumi.StringPtrInput
	// Whether to destroy all records (possibly managed outside of this provider) in the zone when destroying the zone.
	ForceDestroy pulumi.BoolPtrInput
	// This is the name of the hosted zone.
	Name pulumi.StringPtrInput
	// A mapping of tags to assign to the zone.
	Tags pulumi.MapInput
	// Configuration block(s) specifying VPC(s) to associate with a private hosted zone. Conflicts with the `delegationSetId` argument in this resource and any `route53.ZoneAssociation` resource specifying the same zone ID. Detailed below.
	Vpcs ZoneVpcArrayInput
}

func (ZoneArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*zoneArgs)(nil)).Elem()
}
