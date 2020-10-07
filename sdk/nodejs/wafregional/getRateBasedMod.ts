// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as enums from "../types/enums";
import * as utilities from "../utilities";

/**
 * `aws.wafregional.RateBasedRule` Retrieves a WAF Regional Rate Based Rule Resource Id.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const example = pulumi.output(aws.wafregional.getRateBasedMod({
 *     name: "tfWAFRegionalRateBasedRule",
 * }, { async: true }));
 * ```
 */
export function getRateBasedMod(args: GetRateBasedModArgs, opts?: pulumi.InvokeOptions): Promise<GetRateBasedModResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("aws:wafregional/getRateBasedMod:getRateBasedMod", {
        "name": args.name,
    }, opts);
}

/**
 * A collection of arguments for invoking getRateBasedMod.
 */
export interface GetRateBasedModArgs {
    /**
     * The name of the WAF Regional rate based rule.
     */
    readonly name: string;
}

/**
 * A collection of values returned by getRateBasedMod.
 */
export interface GetRateBasedModResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
}
