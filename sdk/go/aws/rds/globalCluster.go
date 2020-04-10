// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package rds

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages a RDS Global Cluster, which is an Aurora global database spread across multiple regions. The global database contains a single primary cluster with read-write capability, and a read-only secondary cluster that receives data from the primary cluster through high-speed replication performed by the Aurora storage subsystem.
//
// More information about Aurora global databases can be found in the [Aurora User Guide](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html#aurora-global-database-creating).
type GlobalCluster struct {
	pulumi.CustomResourceState

	// RDS Global Cluster Amazon Resource Name (ARN)
	Arn pulumi.StringOutput `pulumi:"arn"`
	// Name for an automatically created database on cluster creation.
	DatabaseName pulumi.StringPtrOutput `pulumi:"databaseName"`
	// If the Global Cluster should have deletion protection enabled. The database can't be deleted when this value is set to `true`. The default is `false`.
	DeletionProtection pulumi.BoolPtrOutput `pulumi:"deletionProtection"`
	// Name of the database engine to be used for this DB cluster. Valid values: `aurora`, `aurora-mysql`, `aurora-postgresql`. Defaults to `aurora`.
	Engine pulumi.StringPtrOutput `pulumi:"engine"`
	// Engine version of the Aurora global database.
	// * **NOTE:** When the engine is set to `aurora-mysql`, an engine version compatible with global database is required. The earliest available version is `5.7.mysql_aurora.2.06.0`.
	EngineVersion pulumi.StringOutput `pulumi:"engineVersion"`
	// The global cluster identifier.
	GlobalClusterIdentifier pulumi.StringOutput `pulumi:"globalClusterIdentifier"`
	// AWS Region-unique, immutable identifier for the global database cluster. This identifier is found in AWS CloudTrail log entries whenever the AWS KMS key for the DB cluster is accessed
	GlobalClusterResourceId pulumi.StringOutput `pulumi:"globalClusterResourceId"`
	// Specifies whether the DB cluster is encrypted. The default is `false`.
	StorageEncrypted pulumi.BoolPtrOutput `pulumi:"storageEncrypted"`
}

// NewGlobalCluster registers a new resource with the given unique name, arguments, and options.
func NewGlobalCluster(ctx *pulumi.Context,
	name string, args *GlobalClusterArgs, opts ...pulumi.ResourceOption) (*GlobalCluster, error) {
	if args == nil || args.GlobalClusterIdentifier == nil {
		return nil, errors.New("missing required argument 'GlobalClusterIdentifier'")
	}
	if args == nil {
		args = &GlobalClusterArgs{}
	}
	var resource GlobalCluster
	err := ctx.RegisterResource("aws:rds/globalCluster:GlobalCluster", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetGlobalCluster gets an existing GlobalCluster resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetGlobalCluster(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *GlobalClusterState, opts ...pulumi.ResourceOption) (*GlobalCluster, error) {
	var resource GlobalCluster
	err := ctx.ReadResource("aws:rds/globalCluster:GlobalCluster", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering GlobalCluster resources.
type globalClusterState struct {
	// RDS Global Cluster Amazon Resource Name (ARN)
	Arn *string `pulumi:"arn"`
	// Name for an automatically created database on cluster creation.
	DatabaseName *string `pulumi:"databaseName"`
	// If the Global Cluster should have deletion protection enabled. The database can't be deleted when this value is set to `true`. The default is `false`.
	DeletionProtection *bool `pulumi:"deletionProtection"`
	// Name of the database engine to be used for this DB cluster. Valid values: `aurora`, `aurora-mysql`, `aurora-postgresql`. Defaults to `aurora`.
	Engine *string `pulumi:"engine"`
	// Engine version of the Aurora global database.
	// * **NOTE:** When the engine is set to `aurora-mysql`, an engine version compatible with global database is required. The earliest available version is `5.7.mysql_aurora.2.06.0`.
	EngineVersion *string `pulumi:"engineVersion"`
	// The global cluster identifier.
	GlobalClusterIdentifier *string `pulumi:"globalClusterIdentifier"`
	// AWS Region-unique, immutable identifier for the global database cluster. This identifier is found in AWS CloudTrail log entries whenever the AWS KMS key for the DB cluster is accessed
	GlobalClusterResourceId *string `pulumi:"globalClusterResourceId"`
	// Specifies whether the DB cluster is encrypted. The default is `false`.
	StorageEncrypted *bool `pulumi:"storageEncrypted"`
}

type GlobalClusterState struct {
	// RDS Global Cluster Amazon Resource Name (ARN)
	Arn pulumi.StringPtrInput
	// Name for an automatically created database on cluster creation.
	DatabaseName pulumi.StringPtrInput
	// If the Global Cluster should have deletion protection enabled. The database can't be deleted when this value is set to `true`. The default is `false`.
	DeletionProtection pulumi.BoolPtrInput
	// Name of the database engine to be used for this DB cluster. Valid values: `aurora`, `aurora-mysql`, `aurora-postgresql`. Defaults to `aurora`.
	Engine pulumi.StringPtrInput
	// Engine version of the Aurora global database.
	// * **NOTE:** When the engine is set to `aurora-mysql`, an engine version compatible with global database is required. The earliest available version is `5.7.mysql_aurora.2.06.0`.
	EngineVersion pulumi.StringPtrInput
	// The global cluster identifier.
	GlobalClusterIdentifier pulumi.StringPtrInput
	// AWS Region-unique, immutable identifier for the global database cluster. This identifier is found in AWS CloudTrail log entries whenever the AWS KMS key for the DB cluster is accessed
	GlobalClusterResourceId pulumi.StringPtrInput
	// Specifies whether the DB cluster is encrypted. The default is `false`.
	StorageEncrypted pulumi.BoolPtrInput
}

func (GlobalClusterState) ElementType() reflect.Type {
	return reflect.TypeOf((*globalClusterState)(nil)).Elem()
}

type globalClusterArgs struct {
	// Name for an automatically created database on cluster creation.
	DatabaseName *string `pulumi:"databaseName"`
	// If the Global Cluster should have deletion protection enabled. The database can't be deleted when this value is set to `true`. The default is `false`.
	DeletionProtection *bool `pulumi:"deletionProtection"`
	// Name of the database engine to be used for this DB cluster. Valid values: `aurora`, `aurora-mysql`, `aurora-postgresql`. Defaults to `aurora`.
	Engine *string `pulumi:"engine"`
	// Engine version of the Aurora global database.
	// * **NOTE:** When the engine is set to `aurora-mysql`, an engine version compatible with global database is required. The earliest available version is `5.7.mysql_aurora.2.06.0`.
	EngineVersion *string `pulumi:"engineVersion"`
	// The global cluster identifier.
	GlobalClusterIdentifier string `pulumi:"globalClusterIdentifier"`
	// Specifies whether the DB cluster is encrypted. The default is `false`.
	StorageEncrypted *bool `pulumi:"storageEncrypted"`
}

// The set of arguments for constructing a GlobalCluster resource.
type GlobalClusterArgs struct {
	// Name for an automatically created database on cluster creation.
	DatabaseName pulumi.StringPtrInput
	// If the Global Cluster should have deletion protection enabled. The database can't be deleted when this value is set to `true`. The default is `false`.
	DeletionProtection pulumi.BoolPtrInput
	// Name of the database engine to be used for this DB cluster. Valid values: `aurora`, `aurora-mysql`, `aurora-postgresql`. Defaults to `aurora`.
	Engine pulumi.StringPtrInput
	// Engine version of the Aurora global database.
	// * **NOTE:** When the engine is set to `aurora-mysql`, an engine version compatible with global database is required. The earliest available version is `5.7.mysql_aurora.2.06.0`.
	EngineVersion pulumi.StringPtrInput
	// The global cluster identifier.
	GlobalClusterIdentifier pulumi.StringInput
	// Specifies whether the DB cluster is encrypted. The default is `false`.
	StorageEncrypted pulumi.BoolPtrInput
}

func (GlobalClusterArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*globalClusterArgs)(nil)).Elem()
}
