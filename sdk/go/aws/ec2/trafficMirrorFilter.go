// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package ec2

import (
	"reflect"

	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Provides an Traffic mirror filter.
// Read [limits and considerations](https://docs.aws.amazon.com/vpc/latest/mirroring/traffic-mirroring-considerations.html) for traffic mirroring
//
// ## Example Usage
//
//
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-aws/sdk/v2/go/aws/ec2"
// 	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		foo, err := ec2.NewTrafficMirrorFilter(ctx, "foo", &ec2.TrafficMirrorFilterArgs{
// 			Description: pulumi.String("traffic mirror filter - example"),
// 			NetworkServices: pulumi.StringArray{
// 				pulumi.String("amazon-dns"),
// 			},
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
type TrafficMirrorFilter struct {
	pulumi.CustomResourceState

	// A description of the filter.
	Description pulumi.StringPtrOutput `pulumi:"description"`
	// List of amazon network services that should be mirrored. Valid values: `amazon-dns`.
	NetworkServices pulumi.StringArrayOutput `pulumi:"networkServices"`
	// Key-value map of resource tags.
	Tags pulumi.MapOutput `pulumi:"tags"`
}

// NewTrafficMirrorFilter registers a new resource with the given unique name, arguments, and options.
func NewTrafficMirrorFilter(ctx *pulumi.Context,
	name string, args *TrafficMirrorFilterArgs, opts ...pulumi.ResourceOption) (*TrafficMirrorFilter, error) {
	if args == nil {
		args = &TrafficMirrorFilterArgs{}
	}
	var resource TrafficMirrorFilter
	err := ctx.RegisterResource("aws:ec2/trafficMirrorFilter:TrafficMirrorFilter", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetTrafficMirrorFilter gets an existing TrafficMirrorFilter resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetTrafficMirrorFilter(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *TrafficMirrorFilterState, opts ...pulumi.ResourceOption) (*TrafficMirrorFilter, error) {
	var resource TrafficMirrorFilter
	err := ctx.ReadResource("aws:ec2/trafficMirrorFilter:TrafficMirrorFilter", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering TrafficMirrorFilter resources.
type trafficMirrorFilterState struct {
	// A description of the filter.
	Description *string `pulumi:"description"`
	// List of amazon network services that should be mirrored. Valid values: `amazon-dns`.
	NetworkServices []string `pulumi:"networkServices"`
	// Key-value map of resource tags.
	Tags map[string]interface{} `pulumi:"tags"`
}

type TrafficMirrorFilterState struct {
	// A description of the filter.
	Description pulumi.StringPtrInput
	// List of amazon network services that should be mirrored. Valid values: `amazon-dns`.
	NetworkServices pulumi.StringArrayInput
	// Key-value map of resource tags.
	Tags pulumi.MapInput
}

func (TrafficMirrorFilterState) ElementType() reflect.Type {
	return reflect.TypeOf((*trafficMirrorFilterState)(nil)).Elem()
}

type trafficMirrorFilterArgs struct {
	// A description of the filter.
	Description *string `pulumi:"description"`
	// List of amazon network services that should be mirrored. Valid values: `amazon-dns`.
	NetworkServices []string `pulumi:"networkServices"`
	// Key-value map of resource tags.
	Tags map[string]interface{} `pulumi:"tags"`
}

// The set of arguments for constructing a TrafficMirrorFilter resource.
type TrafficMirrorFilterArgs struct {
	// A description of the filter.
	Description pulumi.StringPtrInput
	// List of amazon network services that should be mirrored. Valid values: `amazon-dns`.
	NetworkServices pulumi.StringArrayInput
	// Key-value map of resource tags.
	Tags pulumi.MapInput
}

func (TrafficMirrorFilterArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*trafficMirrorFilterArgs)(nil)).Elem()
}
