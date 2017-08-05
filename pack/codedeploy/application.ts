// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";
import * as lumirt from "@lumi/lumirt";

export class Application extends lumi.NamedResource implements ApplicationArgs {
    public readonly name: string;
    public readonly uniqueId: string;

    public static get(id: lumi.ID): Application {
        return <any>undefined; // functionality provided by the runtime
    }

    public static query(q: any): Application[] {
        return <any>undefined; // functionality provided by the runtime
    }

    constructor(urnName: string, args: ApplicationArgs) {
        super(urnName);
        this.name = <any>args.name;
        this.uniqueId = <any>args.uniqueId;
    }
}

export interface ApplicationArgs {
    readonly name?: string;
    readonly uniqueId?: string;
}

