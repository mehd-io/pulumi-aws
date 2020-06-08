// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package appsync

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Provides an AppSync DataSource.
//
// ## Example Usage
//
//
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-aws/sdk/v2/go/aws/appsync"
// 	"github.com/pulumi/pulumi-aws/sdk/v2/go/aws/dynamodb"
// 	"github.com/pulumi/pulumi-aws/sdk/v2/go/aws/iam"
// 	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		exampleTable, err := dynamodb.NewTable(ctx, "exampleTable", &dynamodb.TableArgs{
// 			Attributes: dynamodb.TableAttributeArray{
// 				&dynamodb.TableAttributeArgs{
// 					Name: pulumi.String("UserId"),
// 					Type: pulumi.String("S"),
// 				},
// 			},
// 			HashKey:       pulumi.String("UserId"),
// 			ReadCapacity:  pulumi.Int(1),
// 			WriteCapacity: pulumi.Int(1),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		exampleRole, err := iam.NewRole(ctx, "exampleRole", &iam.RoleArgs{
// 			AssumeRolePolicy: pulumi.String("TODO: TODO multi part template expressions"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		exampleRolePolicy, err := iam.NewRolePolicy(ctx, "exampleRolePolicy", &iam.RolePolicyArgs{
// 			Policy: exampleTable.Arn.ApplyT(func(arn string) (string, error) {
// 				return "TODO: TODO multi part template expressions", nil
// 			}).(pulumi.StringOutput),
// 			Role: exampleRole.ID(),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		exampleGraphQLApi, err := appsync.NewGraphQLApi(ctx, "exampleGraphQLApi", &appsync.GraphQLApiArgs{
// 			AuthenticationType: pulumi.String("API_KEY"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		exampleDataSource, err := appsync.NewDataSource(ctx, "exampleDataSource", &appsync.DataSourceArgs{
// 			ApiId: exampleGraphQLApi.ID(),
// 			DynamodbConfig: &appsync.DataSourceDynamodbConfigArgs{
// 				TableName: exampleTable.Name,
// 			},
// 			ServiceRoleArn: exampleRole.Arn,
// 			Type:           pulumi.String("AMAZON_DYNAMODB"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
type DataSource struct {
	pulumi.CustomResourceState

	// The API ID for the GraphQL API for the DataSource.
	ApiId pulumi.StringOutput `pulumi:"apiId"`
	// The ARN
	Arn pulumi.StringOutput `pulumi:"arn"`
	// A description of the DataSource.
	Description pulumi.StringPtrOutput `pulumi:"description"`
	// DynamoDB settings. See below
	DynamodbConfig DataSourceDynamodbConfigPtrOutput `pulumi:"dynamodbConfig"`
	// Amazon Elasticsearch settings. See below
	ElasticsearchConfig DataSourceElasticsearchConfigPtrOutput `pulumi:"elasticsearchConfig"`
	// HTTP settings. See below
	HttpConfig DataSourceHttpConfigPtrOutput `pulumi:"httpConfig"`
	// AWS Lambda settings. See below
	LambdaConfig DataSourceLambdaConfigPtrOutput `pulumi:"lambdaConfig"`
	// A user-supplied name for the DataSource.
	Name pulumi.StringOutput `pulumi:"name"`
	// The IAM service role ARN for the data source.
	ServiceRoleArn pulumi.StringPtrOutput `pulumi:"serviceRoleArn"`
	// The type of the DataSource. Valid values: `AWS_LAMBDA`, `AMAZON_DYNAMODB`, `AMAZON_ELASTICSEARCH`, `HTTP`, `NONE`.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewDataSource registers a new resource with the given unique name, arguments, and options.
func NewDataSource(ctx *pulumi.Context,
	name string, args *DataSourceArgs, opts ...pulumi.ResourceOption) (*DataSource, error) {
	if args == nil || args.ApiId == nil {
		return nil, errors.New("missing required argument 'ApiId'")
	}
	if args == nil || args.Type == nil {
		return nil, errors.New("missing required argument 'Type'")
	}
	if args == nil {
		args = &DataSourceArgs{}
	}
	var resource DataSource
	err := ctx.RegisterResource("aws:appsync/dataSource:DataSource", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetDataSource gets an existing DataSource resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetDataSource(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *DataSourceState, opts ...pulumi.ResourceOption) (*DataSource, error) {
	var resource DataSource
	err := ctx.ReadResource("aws:appsync/dataSource:DataSource", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering DataSource resources.
type dataSourceState struct {
	// The API ID for the GraphQL API for the DataSource.
	ApiId *string `pulumi:"apiId"`
	// The ARN
	Arn *string `pulumi:"arn"`
	// A description of the DataSource.
	Description *string `pulumi:"description"`
	// DynamoDB settings. See below
	DynamodbConfig *DataSourceDynamodbConfig `pulumi:"dynamodbConfig"`
	// Amazon Elasticsearch settings. See below
	ElasticsearchConfig *DataSourceElasticsearchConfig `pulumi:"elasticsearchConfig"`
	// HTTP settings. See below
	HttpConfig *DataSourceHttpConfig `pulumi:"httpConfig"`
	// AWS Lambda settings. See below
	LambdaConfig *DataSourceLambdaConfig `pulumi:"lambdaConfig"`
	// A user-supplied name for the DataSource.
	Name *string `pulumi:"name"`
	// The IAM service role ARN for the data source.
	ServiceRoleArn *string `pulumi:"serviceRoleArn"`
	// The type of the DataSource. Valid values: `AWS_LAMBDA`, `AMAZON_DYNAMODB`, `AMAZON_ELASTICSEARCH`, `HTTP`, `NONE`.
	Type *string `pulumi:"type"`
}

type DataSourceState struct {
	// The API ID for the GraphQL API for the DataSource.
	ApiId pulumi.StringPtrInput
	// The ARN
	Arn pulumi.StringPtrInput
	// A description of the DataSource.
	Description pulumi.StringPtrInput
	// DynamoDB settings. See below
	DynamodbConfig DataSourceDynamodbConfigPtrInput
	// Amazon Elasticsearch settings. See below
	ElasticsearchConfig DataSourceElasticsearchConfigPtrInput
	// HTTP settings. See below
	HttpConfig DataSourceHttpConfigPtrInput
	// AWS Lambda settings. See below
	LambdaConfig DataSourceLambdaConfigPtrInput
	// A user-supplied name for the DataSource.
	Name pulumi.StringPtrInput
	// The IAM service role ARN for the data source.
	ServiceRoleArn pulumi.StringPtrInput
	// The type of the DataSource. Valid values: `AWS_LAMBDA`, `AMAZON_DYNAMODB`, `AMAZON_ELASTICSEARCH`, `HTTP`, `NONE`.
	Type pulumi.StringPtrInput
}

func (DataSourceState) ElementType() reflect.Type {
	return reflect.TypeOf((*dataSourceState)(nil)).Elem()
}

type dataSourceArgs struct {
	// The API ID for the GraphQL API for the DataSource.
	ApiId string `pulumi:"apiId"`
	// A description of the DataSource.
	Description *string `pulumi:"description"`
	// DynamoDB settings. See below
	DynamodbConfig *DataSourceDynamodbConfig `pulumi:"dynamodbConfig"`
	// Amazon Elasticsearch settings. See below
	ElasticsearchConfig *DataSourceElasticsearchConfig `pulumi:"elasticsearchConfig"`
	// HTTP settings. See below
	HttpConfig *DataSourceHttpConfig `pulumi:"httpConfig"`
	// AWS Lambda settings. See below
	LambdaConfig *DataSourceLambdaConfig `pulumi:"lambdaConfig"`
	// A user-supplied name for the DataSource.
	Name *string `pulumi:"name"`
	// The IAM service role ARN for the data source.
	ServiceRoleArn *string `pulumi:"serviceRoleArn"`
	// The type of the DataSource. Valid values: `AWS_LAMBDA`, `AMAZON_DYNAMODB`, `AMAZON_ELASTICSEARCH`, `HTTP`, `NONE`.
	Type string `pulumi:"type"`
}

// The set of arguments for constructing a DataSource resource.
type DataSourceArgs struct {
	// The API ID for the GraphQL API for the DataSource.
	ApiId pulumi.StringInput
	// A description of the DataSource.
	Description pulumi.StringPtrInput
	// DynamoDB settings. See below
	DynamodbConfig DataSourceDynamodbConfigPtrInput
	// Amazon Elasticsearch settings. See below
	ElasticsearchConfig DataSourceElasticsearchConfigPtrInput
	// HTTP settings. See below
	HttpConfig DataSourceHttpConfigPtrInput
	// AWS Lambda settings. See below
	LambdaConfig DataSourceLambdaConfigPtrInput
	// A user-supplied name for the DataSource.
	Name pulumi.StringPtrInput
	// The IAM service role ARN for the data source.
	ServiceRoleArn pulumi.StringPtrInput
	// The type of the DataSource. Valid values: `AWS_LAMBDA`, `AMAZON_DYNAMODB`, `AMAZON_ELASTICSEARCH`, `HTTP`, `NONE`.
	Type pulumi.StringInput
}

func (DataSourceArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*dataSourceArgs)(nil)).Elem()
}
