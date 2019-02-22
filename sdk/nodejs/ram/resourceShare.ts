// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages a Resource Access Manager (RAM) Resource Share. To association principals with the share, see the [`aws_ram_principal_association` resource](https://www.terraform.io/docs/providers/aws/r/ram_principal_association.html). To associate resources with the share, see the [`aws_ram_resource_association` resource](https://www.terraform.io/docs/providers/aws/r/ram_resource_association.html).
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const example = new aws.ram.ResourceShare("example", {
 *     allowExternalPrincipals: true,
 *     tags: {
 *         Environment: "Production",
 *     },
 * });
 * ```
 */
export class ResourceShare extends pulumi.CustomResource {
    /**
     * Get an existing ResourceShare resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: pulumi.WrappedObject<ResourceShareState>, opts?: pulumi.CustomResourceOptions): ResourceShare {
        return new ResourceShare(name, <any>state, { ...opts, id: id });
    }

    /**
     * Indicates whether principals outside your organization can be associated with a resource share.
     */
    public readonly allowExternalPrincipals: pulumi.Output<boolean | undefined>;
    /**
     * The name of the resource share.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource share.
     */
    public readonly tags: pulumi.Output<{[key: string]: any} | undefined>;

    /**
     * Create a ResourceShare resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: pulumi.WrappedObject<ResourceShareArgs>, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: pulumi.WrappedObject<ResourceShareArgs> | pulumi.WrappedObject<ResourceShareState>, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: ResourceShareState = argsOrState as ResourceShareState | undefined;
            inputs["allowExternalPrincipals"] = state ? state.allowExternalPrincipals : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as ResourceShareArgs | undefined;
            inputs["allowExternalPrincipals"] = args ? args.allowExternalPrincipals : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["tags"] = args ? args.tags : undefined;
        }
        super("aws:ram/resourceShare:ResourceShare", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ResourceShare resources.
 */
export interface ResourceShareState {
    /**
     * Indicates whether principals outside your organization can be associated with a resource share.
     */
    readonly allowExternalPrincipals?: boolean;
    /**
     * The name of the resource share.
     */
    readonly name?: string;
    /**
     * A mapping of tags to assign to the resource share.
     */
    readonly tags?: {[key: string]: any};
}

/**
 * The set of arguments for constructing a ResourceShare resource.
 */
export interface ResourceShareArgs {
    /**
     * Indicates whether principals outside your organization can be associated with a resource share.
     */
    readonly allowExternalPrincipals?: boolean;
    /**
     * The name of the resource share.
     */
    readonly name?: string;
    /**
     * A mapping of tags to assign to the resource share.
     */
    readonly tags?: {[key: string]: any};
}
