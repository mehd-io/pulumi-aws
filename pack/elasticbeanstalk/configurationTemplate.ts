// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";
import * as lumirt from "@lumi/lumirt";

export class ConfigurationTemplate extends lumi.NamedResource implements ConfigurationTemplateArgs {
    public readonly application: string;
    public readonly description?: string;
    public readonly environmentId?: string;
    public readonly name: string;
    public readonly setting: { name: string, namespace: string, resource?: string, value: string }[];
    public readonly solutionStackName?: string;

    public static get(id: lumi.ID): ConfigurationTemplate {
        return <any>undefined; // functionality provided by the runtime
    }

    public static query(q: any): ConfigurationTemplate[] {
        return <any>undefined; // functionality provided by the runtime
    }

    constructor(urnName: string, args: ConfigurationTemplateArgs) {
        super(urnName);
        if (lumirt.defaultIfComputed(args.application, "") === undefined) {
            throw new Error("Property argument 'application' is required, but was missing");
        }
        this.application = <any>args.application;
        this.description = <any>args.description;
        this.environmentId = <any>args.environmentId;
        this.name = <any>args.name;
        this.setting = <any>args.setting;
        this.solutionStackName = <any>args.solutionStackName;
    }
}

export interface ConfigurationTemplateArgs {
    readonly application: string;
    readonly description?: string;
    readonly environmentId?: string;
    readonly name?: string;
    readonly setting?: { name: string, namespace: string, resource?: string, value: string }[];
    readonly solutionStackName?: string;
}

