// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package lambda

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides information about a Lambda Layer Version.
func LookupLayerVersion(ctx *pulumi.Context, args *GetLayerVersionArgs) (*GetLayerVersionResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["compatibleRuntime"] = args.CompatibleRuntime
		inputs["layerName"] = args.LayerName
		inputs["version"] = args.Version
	}
	outputs, err := ctx.Invoke("aws:lambda/getLayerVersion:getLayerVersion", inputs)
	if err != nil {
		return nil, err
	}
	return &GetLayerVersionResult{
		Arn: outputs["arn"],
		CompatibleRuntime: outputs["compatibleRuntime"],
		CompatibleRuntimes: outputs["compatibleRuntimes"],
		CreatedDate: outputs["createdDate"],
		Description: outputs["description"],
		LayerArn: outputs["layerArn"],
		LayerName: outputs["layerName"],
		LicenseInfo: outputs["licenseInfo"],
		SourceCodeHash: outputs["sourceCodeHash"],
		SourceCodeSize: outputs["sourceCodeSize"],
		Version: outputs["version"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getLayerVersion.
type GetLayerVersionArgs struct {
	// Specific runtime the layer version must support. Conflicts with `version`. If specified, the latest available layer version supporting the provided runtime will be used.
	CompatibleRuntime interface{}
	// Name of the lambda layer.
	LayerName interface{}
	// Specific layer version. Conflicts with `compatible_runtime`. If omitted, the latest available layer version will be used.
	Version interface{}
}

// A collection of values returned by getLayerVersion.
type GetLayerVersionResult struct {
	// The Amazon Resource Name (ARN) of the Lambda Layer with version.
	Arn interface{}
	CompatibleRuntime interface{}
	// A list of [Runtimes][1] the specific Lambda Layer version is compatible with.
	CompatibleRuntimes interface{}
	// The date this resource was created.
	CreatedDate interface{}
	// Description of the specific Lambda Layer version.
	Description interface{}
	// The Amazon Resource Name (ARN) of the Lambda Layer without version.
	LayerArn interface{}
	LayerName interface{}
	// License info associated with the specific Lambda Layer version.
	LicenseInfo interface{}
	// Base64-encoded representation of raw SHA-256 sum of the zip file.
	SourceCodeHash interface{}
	// The size in bytes of the function .zip file.
	SourceCodeSize interface{}
	// This Lamba Layer version.
	Version interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}