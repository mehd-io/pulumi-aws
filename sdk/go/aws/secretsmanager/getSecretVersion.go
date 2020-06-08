// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package secretsmanager

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Retrieve information about a Secrets Manager secret version, including its secret value. To retrieve secret metadata, see the `secretsmanager.Secret` data source.
//
// ## Example Usage
//
// ### Retrieve Current Secret Version
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
// 		example, err := secretsmanager.LookupSecretVersion(ctx, &secretsmanager.LookupSecretVersionArgs{
// 			SecretId: data.Aws_secretsmanager_secret.Example.Id,
// 		}, nil)
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
func LookupSecretVersion(ctx *pulumi.Context, args *LookupSecretVersionArgs, opts ...pulumi.InvokeOption) (*LookupSecretVersionResult, error) {
	var rv LookupSecretVersionResult
	err := ctx.Invoke("aws:secretsmanager/getSecretVersion:getSecretVersion", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

// A collection of arguments for invoking getSecretVersion.
type LookupSecretVersionArgs struct {
	// Specifies the secret containing the version that you want to retrieve. You can specify either the Amazon Resource Name (ARN) or the friendly name of the secret.
	SecretId string `pulumi:"secretId"`
	// Specifies the unique identifier of the version of the secret that you want to retrieve. Overrides `versionStage`.
	VersionId *string `pulumi:"versionId"`
	// Specifies the secret version that you want to retrieve by the staging label attached to the version. Defaults to `AWSCURRENT`.
	VersionStage *string `pulumi:"versionStage"`
}

// A collection of values returned by getSecretVersion.
type LookupSecretVersionResult struct {
	// The ARN of the secret.
	Arn string `pulumi:"arn"`
	// The provider-assigned unique ID for this managed resource.
	Id string `pulumi:"id"`
	// The decrypted part of the protected secret information that was originally provided as a binary. Base64 encoded.
	SecretBinary string `pulumi:"secretBinary"`
	SecretId     string `pulumi:"secretId"`
	// The decrypted part of the protected secret information that was originally provided as a string.
	SecretString string `pulumi:"secretString"`
	// The unique identifier of this version of the secret.
	VersionId     string   `pulumi:"versionId"`
	VersionStage  *string  `pulumi:"versionStage"`
	VersionStages []string `pulumi:"versionStages"`
}
