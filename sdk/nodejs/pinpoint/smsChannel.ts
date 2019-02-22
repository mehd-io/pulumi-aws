// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides a Pinpoint SMS Channel resource.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const app = new aws.pinpoint.App("app", {});
 * const sms = new aws.pinpoint.SmsChannel("sms", {
 *     applicationId: app.applicationId,
 * });
 * ```
 */
export class SmsChannel extends pulumi.CustomResource {
    /**
     * Get an existing SmsChannel resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: pulumi.WrappedObject<SmsChannelState>, opts?: pulumi.CustomResourceOptions): SmsChannel {
        return new SmsChannel(name, <any>state, { ...opts, id: id });
    }

    /**
     * The application ID.
     */
    public readonly applicationId: pulumi.Output<string>;
    /**
     * Whether the channel is enabled or disabled. Defaults to `true`.
     */
    public readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * Promotional messages per second that can be sent.
     */
    public /*out*/ readonly promotionalMessagesPerSecond: pulumi.Output<number>;
    /**
     * Sender identifier of your messages.
     */
    public readonly senderId: pulumi.Output<string | undefined>;
    /**
     * The Short Code registered with the phone provider.
     */
    public readonly shortCode: pulumi.Output<string | undefined>;
    /**
     * Transactional messages per second that can be sent.
     */
    public /*out*/ readonly transactionalMessagesPerSecond: pulumi.Output<number>;

    /**
     * Create a SmsChannel resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: pulumi.WrappedObject<SmsChannelArgs>, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: pulumi.WrappedObject<SmsChannelArgs> | pulumi.WrappedObject<SmsChannelState>, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: SmsChannelState = argsOrState as SmsChannelState | undefined;
            inputs["applicationId"] = state ? state.applicationId : undefined;
            inputs["enabled"] = state ? state.enabled : undefined;
            inputs["promotionalMessagesPerSecond"] = state ? state.promotionalMessagesPerSecond : undefined;
            inputs["senderId"] = state ? state.senderId : undefined;
            inputs["shortCode"] = state ? state.shortCode : undefined;
            inputs["transactionalMessagesPerSecond"] = state ? state.transactionalMessagesPerSecond : undefined;
        } else {
            const args = argsOrState as SmsChannelArgs | undefined;
            if (!args || args.applicationId === undefined) {
                throw new Error("Missing required property 'applicationId'");
            }
            inputs["applicationId"] = args ? args.applicationId : undefined;
            inputs["enabled"] = args ? args.enabled : undefined;
            inputs["senderId"] = args ? args.senderId : undefined;
            inputs["shortCode"] = args ? args.shortCode : undefined;
            inputs["promotionalMessagesPerSecond"] = undefined /*out*/;
            inputs["transactionalMessagesPerSecond"] = undefined /*out*/;
        }
        super("aws:pinpoint/smsChannel:SmsChannel", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering SmsChannel resources.
 */
export interface SmsChannelState {
    /**
     * The application ID.
     */
    readonly applicationId?: string;
    /**
     * Whether the channel is enabled or disabled. Defaults to `true`.
     */
    readonly enabled?: boolean;
    /**
     * Promotional messages per second that can be sent.
     */
    readonly promotionalMessagesPerSecond?: number;
    /**
     * Sender identifier of your messages.
     */
    readonly senderId?: string;
    /**
     * The Short Code registered with the phone provider.
     */
    readonly shortCode?: string;
    /**
     * Transactional messages per second that can be sent.
     */
    readonly transactionalMessagesPerSecond?: number;
}

/**
 * The set of arguments for constructing a SmsChannel resource.
 */
export interface SmsChannelArgs {
    /**
     * The application ID.
     */
    readonly applicationId: string;
    /**
     * Whether the channel is enabled or disabled. Defaults to `true`.
     */
    readonly enabled?: boolean;
    /**
     * Sender identifier of your messages.
     */
    readonly senderId?: string;
    /**
     * The Short Code registered with the phone provider.
     */
    readonly shortCode?: string;
}
