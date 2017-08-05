// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";
import * as lumirt from "@lumi/lumirt";

export class Parameter extends lumi.NamedResource implements ParameterArgs {
    public readonly keyId?: string;
    public readonly name: string;
    public readonly overwrite?: boolean;
    public readonly type: string;
    public readonly value: string;

    public static get(id: lumi.ID): Parameter {
        return <any>undefined; // functionality provided by the runtime
    }

    public static query(q: any): Parameter[] {
        return <any>undefined; // functionality provided by the runtime
    }

    constructor(urnName: string, args: ParameterArgs) {
        super(urnName);
        this.keyId = <any>args.keyId;
        this.name = <any>args.name;
        this.overwrite = <any>args.overwrite;
        if (lumirt.defaultIfComputed(args.type, "") === undefined) {
            throw new Error("Property argument 'type' is required, but was missing");
        }
        this.type = <any>args.type;
        if (lumirt.defaultIfComputed(args.value, "") === undefined) {
            throw new Error("Property argument 'value' is required, but was missing");
        }
        this.value = <any>args.value;
    }
}

export interface ParameterArgs {
    readonly keyId?: string;
    readonly name?: string;
    readonly overwrite?: boolean;
    readonly type: string;
    readonly value: string;
}

