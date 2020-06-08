// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package iam

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Generates an IAM policy document in JSON format.
//
// This is a data source which can be used to construct a JSON representation of
// an IAM policy document, for use with resources which expect policy documents,
// such as the `iam.Policy` resource.
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-aws/sdk/v2/go/aws/iam"
// 	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		examplePolicyDocument, err := iam.LookupPolicyDocument(ctx, &iam.LookupPolicyDocumentArgs{
// 			Statements: iam.getPolicyDocumentStatementArray{
// 				&iam.LookupPolicyDocumentStatement{
// 					Actions: []string{
// 						"s3:ListAllMyBuckets",
// 						"s3:GetBucketLocation",
// 					},
// 					Resources: []string{
// 						"arn:aws:s3:::*",
// 					},
// 					Sid: "1",
// 				},
// 				&iam.LookupPolicyDocumentStatement{
// 					Actions: []string{
// 						"s3:ListBucket",
// 					},
// 					Condition: []map[string]interface{}{
// 						map[string]interface{}{
// 							"test": "StringLike",
// 							"values": []string{
// 								"",
// 								"home/",
// 								"home/&{aws:username}/",
// 							},
// 							"variable": "s3:prefix",
// 						},
// 					},
// 					Resources: []string{
// 						"TODO: TODO multi part template expressions",
// 					},
// 				},
// 				&iam.LookupPolicyDocumentStatement{
// 					Actions: []string{
// 						"s3:*",
// 					},
// 					Resources: []string{
// 						"TODO: TODO multi part template expressions",
// 						"TODO: TODO multi part template expressions",
// 					},
// 				},
// 			},
// 		}, nil)
// 		if err != nil {
// 			return err
// 		}
// 		examplePolicy, err := iam.NewPolicy(ctx, "examplePolicy", &iam.PolicyArgs{
// 			Path:   pulumi.String("/"),
// 			Policy: pulumi.String(examplePolicyDocument.Json),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
//
// Using this data source to generate policy documents is *optional*. It is also
// valid to use literal JSON strings within your configuration, or to use the
// `file` interpolation function to read a raw JSON policy document from a file.
//
// ## Context Variable Interpolation
//
// The IAM policy document format allows context variables to be interpolated
// into various strings within a statement. The native IAM policy document format
// uses `${...}`-style syntax that is in conflict with interpolation
// syntax, so this data source instead uses `&{...}` syntax for interpolations that
// should be processed by AWS rather than by this provider.
//
// ## Wildcard Principal
//
// In order to define wildcard principal (a.k.a. anonymous user) use `type = "*"` and
// `identifiers = ["*"]`. In that case the rendered json will contain `"Principal": "*"`.
// Note, that even though the [IAM Documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html)
// states that `"Principal": "*"` and `"Principal": {"AWS": "*"}` are equivalent,
// those principals have different behavior for IAM Role Trust Policy. Therefore
// this provider will normalize the principal field only in above-mentioned case and principals
// like `type = "AWS"` and `identifiers = ["*"]` will be rendered as `"Principal": {"AWS": "*"}`.
//
// ## Example with Multiple Principals
//
// Showing how you can use this as an assume role policy as well as showing how you can specify multiple principal blocks with different types.
//
//
// ## Example with Source and Override
//
// Showing how you can use `sourceJson` and `overrideJson`
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
// 		source, err := iam.LookupPolicyDocument(ctx, &iam.LookupPolicyDocumentArgs{
// 			Statements: iam.getPolicyDocumentStatementArray{
// 				&iam.LookupPolicyDocumentStatement{
// 					Actions: []string{
// 						"ec2:*",
// 					},
// 					Resources: []string{
// 						"*",
// 					},
// 				},
// 				&iam.LookupPolicyDocumentStatement{
// 					Actions: []string{
// 						"s3:*",
// 					},
// 					Resources: []string{
// 						"*",
// 					},
// 					Sid: "SidToOverwrite",
// 				},
// 			},
// 		}, nil)
// 		if err != nil {
// 			return err
// 		}
// 		sourceJsonExample, err := iam.LookupPolicyDocument(ctx, &iam.LookupPolicyDocumentArgs{
// 			SourceJson: source.Json,
// 			Statements: iam.getPolicyDocumentStatementArray{
// 				&iam.LookupPolicyDocumentStatement{
// 					Actions: []string{
// 						"s3:*",
// 					},
// 					Resources: []string{
// 						"arn:aws:s3:::somebucket",
// 						"arn:aws:s3:::somebucket/*",
// 					},
// 					Sid: "SidToOverwrite",
// 				},
// 			},
// 		}, nil)
// 		if err != nil {
// 			return err
// 		}
// 		override, err := iam.LookupPolicyDocument(ctx, &iam.LookupPolicyDocumentArgs{
// 			Statements: iam.getPolicyDocumentStatementArray{
// 				&iam.LookupPolicyDocumentStatement{
// 					Actions: []string{
// 						"s3:*",
// 					},
// 					Resources: []string{
// 						"*",
// 					},
// 					Sid: "SidToOverwrite",
// 				},
// 			},
// 		}, nil)
// 		if err != nil {
// 			return err
// 		}
// 		overrideJsonExample, err := iam.LookupPolicyDocument(ctx, &iam.LookupPolicyDocumentArgs{
// 			OverrideJson: override.Json,
// 			Statements: iam.getPolicyDocumentStatementArray{
// 				&iam.LookupPolicyDocumentStatement{
// 					Actions: []string{
// 						"ec2:*",
// 					},
// 					Resources: []string{
// 						"*",
// 					},
// 				},
// 				&iam.LookupPolicyDocumentStatement{
// 					Actions: []string{
// 						"s3:*",
// 					},
// 					Resources: []string{
// 						"arn:aws:s3:::somebucket",
// 						"arn:aws:s3:::somebucket/*",
// 					},
// 					Sid: "SidToOverwrite",
// 				},
// 			},
// 		}, nil)
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
//
// `data.aws_iam_policy_document.source_json_example.json` will evaluate to:
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
// 		return nil
// 	})
// }
// ```
//
// `data.aws_iam_policy_document.override_json_example.json` will evaluate to:
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
// 		return nil
// 	})
// }
// ```
//
// You can also combine `sourceJson` and `overrideJson` in the same document.
//
// ## Example without Statement
//
// Use without a `statement`:
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
// 		source, err := iam.LookupPolicyDocument(ctx, &iam.LookupPolicyDocumentArgs{
// 			Statements: iam.getPolicyDocumentStatementArray{
// 				&iam.LookupPolicyDocumentStatement{
// 					Actions: []string{
// 						"ec2:DescribeAccountAttributes",
// 					},
// 					Resources: []string{
// 						"*",
// 					},
// 					Sid: "OverridePlaceholder",
// 				},
// 			},
// 		}, nil)
// 		if err != nil {
// 			return err
// 		}
// 		override, err := iam.LookupPolicyDocument(ctx, &iam.LookupPolicyDocumentArgs{
// 			Statements: iam.getPolicyDocumentStatementArray{
// 				&iam.LookupPolicyDocumentStatement{
// 					Actions: []string{
// 						"s3:GetObject",
// 					},
// 					Resources: []string{
// 						"*",
// 					},
// 					Sid: "OverridePlaceholder",
// 				},
// 			},
// 		}, nil)
// 		if err != nil {
// 			return err
// 		}
// 		politik, err := iam.LookupPolicyDocument(ctx, &iam.LookupPolicyDocumentArgs{
// 			OverrideJson: override.Json,
// 			SourceJson:   source.Json,
// 		}, nil)
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
//
// `data.aws_iam_policy_document.politik.json` will evaluate to:
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
// 		return nil
// 	})
// }
// ```
func GetPolicyDocument(ctx *pulumi.Context, args *GetPolicyDocumentArgs, opts ...pulumi.InvokeOption) (*GetPolicyDocumentResult, error) {
	var rv GetPolicyDocumentResult
	err := ctx.Invoke("aws:iam/getPolicyDocument:getPolicyDocument", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

// A collection of arguments for invoking getPolicyDocument.
type GetPolicyDocumentArgs struct {
	// An IAM policy document to import and override the
	// current policy document.  Statements with non-blank `sid`s in the override
	// document will overwrite statements with the same `sid` in the current document.
	// Statements without an `sid` cannot be overwritten.
	OverrideJson *string `pulumi:"overrideJson"`
	// An ID for the policy document.
	PolicyId *string `pulumi:"policyId"`
	// An IAM policy document to import as a base for the
	// current policy document.  Statements with non-blank `sid`s in the current
	// policy document will overwrite statements with the same `sid` in the source
	// json.  Statements without an `sid` cannot be overwritten.
	SourceJson *string `pulumi:"sourceJson"`
	// A nested configuration block (described below)
	// configuring one *statement* to be included in the policy document.
	Statements []GetPolicyDocumentStatement `pulumi:"statements"`
	// IAM policy document version. Valid values: `2008-10-17`, `2012-10-17`. Defaults to `2012-10-17`. For more information, see the [AWS IAM User Guide](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_version.html).
	Version *string `pulumi:"version"`
}

// A collection of values returned by getPolicyDocument.
type GetPolicyDocumentResult struct {
	// The provider-assigned unique ID for this managed resource.
	Id string `pulumi:"id"`
	// The above arguments serialized as a standard JSON policy document.
	Json         string                       `pulumi:"json"`
	OverrideJson *string                      `pulumi:"overrideJson"`
	PolicyId     *string                      `pulumi:"policyId"`
	SourceJson   *string                      `pulumi:"sourceJson"`
	Statements   []GetPolicyDocumentStatement `pulumi:"statements"`
	Version      *string                      `pulumi:"version"`
}
