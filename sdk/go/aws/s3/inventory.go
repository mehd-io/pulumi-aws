// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package s3

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides a S3 bucket [inventory configuration](https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-inventory.html) resource.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/s3_bucket_inventory.html.markdown.
type Inventory struct {
	s *pulumi.ResourceState
}

// NewInventory registers a new resource with the given unique name, arguments, and options.
func NewInventory(ctx *pulumi.Context,
	name string, args *InventoryArgs, opts ...pulumi.ResourceOpt) (*Inventory, error) {
	if args == nil || args.Bucket == nil {
		return nil, errors.New("missing required argument 'Bucket'")
	}
	if args == nil || args.Destination == nil {
		return nil, errors.New("missing required argument 'Destination'")
	}
	if args == nil || args.IncludedObjectVersions == nil {
		return nil, errors.New("missing required argument 'IncludedObjectVersions'")
	}
	if args == nil || args.Schedule == nil {
		return nil, errors.New("missing required argument 'Schedule'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["bucket"] = nil
		inputs["destination"] = nil
		inputs["enabled"] = nil
		inputs["filter"] = nil
		inputs["includedObjectVersions"] = nil
		inputs["name"] = nil
		inputs["optionalFields"] = nil
		inputs["schedule"] = nil
	} else {
		inputs["bucket"] = args.Bucket
		inputs["destination"] = args.Destination
		inputs["enabled"] = args.Enabled
		inputs["filter"] = args.Filter
		inputs["includedObjectVersions"] = args.IncludedObjectVersions
		inputs["name"] = args.Name
		inputs["optionalFields"] = args.OptionalFields
		inputs["schedule"] = args.Schedule
	}
	s, err := ctx.RegisterResource("aws:s3/inventory:Inventory", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Inventory{s: s}, nil
}

// GetInventory gets an existing Inventory resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetInventory(ctx *pulumi.Context,
	name string, id pulumi.ID, state *InventoryState, opts ...pulumi.ResourceOpt) (*Inventory, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["bucket"] = state.Bucket
		inputs["destination"] = state.Destination
		inputs["enabled"] = state.Enabled
		inputs["filter"] = state.Filter
		inputs["includedObjectVersions"] = state.IncludedObjectVersions
		inputs["name"] = state.Name
		inputs["optionalFields"] = state.OptionalFields
		inputs["schedule"] = state.Schedule
	}
	s, err := ctx.ReadResource("aws:s3/inventory:Inventory", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Inventory{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Inventory) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Inventory) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// The S3 bucket configuration where inventory results are published (documented below).
func (r *Inventory) Bucket() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["bucket"])
}

// Contains information about where to publish the inventory results (documented below).
func (r *Inventory) Destination() *pulumi.Output {
	return r.s.State["destination"]
}

// Specifies whether the inventory is enabled or disabled.
func (r *Inventory) Enabled() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["enabled"])
}

// Specifies an inventory filter. The inventory only includes objects that meet the filter's criteria (documented below).
func (r *Inventory) Filter() *pulumi.Output {
	return r.s.State["filter"]
}

// Object versions to include in the inventory list. Valid values: `All`, `Current`.
func (r *Inventory) IncludedObjectVersions() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["includedObjectVersions"])
}

// Unique identifier of the inventory configuration for the bucket.
func (r *Inventory) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// List of optional fields that are included in the inventory results.
// Valid values: `Size`, `LastModifiedDate`, `StorageClass`, `ETag`, `IsMultipartUploaded`, `ReplicationStatus`, `EncryptionStatus`, `ObjectLockRetainUntilDate`, `ObjectLockMode`, `ObjectLockLegalHoldStatus`, `IntelligentTieringAccessTier`.
func (r *Inventory) OptionalFields() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["optionalFields"])
}

// Specifies the schedule for generating inventory results (documented below).
func (r *Inventory) Schedule() *pulumi.Output {
	return r.s.State["schedule"]
}

// Input properties used for looking up and filtering Inventory resources.
type InventoryState struct {
	// The S3 bucket configuration where inventory results are published (documented below).
	Bucket interface{}
	// Contains information about where to publish the inventory results (documented below).
	Destination interface{}
	// Specifies whether the inventory is enabled or disabled.
	Enabled interface{}
	// Specifies an inventory filter. The inventory only includes objects that meet the filter's criteria (documented below).
	Filter interface{}
	// Object versions to include in the inventory list. Valid values: `All`, `Current`.
	IncludedObjectVersions interface{}
	// Unique identifier of the inventory configuration for the bucket.
	Name interface{}
	// List of optional fields that are included in the inventory results.
	// Valid values: `Size`, `LastModifiedDate`, `StorageClass`, `ETag`, `IsMultipartUploaded`, `ReplicationStatus`, `EncryptionStatus`, `ObjectLockRetainUntilDate`, `ObjectLockMode`, `ObjectLockLegalHoldStatus`, `IntelligentTieringAccessTier`.
	OptionalFields interface{}
	// Specifies the schedule for generating inventory results (documented below).
	Schedule interface{}
}

// The set of arguments for constructing a Inventory resource.
type InventoryArgs struct {
	// The S3 bucket configuration where inventory results are published (documented below).
	Bucket interface{}
	// Contains information about where to publish the inventory results (documented below).
	Destination interface{}
	// Specifies whether the inventory is enabled or disabled.
	Enabled interface{}
	// Specifies an inventory filter. The inventory only includes objects that meet the filter's criteria (documented below).
	Filter interface{}
	// Object versions to include in the inventory list. Valid values: `All`, `Current`.
	IncludedObjectVersions interface{}
	// Unique identifier of the inventory configuration for the bucket.
	Name interface{}
	// List of optional fields that are included in the inventory results.
	// Valid values: `Size`, `LastModifiedDate`, `StorageClass`, `ETag`, `IsMultipartUploaded`, `ReplicationStatus`, `EncryptionStatus`, `ObjectLockRetainUntilDate`, `ObjectLockMode`, `ObjectLockLegalHoldStatus`, `IntelligentTieringAccessTier`.
	OptionalFields interface{}
	// Specifies the schedule for generating inventory results (documented below).
	Schedule interface{}
}
