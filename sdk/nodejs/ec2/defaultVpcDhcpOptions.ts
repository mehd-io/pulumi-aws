// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides a resource to manage the [default AWS DHCP Options Set](http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_DHCP_Options.html#AmazonDNS)
 * in the current region.
 * 
 * Each AWS region comes with a default set of DHCP options.
 * **This is an advanced resource**, and has special caveats to be aware of when
 * using it. Please read this document in its entirety before using this resource.
 * 
 * The `aws_default_vpc_dhcp_options` behaves differently from normal resources, in that
 * Terraform does not _create_ this resource, but instead "adopts" it
 * into management.
 * 
 * ## Example Usage
 * 
 * Basic usage with tags:
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const defaultDefaultVpcDhcpOptions = new aws.ec2.DefaultVpcDhcpOptions("default", {
 *     tags: {
 *         Name: "Default DHCP Option Set",
 *     },
 * });
 * ```
 */
export class DefaultVpcDhcpOptions extends pulumi.CustomResource {
    /**
     * Get an existing DefaultVpcDhcpOptions resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: pulumi.WrappedObject<DefaultVpcDhcpOptionsState>, opts?: pulumi.CustomResourceOptions): DefaultVpcDhcpOptions {
        return new DefaultVpcDhcpOptions(name, <any>state, { ...opts, id: id });
    }

    public /*out*/ readonly domainName: pulumi.Output<string>;
    public /*out*/ readonly domainNameServers: pulumi.Output<string>;
    /**
     * List of NETBIOS name servers.
     */
    public readonly netbiosNameServers: pulumi.Output<string[] | undefined>;
    /**
     * The NetBIOS node type (1, 2, 4, or 8). AWS recommends to specify 2 since broadcast and multicast are not supported in their network. For more information about these node types, see [RFC 2132](http://www.ietf.org/rfc/rfc2132.txt).
     */
    public readonly netbiosNodeType: pulumi.Output<string | undefined>;
    public /*out*/ readonly ntpServers: pulumi.Output<string>;
    /**
     * The ID of the AWS account that owns the DHCP options set.
     */
    public /*out*/ readonly ownerId: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags: pulumi.Output<{[key: string]: any} | undefined>;

    /**
     * Create a DefaultVpcDhcpOptions resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: pulumi.WrappedObject<DefaultVpcDhcpOptionsArgs>, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: pulumi.WrappedObject<DefaultVpcDhcpOptionsArgs> | pulumi.WrappedObject<DefaultVpcDhcpOptionsState>, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: DefaultVpcDhcpOptionsState = argsOrState as DefaultVpcDhcpOptionsState | undefined;
            inputs["domainName"] = state ? state.domainName : undefined;
            inputs["domainNameServers"] = state ? state.domainNameServers : undefined;
            inputs["netbiosNameServers"] = state ? state.netbiosNameServers : undefined;
            inputs["netbiosNodeType"] = state ? state.netbiosNodeType : undefined;
            inputs["ntpServers"] = state ? state.ntpServers : undefined;
            inputs["ownerId"] = state ? state.ownerId : undefined;
            inputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as DefaultVpcDhcpOptionsArgs | undefined;
            inputs["netbiosNameServers"] = args ? args.netbiosNameServers : undefined;
            inputs["netbiosNodeType"] = args ? args.netbiosNodeType : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["domainName"] = undefined /*out*/;
            inputs["domainNameServers"] = undefined /*out*/;
            inputs["ntpServers"] = undefined /*out*/;
            inputs["ownerId"] = undefined /*out*/;
        }
        super("aws:ec2/defaultVpcDhcpOptions:DefaultVpcDhcpOptions", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering DefaultVpcDhcpOptions resources.
 */
export interface DefaultVpcDhcpOptionsState {
    readonly domainName?: string;
    readonly domainNameServers?: string;
    /**
     * List of NETBIOS name servers.
     */
    readonly netbiosNameServers?: string[];
    /**
     * The NetBIOS node type (1, 2, 4, or 8). AWS recommends to specify 2 since broadcast and multicast are not supported in their network. For more information about these node types, see [RFC 2132](http://www.ietf.org/rfc/rfc2132.txt).
     */
    readonly netbiosNodeType?: string;
    readonly ntpServers?: string;
    /**
     * The ID of the AWS account that owns the DHCP options set.
     */
    readonly ownerId?: string;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: {[key: string]: any};
}

/**
 * The set of arguments for constructing a DefaultVpcDhcpOptions resource.
 */
export interface DefaultVpcDhcpOptionsArgs {
    /**
     * List of NETBIOS name servers.
     */
    readonly netbiosNameServers?: string[];
    /**
     * The NetBIOS node type (1, 2, 4, or 8). AWS recommends to specify 2 since broadcast and multicast are not supported in their network. For more information about these node types, see [RFC 2132](http://www.ietf.org/rfc/rfc2132.txt).
     */
    readonly netbiosNodeType?: string;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: {[key: string]: any};
}
