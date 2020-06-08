// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package batch

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Creates a AWS Batch compute environment. Compute environments contain the Amazon ECS container instances that are used to run containerized batch jobs.
//
// For information about AWS Batch, see [What is AWS Batch?](http://docs.aws.amazon.com/batch/latest/userguide/what-is-batch.html) .
// For information about compute environment, see [Compute Environments](http://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html) .
//
// > **Note:** To prevent a race condition during environment deletion, make sure to set `dependsOn` to the related `iam.RolePolicyAttachment`;
// otherwise, the policy may be destroyed too soon and the compute environment will then get stuck in the `DELETING` state, see [Troubleshooting AWS Batch](http://docs.aws.amazon.com/batch/latest/userguide/troubleshooting.html) .
//
// ## Example Usage
//
//
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-aws/sdk/v2/go/aws/batch"
// 	"github.com/pulumi/pulumi-aws/sdk/v2/go/aws/ec2"
// 	"github.com/pulumi/pulumi-aws/sdk/v2/go/aws/iam"
// 	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		ecsInstanceRoleRole, err := iam.NewRole(ctx, "ecsInstanceRoleRole", &iam.RoleArgs{
// 			AssumeRolePolicy: pulumi.String("TODO: TODO multi part template expressions"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		ecsInstanceRoleRolePolicyAttachment, err := iam.NewRolePolicyAttachment(ctx, "ecsInstanceRoleRolePolicyAttachment", &iam.RolePolicyAttachmentArgs{
// 			PolicyArn: pulumi.String("arn:aws:iam::aws:policy/service-role/AmazonEC2ContainerServiceforEC2Role"),
// 			Role:      ecsInstanceRoleRole.Name,
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		ecsInstanceRoleInstanceProfile, err := iam.NewInstanceProfile(ctx, "ecsInstanceRoleInstanceProfile", &iam.InstanceProfileArgs{
// 			Role: ecsInstanceRoleRole.Name,
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		awsBatchServiceRoleRole, err := iam.NewRole(ctx, "awsBatchServiceRoleRole", &iam.RoleArgs{
// 			AssumeRolePolicy: pulumi.String("TODO: TODO multi part template expressions"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		awsBatchServiceRoleRolePolicyAttachment, err := iam.NewRolePolicyAttachment(ctx, "awsBatchServiceRoleRolePolicyAttachment", &iam.RolePolicyAttachmentArgs{
// 			PolicyArn: pulumi.String("arn:aws:iam::aws:policy/service-role/AWSBatchServiceRole"),
// 			Role:      awsBatchServiceRoleRole.Name,
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		sampleSecurityGroup, err := ec2.NewSecurityGroup(ctx, "sampleSecurityGroup", &ec2.SecurityGroupArgs{
// 			Egress: ec2.SecurityGroupEgressArray{
// 				&ec2.SecurityGroupEgressArgs{
// 					CidrBlocks: pulumi.StringArray{
// 						pulumi.String("0.0.0.0/0"),
// 					},
// 					FromPort: pulumi.Int(0),
// 					Protocol: pulumi.String("-1"),
// 					ToPort:   pulumi.Int(0),
// 				},
// 			},
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		sampleVpc, err := ec2.NewVpc(ctx, "sampleVpc", &ec2.VpcArgs{
// 			CidrBlock: pulumi.String("10.1.0.0/16"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		sampleSubnet, err := ec2.NewSubnet(ctx, "sampleSubnet", &ec2.SubnetArgs{
// 			CidrBlock: pulumi.String("10.1.1.0/24"),
// 			VpcId:     sampleVpc.ID(),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		sampleComputeEnvironment, err := batch.NewComputeEnvironment(ctx, "sampleComputeEnvironment", &batch.ComputeEnvironmentArgs{
// 			ComputeEnvironmentName: pulumi.String("sample"),
// 			ComputeResources: &batch.ComputeEnvironmentComputeResourcesArgs{
// 				InstanceRole: ecsInstanceRoleInstanceProfile.Arn,
// 				InstanceType: pulumi.StringArray{
// 					pulumi.String("c4.large"),
// 				},
// 				MaxVcpus: pulumi.Int(16),
// 				MinVcpus: pulumi.Int(0),
// 				SecurityGroupIds: pulumi.StringArray{
// 					sampleSecurityGroup.ID(),
// 				},
// 				Subnets: pulumi.StringArray{
// 					sampleSubnet.ID(),
// 				},
// 				Type: pulumi.String("EC2"),
// 			},
// 			ServiceRole: awsBatchServiceRoleRole.Arn,
// 			Type:        pulumi.String("MANAGED"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
type ComputeEnvironment struct {
	pulumi.CustomResourceState

	// The Amazon Resource Name (ARN) of the compute environment.
	Arn pulumi.StringOutput `pulumi:"arn"`
	// The name for your compute environment. Up to 128 letters (uppercase and lowercase), numbers, and underscores are allowed. If omitted, this provider will assign a random, unique name.
	ComputeEnvironmentName pulumi.StringOutput `pulumi:"computeEnvironmentName"`
	// Creates a unique compute environment name beginning with the specified prefix. Conflicts with `computeEnvironmentName`.
	ComputeEnvironmentNamePrefix pulumi.StringPtrOutput `pulumi:"computeEnvironmentNamePrefix"`
	// Details of the compute resources managed by the compute environment. This parameter is required for managed compute environments. See details below.
	ComputeResources ComputeEnvironmentComputeResourcesPtrOutput `pulumi:"computeResources"`
	// The Amazon Resource Name (ARN) of the underlying Amazon ECS cluster used by the compute environment.
	EcsClusterArn pulumi.StringOutput `pulumi:"ecsClusterArn"`
	// The full Amazon Resource Name (ARN) of the IAM role that allows AWS Batch to make calls to other AWS services on your behalf.
	ServiceRole pulumi.StringOutput `pulumi:"serviceRole"`
	// The state of the compute environment. If the state is `ENABLED`, then the compute environment accepts jobs from a queue and can scale out automatically based on queues. Valid items are `ENABLED` or `DISABLED`. Defaults to `ENABLED`.
	State pulumi.StringPtrOutput `pulumi:"state"`
	// The current status of the compute environment (for example, CREATING or VALID).
	Status pulumi.StringOutput `pulumi:"status"`
	// A short, human-readable string to provide additional details about the current status of the compute environment.
	StatusReason pulumi.StringOutput `pulumi:"statusReason"`
	// The type of compute environment. Valid items are `EC2` or `SPOT`.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewComputeEnvironment registers a new resource with the given unique name, arguments, and options.
func NewComputeEnvironment(ctx *pulumi.Context,
	name string, args *ComputeEnvironmentArgs, opts ...pulumi.ResourceOption) (*ComputeEnvironment, error) {
	if args == nil || args.ServiceRole == nil {
		return nil, errors.New("missing required argument 'ServiceRole'")
	}
	if args == nil || args.Type == nil {
		return nil, errors.New("missing required argument 'Type'")
	}
	if args == nil {
		args = &ComputeEnvironmentArgs{}
	}
	var resource ComputeEnvironment
	err := ctx.RegisterResource("aws:batch/computeEnvironment:ComputeEnvironment", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetComputeEnvironment gets an existing ComputeEnvironment resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetComputeEnvironment(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ComputeEnvironmentState, opts ...pulumi.ResourceOption) (*ComputeEnvironment, error) {
	var resource ComputeEnvironment
	err := ctx.ReadResource("aws:batch/computeEnvironment:ComputeEnvironment", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ComputeEnvironment resources.
type computeEnvironmentState struct {
	// The Amazon Resource Name (ARN) of the compute environment.
	Arn *string `pulumi:"arn"`
	// The name for your compute environment. Up to 128 letters (uppercase and lowercase), numbers, and underscores are allowed. If omitted, this provider will assign a random, unique name.
	ComputeEnvironmentName *string `pulumi:"computeEnvironmentName"`
	// Creates a unique compute environment name beginning with the specified prefix. Conflicts with `computeEnvironmentName`.
	ComputeEnvironmentNamePrefix *string `pulumi:"computeEnvironmentNamePrefix"`
	// Details of the compute resources managed by the compute environment. This parameter is required for managed compute environments. See details below.
	ComputeResources *ComputeEnvironmentComputeResources `pulumi:"computeResources"`
	// The Amazon Resource Name (ARN) of the underlying Amazon ECS cluster used by the compute environment.
	EcsClusterArn *string `pulumi:"ecsClusterArn"`
	// The full Amazon Resource Name (ARN) of the IAM role that allows AWS Batch to make calls to other AWS services on your behalf.
	ServiceRole *string `pulumi:"serviceRole"`
	// The state of the compute environment. If the state is `ENABLED`, then the compute environment accepts jobs from a queue and can scale out automatically based on queues. Valid items are `ENABLED` or `DISABLED`. Defaults to `ENABLED`.
	State *string `pulumi:"state"`
	// The current status of the compute environment (for example, CREATING or VALID).
	Status *string `pulumi:"status"`
	// A short, human-readable string to provide additional details about the current status of the compute environment.
	StatusReason *string `pulumi:"statusReason"`
	// The type of compute environment. Valid items are `EC2` or `SPOT`.
	Type *string `pulumi:"type"`
}

type ComputeEnvironmentState struct {
	// The Amazon Resource Name (ARN) of the compute environment.
	Arn pulumi.StringPtrInput
	// The name for your compute environment. Up to 128 letters (uppercase and lowercase), numbers, and underscores are allowed. If omitted, this provider will assign a random, unique name.
	ComputeEnvironmentName pulumi.StringPtrInput
	// Creates a unique compute environment name beginning with the specified prefix. Conflicts with `computeEnvironmentName`.
	ComputeEnvironmentNamePrefix pulumi.StringPtrInput
	// Details of the compute resources managed by the compute environment. This parameter is required for managed compute environments. See details below.
	ComputeResources ComputeEnvironmentComputeResourcesPtrInput
	// The Amazon Resource Name (ARN) of the underlying Amazon ECS cluster used by the compute environment.
	EcsClusterArn pulumi.StringPtrInput
	// The full Amazon Resource Name (ARN) of the IAM role that allows AWS Batch to make calls to other AWS services on your behalf.
	ServiceRole pulumi.StringPtrInput
	// The state of the compute environment. If the state is `ENABLED`, then the compute environment accepts jobs from a queue and can scale out automatically based on queues. Valid items are `ENABLED` or `DISABLED`. Defaults to `ENABLED`.
	State pulumi.StringPtrInput
	// The current status of the compute environment (for example, CREATING or VALID).
	Status pulumi.StringPtrInput
	// A short, human-readable string to provide additional details about the current status of the compute environment.
	StatusReason pulumi.StringPtrInput
	// The type of compute environment. Valid items are `EC2` or `SPOT`.
	Type pulumi.StringPtrInput
}

func (ComputeEnvironmentState) ElementType() reflect.Type {
	return reflect.TypeOf((*computeEnvironmentState)(nil)).Elem()
}

type computeEnvironmentArgs struct {
	// The name for your compute environment. Up to 128 letters (uppercase and lowercase), numbers, and underscores are allowed. If omitted, this provider will assign a random, unique name.
	ComputeEnvironmentName *string `pulumi:"computeEnvironmentName"`
	// Creates a unique compute environment name beginning with the specified prefix. Conflicts with `computeEnvironmentName`.
	ComputeEnvironmentNamePrefix *string `pulumi:"computeEnvironmentNamePrefix"`
	// Details of the compute resources managed by the compute environment. This parameter is required for managed compute environments. See details below.
	ComputeResources *ComputeEnvironmentComputeResources `pulumi:"computeResources"`
	// The full Amazon Resource Name (ARN) of the IAM role that allows AWS Batch to make calls to other AWS services on your behalf.
	ServiceRole string `pulumi:"serviceRole"`
	// The state of the compute environment. If the state is `ENABLED`, then the compute environment accepts jobs from a queue and can scale out automatically based on queues. Valid items are `ENABLED` or `DISABLED`. Defaults to `ENABLED`.
	State *string `pulumi:"state"`
	// The type of compute environment. Valid items are `EC2` or `SPOT`.
	Type string `pulumi:"type"`
}

// The set of arguments for constructing a ComputeEnvironment resource.
type ComputeEnvironmentArgs struct {
	// The name for your compute environment. Up to 128 letters (uppercase and lowercase), numbers, and underscores are allowed. If omitted, this provider will assign a random, unique name.
	ComputeEnvironmentName pulumi.StringPtrInput
	// Creates a unique compute environment name beginning with the specified prefix. Conflicts with `computeEnvironmentName`.
	ComputeEnvironmentNamePrefix pulumi.StringPtrInput
	// Details of the compute resources managed by the compute environment. This parameter is required for managed compute environments. See details below.
	ComputeResources ComputeEnvironmentComputeResourcesPtrInput
	// The full Amazon Resource Name (ARN) of the IAM role that allows AWS Batch to make calls to other AWS services on your behalf.
	ServiceRole pulumi.StringInput
	// The state of the compute environment. If the state is `ENABLED`, then the compute environment accepts jobs from a queue and can scale out automatically based on queues. Valid items are `ENABLED` or `DISABLED`. Defaults to `ENABLED`.
	State pulumi.StringPtrInput
	// The type of compute environment. Valid items are `EC2` or `SPOT`.
	Type pulumi.StringInput
}

func (ComputeEnvironmentArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*computeEnvironmentArgs)(nil)).Elem()
}
