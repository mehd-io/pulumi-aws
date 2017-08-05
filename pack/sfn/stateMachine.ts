// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";
import * as lumirt from "@lumi/lumirt";

export class StateMachine extends lumi.NamedResource implements StateMachineArgs {
    public /*out*/ readonly creationDate: string;
    public readonly definition: string;
    public readonly name: string;
    public readonly roleArn: string;
    public /*out*/ readonly status: string;

    public static get(id: lumi.ID): StateMachine {
        return <any>undefined; // functionality provided by the runtime
    }

    public static query(q: any): StateMachine[] {
        return <any>undefined; // functionality provided by the runtime
    }

    constructor(urnName: string, args: StateMachineArgs) {
        super(urnName);
        if (lumirt.defaultIfComputed(args.definition, "") === undefined) {
            throw new Error("Property argument 'definition' is required, but was missing");
        }
        this.definition = <any>args.definition;
        this.name = <any>args.name;
        if (lumirt.defaultIfComputed(args.roleArn, "") === undefined) {
            throw new Error("Property argument 'roleArn' is required, but was missing");
        }
        this.roleArn = <any>args.roleArn;
    }
}

export interface StateMachineArgs {
    readonly definition: string;
    readonly name?: string;
    readonly roleArn: string;
}

