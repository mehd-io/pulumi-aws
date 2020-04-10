// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package ec2

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides an EC2 Spot Fleet Request resource. This allows a fleet of Spot
// instances to be requested on the Spot market.
type SpotFleetRequest struct {
	pulumi.CustomResourceState

	// Indicates how to allocate the target capacity across
	// the Spot pools specified by the Spot fleet request. The default is
	// `lowestPrice`.
	AllocationStrategy pulumi.StringPtrOutput `pulumi:"allocationStrategy"`
	ClientToken        pulumi.StringOutput    `pulumi:"clientToken"`
	// Indicates whether running Spot
	// instances should be terminated if the target capacity of the Spot fleet
	// request is decreased below the current size of the Spot fleet.
	ExcessCapacityTerminationPolicy pulumi.StringPtrOutput `pulumi:"excessCapacityTerminationPolicy"`
	// The type of fleet request. Indicates whether the Spot Fleet only requests the target
	// capacity or also attempts to maintain it. Default is `maintain`.
	FleetType pulumi.StringPtrOutput `pulumi:"fleetType"`
	// Grants the Spot fleet permission to terminate
	// Spot instances on your behalf when you cancel its Spot fleet request using
	// CancelSpotFleetRequests or when the Spot fleet request expires, if you set
	// terminateInstancesWithExpiration.
	IamFleetRole pulumi.StringOutput `pulumi:"iamFleetRole"`
	// Indicates whether a Spot
	// instance stops or terminates when it is interrupted. Default is
	// `terminate`.
	InstanceInterruptionBehaviour pulumi.StringPtrOutput `pulumi:"instanceInterruptionBehaviour"`
	//
	// The number of Spot pools across which to allocate your target Spot capacity.
	// Valid only when `allocationStrategy` is set to `lowestPrice`. Spot Fleet selects
	// the cheapest Spot pools and evenly allocates your target Spot capacity across
	// the number of Spot pools that you specify.
	InstancePoolsToUseCount pulumi.IntPtrOutput `pulumi:"instancePoolsToUseCount"`
	// Used to define the launch configuration of the
	// spot-fleet request. Can be specified multiple times to define different bids
	// across different markets and instance types.
	LaunchSpecifications SpotFleetRequestLaunchSpecificationArrayOutput `pulumi:"launchSpecifications"`
	// A list of elastic load balancer names to add to the Spot fleet.
	LoadBalancers pulumi.StringArrayOutput `pulumi:"loadBalancers"`
	// Indicates whether Spot fleet should replace unhealthy instances. Default `false`.
	ReplaceUnhealthyInstances pulumi.BoolPtrOutput `pulumi:"replaceUnhealthyInstances"`
	// The maximum bid price per unit hour.
	SpotPrice pulumi.StringPtrOutput `pulumi:"spotPrice"`
	// The state of the Spot fleet request.
	SpotRequestState pulumi.StringOutput `pulumi:"spotRequestState"`
	// A mapping of tags to assign to the resource.
	Tags pulumi.MapOutput `pulumi:"tags"`
	// The number of units to request. You can choose to set the
	// target capacity in terms of instances or a performance characteristic that is
	// important to your application workload, such as vCPUs, memory, or I/O.
	TargetCapacity pulumi.IntOutput `pulumi:"targetCapacity"`
	// A list of `alb.TargetGroup` ARNs, for use with Application Load Balancing.
	TargetGroupArns pulumi.StringArrayOutput `pulumi:"targetGroupArns"`
	// Indicates whether running Spot
	// instances should be terminated when the Spot fleet request expires.
	TerminateInstancesWithExpiration pulumi.BoolPtrOutput `pulumi:"terminateInstancesWithExpiration"`
	// The start date and time of the request, in UTC [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.8) format(for example, YYYY-MM-DDTHH:MM:SSZ). The default is to start fulfilling the request immediately.
	ValidFrom pulumi.StringPtrOutput `pulumi:"validFrom"`
	// The end date and time of the request, in UTC [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.8) format(for example, YYYY-MM-DDTHH:MM:SSZ). At this point, no new Spot instance requests are placed or enabled to fulfill the request. Defaults to 24 hours.
	ValidUntil pulumi.StringPtrOutput `pulumi:"validUntil"`
	// If set, this provider will
	// wait for the Spot Request to be fulfilled, and will throw an error if the
	// timeout of 10m is reached.
	WaitForFulfillment pulumi.BoolPtrOutput `pulumi:"waitForFulfillment"`
}

// NewSpotFleetRequest registers a new resource with the given unique name, arguments, and options.
func NewSpotFleetRequest(ctx *pulumi.Context,
	name string, args *SpotFleetRequestArgs, opts ...pulumi.ResourceOption) (*SpotFleetRequest, error) {
	if args == nil || args.IamFleetRole == nil {
		return nil, errors.New("missing required argument 'IamFleetRole'")
	}
	if args == nil || args.LaunchSpecifications == nil {
		return nil, errors.New("missing required argument 'LaunchSpecifications'")
	}
	if args == nil || args.TargetCapacity == nil {
		return nil, errors.New("missing required argument 'TargetCapacity'")
	}
	if args == nil {
		args = &SpotFleetRequestArgs{}
	}
	var resource SpotFleetRequest
	err := ctx.RegisterResource("aws:ec2/spotFleetRequest:SpotFleetRequest", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetSpotFleetRequest gets an existing SpotFleetRequest resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetSpotFleetRequest(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *SpotFleetRequestState, opts ...pulumi.ResourceOption) (*SpotFleetRequest, error) {
	var resource SpotFleetRequest
	err := ctx.ReadResource("aws:ec2/spotFleetRequest:SpotFleetRequest", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering SpotFleetRequest resources.
type spotFleetRequestState struct {
	// Indicates how to allocate the target capacity across
	// the Spot pools specified by the Spot fleet request. The default is
	// `lowestPrice`.
	AllocationStrategy *string `pulumi:"allocationStrategy"`
	ClientToken        *string `pulumi:"clientToken"`
	// Indicates whether running Spot
	// instances should be terminated if the target capacity of the Spot fleet
	// request is decreased below the current size of the Spot fleet.
	ExcessCapacityTerminationPolicy *string `pulumi:"excessCapacityTerminationPolicy"`
	// The type of fleet request. Indicates whether the Spot Fleet only requests the target
	// capacity or also attempts to maintain it. Default is `maintain`.
	FleetType *string `pulumi:"fleetType"`
	// Grants the Spot fleet permission to terminate
	// Spot instances on your behalf when you cancel its Spot fleet request using
	// CancelSpotFleetRequests or when the Spot fleet request expires, if you set
	// terminateInstancesWithExpiration.
	IamFleetRole *string `pulumi:"iamFleetRole"`
	// Indicates whether a Spot
	// instance stops or terminates when it is interrupted. Default is
	// `terminate`.
	InstanceInterruptionBehaviour *string `pulumi:"instanceInterruptionBehaviour"`
	//
	// The number of Spot pools across which to allocate your target Spot capacity.
	// Valid only when `allocationStrategy` is set to `lowestPrice`. Spot Fleet selects
	// the cheapest Spot pools and evenly allocates your target Spot capacity across
	// the number of Spot pools that you specify.
	InstancePoolsToUseCount *int `pulumi:"instancePoolsToUseCount"`
	// Used to define the launch configuration of the
	// spot-fleet request. Can be specified multiple times to define different bids
	// across different markets and instance types.
	LaunchSpecifications []SpotFleetRequestLaunchSpecification `pulumi:"launchSpecifications"`
	// A list of elastic load balancer names to add to the Spot fleet.
	LoadBalancers []string `pulumi:"loadBalancers"`
	// Indicates whether Spot fleet should replace unhealthy instances. Default `false`.
	ReplaceUnhealthyInstances *bool `pulumi:"replaceUnhealthyInstances"`
	// The maximum bid price per unit hour.
	SpotPrice *string `pulumi:"spotPrice"`
	// The state of the Spot fleet request.
	SpotRequestState *string `pulumi:"spotRequestState"`
	// A mapping of tags to assign to the resource.
	Tags map[string]interface{} `pulumi:"tags"`
	// The number of units to request. You can choose to set the
	// target capacity in terms of instances or a performance characteristic that is
	// important to your application workload, such as vCPUs, memory, or I/O.
	TargetCapacity *int `pulumi:"targetCapacity"`
	// A list of `alb.TargetGroup` ARNs, for use with Application Load Balancing.
	TargetGroupArns []string `pulumi:"targetGroupArns"`
	// Indicates whether running Spot
	// instances should be terminated when the Spot fleet request expires.
	TerminateInstancesWithExpiration *bool `pulumi:"terminateInstancesWithExpiration"`
	// The start date and time of the request, in UTC [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.8) format(for example, YYYY-MM-DDTHH:MM:SSZ). The default is to start fulfilling the request immediately.
	ValidFrom *string `pulumi:"validFrom"`
	// The end date and time of the request, in UTC [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.8) format(for example, YYYY-MM-DDTHH:MM:SSZ). At this point, no new Spot instance requests are placed or enabled to fulfill the request. Defaults to 24 hours.
	ValidUntil *string `pulumi:"validUntil"`
	// If set, this provider will
	// wait for the Spot Request to be fulfilled, and will throw an error if the
	// timeout of 10m is reached.
	WaitForFulfillment *bool `pulumi:"waitForFulfillment"`
}

type SpotFleetRequestState struct {
	// Indicates how to allocate the target capacity across
	// the Spot pools specified by the Spot fleet request. The default is
	// `lowestPrice`.
	AllocationStrategy pulumi.StringPtrInput
	ClientToken        pulumi.StringPtrInput
	// Indicates whether running Spot
	// instances should be terminated if the target capacity of the Spot fleet
	// request is decreased below the current size of the Spot fleet.
	ExcessCapacityTerminationPolicy pulumi.StringPtrInput
	// The type of fleet request. Indicates whether the Spot Fleet only requests the target
	// capacity or also attempts to maintain it. Default is `maintain`.
	FleetType pulumi.StringPtrInput
	// Grants the Spot fleet permission to terminate
	// Spot instances on your behalf when you cancel its Spot fleet request using
	// CancelSpotFleetRequests or when the Spot fleet request expires, if you set
	// terminateInstancesWithExpiration.
	IamFleetRole pulumi.StringPtrInput
	// Indicates whether a Spot
	// instance stops or terminates when it is interrupted. Default is
	// `terminate`.
	InstanceInterruptionBehaviour pulumi.StringPtrInput
	//
	// The number of Spot pools across which to allocate your target Spot capacity.
	// Valid only when `allocationStrategy` is set to `lowestPrice`. Spot Fleet selects
	// the cheapest Spot pools and evenly allocates your target Spot capacity across
	// the number of Spot pools that you specify.
	InstancePoolsToUseCount pulumi.IntPtrInput
	// Used to define the launch configuration of the
	// spot-fleet request. Can be specified multiple times to define different bids
	// across different markets and instance types.
	LaunchSpecifications SpotFleetRequestLaunchSpecificationArrayInput
	// A list of elastic load balancer names to add to the Spot fleet.
	LoadBalancers pulumi.StringArrayInput
	// Indicates whether Spot fleet should replace unhealthy instances. Default `false`.
	ReplaceUnhealthyInstances pulumi.BoolPtrInput
	// The maximum bid price per unit hour.
	SpotPrice pulumi.StringPtrInput
	// The state of the Spot fleet request.
	SpotRequestState pulumi.StringPtrInput
	// A mapping of tags to assign to the resource.
	Tags pulumi.MapInput
	// The number of units to request. You can choose to set the
	// target capacity in terms of instances or a performance characteristic that is
	// important to your application workload, such as vCPUs, memory, or I/O.
	TargetCapacity pulumi.IntPtrInput
	// A list of `alb.TargetGroup` ARNs, for use with Application Load Balancing.
	TargetGroupArns pulumi.StringArrayInput
	// Indicates whether running Spot
	// instances should be terminated when the Spot fleet request expires.
	TerminateInstancesWithExpiration pulumi.BoolPtrInput
	// The start date and time of the request, in UTC [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.8) format(for example, YYYY-MM-DDTHH:MM:SSZ). The default is to start fulfilling the request immediately.
	ValidFrom pulumi.StringPtrInput
	// The end date and time of the request, in UTC [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.8) format(for example, YYYY-MM-DDTHH:MM:SSZ). At this point, no new Spot instance requests are placed or enabled to fulfill the request. Defaults to 24 hours.
	ValidUntil pulumi.StringPtrInput
	// If set, this provider will
	// wait for the Spot Request to be fulfilled, and will throw an error if the
	// timeout of 10m is reached.
	WaitForFulfillment pulumi.BoolPtrInput
}

func (SpotFleetRequestState) ElementType() reflect.Type {
	return reflect.TypeOf((*spotFleetRequestState)(nil)).Elem()
}

type spotFleetRequestArgs struct {
	// Indicates how to allocate the target capacity across
	// the Spot pools specified by the Spot fleet request. The default is
	// `lowestPrice`.
	AllocationStrategy *string `pulumi:"allocationStrategy"`
	// Indicates whether running Spot
	// instances should be terminated if the target capacity of the Spot fleet
	// request is decreased below the current size of the Spot fleet.
	ExcessCapacityTerminationPolicy *string `pulumi:"excessCapacityTerminationPolicy"`
	// The type of fleet request. Indicates whether the Spot Fleet only requests the target
	// capacity or also attempts to maintain it. Default is `maintain`.
	FleetType *string `pulumi:"fleetType"`
	// Grants the Spot fleet permission to terminate
	// Spot instances on your behalf when you cancel its Spot fleet request using
	// CancelSpotFleetRequests or when the Spot fleet request expires, if you set
	// terminateInstancesWithExpiration.
	IamFleetRole string `pulumi:"iamFleetRole"`
	// Indicates whether a Spot
	// instance stops or terminates when it is interrupted. Default is
	// `terminate`.
	InstanceInterruptionBehaviour *string `pulumi:"instanceInterruptionBehaviour"`
	//
	// The number of Spot pools across which to allocate your target Spot capacity.
	// Valid only when `allocationStrategy` is set to `lowestPrice`. Spot Fleet selects
	// the cheapest Spot pools and evenly allocates your target Spot capacity across
	// the number of Spot pools that you specify.
	InstancePoolsToUseCount *int `pulumi:"instancePoolsToUseCount"`
	// Used to define the launch configuration of the
	// spot-fleet request. Can be specified multiple times to define different bids
	// across different markets and instance types.
	LaunchSpecifications []SpotFleetRequestLaunchSpecification `pulumi:"launchSpecifications"`
	// A list of elastic load balancer names to add to the Spot fleet.
	LoadBalancers []string `pulumi:"loadBalancers"`
	// Indicates whether Spot fleet should replace unhealthy instances. Default `false`.
	ReplaceUnhealthyInstances *bool `pulumi:"replaceUnhealthyInstances"`
	// The maximum bid price per unit hour.
	SpotPrice *string `pulumi:"spotPrice"`
	// A mapping of tags to assign to the resource.
	Tags map[string]interface{} `pulumi:"tags"`
	// The number of units to request. You can choose to set the
	// target capacity in terms of instances or a performance characteristic that is
	// important to your application workload, such as vCPUs, memory, or I/O.
	TargetCapacity int `pulumi:"targetCapacity"`
	// A list of `alb.TargetGroup` ARNs, for use with Application Load Balancing.
	TargetGroupArns []string `pulumi:"targetGroupArns"`
	// Indicates whether running Spot
	// instances should be terminated when the Spot fleet request expires.
	TerminateInstancesWithExpiration *bool `pulumi:"terminateInstancesWithExpiration"`
	// The start date and time of the request, in UTC [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.8) format(for example, YYYY-MM-DDTHH:MM:SSZ). The default is to start fulfilling the request immediately.
	ValidFrom *string `pulumi:"validFrom"`
	// The end date and time of the request, in UTC [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.8) format(for example, YYYY-MM-DDTHH:MM:SSZ). At this point, no new Spot instance requests are placed or enabled to fulfill the request. Defaults to 24 hours.
	ValidUntil *string `pulumi:"validUntil"`
	// If set, this provider will
	// wait for the Spot Request to be fulfilled, and will throw an error if the
	// timeout of 10m is reached.
	WaitForFulfillment *bool `pulumi:"waitForFulfillment"`
}

// The set of arguments for constructing a SpotFleetRequest resource.
type SpotFleetRequestArgs struct {
	// Indicates how to allocate the target capacity across
	// the Spot pools specified by the Spot fleet request. The default is
	// `lowestPrice`.
	AllocationStrategy pulumi.StringPtrInput
	// Indicates whether running Spot
	// instances should be terminated if the target capacity of the Spot fleet
	// request is decreased below the current size of the Spot fleet.
	ExcessCapacityTerminationPolicy pulumi.StringPtrInput
	// The type of fleet request. Indicates whether the Spot Fleet only requests the target
	// capacity or also attempts to maintain it. Default is `maintain`.
	FleetType pulumi.StringPtrInput
	// Grants the Spot fleet permission to terminate
	// Spot instances on your behalf when you cancel its Spot fleet request using
	// CancelSpotFleetRequests or when the Spot fleet request expires, if you set
	// terminateInstancesWithExpiration.
	IamFleetRole pulumi.StringInput
	// Indicates whether a Spot
	// instance stops or terminates when it is interrupted. Default is
	// `terminate`.
	InstanceInterruptionBehaviour pulumi.StringPtrInput
	//
	// The number of Spot pools across which to allocate your target Spot capacity.
	// Valid only when `allocationStrategy` is set to `lowestPrice`. Spot Fleet selects
	// the cheapest Spot pools and evenly allocates your target Spot capacity across
	// the number of Spot pools that you specify.
	InstancePoolsToUseCount pulumi.IntPtrInput
	// Used to define the launch configuration of the
	// spot-fleet request. Can be specified multiple times to define different bids
	// across different markets and instance types.
	LaunchSpecifications SpotFleetRequestLaunchSpecificationArrayInput
	// A list of elastic load balancer names to add to the Spot fleet.
	LoadBalancers pulumi.StringArrayInput
	// Indicates whether Spot fleet should replace unhealthy instances. Default `false`.
	ReplaceUnhealthyInstances pulumi.BoolPtrInput
	// The maximum bid price per unit hour.
	SpotPrice pulumi.StringPtrInput
	// A mapping of tags to assign to the resource.
	Tags pulumi.MapInput
	// The number of units to request. You can choose to set the
	// target capacity in terms of instances or a performance characteristic that is
	// important to your application workload, such as vCPUs, memory, or I/O.
	TargetCapacity pulumi.IntInput
	// A list of `alb.TargetGroup` ARNs, for use with Application Load Balancing.
	TargetGroupArns pulumi.StringArrayInput
	// Indicates whether running Spot
	// instances should be terminated when the Spot fleet request expires.
	TerminateInstancesWithExpiration pulumi.BoolPtrInput
	// The start date and time of the request, in UTC [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.8) format(for example, YYYY-MM-DDTHH:MM:SSZ). The default is to start fulfilling the request immediately.
	ValidFrom pulumi.StringPtrInput
	// The end date and time of the request, in UTC [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.8) format(for example, YYYY-MM-DDTHH:MM:SSZ). At this point, no new Spot instance requests are placed or enabled to fulfill the request. Defaults to 24 hours.
	ValidUntil pulumi.StringPtrInput
	// If set, this provider will
	// wait for the Spot Request to be fulfilled, and will throw an error if the
	// timeout of 10m is reached.
	WaitForFulfillment pulumi.BoolPtrInput
}

func (SpotFleetRequestArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*spotFleetRequestArgs)(nil)).Elem()
}
