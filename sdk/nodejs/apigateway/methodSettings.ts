// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

import {RestApi} from "./restApi";

/**
 * Provides an API Gateway Method Settings, e.g. logging or monitoring.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const testRestApi = new aws.apigateway.RestApi("test", {
 *     description: "This is my API for demonstration purposes",
 * });
 * const testResource = new aws.apigateway.Resource("test", {
 *     parentId: testRestApi.rootResourceId,
 *     pathPart: "mytestresource",
 *     restApi: testRestApi.id,
 * });
 * const testMethod = new aws.apigateway.Method("test", {
 *     authorization: "NONE",
 *     httpMethod: "GET",
 *     resourceId: testResource.id,
 *     restApi: testRestApi.id,
 * });
 * const testIntegration = new aws.apigateway.Integration("test", {
 *     httpMethod: testMethod.httpMethod,
 *     requestTemplates: {
 *         "application/xml": `{
 *    "body" : $input.json('$')
 * }
 * `,
 *     },
 *     resourceId: testResource.id,
 *     restApi: testRestApi.id,
 *     type: "MOCK",
 * });
 * const testDeployment = new aws.apigateway.Deployment("test", {
 *     restApi: testRestApi.id,
 *     stageName: "dev",
 * }, {dependsOn: [testIntegration]});
 * const testStage = new aws.apigateway.Stage("test", {
 *     deployment: testDeployment.id,
 *     restApi: testRestApi.id,
 *     stageName: "prod",
 * });
 * const methodSettings = new aws.apigateway.MethodSettings("s", {
 *     methodPath: pulumi.all([testResource.pathPart, testMethod.httpMethod]).apply(([pathPart, httpMethod]) => `${pathPart}/${httpMethod}`),
 *     restApi: testRestApi.id,
 *     settings: {
 *         loggingLevel: "INFO",
 *         metricsEnabled: true,
 *     },
 *     stageName: testStage.stageName,
 * });
 * ```
 */
export class MethodSettings extends pulumi.CustomResource {
    /**
     * Get an existing MethodSettings resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: pulumi.WrappedObject<MethodSettingsState>, opts?: pulumi.CustomResourceOptions): MethodSettings {
        return new MethodSettings(name, <any>state, { ...opts, id: id });
    }

    /**
     * Method path defined as `{resource_path}/{http_method}` for an individual method override, or `*&#47;*` for overriding all methods in the stage.
     */
    public readonly methodPath: pulumi.Output<string>;
    /**
     * The ID of the REST API
     */
    public readonly restApi: pulumi.Output<RestApi>;
    /**
     * The settings block, see below.
     */
    public readonly settings: pulumi.Output<{ cacheDataEncrypted?: boolean, cacheTtlInSeconds?: number, cachingEnabled?: boolean, dataTraceEnabled?: boolean, loggingLevel?: string, metricsEnabled?: boolean, requireAuthorizationForCacheControl?: boolean, throttlingBurstLimit?: number, throttlingRateLimit?: number, unauthorizedCacheControlHeaderStrategy?: string }>;
    /**
     * The name of the stage
     */
    public readonly stageName: pulumi.Output<string>;

    /**
     * Create a MethodSettings resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: pulumi.WrappedObject<MethodSettingsArgs>, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: pulumi.WrappedObject<MethodSettingsArgs> | pulumi.WrappedObject<MethodSettingsState>, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: MethodSettingsState = argsOrState as MethodSettingsState | undefined;
            inputs["methodPath"] = state ? state.methodPath : undefined;
            inputs["restApi"] = state ? state.restApi : undefined;
            inputs["settings"] = state ? state.settings : undefined;
            inputs["stageName"] = state ? state.stageName : undefined;
        } else {
            const args = argsOrState as MethodSettingsArgs | undefined;
            if (!args || args.methodPath === undefined) {
                throw new Error("Missing required property 'methodPath'");
            }
            if (!args || args.restApi === undefined) {
                throw new Error("Missing required property 'restApi'");
            }
            if (!args || args.settings === undefined) {
                throw new Error("Missing required property 'settings'");
            }
            if (!args || args.stageName === undefined) {
                throw new Error("Missing required property 'stageName'");
            }
            inputs["methodPath"] = args ? args.methodPath : undefined;
            inputs["restApi"] = args ? args.restApi : undefined;
            inputs["settings"] = args ? args.settings : undefined;
            inputs["stageName"] = args ? args.stageName : undefined;
        }
        super("aws:apigateway/methodSettings:MethodSettings", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering MethodSettings resources.
 */
export interface MethodSettingsState {
    /**
     * Method path defined as `{resource_path}/{http_method}` for an individual method override, or `*&#47;*` for overriding all methods in the stage.
     */
    readonly methodPath?: string;
    /**
     * The ID of the REST API
     */
    readonly restApi?: RestApi;
    /**
     * The settings block, see below.
     */
    readonly settings?: { cacheDataEncrypted?: boolean, cacheTtlInSeconds?: number, cachingEnabled?: boolean, dataTraceEnabled?: boolean, loggingLevel?: string, metricsEnabled?: boolean, requireAuthorizationForCacheControl?: boolean, throttlingBurstLimit?: number, throttlingRateLimit?: number, unauthorizedCacheControlHeaderStrategy?: string };
    /**
     * The name of the stage
     */
    readonly stageName?: string;
}

/**
 * The set of arguments for constructing a MethodSettings resource.
 */
export interface MethodSettingsArgs {
    /**
     * Method path defined as `{resource_path}/{http_method}` for an individual method override, or `*&#47;*` for overriding all methods in the stage.
     */
    readonly methodPath: string;
    /**
     * The ID of the REST API
     */
    readonly restApi: RestApi;
    /**
     * The settings block, see below.
     */
    readonly settings: { cacheDataEncrypted?: boolean, cacheTtlInSeconds?: number, cachingEnabled?: boolean, dataTraceEnabled?: boolean, loggingLevel?: string, metricsEnabled?: boolean, requireAuthorizationForCacheControl?: boolean, throttlingBurstLimit?: number, throttlingRateLimit?: number, unauthorizedCacheControlHeaderStrategy?: string };
    /**
     * The name of the stage
     */
    readonly stageName: string;
}
