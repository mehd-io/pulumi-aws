// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package rds

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages a [RDS Aurora Cluster][2]. To manage cluster instances that inherit configuration from the cluster (when not running the cluster in `serverless` engine mode), see the [`aws_rds_cluster_instance` resource](https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html). To manage non-Aurora databases (e.g. MySQL, PostgreSQL, SQL Server, etc.), see the [`aws_db_instance` resource](https://www.terraform.io/docs/providers/aws/r/db_instance.html).
// 
// For information on the difference between the available Aurora MySQL engines
// see [Comparison between Aurora MySQL 1 and Aurora MySQL 2](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AuroraMySQL.Updates.20180206.html)
// in the Amazon RDS User Guide.
// 
// Changes to a RDS Cluster can occur when you manually change a
// parameter, such as `port`, and are reflected in the next maintenance
// window. Because of this, Terraform may report a difference in its planning
// phase because a modification has not yet taken place. You can use the
// `apply_immediately` flag to instruct the service to apply the change immediately
// (see documentation below).
// 
// > **Note:** using `apply_immediately` can result in a
// brief downtime as the server reboots. See the AWS Docs on [RDS Maintenance][4]
// for more information.
// 
// > **Note:** All arguments including the username and password will be stored in the raw state as plain-text.
// [Read more about sensitive data in state](https://www.terraform.io/docs/state/sensitive-data.html).
type Cluster struct {
	s *pulumi.ResourceState
}

// NewCluster registers a new resource with the given unique name, arguments, and options.
func NewCluster(ctx *pulumi.Context,
	name string, args *ClusterArgs, opts ...pulumi.ResourceOpt) (*Cluster, error) {
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["applyImmediately"] = nil
		inputs["availabilityZones"] = nil
		inputs["backtrackWindow"] = nil
		inputs["backupRetentionPeriod"] = nil
		inputs["clusterIdentifier"] = nil
		inputs["clusterIdentifierPrefix"] = nil
		inputs["clusterMembers"] = nil
		inputs["databaseName"] = nil
		inputs["dbClusterParameterGroupName"] = nil
		inputs["dbSubnetGroupName"] = nil
		inputs["deletionProtection"] = nil
		inputs["enabledCloudwatchLogsExports"] = nil
		inputs["engine"] = nil
		inputs["engineMode"] = nil
		inputs["engineVersion"] = nil
		inputs["finalSnapshotIdentifier"] = nil
		inputs["globalClusterIdentifier"] = nil
		inputs["iamDatabaseAuthenticationEnabled"] = nil
		inputs["iamRoles"] = nil
		inputs["kmsKeyId"] = nil
		inputs["masterPassword"] = nil
		inputs["masterUsername"] = nil
		inputs["port"] = nil
		inputs["preferredBackupWindow"] = nil
		inputs["preferredMaintenanceWindow"] = nil
		inputs["replicationSourceIdentifier"] = nil
		inputs["s3Import"] = nil
		inputs["scalingConfiguration"] = nil
		inputs["skipFinalSnapshot"] = nil
		inputs["snapshotIdentifier"] = nil
		inputs["sourceRegion"] = nil
		inputs["storageEncrypted"] = nil
		inputs["tags"] = nil
		inputs["vpcSecurityGroupIds"] = nil
	} else {
		inputs["applyImmediately"] = args.ApplyImmediately
		inputs["availabilityZones"] = args.AvailabilityZones
		inputs["backtrackWindow"] = args.BacktrackWindow
		inputs["backupRetentionPeriod"] = args.BackupRetentionPeriod
		inputs["clusterIdentifier"] = args.ClusterIdentifier
		inputs["clusterIdentifierPrefix"] = args.ClusterIdentifierPrefix
		inputs["clusterMembers"] = args.ClusterMembers
		inputs["databaseName"] = args.DatabaseName
		inputs["dbClusterParameterGroupName"] = args.DbClusterParameterGroupName
		inputs["dbSubnetGroupName"] = args.DbSubnetGroupName
		inputs["deletionProtection"] = args.DeletionProtection
		inputs["enabledCloudwatchLogsExports"] = args.EnabledCloudwatchLogsExports
		inputs["engine"] = args.Engine
		inputs["engineMode"] = args.EngineMode
		inputs["engineVersion"] = args.EngineVersion
		inputs["finalSnapshotIdentifier"] = args.FinalSnapshotIdentifier
		inputs["globalClusterIdentifier"] = args.GlobalClusterIdentifier
		inputs["iamDatabaseAuthenticationEnabled"] = args.IamDatabaseAuthenticationEnabled
		inputs["iamRoles"] = args.IamRoles
		inputs["kmsKeyId"] = args.KmsKeyId
		inputs["masterPassword"] = args.MasterPassword
		inputs["masterUsername"] = args.MasterUsername
		inputs["port"] = args.Port
		inputs["preferredBackupWindow"] = args.PreferredBackupWindow
		inputs["preferredMaintenanceWindow"] = args.PreferredMaintenanceWindow
		inputs["replicationSourceIdentifier"] = args.ReplicationSourceIdentifier
		inputs["s3Import"] = args.S3Import
		inputs["scalingConfiguration"] = args.ScalingConfiguration
		inputs["skipFinalSnapshot"] = args.SkipFinalSnapshot
		inputs["snapshotIdentifier"] = args.SnapshotIdentifier
		inputs["sourceRegion"] = args.SourceRegion
		inputs["storageEncrypted"] = args.StorageEncrypted
		inputs["tags"] = args.Tags
		inputs["vpcSecurityGroupIds"] = args.VpcSecurityGroupIds
	}
	inputs["arn"] = nil
	inputs["clusterResourceId"] = nil
	inputs["endpoint"] = nil
	inputs["hostedZoneId"] = nil
	inputs["readerEndpoint"] = nil
	s, err := ctx.RegisterResource("aws:rds/cluster:Cluster", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Cluster{s: s}, nil
}

// GetCluster gets an existing Cluster resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetCluster(ctx *pulumi.Context,
	name string, id pulumi.ID, state *ClusterState, opts ...pulumi.ResourceOpt) (*Cluster, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["applyImmediately"] = state.ApplyImmediately
		inputs["arn"] = state.Arn
		inputs["availabilityZones"] = state.AvailabilityZones
		inputs["backtrackWindow"] = state.BacktrackWindow
		inputs["backupRetentionPeriod"] = state.BackupRetentionPeriod
		inputs["clusterIdentifier"] = state.ClusterIdentifier
		inputs["clusterIdentifierPrefix"] = state.ClusterIdentifierPrefix
		inputs["clusterMembers"] = state.ClusterMembers
		inputs["clusterResourceId"] = state.ClusterResourceId
		inputs["databaseName"] = state.DatabaseName
		inputs["dbClusterParameterGroupName"] = state.DbClusterParameterGroupName
		inputs["dbSubnetGroupName"] = state.DbSubnetGroupName
		inputs["deletionProtection"] = state.DeletionProtection
		inputs["enabledCloudwatchLogsExports"] = state.EnabledCloudwatchLogsExports
		inputs["endpoint"] = state.Endpoint
		inputs["engine"] = state.Engine
		inputs["engineMode"] = state.EngineMode
		inputs["engineVersion"] = state.EngineVersion
		inputs["finalSnapshotIdentifier"] = state.FinalSnapshotIdentifier
		inputs["globalClusterIdentifier"] = state.GlobalClusterIdentifier
		inputs["hostedZoneId"] = state.HostedZoneId
		inputs["iamDatabaseAuthenticationEnabled"] = state.IamDatabaseAuthenticationEnabled
		inputs["iamRoles"] = state.IamRoles
		inputs["kmsKeyId"] = state.KmsKeyId
		inputs["masterPassword"] = state.MasterPassword
		inputs["masterUsername"] = state.MasterUsername
		inputs["port"] = state.Port
		inputs["preferredBackupWindow"] = state.PreferredBackupWindow
		inputs["preferredMaintenanceWindow"] = state.PreferredMaintenanceWindow
		inputs["readerEndpoint"] = state.ReaderEndpoint
		inputs["replicationSourceIdentifier"] = state.ReplicationSourceIdentifier
		inputs["s3Import"] = state.S3Import
		inputs["scalingConfiguration"] = state.ScalingConfiguration
		inputs["skipFinalSnapshot"] = state.SkipFinalSnapshot
		inputs["snapshotIdentifier"] = state.SnapshotIdentifier
		inputs["sourceRegion"] = state.SourceRegion
		inputs["storageEncrypted"] = state.StorageEncrypted
		inputs["tags"] = state.Tags
		inputs["vpcSecurityGroupIds"] = state.VpcSecurityGroupIds
	}
	s, err := ctx.ReadResource("aws:rds/cluster:Cluster", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Cluster{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Cluster) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Cluster) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// Specifies whether any cluster modifications
// are applied immediately, or during the next maintenance window. Default is
// `false`. See [Amazon RDS Documentation for more information.](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html)
func (r *Cluster) ApplyImmediately() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["applyImmediately"])
}

// Amazon Resource Name (ARN) of cluster
func (r *Cluster) Arn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["arn"])
}

// A list of EC2 Availability Zones that
// instances in the DB cluster can be created in
func (r *Cluster) AvailabilityZones() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["availabilityZones"])
}

// The target backtrack window, in seconds. Only available for `aurora` engine currently. To disable backtracking, set this value to `0`. Defaults to `0`. Must be between `0` and `259200` (72 hours)
func (r *Cluster) BacktrackWindow() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["backtrackWindow"])
}

// The days to retain backups for. Default `1`
func (r *Cluster) BackupRetentionPeriod() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["backupRetentionPeriod"])
}

// The cluster identifier. If omitted, Terraform will assign a random, unique identifier.
func (r *Cluster) ClusterIdentifier() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["clusterIdentifier"])
}

// Creates a unique cluster identifier beginning with the specified prefix. Conflicts with `cluster_identifier`.
func (r *Cluster) ClusterIdentifierPrefix() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["clusterIdentifierPrefix"])
}

// List of RDS Instances that are a part of this cluster
func (r *Cluster) ClusterMembers() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["clusterMembers"])
}

// The RDS Cluster Resource ID
func (r *Cluster) ClusterResourceId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["clusterResourceId"])
}

// Name for an automatically created database on cluster creation. There are different naming restrictions per database engine: [RDS Naming Constraints][5]
func (r *Cluster) DatabaseName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["databaseName"])
}

// A cluster parameter group to associate with the cluster.
func (r *Cluster) DbClusterParameterGroupName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["dbClusterParameterGroupName"])
}

// A DB subnet group to associate with this DB instance. **NOTE:** This must match the `db_subnet_group_name` specified on every [`aws_rds_cluster_instance`](https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html) in the cluster.
func (r *Cluster) DbSubnetGroupName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["dbSubnetGroupName"])
}

// If the DB instance should have deletion protection enabled. The database can't be deleted when this value is set to `true`. The default is `false`.
func (r *Cluster) DeletionProtection() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["deletionProtection"])
}

// List of log types to export to cloudwatch. If omitted, no logs will be exported.
// The following log types are supported: `audit`, `error`, `general`, `slowquery`.
func (r *Cluster) EnabledCloudwatchLogsExports() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["enabledCloudwatchLogsExports"])
}

// The DNS address of the RDS instance
func (r *Cluster) Endpoint() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["endpoint"])
}

// The name of the database engine to be used for this DB cluster. Defaults to `aurora`. Valid Values: `aurora`, `aurora-mysql`, `aurora-postgresql`
func (r *Cluster) Engine() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["engine"])
}

// The database engine mode. Valid values: `global`, `parallelquery`, `provisioned`, `serverless`. Defaults to: `provisioned`. See the [RDS User Guide](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/aurora-serverless.html) for limitations when using `serverless`.
func (r *Cluster) EngineMode() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["engineMode"])
}

// The database engine version. Updating this argument results in an outage.
func (r *Cluster) EngineVersion() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["engineVersion"])
}

// The name of your final DB snapshot
// when this DB cluster is deleted. If omitted, no final snapshot will be
// made.
func (r *Cluster) FinalSnapshotIdentifier() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["finalSnapshotIdentifier"])
}

// The global cluster identifier specified on [`aws_rds_global_cluster`](https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html).
func (r *Cluster) GlobalClusterIdentifier() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["globalClusterIdentifier"])
}

// The Route53 Hosted Zone ID of the endpoint
func (r *Cluster) HostedZoneId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["hostedZoneId"])
}

// Specifies whether or mappings of AWS Identity and Access Management (IAM) accounts to database accounts is enabled. Please see [AWS Documentation](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html) for availability and limitations.
func (r *Cluster) IamDatabaseAuthenticationEnabled() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["iamDatabaseAuthenticationEnabled"])
}

// A List of ARNs for the IAM roles to associate to the RDS Cluster.
func (r *Cluster) IamRoles() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["iamRoles"])
}

// The ARN for the KMS encryption key. When specifying `kms_key_id`, `storage_encrypted` needs to be set to true.
func (r *Cluster) KmsKeyId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["kmsKeyId"])
}

// Password for the master DB user. Note that this may
// show up in logs, and it will be stored in the state file. Please refer to the [RDS Naming Constraints][5]
func (r *Cluster) MasterPassword() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["masterPassword"])
}

// Username for the master DB user. Please refer to the [RDS Naming Constraints][5]
func (r *Cluster) MasterUsername() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["masterUsername"])
}

// The port on which the DB accepts connections
func (r *Cluster) Port() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["port"])
}

// The daily time range during which automated backups are created if automated backups are enabled using the BackupRetentionPeriod parameter.Time in UTC
// Default: A 30-minute window selected at random from an 8-hour block of time per region. e.g. 04:00-09:00
func (r *Cluster) PreferredBackupWindow() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["preferredBackupWindow"])
}

// The weekly time range during which system maintenance can occur, in (UTC) e.g. wed:04:00-wed:04:30
func (r *Cluster) PreferredMaintenanceWindow() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["preferredMaintenanceWindow"])
}

// A read-only endpoint for the Aurora cluster, automatically
// load-balanced across replicas
func (r *Cluster) ReaderEndpoint() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["readerEndpoint"])
}

// ARN of a source DB cluster or DB instance if this DB cluster is to be created as a Read Replica.
func (r *Cluster) ReplicationSourceIdentifier() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["replicationSourceIdentifier"])
}

func (r *Cluster) S3Import() *pulumi.Output {
	return r.s.State["s3Import"]
}

// Nested attribute with scaling properties. Only valid when `engine_mode` is set to `serverless`. More details below.
func (r *Cluster) ScalingConfiguration() *pulumi.Output {
	return r.s.State["scalingConfiguration"]
}

// Determines whether a final DB snapshot is created before the DB cluster is deleted. If true is specified, no DB snapshot is created. If false is specified, a DB snapshot is created before the DB cluster is deleted, using the value from `final_snapshot_identifier`. Default is `false`.
func (r *Cluster) SkipFinalSnapshot() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["skipFinalSnapshot"])
}

// Specifies whether or not to create this cluster from a snapshot. You can use either the name or ARN when specifying a DB cluster snapshot, or the ARN when specifying a DB snapshot.
func (r *Cluster) SnapshotIdentifier() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["snapshotIdentifier"])
}

// The source region for an encrypted replica DB cluster.
func (r *Cluster) SourceRegion() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["sourceRegion"])
}

// Specifies whether the DB cluster is encrypted. The default is `false` for `provisioned` `engine_mode` and `true` for `serverless` `engine_mode`.
func (r *Cluster) StorageEncrypted() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["storageEncrypted"])
}

// A mapping of tags to assign to the DB cluster.
func (r *Cluster) Tags() *pulumi.MapOutput {
	return (*pulumi.MapOutput)(r.s.State["tags"])
}

// List of VPC security groups to associate
// with the Cluster
func (r *Cluster) VpcSecurityGroupIds() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["vpcSecurityGroupIds"])
}

// Input properties used for looking up and filtering Cluster resources.
type ClusterState struct {
	// Specifies whether any cluster modifications
	// are applied immediately, or during the next maintenance window. Default is
	// `false`. See [Amazon RDS Documentation for more information.](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html)
	ApplyImmediately interface{}
	// Amazon Resource Name (ARN) of cluster
	Arn interface{}
	// A list of EC2 Availability Zones that
	// instances in the DB cluster can be created in
	AvailabilityZones interface{}
	// The target backtrack window, in seconds. Only available for `aurora` engine currently. To disable backtracking, set this value to `0`. Defaults to `0`. Must be between `0` and `259200` (72 hours)
	BacktrackWindow interface{}
	// The days to retain backups for. Default `1`
	BackupRetentionPeriod interface{}
	// The cluster identifier. If omitted, Terraform will assign a random, unique identifier.
	ClusterIdentifier interface{}
	// Creates a unique cluster identifier beginning with the specified prefix. Conflicts with `cluster_identifier`.
	ClusterIdentifierPrefix interface{}
	// List of RDS Instances that are a part of this cluster
	ClusterMembers interface{}
	// The RDS Cluster Resource ID
	ClusterResourceId interface{}
	// Name for an automatically created database on cluster creation. There are different naming restrictions per database engine: [RDS Naming Constraints][5]
	DatabaseName interface{}
	// A cluster parameter group to associate with the cluster.
	DbClusterParameterGroupName interface{}
	// A DB subnet group to associate with this DB instance. **NOTE:** This must match the `db_subnet_group_name` specified on every [`aws_rds_cluster_instance`](https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html) in the cluster.
	DbSubnetGroupName interface{}
	// If the DB instance should have deletion protection enabled. The database can't be deleted when this value is set to `true`. The default is `false`.
	DeletionProtection interface{}
	// List of log types to export to cloudwatch. If omitted, no logs will be exported.
	// The following log types are supported: `audit`, `error`, `general`, `slowquery`.
	EnabledCloudwatchLogsExports interface{}
	// The DNS address of the RDS instance
	Endpoint interface{}
	// The name of the database engine to be used for this DB cluster. Defaults to `aurora`. Valid Values: `aurora`, `aurora-mysql`, `aurora-postgresql`
	Engine interface{}
	// The database engine mode. Valid values: `global`, `parallelquery`, `provisioned`, `serverless`. Defaults to: `provisioned`. See the [RDS User Guide](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/aurora-serverless.html) for limitations when using `serverless`.
	EngineMode interface{}
	// The database engine version. Updating this argument results in an outage.
	EngineVersion interface{}
	// The name of your final DB snapshot
	// when this DB cluster is deleted. If omitted, no final snapshot will be
	// made.
	FinalSnapshotIdentifier interface{}
	// The global cluster identifier specified on [`aws_rds_global_cluster`](https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html).
	GlobalClusterIdentifier interface{}
	// The Route53 Hosted Zone ID of the endpoint
	HostedZoneId interface{}
	// Specifies whether or mappings of AWS Identity and Access Management (IAM) accounts to database accounts is enabled. Please see [AWS Documentation](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html) for availability and limitations.
	IamDatabaseAuthenticationEnabled interface{}
	// A List of ARNs for the IAM roles to associate to the RDS Cluster.
	IamRoles interface{}
	// The ARN for the KMS encryption key. When specifying `kms_key_id`, `storage_encrypted` needs to be set to true.
	KmsKeyId interface{}
	// Password for the master DB user. Note that this may
	// show up in logs, and it will be stored in the state file. Please refer to the [RDS Naming Constraints][5]
	MasterPassword interface{}
	// Username for the master DB user. Please refer to the [RDS Naming Constraints][5]
	MasterUsername interface{}
	// The port on which the DB accepts connections
	Port interface{}
	// The daily time range during which automated backups are created if automated backups are enabled using the BackupRetentionPeriod parameter.Time in UTC
	// Default: A 30-minute window selected at random from an 8-hour block of time per region. e.g. 04:00-09:00
	PreferredBackupWindow interface{}
	// The weekly time range during which system maintenance can occur, in (UTC) e.g. wed:04:00-wed:04:30
	PreferredMaintenanceWindow interface{}
	// A read-only endpoint for the Aurora cluster, automatically
	// load-balanced across replicas
	ReaderEndpoint interface{}
	// ARN of a source DB cluster or DB instance if this DB cluster is to be created as a Read Replica.
	ReplicationSourceIdentifier interface{}
	S3Import interface{}
	// Nested attribute with scaling properties. Only valid when `engine_mode` is set to `serverless`. More details below.
	ScalingConfiguration interface{}
	// Determines whether a final DB snapshot is created before the DB cluster is deleted. If true is specified, no DB snapshot is created. If false is specified, a DB snapshot is created before the DB cluster is deleted, using the value from `final_snapshot_identifier`. Default is `false`.
	SkipFinalSnapshot interface{}
	// Specifies whether or not to create this cluster from a snapshot. You can use either the name or ARN when specifying a DB cluster snapshot, or the ARN when specifying a DB snapshot.
	SnapshotIdentifier interface{}
	// The source region for an encrypted replica DB cluster.
	SourceRegion interface{}
	// Specifies whether the DB cluster is encrypted. The default is `false` for `provisioned` `engine_mode` and `true` for `serverless` `engine_mode`.
	StorageEncrypted interface{}
	// A mapping of tags to assign to the DB cluster.
	Tags interface{}
	// List of VPC security groups to associate
	// with the Cluster
	VpcSecurityGroupIds interface{}
}

// The set of arguments for constructing a Cluster resource.
type ClusterArgs struct {
	// Specifies whether any cluster modifications
	// are applied immediately, or during the next maintenance window. Default is
	// `false`. See [Amazon RDS Documentation for more information.](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html)
	ApplyImmediately interface{}
	// A list of EC2 Availability Zones that
	// instances in the DB cluster can be created in
	AvailabilityZones interface{}
	// The target backtrack window, in seconds. Only available for `aurora` engine currently. To disable backtracking, set this value to `0`. Defaults to `0`. Must be between `0` and `259200` (72 hours)
	BacktrackWindow interface{}
	// The days to retain backups for. Default `1`
	BackupRetentionPeriod interface{}
	// The cluster identifier. If omitted, Terraform will assign a random, unique identifier.
	ClusterIdentifier interface{}
	// Creates a unique cluster identifier beginning with the specified prefix. Conflicts with `cluster_identifier`.
	ClusterIdentifierPrefix interface{}
	// List of RDS Instances that are a part of this cluster
	ClusterMembers interface{}
	// Name for an automatically created database on cluster creation. There are different naming restrictions per database engine: [RDS Naming Constraints][5]
	DatabaseName interface{}
	// A cluster parameter group to associate with the cluster.
	DbClusterParameterGroupName interface{}
	// A DB subnet group to associate with this DB instance. **NOTE:** This must match the `db_subnet_group_name` specified on every [`aws_rds_cluster_instance`](https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html) in the cluster.
	DbSubnetGroupName interface{}
	// If the DB instance should have deletion protection enabled. The database can't be deleted when this value is set to `true`. The default is `false`.
	DeletionProtection interface{}
	// List of log types to export to cloudwatch. If omitted, no logs will be exported.
	// The following log types are supported: `audit`, `error`, `general`, `slowquery`.
	EnabledCloudwatchLogsExports interface{}
	// The name of the database engine to be used for this DB cluster. Defaults to `aurora`. Valid Values: `aurora`, `aurora-mysql`, `aurora-postgresql`
	Engine interface{}
	// The database engine mode. Valid values: `global`, `parallelquery`, `provisioned`, `serverless`. Defaults to: `provisioned`. See the [RDS User Guide](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/aurora-serverless.html) for limitations when using `serverless`.
	EngineMode interface{}
	// The database engine version. Updating this argument results in an outage.
	EngineVersion interface{}
	// The name of your final DB snapshot
	// when this DB cluster is deleted. If omitted, no final snapshot will be
	// made.
	FinalSnapshotIdentifier interface{}
	// The global cluster identifier specified on [`aws_rds_global_cluster`](https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html).
	GlobalClusterIdentifier interface{}
	// Specifies whether or mappings of AWS Identity and Access Management (IAM) accounts to database accounts is enabled. Please see [AWS Documentation](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html) for availability and limitations.
	IamDatabaseAuthenticationEnabled interface{}
	// A List of ARNs for the IAM roles to associate to the RDS Cluster.
	IamRoles interface{}
	// The ARN for the KMS encryption key. When specifying `kms_key_id`, `storage_encrypted` needs to be set to true.
	KmsKeyId interface{}
	// Password for the master DB user. Note that this may
	// show up in logs, and it will be stored in the state file. Please refer to the [RDS Naming Constraints][5]
	MasterPassword interface{}
	// Username for the master DB user. Please refer to the [RDS Naming Constraints][5]
	MasterUsername interface{}
	// The port on which the DB accepts connections
	Port interface{}
	// The daily time range during which automated backups are created if automated backups are enabled using the BackupRetentionPeriod parameter.Time in UTC
	// Default: A 30-minute window selected at random from an 8-hour block of time per region. e.g. 04:00-09:00
	PreferredBackupWindow interface{}
	// The weekly time range during which system maintenance can occur, in (UTC) e.g. wed:04:00-wed:04:30
	PreferredMaintenanceWindow interface{}
	// ARN of a source DB cluster or DB instance if this DB cluster is to be created as a Read Replica.
	ReplicationSourceIdentifier interface{}
	S3Import interface{}
	// Nested attribute with scaling properties. Only valid when `engine_mode` is set to `serverless`. More details below.
	ScalingConfiguration interface{}
	// Determines whether a final DB snapshot is created before the DB cluster is deleted. If true is specified, no DB snapshot is created. If false is specified, a DB snapshot is created before the DB cluster is deleted, using the value from `final_snapshot_identifier`. Default is `false`.
	SkipFinalSnapshot interface{}
	// Specifies whether or not to create this cluster from a snapshot. You can use either the name or ARN when specifying a DB cluster snapshot, or the ARN when specifying a DB snapshot.
	SnapshotIdentifier interface{}
	// The source region for an encrypted replica DB cluster.
	SourceRegion interface{}
	// Specifies whether the DB cluster is encrypted. The default is `false` for `provisioned` `engine_mode` and `true` for `serverless` `engine_mode`.
	StorageEncrypted interface{}
	// A mapping of tags to assign to the DB cluster.
	Tags interface{}
	// List of VPC security groups to associate
	// with the Cluster
	VpcSecurityGroupIds interface{}
}
