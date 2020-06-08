// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package ec2

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The VPN Gateway data source provides details about
// a specific VPN gateway.
//
// ## Example Usage
//
//
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		selected, err := ec2.LookupVpnGateway(ctx, &ec2.LookupVpnGatewayArgs{
// 			Filters: ec2.getVpnGatewayFilterArray{
// 				&ec2.LookupVpnGatewayFilter{
// 					Name: "tag:Name",
// 					Values: []string{
// 						"vpn-gw",
// 					},
// 				},
// 			},
// 		}, nil)
// 		if err != nil {
// 			return err
// 		}
// 		ctx.Export("vpnGatewayId", selected.Id)
// 		return nil
// 	})
// }
// ```
func LookupVpnGateway(ctx *pulumi.Context, args *LookupVpnGatewayArgs, opts ...pulumi.InvokeOption) (*LookupVpnGatewayResult, error) {
	var rv LookupVpnGatewayResult
	err := ctx.Invoke("aws:ec2/getVpnGateway:getVpnGateway", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

// A collection of arguments for invoking getVpnGateway.
type LookupVpnGatewayArgs struct {
	// The Autonomous System Number (ASN) for the Amazon side of the specific VPN Gateway to retrieve.
	AmazonSideAsn *string `pulumi:"amazonSideAsn"`
	// The ID of a VPC attached to the specific VPN Gateway to retrieve.
	AttachedVpcId *string `pulumi:"attachedVpcId"`
	// The Availability Zone of the specific VPN Gateway to retrieve.
	AvailabilityZone *string `pulumi:"availabilityZone"`
	// Custom filter block as described below.
	Filters []GetVpnGatewayFilter `pulumi:"filters"`
	// The ID of the specific VPN Gateway to retrieve.
	Id *string `pulumi:"id"`
	// The state of the specific VPN Gateway to retrieve.
	State *string `pulumi:"state"`
	// A map of tags, each pair of which must exactly match
	// a pair on the desired VPN Gateway.
	Tags map[string]interface{} `pulumi:"tags"`
}

// A collection of values returned by getVpnGateway.
type LookupVpnGatewayResult struct {
	AmazonSideAsn    string                 `pulumi:"amazonSideAsn"`
	AttachedVpcId    string                 `pulumi:"attachedVpcId"`
	AvailabilityZone string                 `pulumi:"availabilityZone"`
	Filters          []GetVpnGatewayFilter  `pulumi:"filters"`
	Id               string                 `pulumi:"id"`
	State            string                 `pulumi:"state"`
	Tags             map[string]interface{} `pulumi:"tags"`
}
