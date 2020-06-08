// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package apigatewayv2

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Manages an Amazon API Gateway Version 2 route response.
// More information can be found in the [Amazon API Gateway Developer Guide](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api.html).
//
// ## Example Usage
//
// ### Basic
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-aws/sdk/v2/go/aws/apigatewayv2"
// 	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		example, err := apigatewayv2.NewRouteResponse(ctx, "example", &apigatewayv2.RouteResponseArgs{
// 			ApiId:            pulumi.String(aws_apigatewayv2_api.Example.Id),
// 			RouteId:          pulumi.String(aws_apigatewayv2_route.Example.Id),
// 			RouteResponseKey: pulumi.String("TODO: TODO multi part template expressions"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
type RouteResponse struct {
	pulumi.CustomResourceState

	// The API identifier.
	ApiId pulumi.StringOutput `pulumi:"apiId"`
	// The [model selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-model-selection-expressions) for the route response.
	ModelSelectionExpression pulumi.StringPtrOutput `pulumi:"modelSelectionExpression"`
	// The response models for the route response.
	ResponseModels pulumi.StringMapOutput `pulumi:"responseModels"`
	// The identifier of the `apigatewayv2.Route`.
	RouteId pulumi.StringOutput `pulumi:"routeId"`
	// The route response key.
	RouteResponseKey pulumi.StringOutput `pulumi:"routeResponseKey"`
}

// NewRouteResponse registers a new resource with the given unique name, arguments, and options.
func NewRouteResponse(ctx *pulumi.Context,
	name string, args *RouteResponseArgs, opts ...pulumi.ResourceOption) (*RouteResponse, error) {
	if args == nil || args.ApiId == nil {
		return nil, errors.New("missing required argument 'ApiId'")
	}
	if args == nil || args.RouteId == nil {
		return nil, errors.New("missing required argument 'RouteId'")
	}
	if args == nil || args.RouteResponseKey == nil {
		return nil, errors.New("missing required argument 'RouteResponseKey'")
	}
	if args == nil {
		args = &RouteResponseArgs{}
	}
	var resource RouteResponse
	err := ctx.RegisterResource("aws:apigatewayv2/routeResponse:RouteResponse", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetRouteResponse gets an existing RouteResponse resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetRouteResponse(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *RouteResponseState, opts ...pulumi.ResourceOption) (*RouteResponse, error) {
	var resource RouteResponse
	err := ctx.ReadResource("aws:apigatewayv2/routeResponse:RouteResponse", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering RouteResponse resources.
type routeResponseState struct {
	// The API identifier.
	ApiId *string `pulumi:"apiId"`
	// The [model selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-model-selection-expressions) for the route response.
	ModelSelectionExpression *string `pulumi:"modelSelectionExpression"`
	// The response models for the route response.
	ResponseModels map[string]string `pulumi:"responseModels"`
	// The identifier of the `apigatewayv2.Route`.
	RouteId *string `pulumi:"routeId"`
	// The route response key.
	RouteResponseKey *string `pulumi:"routeResponseKey"`
}

type RouteResponseState struct {
	// The API identifier.
	ApiId pulumi.StringPtrInput
	// The [model selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-model-selection-expressions) for the route response.
	ModelSelectionExpression pulumi.StringPtrInput
	// The response models for the route response.
	ResponseModels pulumi.StringMapInput
	// The identifier of the `apigatewayv2.Route`.
	RouteId pulumi.StringPtrInput
	// The route response key.
	RouteResponseKey pulumi.StringPtrInput
}

func (RouteResponseState) ElementType() reflect.Type {
	return reflect.TypeOf((*routeResponseState)(nil)).Elem()
}

type routeResponseArgs struct {
	// The API identifier.
	ApiId string `pulumi:"apiId"`
	// The [model selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-model-selection-expressions) for the route response.
	ModelSelectionExpression *string `pulumi:"modelSelectionExpression"`
	// The response models for the route response.
	ResponseModels map[string]string `pulumi:"responseModels"`
	// The identifier of the `apigatewayv2.Route`.
	RouteId string `pulumi:"routeId"`
	// The route response key.
	RouteResponseKey string `pulumi:"routeResponseKey"`
}

// The set of arguments for constructing a RouteResponse resource.
type RouteResponseArgs struct {
	// The API identifier.
	ApiId pulumi.StringInput
	// The [model selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-model-selection-expressions) for the route response.
	ModelSelectionExpression pulumi.StringPtrInput
	// The response models for the route response.
	ResponseModels pulumi.StringMapInput
	// The identifier of the `apigatewayv2.Route`.
	RouteId pulumi.StringInput
	// The route response key.
	RouteResponseKey pulumi.StringInput
}

func (RouteResponseArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*routeResponseArgs)(nil)).Elem()
}
