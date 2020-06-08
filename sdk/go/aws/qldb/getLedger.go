// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package qldb

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Use this data source to fetch information about a Quantum Ledger Database.
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
// 		example, err := qldb.LookupLedger(ctx, &qldb.LookupLedgerArgs{
// 			Name: "anExampleLedger",
// 		}, nil)
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
func LookupLedger(ctx *pulumi.Context, args *LookupLedgerArgs, opts ...pulumi.InvokeOption) (*LookupLedgerResult, error) {
	var rv LookupLedgerResult
	err := ctx.Invoke("aws:qldb/getLedger:getLedger", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

// A collection of arguments for invoking getLedger.
type LookupLedgerArgs struct {
	// The friendly name of the ledger to match.
	Name string `pulumi:"name"`
}

// A collection of values returned by getLedger.
type LookupLedgerResult struct {
	// Amazon Resource Name (ARN) of the ledger.
	Arn string `pulumi:"arn"`
	// Deletion protection on the QLDB Ledger instance. Set to `true` by default.
	DeletionProtection bool `pulumi:"deletionProtection"`
	// The provider-assigned unique ID for this managed resource.
	Id   string `pulumi:"id"`
	Name string `pulumi:"name"`
}
